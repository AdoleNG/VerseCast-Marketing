import verseCastLogo from "./VerseCastLogo.png";

export default function VerseCastMarketingSite() {
  const heroCards = [
    [
      "AI-driven detection",
      "VerseCast listens during live preaching and detects Bible passages mentioned naturally by the minister.",
    ],
    [
      "Less mental strain",
      "Reduces cognitive load for ministers and media teams during live services.",
    ],
    [
      "Understands paraphrases",
      "Even when the minister paraphrases a Bible passage, VerseCast can surface the exact Bible text for the media team to review.",
    ],
  ];

  const benefitCards = [
    [
      "AI-driven assistance",
      "VerseCast uses AI to detect Bible references and Bible passages in live preaching and help the church respond quickly during the sermon.",
    ],
    [
      "Does not guess at random verses",
      "The system is designed to surface the intended Bible passage instead of loosely guessing what the minister may have meant.",
    ],
    [
      "Reduced cognitive load",
      "Ministers and operators can stay focused on preaching, worship, and service flow instead of scrambling to find and confirm Bible passages manually.",
    ],
    [
      "Better congregational engagement",
      "When the right Bible passage appears clearly on screen, people can follow the message more easily and stay connected to the preaching.",
    ],
    [
      "Real-time speed",
      "VerseCast detects and surfaces Bible passages within seconds, helping media teams respond quickly during live preaching.",
    ],
    [
      "Media team stays in control",
      "Detected Bible passages appear on the control panel first so the media team can review, approve, and display them.",
    ],
    [
      "Manual search in seconds",
      "Media teams can instantly search and project any Bible passage from the control panel whenever needed.",
    ],
    [
      "Support for real church workflows",
      "VerseCast is built around live preaching, media teams, presenter screens, and the pace of real ministry environments.",
    ],
    [
      "KJV-friendly preaching support",
      "It is especially well suited to KJV-style language, quotations, and common Bible preaching patterns used in church settings.",
    ],
  ];

  const workflowSteps = [
    [
      "1",
      "The minister speaks naturally",
      "VerseCast listens during live preaching and Bible teaching without requiring rigid commands or manual searching.",
    ],
    [
      "2",
      "VerseCast detects the Bible passage",
      "Its AI-driven engine identifies spoken references, ranges, and even paraphrased Bible passages in real time.",
    ],
    [
      "3",
      "The control panel shows the result",
      "If the minister paraphrased a verse, the media team confirms and authorizes the detected Bible passage to be displayed in one click.",
    ],
    [
      "4",
      "The Bible passage appears on screen",
      "The congregation follows visually while the minister and media team stay focused on the message.",
    ],
  ];

  const pricingPlans = [
    ["Starter", "$19/mo", ["1 church account", "1 live service session", "Control panel + presenter", "Email support"]],
    ["Pro", "$49/mo", ["Multiple service sessions", "Team access", "Service logs", "Priority support"]],
    ["Conference", "$199/event", ["Event-based usage", "Temporary setup support", "Presenter and operator workflow", "Ideal for conventions and crusades"]],
  ];

  const useCases = [
    "Sunday worship services",
    "Bible teaching and discipleship meetings",
    "Campus and youth ministries",
    "Conferences and revival programs",
    "Livestream and hybrid church events",
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-[#050816]">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1640px] items-center justify-between px-16 py-5">
          <div className="flex items-center gap-4">
            <img src={verseCastLogo} alt="VerseCast Logo" className="h-[54px] w-[54px] rounded-xl object-cover" />
            <div>
              <div className="text-2xl font-extrabold tracking-tight">VerseCast</div>
              <div className="text-base text-slate-500">AI-driven Bible display for churches</div>
            </div>
          </div>

          <nav className="hidden items-center gap-10 text-base font-medium text-slate-600 md:flex">
            <a href="#how-it-works" className="hover:text-[#2b124c]">How it works</a>
            <a href="#benefits" className="hover:text-[#2b124c]">Benefits</a>
            <a href="#pricing" className="hover:text-[#2b124c]">Pricing</a>
            <a href="#contact" className="hover:text-[#2b124c]">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-xl bg-[#2b124c] px-6 py-3 text-base font-bold text-white md:inline-flex">
            Book a Demo
          </a>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-br from-white via-white to-[#fff8df] px-16 py-32">
          <div className="mx-auto grid max-w-[1640px] gap-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-[#f0d77a] bg-[#fff5c7] px-4 py-1.5 text-base text-[#6f5800]">
                Built for churches, conferences, and ministry teams
              </div>

              <h1 className="mt-7 max-w-[720px] text-[64px] font-extrabold leading-[1.05] tracking-tight text-[#050816]">
                Help your congregation follow the sermon with Bible on screen in real time.
              </h1>

              <p className="mt-8 max-w-[760px] text-[22px] leading-[1.75] text-slate-700">
                VerseCast is an AI-powered Bible display platform designed to help churches project Scripture seamlessly during live sermons.
                As the minister speaks, VerseCast automatically recognizes explicit Bible references and displays them on screen without any
                manual input. When a speaker paraphrases a passage, VerseCast intelligently surfaces the matching bible passage on the Control
                Panel, allowing the media team to quickly confirm and project it. This keeps the minister’s flow uninterrupted and ensures the
                congregation always sees the right verse at the right moment
              </p>

              <div className="mt-12 flex gap-4">
                <a href="#contact" className="rounded-2xl bg-[#2b124c] px-8 py-4 text-lg font-bold text-white">
                  Book a Demo
                </a>
                <a href="#benefits" className="rounded-2xl border border-slate-300 bg-white px-8 py-4 text-lg font-bold text-slate-800">
                  See the Benefits
                </a>
              </div>

              <div className="mt-14 grid max-w-[760px] grid-cols-3 gap-6">
                {heroCards.map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <h3 className="text-lg font-extrabold leading-tight">{title}</h3>
                    <p className="mt-2 text-lg leading-snug text-slate-700">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-40">
              <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-xl">
                <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-lg font-extrabold">VerseCast Control Panel</div>
                      <div className="text-base text-slate-500">Session: Sunday Morning Service</div>
                    </div>
                    <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">Live</div>
                  </div>

                  <div className="rounded-3xl border border-slate-200 bg-white p-6">
                    <div className="text-sm font-extrabold uppercase tracking-[0.35em] text-slate-500">
                      Incoming sermon audio
                    </div>
                    <div className="mt-5 rounded-2xl bg-slate-50 p-6 text-lg text-slate-700">
                      “Turn with me to Romans chapter 3 verse 23...”
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-[#efd476] bg-[#fff8df] p-6">
                      <div className="text-sm font-extrabold uppercase tracking-[0.35em] text-[#7a6100]">
                        Detected Bible Passage
                      </div>
                      <div className="mt-6 text-2xl font-extrabold">Romans 3:23</div>
                      <p className="mt-5 text-lg leading-8 text-slate-700">
                        For all have sinned, and come short of the glory of God;
                      </p>
                    </div>

                    <div className="rounded-3xl bg-[#2b124c] p-6 text-white">
                      <div className="text-sm font-extrabold uppercase tracking-[0.35em] text-[#f9e79f]">
                        Presenter View
                      </div>
                      <div className="mt-6 text-3xl font-extrabold text-[#f9e79f]">Romans 3:23</div>
                      <p className="mt-6 text-lg font-semibold leading-8 text-white">
                        For all have sinned, and come short of the glory of God;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-slate-200 bg-slate-50 px-16 py-28">
          <div className="mx-auto max-w-[1640px]">
            <div className="max-w-[950px]">
              <div className="text-lg font-extrabold uppercase tracking-[0.45em] text-[#2b124c]">How it works</div>
              <h2 className="mt-6 text-[48px] font-extrabold leading-tight">
                A simple service workflow that supports preaching, teaching, and worship.
              </h2>
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-4">
              {workflowSteps.map(([num, title, text]) => (
                <div key={num} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2b124c] text-2xl font-extrabold text-[#f9e79f]">
                    {num}
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold leading-snug">{title}</h3>
                  <p className="mt-7 text-lg leading-9 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="bg-white px-16 py-28">
          <div className="mx-auto max-w-[1640px]">
            <div className="mx-auto max-w-[760px] text-center">
              <div className="text-lg font-extrabold uppercase tracking-[0.45em] text-[#2b124c]">Benefits</div>
              <h2 className="mt-6 text-[48px] font-extrabold leading-tight">
                More ministry value, less technical distraction.
              </h2>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {benefitCards.map(([title, text]) => (
                <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="inline-flex rounded-full bg-[#f5ecff] px-4 py-1.5 text-base font-extrabold uppercase tracking-[0.25em] text-[#2b124c]">
                    Value
                  </div>
                  <h3 className="mt-8 text-2xl font-extrabold">{title}</h3>
                  <p className="mt-7 text-lg leading-9 text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="border-y border-slate-200 bg-slate-50 px-16 py-28">
          <div className="mx-auto max-w-[1640px]">
            <div className="mx-auto max-w-[920px] text-center">
              <div className="text-lg font-extrabold uppercase tracking-[0.45em] text-[#2b124c]">Pricing</div>
              <h2 className="mt-6 text-[48px] font-extrabold leading-tight">
                Simple plans for church adoption.
              </h2>
              <p className="mt-7 text-2xl leading-10 text-slate-700">
                Placeholder pricing for your marketing launch. You can adjust these later when you finalize packaging.
              </p>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
              {pricingPlans.map(([title, price, features]) => (
                <div key={title} className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
                  <h3 className="text-2xl font-extrabold">{title}</h3>
                  <div className="mt-8 text-5xl font-extrabold">{price}</div>
                  <ul className="mt-10 space-y-5 text-lg text-slate-700">
                    {features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-12 inline-flex rounded-2xl bg-[#2b124c] px-7 py-4 text-lg font-bold text-white">
                    Talk to Sales
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#2b124c] px-16 py-32 text-white">
          <div className="mx-auto grid max-w-[1640px] gap-24 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <div className="text-lg font-extrabold uppercase tracking-[0.45em] text-[#f9e79f]">Who it’s for</div>
              <h2 className="mt-8 text-[48px] font-extrabold leading-tight">
                Churches, conferences, and ministry teams that want Bible on screen without delay.
              </h2>
              <p className="mt-10 max-w-[850px] text-2xl leading-10 text-slate-100">
                VerseCast is a strong fit for churches that value live teaching clarity, smoother media workflows, and a more connected congregational experience.
              </p>
            </div>

            <div className="grid gap-6">
              {useCases.map((item) => (
                <div key={item} className="rounded-2xl border border-white/15 bg-white/10 px-8 py-6 text-lg font-bold">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-16 py-28">
          <div className="mx-auto max-w-[1500px] rounded-[42px] border border-slate-200 bg-slate-50 p-20 shadow-sm">
            <div className="text-lg font-extrabold uppercase tracking-[0.45em] text-[#2b124c]">Get started</div>
            <h2 className="mt-8 text-[56px] font-extrabold leading-tight">
              Launch VerseCast for your church.
            </h2>
            <p className="mt-8 text-2xl leading-10 text-slate-700">
              Request a live demo, join the early access list, or start conversations about using VerseCast in your ministry.
            </p>

            <div className="mt-16">
              <iframe
                src="https://tally.so/embed/0QMkX6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="520"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="VerseCast Waitlist"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-[1640px] px-16 py-10 text-center text-base text-slate-500">
          © 2026 VerseCast
        </div>
      </footer>
    </div>
  );
}