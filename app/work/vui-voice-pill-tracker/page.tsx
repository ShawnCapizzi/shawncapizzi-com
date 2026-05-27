import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import { CaseStudyCarousel } from "@/components/CaseStudyCarousel";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VUI Pill Tracker — Voice Design for Healthcare Adherence",
  description:
    "An early voice-first design exploration for medication adherence, built as an Alexa Skill in 2018 — proof of the conversational-design practice now underneath every AI agent and chatbot engagement.",
};

const ASSET_BASE = "/images/case-studies/06-vui-voice-pill-tracker";
const VIDEO_BASE = "/videos";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="VUI Pill Tracker"
      subtitle="An early voice-first design exploration for medication adherence — built as an Alexa Skill in 2018. The conversational-design practice underneath every AI agent and chatbot engagement I run today."
      heroImage={`${ASSET_BASE}/00-hero-echo-device.jpg`}
      heroImageAlt="An Amazon Echo smart speaker — the platform the VUI Pill Tracker Alexa Skill was built and tested on in 2017–2018."
      metadata={[
        { label: "ROLE", value: "Concept, VUI design, prototyping, testing" },
        { label: "YEAR", value: "2017–2018" },
        {
          label: "CAPABILITIES",
          value:
            "Conversational design · Intent modeling · Dialog mapping · Prototyping · Usability testing",
        },
        {
          label: "STACK",
          value: "Alexa Skills Kit · SaySpring · Sketch · Whiteboarding",
        },
      ]}
      challenge={[
        "In 2017, voice was not yet a category. Amazon Echo was three years old, Alexa Skills were a developer curiosity, and \u201Cconversational design\u201D wasn\u2019t a discipline anyone hired for. The teams treating voice as serious product surface mostly didn\u2019t exist yet.",
        "Medication adherence, meanwhile, was already a multi-billion-dollar problem. Patients were missing doses and refilling late, and the existing solutions all required the same thing the patient was already failing at: remembering to interact with a screen.",
        "What does a medication reminder look like if you don\u2019t have to look at it? If you can just ask, and be answered, in the same room where you live?",
      ]}
      approach={[
        "I built this as a hands-on exploration of voice-first design for healthcare adherence, before there was a playbook. The goal wasn\u2019t to ship a commercial product. It was to learn, by doing, what makes a conversational interface actually usable when there\u2019s no screen to fall back on.",
        "I started where voice forces you to start: with the conversation, not the device. How does a person ask about their medication out loud? What are the ten ways someone might phrase \u201Cdid I take my pill?\u201D What does the skill say when it doesn\u2019t know?",
        "I wrote the directed dialog prompts, mapped every intent, utterance, and slot, and drew the conversation tree by hand before any prototype existed. Then I prototyped in SaySpring and tested with real people. Watching their faces when the skill said the wrong thing was the entire education.",
        "Alongside this voice work, I was concurrently designing chat and text-based conversational interfaces. The same principles carry across modalities. Voice was simply the most unforgiving version, which made it the best teacher.",
      ]}
      pullQuote={[
        "The most important part of designing for VUI is understanding how people actually request something \u2014 their intent, and the many ways a single person can phrase it. Mapping that surface area is the work.",
        "If users can\u2019t understand how to use your app, they won\u2019t stay long enough to learn it. That\u2019s true everywhere, but voice makes it unforgivable.",
      ]}
      processCarousel={
        <CaseStudyCarousel
          eyebrow="(Process)"
          heading="The walk-through"
          slides={[
            // ─── Slide 1: DEMO (video) ───────────────────────────────
            {
              tag: "DEMO",
              title: "The prototype in motion",
              body:
                "A short walkthrough of the VUI Pill Tracker prototype: setting a daily reminder, querying status, and confirming a dose, all by voice. Recorded in 2018 against the SaySpring prototype. Pre-mainstream voice, pre-LLM, pre-agentic anything. The conversational-design instincts on display \u2014 modeling intent, designing for repair, never leaving the user without an option \u2014 are the same instincts I bring to every AI and conversational engagement today.",
              media: (
                <div className="w-full rounded-xl overflow-hidden border border-border-default bg-bg-elevated">
                  <video
                    src={`${VIDEO_BASE}/pill-tracker-vui-demo.mp4`}
                    poster={`${ASSET_BASE}/01-vui-demo-poster.jpg`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    aria-label="Demo walkthrough of the VUI Pill Tracker Alexa Skill prototype: setting a daily medication reminder, querying status, and confirming a dose entirely by voice."
                    className="block w-full h-auto"
                  />
                </div>
              ),
            },

            // ─── Slide 2: VOICE IA (dialog chart) ────────────────────
            {
              tag: "VOICE IA",
              title: "Mapping the Voice User Interface, by hand",
              body:
                "Before any prototype, I drew the full VUI architecture on paper. Every user utterance branched into an identified intent, which routed to a set of conditions of response, which routed to device-specific responses, which routed to conversation follow-up \u2014 disambiguating, informing the user, or completing the task. No screens, no buttons, just decisions about what to say, when to say it, and what to do when the user goes off-script. The same logic now sits underneath every AI agent and chatbot I help teams build today.",
              image: `${ASSET_BASE}/02-vui-dialog-chart.jpg`,
              imageAlt:
                "Hand-mapped Voice User Interface dialog chart for the Pill Tracker Alexa Skill, showing user utterance, identified intent, conditions of response, device-specific responses, and conversation follow-up across three branches.",
            },

            // ─── Slide 3: RESEARCH (whiteboard session) ─────────────
            {
              tag: "RESEARCH",
              title: "Watching humans talk to a machine",
              body:
                "The SaySpring prototype let me run early conversational tests with real participants. We worked through utterances, watched where people hesitated, listened for the moments they tried to interrupt the skill mid-sentence, and noted every spot a screen would have rescued them but voice couldn\u2019t. It\u2019s impossible to overstate how much faster you learn voice design by sitting next to someone trying to use voice. Every \u201Cwait, what?\u201D is a redesign brief \u2014 a habit I still bring to every conversational engagement.",
              image: `${ASSET_BASE}/05-user-research-session.jpg`,
              imageAlt:
                "A whiteboard research session with four people standing around sticky notes mapping conversational flows during VUI Pill Tracker testing.",
            },
          ]}
        />
      }
      projectShowcases={[
        // ─── Showcase 1: Pill reminder setup (mobile) ─────────────
        {
          eyebrow: "Companion screens · Pill reminder configuration",
          title: "When the user does want a screen",
          description: [
            "Voice is the primary modality, but a pill reminder also needs a moment of considered setup. I designed the companion mobile flow for configuring daily reminders and refill schedules, then handing the alerting back to voice and SMS.",
            "The screen and the voice channel had to share state cleanly. Anything you configured by tapping had to be referenceable by asking, and vice versa. That handoff is where most voice products fail; it\u2019s also where the design work actually lives.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/03-pill-reminder-setup-mobile.jpg`,
              alt: "Three iPhone screens for the Pill Tracker companion app: daily pill and refill reminder configuration, alert setup with email and SMS, and an Alert Notice Sent confirmation.",
            },
          ],
        },
        // ─── Showcase 2: Profile + alert settings (mobile) ────────
        {
          eyebrow: "Companion screens · Profile and alert settings",
          title: "Account and alert management",
          description: [
            "The profile flow lets users review and edit core account fields \u2014 name, email, password, mailing address \u2014 and adjust their alert cadence between daily and refill, with email and SMS toggles per channel.",
            "Once again, the principle is shared state. Anything the user could change here, they could ask about by voice. Anything they configured by voice was visible here. Two interfaces, one model.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/04-profile-and-alert-settings.jpg`,
              alt: "Three iPhone screens for the Pill Tracker user profile: default profile with editable fields, Edit Alert Screen toggling alerts on/off with cadence and time zone, and a fuller Edit Alert Screen with email and SMS alert configuration.",
            },
          ],
        },
      ]}
      outcomes={[
        {
          headline: "A working VUI prototype, in 2018",
          description:
            "Concept, dialog tree, intents and utterances, prototype, and live user testing \u2014 completed before voice design was a discipline anyone was hiring for. Built to learn the medium, not to ship a product.",
        },
        {
          headline: "Conversational-design fluency that carries forward",
          description:
            "The same principles \u2014 user request / system response, repair patterns, always reminding the user what\u2019s possible \u2014 now underpin every AI agent, chatbot, and conversational interface engagement I work on. Voice was the strictest teacher.",
        },
        {
          headline: "Hands-on at the frontier of an emerging modality",
          description:
            "Alexa Skills hit their first major adoption inflection in 2017\u20132018. Designing in that window meant working through ambiguity \u2014 no patterns, no playbooks, no precedent.",
        },
        {
          headline: "Healthcare-specific voice design, before it was a category",
          description:
            "Medication adherence was an obvious unmet need; whether voice could meaningfully serve it was not. The exploration mapped both the promise and the limits of voice for healthcare \u2014 lessons that remain directly relevant to AI-driven patient support today.",
        },
      ]}
      closer={[
        "The reason this case study still matters in 2026 is not the Alexa Skill itself. The skill was a learning vehicle. The reason it matters is what doing it taught me: conversational interfaces \u2014 voice, chat, and now AI agents \u2014 share a single underlying design discipline.",
        "Map the intent before you map the interface. Design the repair before you design the success state. Never leave the user without a next move. Treat what the system says as carefully as you treat what it does.",
        "Every AI agent and chatbot I help a pharma or healthcare team scope today gets the same questions I asked of this Alexa Skill in 2018. I\u2019ve been doing this work and building for new systems all along. The modality changes; the work doesn\u2019t.",
      ]}
      ctaHeadline="Working on a conversational interface, an AI agent, or a chatbot in healthcare?"
      related={[
        {
          slug: "ai-native-product-design-lab",
          eyebrow: "Solo · AI Native Design Lab",
          title: "Building an AI-native product design lab",
          description:
            "Working AI-augmented prototypes, Custom GPTs, and a vendor-agnostic AI advisory practice grounded in hands-on building.",
          image:
            "/images/case-studies/05-ai-native-product-design-lab/01-hero-ai-native-design-lab.png",
        },
        {
          slug: "pharma-design-systems",
          eyebrow: "Multi-Brand · 3x Design Systems · Governance",
          title: "Building digital governance across 70+ therapeutic brands",
          description:
            "$3.5M+ in digital transformation. Industry-first mobile wallet integration for patient medication information.",
          image: "/images/hero/consumer-care-hub-hero-balanced.gif",
        },
      ]}
    />
  );
}
