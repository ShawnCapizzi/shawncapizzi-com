/**
 * shawncapizzi.com sign-up list: Google Sheet + Gmail.
 *
 * Your website sends each sign-up here. This script:
 *   1. adds a row to this Sheet (Date, Email, Source, Page),
 *   2. emails you a "New sign-up" notice,
 *   3. sends the person a short "You're on the list" note (set SEND_WELCOME to false to turn off).
 * The same email signing up twice for the same thing is only added once.
 *
 * Setup:
 *   - Replace SECRET below with the same long random string you put in Vercel as SIGNUP_SECRET.
 *   - Deploy > New deployment > Web app. Execute as: Me. Who has access: Anyone.
 *   - Copy the Web app URL into Vercel as SIGNUP_WEBHOOK_URL.
 */

const SECRET = 'PASTE-THE-SAME-SECRET-YOU-PUT-IN-VERCEL';
const SEND_WELCOME = true;
const REPLY_TO = 'capizzi@shawncapizzi.com';
const FROM_NAME = 'Shawn Capizzi';
const SHEET_NAME = 'Sign-ups';

const WELCOME = {
  manual: {
    subject: "You're on the list for the field manual",
    body: [
      'Thanks for signing up.',
      '',
      "You're on the list for the Capizzi Process field manual. I'll send it when it ships, printed and as a PDF.",
      '',
      'Shawn',
      'shawncapizzi.com',
      '',
      "Changed your mind? Reply with \"remove\" and I'll take you off the list.",
    ].join('\n'),
  },
  book: {
    subject: "You're on the list for Seeing Past the Cage",
    body: [
      'Thanks for signing up.',
      '',
      "You're on the list for Seeing Past the Cage. I'll send you the finished book when it's ready, plus the occasional note from the work.",
      '',
      'Shawn',
      'shawncapizzi.com',
      '',
      "Changed your mind? Reply with \"remove\" and I'll take you off the list.",
    ].join('\n'),
  },
};

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (data.secret !== SECRET) return reply_({ ok: false, error: 'unauthorized' });

    const email = String(data.email || '').trim().toLowerCase();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return reply_({ ok: false, error: 'invalid email' });

    const source = WELCOME[data.source] ? data.source : 'book';
    const page = String(data.page || '').slice(0, 200);
    const sheet = sheet_();

    const last = sheet.getLastRow();
    const rows = last > 1 ? sheet.getRange(2, 2, last - 1, 2).getValues() : [];
    const isNew = !rows.some(function (r) { return r[0] === email && r[1] === source; });

    if (isNew) {
      sheet.appendRow([new Date(), email, source, page]);
      MailApp.sendEmail(
        Session.getEffectiveUser().getEmail(),
        'New sign-up: ' + email + ' (' + source + ')',
        email + ' signed up for the ' + source + ' list from ' + (page || 'the site') + '.\n\nThe Sheet: ' + SpreadsheetApp.getActive().getUrl()
      );
      if (SEND_WELCOME) {
        MailApp.sendEmail({
          to: email,
          subject: WELCOME[source].subject,
          body: WELCOME[source].body,
          name: FROM_NAME,
          replyTo: REPLY_TO,
        });
      }
    }
    return reply_({ ok: true, new: isNew });
  } catch (err) {
    console.error(err);
    return reply_({ ok: false, error: 'server error' });
  } finally {
    lock.releaseLock();
  }
}

function sheet_() {
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['Date', 'Email', 'Source', 'Page']);
    sh.setFrozenRows(1);
  }
  return sh;
}

function reply_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Run this once from the editor (select testSetup, click Run) to approve permissions and check the Sheet tab appears. */
function testSetup() {
  sheet_();
  console.log('Sheet ready. Your notices will go to ' + Session.getEffectiveUser().getEmail());
}
