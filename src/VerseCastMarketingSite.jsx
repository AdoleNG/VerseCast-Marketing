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
    ["Starter", "$19/mo", ["1 church account", "1 live service session", "Control panel + presenter", "Email support"]],
    ["Pro", "$49/mo", ["Multiple service sessions", "Team access", "Service logs", "Priority support"]],
    ["Conference", "$199/event", ["Event-based usage", "Temporary setup support", "Presenter/operator workflow", "Ideal for conventions"]],
  ];

  const useCases = [
    "Sunday worship services",
    "Bible teaching and discipleship meetings",
    "Campus and youth ministries",
    "Conferences and revival programs",
    "Livestream and hybrid church events",
  ];

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <img src={verseCastLogo} alt="VerseCast Logo" style={styles.logo} />
            <div>
              <div style={styles.brandTitle}>VerseCast</div>
              <div style={styles.brandSubtitle}>AI-driven Bible display for churches</div>
            </div>
          </div>

          <nav style={styles.nav}>
            <a href="#how-it-works" style={styles.navLink}>How it works</a>
            <a href="#benefits" style={styles.navLink}>Benefits</a>
            <a href="#pricing" style={styles.navLink}>Pricing</a>
            <a href="#contact" style={styles.navLink}>Contact</a>
          </nav>

          <a href="#contact" style={styles.demoButton}>Book a Demo</a>
        </div>
      </header>

      <main>
        <section style={styles.hero}>
          <div style={styles.heroInner}>
            <div style={styles.heroLeft}>
              <div style={styles.badge}>Built for churches, conferences, and ministry teams</div>

              <h1 style={styles.heroTitle}>
                Help your congregation follow the sermon with Bible on screen in real time.
              </h1>

              <p style={styles.heroText}>
                VerseCast is an AI-powered Bible display platform designed to help churches project Scripture seamlessly during live sermons.
                As the minister speaks, VerseCast automatically recognizes explicit Bible references and displays them on screen without any
                manual input. When a speaker paraphrases a passage, VerseCast intelligently surfaces the matching Bible passage on the Control
                Panel, allowing the media team to quickly confirm and project it. This keeps the minister’s flow uninterrupted and ensures the
                congregation always sees the right verse at the right moment.
              </p>

              <div style={styles.heroButtons}>
                <a href="#contact" style={styles.primaryButton}>Book a Demo</a>
                <a href="#benefits" style={styles.secondaryButton}>See the Benefits</a>
              </div>

              <div style={styles.heroCards}>
                {heroCards.map(([title, text]) => (
                  <Card key={title} title={title} text={text} />
                ))}
              </div>
            </div>

            <div style={styles.heroRight}>
              <ControlPanel />
            </div>
          </div>
        </section>

        <section id="how-it-works" style={styles.sectionGray}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionLabel}>How it works</div>
            <h2 style={styles.sectionTitle}>
              A simple service workflow that supports preaching, teaching, and worship.
            </h2>

            <div style={styles.fourGrid}>
              {workflowSteps.map(([num, title, text]) => (
                <div key={num} style={styles.workflowCard}>
                  <div style={styles.stepNumber}>{num}</div>
                  <h3 style={styles.workflowTitle}>{title}</h3>
                  <p style={styles.workflowText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="benefits" style={styles.sectionWhite}>
          <div style={styles.sectionInner}>
            <div style={styles.centerText}>
              <div style={styles.sectionLabel}>Benefits</div>
              <h2 style={styles.sectionTitleCenter}>More ministry value, less technical distraction.</h2>
            </div>

            <div style={styles.threeGrid}>
              {benefitCards.map(([title, text]) => (
                <div key={title} style={styles.benefitCard}>
                  <div style={styles.valueBadge}>Value</div>
                  <h3 style={styles.cardTitle}>{title}</h3>
                  <p style={styles.cardText}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" style={styles.sectionGray}>
          <div style={styles.sectionInner}>
            <div style={styles.centerText}>
              <div style={styles.sectionLabel}>Pricing</div>
              <h2 style={styles.sectionTitleCenter}>Simple plans for church adoption.</h2>
              <p style={styles.sectionIntro}>
                Placeholder pricing for your marketing launch. You can adjust these later when you finalize packaging.
              </p>
            </div>

            <div style={styles.threeGrid}>
              {pricingPlans.map(([title, price, features]) => (
                <div key={title} style={styles.pricingCard}>
                  <h3 style={styles.pricingTitle}>{title}</h3>
                  <div style={styles.price}>{price}</div>
                  <ul style={styles.featureList}>
                    {features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <a href="#contact" style={styles.salesButton}>Talk to Sales</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={styles.whoSection}>
          <div style={styles.whoInner}>
            <div>
              <div style={styles.goldLabel}>Who it’s for</div>
              <h2 style={styles.whoTitle}>
                Churches, conferences, and ministry teams that want Bible on screen without delay.
              </h2>
              <p style={styles.whoText}>
                VerseCast is a strong fit for churches that value live teaching clarity, smoother media workflows,
                and a more connected congregational experience.
              </p>
            </div>

            <div style={styles.useCaseList}>
              {useCases.map((item) => (
                <div key={item} style={styles.useCase}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={styles.contactSection}>
          <div style={styles.contactCard}>
            <div style={styles.sectionLabel}>Get started</div>
            <h2 style={styles.contactTitle}>Launch VerseCast for your church.</h2>
            <p style={styles.contactText}>
              Request a live demo, join the early access list, or start conversations about using VerseCast in your ministry.
            </p>

            <iframe
              src="https://tally.so/embed/0QMkX6?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="520"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="VerseCast Waitlist"
              style={{ marginTop: 40 }}
            />
          </div>
        </section>
      </main>

      <footer style={styles.footer}>© 2026 VerseCast</footer>
    </div>
  );
}

function Card({ title, text }) {
  return (
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>
    </div>
  );
}

function ControlPanel() {
  return (
    <div style={styles.panelOuter}>
      <div style={styles.panelInner}>
        <div style={styles.panelTop}>
          <div>
            <div style={styles.panelTitle}>VerseCast Control Panel</div>
            <div style={styles.panelSubtitle}>Session: Sunday Morning Service</div>
          </div>
          <div style={styles.liveBadge}>Live</div>
        </div>

        <div style={styles.audioBox}>
          <div style={styles.label}>Incoming sermon audio</div>
          <div style={styles.audioText}>“Turn with me to Romans chapter 3 verse 23...”</div>
        </div>

        <div style={styles.resultGrid}>
          <div style={styles.detectedBox}>
            <div style={styles.detectedLabel}>Detected Bible Passage</div>
            <div style={styles.verseRef}>Romans 3:23</div>
            <p style={styles.verseText}>For all have sinned, and come short of the glory of God;</p>
          </div>

          <div style={styles.presenterBox}>
            <div style={styles.presenterLabel}>Presenter View</div>
            <div style={styles.presenterRef}>Romans 3:23</div>
            <p style={styles.presenterText}>For all have sinned, and come short of the glory of God;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#050816",
    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 50,
    background: "rgba(255,255,255,0.96)",
    borderBottom: "1px solid #e5e7eb",
  },
  headerInner: {
    maxWidth: 1400,
    margin: "0 auto",
    padding: "18px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: { display: "flex", alignItems: "center", gap: 12 },
  logo: { width: 42, height: 42, borderRadius: 10, objectFit: "cover", flexShrink: 0 },
  brandTitle: { fontSize: 18, fontWeight: 800 },
  brandSubtitle: { fontSize: 12, color: "#64748b" },
  nav: { display: "flex", gap: 34 },
  navLink: { fontSize: 14, color: "#475569", textDecoration: "none", fontWeight: 600 },
  demoButton: {
    background: "#2b124c",
    color: "#fff",
    textDecoration: "none",
    padding: "11px 20px",
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 800,
  },

  hero: {
    background: "linear-gradient(135deg, #ffffff 0%, #ffffff 55%, #fff8df 100%)",
    padding: "96px 40px",
  },
  heroInner: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 0.9fr",
    gap: 70,
    alignItems: "center",
  },
  heroLeft: { maxWidth: 650 },
  badge: {
    display: "inline-flex",
    background: "#fff5c7",
    border: "1px solid #f0d77a",
    color: "#6f5800",
    borderRadius: 999,
    padding: "6px 14px",
    fontSize: 13,
    fontWeight: 600,
  },
  heroTitle: {
    margin: "26px 0 0",
    fontSize: 58,
    lineHeight: 1.07,
    letterSpacing: "-0.045em",
    fontWeight: 900,
  },
  heroText: {
    marginTop: 28,
    fontSize: 17,
    lineHeight: 1.8,
    color: "#334155",
  },
  heroButtons: { marginTop: 34, display: "flex", gap: 14 },
  primaryButton: {
    background: "#2b124c",
    color: "#fff",
    textDecoration: "none",
    padding: "14px 26px",
    borderRadius: 16,
    fontWeight: 800,
  },
  secondaryButton: {
    background: "#fff",
    color: "#1e293b",
    textDecoration: "none",
    padding: "14px 26px",
    borderRadius: 16,
    fontWeight: 800,
    border: "1px solid #cbd5e1",
  },
  heroCards: {
    marginTop: 46,
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 18,
  },
  heroRight: { display: "flex", justifyContent: "flex-end" },

  card: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
  },
  cardTitle: { margin: 0, fontSize: 16, fontWeight: 850 },
  cardText: { margin: "10px 0 0", fontSize: 14, lineHeight: 1.6, color: "#475569" },

  panelOuter: {
    width: "100%",
    maxWidth: 560,
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 32,
    padding: 18,
    boxShadow: "0 28px 70px rgba(15,23,42,0.13)",
  },
  panelInner: {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 26,
    padding: 20,
  },
  panelTop: { display: "flex", justifyContent: "space-between", marginBottom: 20 },
  panelTitle: { fontSize: 14, fontWeight: 850 },
  panelSubtitle: { fontSize: 12, color: "#64748b", marginTop: 3 },
  liveBadge: {
    background: "#ecfdf5",
    color: "#047857",
    borderRadius: 999,
    padding: "6px 12px",
    fontSize: 12,
    fontWeight: 800,
  },
  audioBox: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 20,
    padding: 18,
  },
  label: {
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "#64748b",
    fontSize: 10,
    fontWeight: 900,
  },
  audioText: {
    marginTop: 14,
    background: "#f8fafc",
    borderRadius: 14,
    padding: 16,
    color: "#475569",
    fontSize: 14,
  },
  resultGrid: { marginTop: 18, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 },
  detectedBox: {
    background: "#fff8df",
    border: "1px solid #efd476",
    borderRadius: 20,
    padding: 18,
  },
  detectedLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: "#7a6100",
    fontSize: 10,
    fontWeight: 900,
  },
  verseRef: { marginTop: 16, fontSize: 19, fontWeight: 900 },
  verseText: { marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "#475569" },
  presenterBox: { background: "#2b124c", borderRadius: 20, padding: 18, color: "#fff" },
  presenterLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: "#f9e79f",
    fontSize: 10,
    fontWeight: 900,
  },
  presenterRef: { marginTop: 16, fontSize: 21, fontWeight: 900, color: "#f9e79f" },
  presenterText: { marginTop: 12, fontSize: 14, lineHeight: 1.6, color: "#fff" },

  sectionGray: {
    background: "#f8fafc",
    borderTop: "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb",
    padding: "90px 40px",
  },
  sectionWhite: { background: "#fff", padding: "90px 40px" },
  sectionInner: { maxWidth: 1400, margin: "0 auto" },
  sectionLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    color: "#2b124c",
    fontSize: 13,
    fontWeight: 900,
  },
  sectionTitle: {
    maxWidth: 850,
    marginTop: 20,
    fontSize: 46,
    lineHeight: 1.15,
    letterSpacing: "-0.035em",
    fontWeight: 900,
  },
  sectionTitleCenter: {
    marginTop: 20,
    fontSize: 46,
    lineHeight: 1.15,
    letterSpacing: "-0.035em",
    fontWeight: 900,
  },
  sectionIntro: { marginTop: 20, fontSize: 18, lineHeight: 1.7, color: "#475569" },
  centerText: { maxWidth: 820, margin: "0 auto", textAlign: "center" },

  fourGrid: { marginTop: 56, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 26 },
  threeGrid: { marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 26 },

  workflowCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
  },
  stepNumber: {
    width: 56,
    height: 56,
    borderRadius: 18,
    background: "#2b124c",
    color: "#f9e79f",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontWeight: 900,
  },
  workflowTitle: { marginTop: 26, fontSize: 22, fontWeight: 900 },
  workflowText: { marginTop: 18, fontSize: 16, lineHeight: 1.7, color: "#475569" },

  benefitCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 28,
    padding: 28,
    boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
  },
  valueBadge: {
    display: "inline-flex",
    background: "#f5ecff",
    color: "#2b124c",
    borderRadius: 999,
    padding: "6px 12px",
    fontSize: 11,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },

  pricingCard: {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 28,
    padding: 34,
    boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
  },
  pricingTitle: { margin: 0, fontSize: 22, fontWeight: 900 },
  price: { marginTop: 22, fontSize: 42, fontWeight: 900 },
  featureList: { marginTop: 28, paddingLeft: 0, listStyle: "none", color: "#475569", lineHeight: 2 },
  salesButton: {
    marginTop: 34,
    display: "inline-flex",
    background: "#2b124c",
    color: "#fff",
    textDecoration: "none",
    padding: "14px 24px",
    borderRadius: 16,
    fontWeight: 800,
  },

  whoSection: { background: "#2b124c", color: "#fff", padding: "96px 40px" },
  whoInner: {
    maxWidth: 1400,
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 0.85fr",
    gap: 70,
    alignItems: "center",
  },
  goldLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.35em",
    color: "#f9e79f",
    fontSize: 13,
    fontWeight: 900,
  },
  whoTitle: { marginTop: 24, fontSize: 46, lineHeight: 1.15, fontWeight: 900 },
  whoText: { marginTop: 28, fontSize: 18, lineHeight: 1.8, color: "#e2e8f0" },
  useCaseList: { display: "grid", gap: 18 },
  useCase: {
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.08)",
    borderRadius: 18,
    padding: "20px 24px",
    fontWeight: 800,
  },

  contactSection: { background: "#fff", padding: "90px 40px" },
  contactCard: {
    maxWidth: 1200,
    margin: "0 auto",
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 36,
    padding: 56,
  },
 
};