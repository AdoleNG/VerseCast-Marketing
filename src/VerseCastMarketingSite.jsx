import React, { useState } from "react";
import "./styles.css";
import verseCastLogo from "./VerseCastLogo.png";

export default function VerseCastMarketingSite() {
  const [menuOpen, setMenuOpen] = useState(false);

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
      "The media team reviews, confirms, and authorizes the detected Bible passage to be displayed.",
    ],
    [
      "4",
      "The Bible passage appears on screen",
      "The congregation follows visually while the minister and media team stay focused on the message.",
    ],
  ];

  const benefitCards = [
    ["AI-driven assistance", "VerseCast helps churches respond quickly during live preaching."],
    ["Does not guess at random verses", "The system is designed to surface the intended Bible passage."],
    ["Reduced cognitive load", "Ministers and operators can stay focused on preaching and service flow."],
    ["Better engagement", "People can follow the message more easily when Scripture appears clearly."],
    ["Real-time speed", "Bible passages are detected and surfaced within seconds."],
    ["Media team stays in control", "Detected passages appear on the control panel first for review."],
    ["Manual search in seconds", "Media teams can instantly search and project any Bible passage."],
    ["Built for church workflows", "Designed around live preaching, media teams, and presenter screens."],
    ["KJV-friendly support", "Well suited to KJV-style language, quotations, and preaching patterns."],
  ];

  const pricingPlans = [
    ["Starter", "$1/mo", ["1 church account", "1 live service session", "Control panel + presenter", "Email support"]],
    ["Pro", "$1/mo", ["Multiple service sessions", "Team access", "Service logs", "Priority support"]],
    ["Conference", "$1/event", ["Event-based usage", "Temporary setup support", "Presenter/operator workflow", "Ideal for conventions"]],
  ];

  const useCases = [
    "Sunday worship services",
    "Bible teaching and discipleship meetings",
    "Campus and youth ministries",
    "Conferences and revival programs",
    "Livestream and hybrid church events",
  ];

  return (
    <div className="page">
      <header className="header">
        <div className="headerInner">
          <div className="brand">
            <img src={verseCastLogo} alt="VerseCast Logo" className="logo" />
            <div>
              <div className="brandTitle">VerseCast</div>
              <div className="brandSubtitle">AI-driven Bible display for churches</div>
            </div>
          </div>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#how-it-works" className="navLink">How it works</a>
            <a href="#benefits" className="navLink">Benefits</a>
            <a href="#pricing" className="navLink">Pricing</a>
            <a href="#contact" className="navLink">Contact</a>
          </nav>

          <div className="headerActions">
            <a href="#contact" className="demoButton">Book a Demo1</a>
            <a href="#contact" className="primaryButton">Start Here</a>
            <button
              className="menuButton"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((s) => !s)}
            >
              <span className="hamburger" />
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="heroInner">
            <div className="heroLeft">
              <div className="badge">Built for churches, conferences, and ministry teams</div>

              <h1 className="heroTitle">
                Help your congregation follow the sermon with Bible on screen in real time.
              </h1>

              <p className="heroText">
                VerseCast is an AI-powered Bible display platform designed to help churches project Scripture seamlessly during live sermons.
                As the minister speaks, VerseCast automatically recognizes explicit Bible references and displays them on screen without any
                manual input. When a speaker paraphrases a passage, VerseCast intelligently surfaces the matching Bible passage on the Control
                Panel, allowing the media team to quickly confirm and project it. This keeps the minister’s flow uninterrupted and ensures the
                congregation always sees the right verse at the right moment.
              </p>

              <div className="heroButtons">
                <a href="#contact" className="primaryButton">Book a Demo</a>
                <a href="#benefits" className="secondaryButton">See the Benefits</a>
              </div>

              <div className="heroCards">
                {heroCards.map(([title, text]) => (
                  <Card key={title} title={title} text={text} />
                ))}
              </div>
            </div>

            <div className="heroRight">
              <ControlPanel />
            </div>
          </div>
        </section>

        <section id="how-it-works" className="sectionGray">
          <div className="sectionInner">
            <div className="sectionLabel">How it works</div>
            <h2 className="sectionTitle">
              A simple service workflow that supports preaching, teaching, and worship.
            </h2>

            <div className="fourGrid">
              {workflowSteps.map(([num, title, text]) => (
                <div key={num} className="workflowCard">
                  <div className="stepNumber">{num}</div>
                  <h3 className="workflowTitle">{title}</h3>
                  <p className="workflowText">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" className="sectionWhite">
          <div className="sectionInner">
            <div className="centerText">
              <div className="sectionLabel">Benefits</div>
              <h2 className="sectionTitleCenter">More ministry value, less technical distraction.</h2>
            </div>

            <div className="threeGrid">
              {benefitCards.map(([title, text]) => (
                <div key={title} className="benefitCard">
                  <div className="valueBadge">Value</div>
                  <h3 className="cardTitle">{title}</h3>
                  <p className="cardText">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="sectionGray">
          <div className="sectionInner">
            <div className="centerText">
              <div className="sectionLabel">Pricing</div>
              <h2 className="sectionTitleCenter">Simple plans for church adoption.</h2>
              <p className="sectionIntro">
                Placeholder pricing for your marketing launch. You can adjust these later when you finalize packaging.
              </p>
            </div>

            <div className="threeGrid">
              {pricingPlans.map(([title, price, features]) => (
                <div key={title} className="pricingCard">
                  <h3 className="pricingTitle">{title}</h3>
                  <div className="price">{price}</div>
                  <ul className="featureList">
                    {features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" className="salesButton">Talk to Sales</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="whoSection">
          <div className="whoInner">
            <div>
              <div className="goldLabel">Who it’s for</div>
              <h2 className="whoTitle">
                Churches, conferences, and ministry teams that want Bible on screen without delay.
              </h2>
              <p className="whoText">
                VerseCast is a strong fit for churches that value live teaching clarity, smoother media workflows,
                and a more connected congregational experience.
              </p>
            </div>

            <div className="useCaseList">
              {useCases.map((item) => (
                <div key={item} className="useCase">{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contactSection">
          <div className="contactCard">
            <div className="sectionLabel">Get started</div>
            <h2 className="contactTitle">Launch VerseCast for your church.</h2>
            <p className="contactText">
              Request a live demo, join the early access list, or start conversations about using VerseCast in your ministry.
            </p>

            <div className="iframeWrap">
              <iframe
                src="https://tally.so/embed/0QMkX6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                title="VerseCast Waitlist"
                frameBorder="0"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">© 2026 VerseCast</footer>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div className="card">
      <h3 className="cardTitle">{title}</h3>
      <p className="cardText">{text}</p>
    </div>
  );
}

function ControlPanel() {
  return (
    <div className="panelOuter">
      <div className="panelInner">
        <div className="panelTop">
          <div>
            <div className="panelTitle">VerseCast Control Panel</div>
            <div className="panelSubtitle">Session: Sunday Morning Service</div>
          </div>
          <div className="liveBadge">Live</div>
        </div>

        <div className="audioBox">
          <div className="label">Incoming sermon audio</div>
          <div className="audioText">“Turn with me to Romans chapter 3 verse 23...”</div>
        </div>

        <div className="resultGrid">
          <div className="detectedBox">
            <div className="detectedLabel">Detected Bible Passage</div>
            <div className="verseRef">Romans 3:23</div>
            <p className="verseText">For all have sinned, and come short of the glory of God;</p>
          </div>

          <div className="presenterBox">
            <div className="presenterLabel">Presenter View</div>
            <div className="presenterRef">Romans 3:23</div>
            <p className="presenterText">For all have sinned, and come short of the glory of God;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
