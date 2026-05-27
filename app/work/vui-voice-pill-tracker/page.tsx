import { CaseStudyLayout } from "@/components/CaseStudyLayout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VUI Pill Tracker — Voice Design for Healthcare Adherence",
  description:
    "An early voice-first design exploration for medication adherence, built as an Alexa Skill in 2018 — before voice was a mainstream healthcare category. Conversational design, dialog mapping, and intent modeling.",
};

const ASSET_BASE = "/images/case-studies/06-vui-voice-pill-tracker";
const YOUTUBE_URL = "https://youtu.be/paAzgeo5SYA";

export default function Page() {
  return (
    <CaseStudyLayout
      eyebrow="(Case Study)"
      title="VUI Pill Tracker"
      subtitle="An early voice-first design exploration for medication adherence — built as an Alexa Skill in 2018, before voice was a mainstream healthcare category."
      heroImage={`${ASSET_BASE}/01-hero-vui-dialog-chart.jpg`}
      heroImageAlt="Hand-mapped Voice User Interface dialog chart for the Pill Tracker Alexa Skill, showing user utterance, identified intent, conditions of response, device-specific responses, and conversation follow-up across three branches."
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
          value:
            "Alexa Skills Kit · SaySpring (prototyping) · Sketch · Whiteboarding",
        },
      ]}
      challenge={[
        "In 2017, voice was not yet a category. Amazon Echo was three years old, Alexa Skills were still a developer curiosity, and \u201Cconversational design\u201D wasn\u2019t a discipline anyone hired for. Most teams treating voice as serious product surface didn\u2019t exist yet.",
        "Medication adherence, meanwhile, was already a multi-billion-dollar problem. Patients were missing doses, refilling late, and forgetting prescriptions \u2014 and the existing solutions were apps, alarms, and pill organizers that all required the same thing the patient was already failing at: remembering to interact with a screen.",
        "The question was simple. What does a medication reminder look like if you don\u2019t have to look at it? If you can just ask, and be answered, in the same room where you live?",
      ]}
      approach={[
        "I built this as a hands-on exploration of voice-first design for healthcare adherence \u2014 before there was a playbook. The goal wasn\u2019t to ship a commercial product. It was to learn, by doing, what makes a conversational interface actually usable when there\u2019s no screen to fall back on.",
        "I started where you have to start with voice: not with the device, but with the conversation. How does a person actually ask about their medication out loud? What are the ten ways someone might phrase \u201Cdid I take my pill?\u201D What does the skill say when it doesn\u2019t know? What does it say when the user trails off?",
        "I wrote the directed dialog prompts, mapped every intent, utterance, and slot, and drew the full conversation tree by hand on a whiteboard before any prototype existed. Then I prototyped the flow in SaySpring and tested it with real people \u2014 watching their faces when the skill said the wrong thing was the entire education.",
        "Alongside this voice work, I was concurrently designing chat and text-based conversational interfaces for other projects. The same principles \u2014 user request and application response, no visual navigation, the system must always remind the user what\u2019s possible \u2014 carry across modalities. Voice was simply the most unforgiving version, which made it the best teacher.",
      ]}
      pullQuote={[
        "Voice navigation and touchless interaction were becoming more integrated everyday. The same thinking and principles that make a good application and web design apply to VUI \u2014 they\u2019re just stricter, because there\u2019s no screen to bail you out.",
        "The most important part of designing for VUI is understanding how people actually request something \u2014 their intent, and the many ways a single person can phrase it. Mapping that surface area is the work.",
        "If users can\u2019t understand how to use your app, they won\u2019t stay long enough to learn it. That\u2019s true everywhere, but voice makes it unforgivable.",
      ]}
      projectShowcases={[
        {
          eyebrow: "Voice IA · Dialog architecture",
          title: "Mapping the Voice User Interface, by hand",
          description: [
            "Before any prototype, I drew the full VUI architecture on paper. Every user utterance branched into an identified intent, which routed to a set of conditions of response, which routed to device-specific responses (Echo had no screen; Echo Show did), which routed to conversation follow-up \u2014 disambiguating, informing the user, or completing the task.",
            "This is the artifact that proves voice design is design. No screens, no buttons, just decisions \u2014 about what to say, when to say it, and what to do when the user goes off-script. The same logic now sits underneath every AI agent and conversational interface I work with.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/02-vui-dialog-chart-detail.jpg`,
              alt: "Detail of the VUI dialog chart annotated with user utterance, identified intent, technical requirements, S-Voice response, device-specific responses, and conversation follow-up.",
            },
          ],
        },
        {
          eyebrow: "Companion screens · Pill reminder configuration",
          title: "When the user does want a screen",
          description: [
            "Voice is the primary modality, but a pill reminder also needs a moment of considered setup. I designed the companion mobile flow for users configuring their daily reminder and refill schedule \u2014 frequency, time, time zone, prescription length, refill date \u2014 then handing the alerting back to voice and SMS.",
            "The screen and the voice channel had to share state cleanly. Anything you configured by tapping had to be referenceable by asking, and vice versa. That handoff is where most voice products fail; it\u2019s also where the design work actually lives.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/03-pill-reminder-setup-mobile.jpg`,
              alt: "Three iPhone screens for the Pill Tracker companion app: daily pill and refill reminder configuration with frequency, time, time zone, prescription length, and refill calendar; alert setup with email and SMS fields; and an Alert Notice Sent confirmation screen.",
            },
            {
              src: `${ASSET_BASE}/04-profile-and-alert-settings.jpg`,
              alt: "Three iPhone screens for the Pill Tracker user profile: default profile with editable name, email, password, mailing address, alerts toggle, and account status; an Edit Alert Screen toggling alerts off/on with daily/refill cadence and time zone; and a fuller Edit Alert Screen with email and SMS alert configuration.",
            },
          ],
        },
        {
          eyebrow: "Research · Watching humans talk to a machine",
          title: "Testing where it matters \u2014 in the room",
          description: [
            "The SaySpring prototype let me run early conversational tests with real participants. We worked through utterances, watched where people hesitated, listened for the moments they tried to interrupt the skill mid-sentence, and noted every spot a screen would have rescued them but voice couldn\u2019t.",
            "It is impossible to overstate how much faster you learn voice design by sitting next to someone who is trying to use voice. Every \u201Cwait, what?\u201D is a redesign brief.",
          ],
          images: [
            {
              src: `${ASSET_BASE}/05-user-research-session.jpg`,
              alt: "A whiteboard research session with four people standing around sticky notes mapping conversational flows and user intents during VUI Pill Tracker testing.",
            },
          ],
        },
        {
          eyebrow: "The working prototype · Watch the demo",
          title: "The VUI Pill Tracker in motion",
          description: [
            "A short walkthrough of the prototype in action \u2014 setting a daily reminder, querying status, and confirming a dose, all by voice. Recorded in 2018 against the SaySpring prototype.",
            "Watch it as a time capsule: pre-mainstream voice, pre-LLM, pre-agentic anything. The conversational design instincts on display \u2014 modeling intent, designing for repair, never leaving the user without an option \u2014 are the same instincts I bring to every AI and conversational engagement today.",
          ],
          links: [
            { label: "Watch the demo on YouTube", href: YOUTUBE_URL },
          ],
          // NOTE: Self-hosting an .mp4 in /public/videos/ would let us embed
          // inline via CaseStudyLayout's existing bottomImages video handler.
          // Left as YouTube link for now per current asset availability.
        },
      ]}
      outcomes={[
        {
          headline: "A working VUI prototype, in 2018",
          description:
            "Concept, dialog tree, intents and utterances, prototype, and live user testing \u2014 completed before voice design was a discipline anyone was hiring for. Built to learn the medium, not to ship a product.",
        },
        {
          headline: "Conversational design fluency that carries forward",
          description:
            "The same principles \u2014 user request / system response, repair patterns, always reminding the user what\u2019s possible \u2014 now underpin every AI agent, chatbot, and conversational interface engagement I work on. Voice was the strictest teacher.",
        },
        {
          headline: "Hands-on at the frontier of an emerging modality",
          description:
            "Alexa Skills hit their first major adoption inflection in 2017\u20132018, with the Skills catalog crossing tens of thousands of public skills. Designing in that window meant working through ambiguity \u2014 no patterns, no playbooks, no precedent.",
        },
        {
          headline: "Healthcare-specific voice design, before it was a category",
          description:
            "Medication adherence was an obvious unmet need; the question of whether voice could meaningfully serve it was not. The exploration mapped both the promise and the limits of voice for healthcare \u2014 lessons that remain directly relevant to AI-driven patient support today.",
        },
      ]}
      closer={[
        "The reason this case study still matters in 2026 is not the Alexa Skill itself. The skill was a learning vehicle. The reason it matters is what doing it taught me: that conversational interfaces \u2014 voice, chat, and now AI agents \u2014 share a single underlying design discipline.",
        "Map the intent before you map the interface. Design the repair before you design the success state. Never leave the user without a next move. Treat what the system says as carefully as you treat what it does.",
        "Every AI agent I help a pharma or healthcare team scope today gets the same questions I asked of this Alexa Skill in 2018. The modality changes; the work doesn\u2019t.",
      ]}
      ctaHeadline="Working on a conversational interface, an AI agent, or a chatbot in healthcare?"
      related={[
        {
          slug: "ai-native-product-design-lab",
          eyebrow: "Solo · AI Native Design Lab",
          title: "Building an AI-native product design lab",
          description:
            "Working AI-augmented prototypes, Custom GPTs, and a vendor-agnostic AI advisory practice grounded in hands-on building \u2014 the modern continuation of the conversational-design work that started here.",
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
