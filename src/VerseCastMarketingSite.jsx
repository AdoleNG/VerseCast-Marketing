import { useState } from "react";
import verseCastLogo from "./VerseCastLogo.png";

export default function VerseCastMarketingSite() {
  const [formState, setFormState] = useState({
    name: "",
    ministry: "",
    email: "",
    loading: false,
    success: false,
    error: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState((s) => ({ ...s, loading: true, success: false, error: null }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formState.name,
          ministry: formState.ministry,
          email: formState.email,
        }),
      });

      if (!res.ok) throw new Error("Failed to submit");

      setFormState({
        name: "",
        ministry: "",
        email: "",
        loading: false,
        success: true,
        error: null,
      });
    } catch (err) {
      setFormState((s) => ({
        ...s,
        loading: false,
        error: "Something went wrong. Please try again.",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">

      {/* HEADER — matches mockup exactly */}
      <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img src={verseCastLogo} alt="VerseCast Logo" className="h-9 w-auto" />
            <div>
              <div className="text-base font-semibold tracking-tight text-[#2b124c]">
                VerseCast
              </div>
              <div className="text-xs text-slate-500">
                AI-driven Bible display for churches
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#how-it-works" className="transition hover:text-[#2b124c]">
              How it works
            </a>
            <a href="#benefits" className="transition hover:text-[#2b124c]">
              Benefits
            </a>
            <a href="#pricing" className="transition hover:text-[#2b124c]">
              Pricing
            </a>
            <a href="#contact" className="transition hover:text-[#2b124c]">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-xl bg-[#2b124c] px-4 py-2 text-sm font-medium text-white transition hover:opacity-95"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </header>

      <main>

        {/* HERO — two-column, pixel-accurate */}
        <section className="px-6 py-16 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center">

            {/* LEFT SIDE — text */}
            <div>
              <div className="inline-flex items-center rounded-full border border-[#f9e79f]/70 bg-[#fff9db] px-4 py-1 text-xs font-medium text-[#6a5712]">
                Built for churches, conferences, and ministry teams
              </div>

              <h1 className="mt-5 max-w-xl text-4xl font-bold tracking-tight text-[#2b124c] sm:text-5xl lg:text-6xl">
                Help your congregation follow the sermon with Bible on screen in real time.
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
                VerseCast is an AI-powered Bible display platform designed to help churches project Scripture seamlessly during live sermons.
                As the minister speaks, VerseCast automatically recognizes explicit Bible references and displays them on screen without any
                manual input. When a speaker paraphrases a passage, VerseCast intelligently surfaces the matching Bible passage on the Control
                Panel, allowing the media team to quickly confirm and project it. This keeps the minister’s flow uninterrupted and ensures the
                congregation always sees the right verse at the right time.
              </p>

              <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a
                  href="#contact"
                  className="rounded-2xl bg-[#2b124c] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px]"
                >
                  Book a Demo
                </a>
                <a
                  href="#benefits"
                  className="rounded-2xl border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  See the Benefits
                </a>
              </div>

              {/* HERO FEATURE CARDS */}
              <div className="mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold text-[#2b124c]">AI-driven detection</div>
                  <div className="mt-1 text-xs text-slate-600">
                    VerseCast listens during live preaching and detects Bible passages mentioned naturally by the minister.
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold text-[#2b124c]">Less mental strain</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Reduces cognitive load for ministers and media teams during live services.
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs font-semibold text-[#2b124c]">Understands paraphrases</div>
                  <div className="mt-1 text-xs text-slate-600">
                    Even when the minister paraphrases a Bible passage, VerseCast can surface the exact Bible text for review.
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — control panel mockup */}
            <div className="lg:justify-self-end">
              <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200/70">
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">

                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#2b124c]">
                        VerseCast Control Panel
                      </div>
                      <div className="text-xs text-slate-500">
                        Session: Sunday Morning Service
                      </div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                      Live
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Incoming sermon audio
                    </div>
                    <div className="mt-3 rounded-xl bg-slate-50 p-3 text-xs leading-6 text-slate-700">
                      “Turn with me to Romans chapter 3 verse 23…”
                    </div>
                  </div>

                  <div className="mt-4 grid gap-4">
                    <div className="rounded-2xl border border-[#f3e2a0] bg-[#fff9e6] p-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8a6f16]">
                        Detected Bible passage
                      </div>
                      <div className="mt-2 text-sm font-semibold text-[#2b124c]">
                        Romans 3:23
                      </div>
                      <div className="mt-1 text-xs leading-6 text-slate-700">
                        For all have sinned, and come short of the glory of God;
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-[#2b124c] p-4 text-white">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f9e79f]">
                        Presenter view
                      </div>
                      <div className="mt-3 text-lg font-semibold text-[#f9e79f]">
                        Romans 3:23
                      </div>
                      <div className="mt-2 text-xs leading-6 text-slate-100">
                        For all have sinned, and come short of the glory of God;
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="border-y border-slate-200 bg-slate-50/70 py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b124c]">
                How it works
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2b124c] sm:text-4xl">
                A simple service workflow that supports preaching, teaching, and worship.
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {/* STEP 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b124c] text-lg font-bold text-[#f9e79f]">
                  1
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#2b124c]">
                  The minister speaks naturally
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  VerseCast listens during live preaching and Bible teaching without requiring rigid commands or manual searching.
                </p>
              </div>

              {/* STEP 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b124c] text-lg font-bold text-[#f9e79f]">
                  2
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#2b124c]">
                  VerseCast detects the Bible passage
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Its AI-driven engine identifies spoken references, ranges, and even paraphrased Bible passages in real time.
                </p>
              </div>

              {/* STEP 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b124c] text-lg font-bold text-[#f9e79f]">
                  3
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#2b124c]">
                  The control panel shows the result
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  If the minister paraphrased a verse, the media team confirms and authorizes the detected Bible passage to be displayed in one click.
                </p>
              </div>

              {/* STEP 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2b124c] text-lg font-bold text-[#f9e79f]">
                  4
                </div>
                <h3 className="mt-5 text-xl font-semibold text-[#2b124c]">
                  The Bible passage appears on screen
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The congregation follows visually while the minister and media team stay focused on the message.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* BENEFITS */}
        <section id="benefits" className="py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b124c]">
                Benefits
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2b124c] sm:text-4xl">
                More ministry value, less technical distraction.
              </h2>
            </div>

            {/* BENEFIT CARDS — first 6 */}
            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* CARD 1 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  AI-driven assistance
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  VerseCast uses AI to detect Bible references and Bible passages in live preaching and help the church respond quickly during the sermon.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Does not guess at random verses
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  The system is designed to surface the intended Bible passage instead of loosely guessing what the minister may have meant.
                </p>
              </div>

              {/* CARD 3 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Reduced cognitive load
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Ministers and operators can stay focused on preaching, worship, and service flow instead of scrambling to find and confirm Bible passages manually.
                </p>
              </div>

              {/* CARD 4 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Better congregational engagement
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  When the right Bible passage appears clearly on screen, people can follow the message more easily and stay connected to the preaching.
                </p>
              </div>

              {/* CARD 5 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Real-time speed
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  VerseCast detects and surfaces Bible passages within seconds, helping media teams respond quickly during live preaching.
                </p>
              </div>

              {/* CARD 6 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Media team stays in control
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Detected Bible passages appear on the control panel first so the media team can review, approve, and display them.
                </p>
              </div>
            </div>

            {/* SECOND ROW OF BENEFITS — matches your mockup */}
            <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {/* CARD 7 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Manual search in seconds
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Media teams can instantly search and project any Bible passage from the control panel whenever needed.
                </p>
              </div>

              {/* CARD 8 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  Support for real church workflows
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  VerseCast is built around live preaching, media teams, presenter screens, and the pace of real ministry environments.
                </p>
              </div>

              {/* CARD 9 */}
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-2xl bg-[#f6f0ff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2b124c]">
                  Value
                </div>
                <h3 className="mt-4 text-xl font-semibold text-[#2b124c]">
                  KJV-friendly preaching support
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  It is especially well suited to KJV-style language, quotations, and common Bible preaching patterns used in church settings.
                </p>
              </div>
            </div>
          </div>
        </section>
                {/* PRICING */}
        <section
          id="pricing"
          className="border-y border-slate-200 bg-slate-50 py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b124c]">
                Pricing
              </div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2b124c] sm:text-4xl">
                Simple plans for church adoption.
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Placeholder pricing for your marketing launch. You can adjust
                these later when you finalize packaging.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {/* STARTER */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold text-[#2b124c]">
                  Starter
                </div>
                <div className="mt-3 text-4xl font-bold tracking-tight text-[#2b124c]">
                  $19/mo
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>• 1 church account</li>
                  <li>• 1 live service session</li>
                  <li>• Control panel + presenter</li>
                  <li>• Email support</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-[#2b124c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Talk to Sales
                </a>
              </div>

              {/* PRO */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold text-[#2b124c]">
                  Pro
                </div>
                <div className="mt-3 text-4xl font-bold tracking-tight text-[#2b124c]">
                  $49/mo
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>• Multiple service sessions</li>
                  <li>• Team access</li>
                  <li>• Service logs</li>
                  <li>• Priority support</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-[#2b124c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Talk to Sales
                </a>
              </div>

              {/* CONFERENCE */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="text-lg font-semibold text-[#2b124c]">
                  Conference
                </div>
                <div className="mt-3 text-4xl font-bold tracking-tight text-[#2b124c]">
                  $199/event
                </div>
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  <li>• Event-based usage</li>
                  <li>• Temporary setup support</li>
                  <li>• Presenter and operator workflow</li>
                  <li>• Ideal for conventions and crusades</li>
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-2xl bg-[#2b124c] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="bg-[#2b124c] py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              
              {/* LEFT TEXT BLOCK */}
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f9e79f]">
                  Who it’s for
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Churches, conferences, and ministry teams that want Bible on
                  screen without delay.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                  VerseCast is a strong fit for churches that value live
                  teaching clarity, smoother media workflows, and a more
                  connected congregational experience.
                </p>
              </div>

              {/* RIGHT USE-CASE BUTTONS */}
              <div className="grid gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm">
                  Sunday worship services
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm">
                  Bible teaching and discipleship meetings
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm">
                  Campus and youth ministries
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-medium text-slate-100 backdrop-blur-sm">
                  Conferences and revival programs
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* GET STARTED */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12">

              {/* TEXT BLOCK */}
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#2b124c]">
                  Get started
                </div>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#2b124c] sm:text-4xl">
                  Launch VerseCast for your church.
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  Request a live demo, join the early access list, or start
                  conversations about using VerseCast in your ministry.
                </p>
              </div>

              {/* FORM */}
              <form onSubmit={handleSubmit} className="mt-10 max-w-xl space-y-6">

                {/* NAME */}
                <div>
                  <label className="block text-sm font-medium text-[#2b124c]">
                    Your name
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, name: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#2b124c] focus:ring-[#2b124c]"
                  />
                </div>

                {/* MINISTRY */}
                <div>
                  <label className="block text-sm font-medium text-[#2b124c]">
                    Ministry
                  </label>
                  <input
                    type="text"
                    required
                    value={formState.ministry}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, ministry: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#2b124c] focus:ring-[#2b124c]"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm font-medium text-[#2b124c]">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((s) => ({ ...s, email: e.target.value }))
                    }
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm focus:border-[#2b124c] focus:ring-[#2b124c]"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  disabled={formState.loading}
                  className="w-full rounded-2xl bg-[#2b124c] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:opacity-50"
                >
                  {formState.loading ? "Sending..." : "Submit"}
                </button>

                {/* SUCCESS MESSAGE */}
                {formState.success && (
                  <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                    Thank you! Your message has been sent.
                  </div>
                )}

                {/* ERROR MESSAGE */}
                {formState.error && (
                  <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                    {formState.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-500">
          © 2026 VerseCast
        </div>
      </footer>
    </div>
  );
}

