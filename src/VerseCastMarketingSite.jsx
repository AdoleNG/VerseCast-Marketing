import verseCastLogo from "./VerseCastLogo.png";

export default function VerseCastMarketingSite() {
  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <div style={styles.brand}>
            <img src={verseCastLogo} alt="VerseCast Logo" style={styles.logo} />
            <div>
              <div style={styles.brandTitle}>VerseCast</div>
              <div style={styles.brandSubtitle}>
                AI-driven Bible display for churches
              </div>
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
              <div style={styles.badge}>
                Built for churches, conferences, and ministry teams
              </div>

              <h1 style={styles.heroTitle}>
                Help your congregation follow the sermon with Bible on screen in
                real time.
              </h1>

              <p style={styles.heroText}>
                VerseCast is an AI-powered Bible display platform designed to
                help churches project Scripture seamlessly during live sermons.
                As the minister speaks, VerseCast automatically recognizes
                explicit Bible references and displays them on screen without
                any manual input. When a speaker paraphrases a passage,
                VerseCast intelligently surfaces the matching Bible passage on
                the Control Panel, allowing the media team to quickly confirm
                and project it. This keeps the minister’s flow uninterrupted and
                ensures the congregation always sees the right verse at the
                right moment.
              </p>

              <div style={styles.heroButtons}>
                <a href="#contact" style={styles.primaryButton}>Book a Demo</a>
                <a href="#benefits" style={styles.secondaryButton}>
                  See the Benefits
                </a>
              </div>

              <div style={styles.heroCards}>
                <Card
                  title="AI-driven detection"
                  text="VerseCast listens during live preaching and detects Bible passages mentioned naturally by the minister."
                />
                <Card
                  title="Less mental strain"
                  text="Reduces cognitive load for ministers and media teams during live services."
                />
                <Card
                  title="Understands paraphrases"
                  text="Even when the minister paraphrases a Bible passage, VerseCast can surface the exact Bible text for the media team to review."
                />
              </div>
            </div>

            <div style={styles.heroRight}>
              <div style={styles.panelOuter}>
                <div style={styles.panelInner}>
                  <div style={styles.panelTop}>
                    <div>
                      <div style={styles.panelTitle}>VerseCast Control Panel</div>
                      <div style={styles.panelSubtitle}>
                        Session: Sunday Morning Service
                      </div>
                    </div>
                    <div style={styles.liveBadge}>Live</div>
                  </div>

                  <div style={styles.audioBox}>
                    <div style={styles.label}>Incoming sermon audio</div>
                    <div style={styles.audioText}>
                      “Turn with me to Romans chapter 3 verse 23...”
                    </div>
                  </div>

                  <div style={styles.resultGrid}>
                    <div style={styles.detectedBox}>
                      <div style={styles.detectedLabel}>
                        Detected Bible Passage
                      </div>
                      <div style={styles.verseRef}>Romans 3:23</div>
                      <p style={styles.verseText}>
                        For all have sinned, and come short of the glory of God;
                      </p>
                    </div>

                    <div style={styles.presenterBox}>
                      <div style={styles.presenterLabel}>Presenter View</div>
                      <div style={styles.presenterRef}>Romans 3:23</div>
                      <p style={styles.presenterText}>
                        For all have sinned, and come short of the glory of God;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" style={styles.sectionGray}>
          <div style={styles.sectionInner}>
            <div style={styles.sectionLabel}>How it works</div>
            <h2 style={styles.sectionTitle}>
              A simple service workflow that supports preaching, teaching, and
              worship.
            </h2>
          </div>
        </section>
      </main>
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

const styles = {
  page: {
    minHeight: "100vh",
    background: "#ffffff",
    color: "#050816",
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
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

  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12,
  },

  logo: {
    width: 42,
    height: 42,
    borderRadius: 10,
    objectFit: "cover",
    flexShrink: 0,
  },

  brandTitle: {
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 1.1,
  },

  brandSubtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 2,
  },

  nav: {
    display: "flex",
    alignItems: "center",
    gap: 34,
  },

  navLink: {
    fontSize: 14,
    color: "#475569",
    textDecoration: "none",
    fontWeight: 500,
  },

  demoButton: {
    background: "#2b124c",
    color: "#ffffff",
    textDecoration: "none",
    padding: "11px 20px",
    borderRadius: 12,
    fontSize: 14,
    fontWeight: 700,
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

  heroLeft: {
    maxWidth: 650,
  },

  badge: {
    display: "inline-flex",
    background: "#fff5c7",
    border: "1px solid #f0d77a",
    color: "#6f5800",
    borderRadius: 999,
    padding: "6px 14px",
    fontSize: 13,
    fontWeight: 500,
  },

  heroTitle: {
    margin: "26px 0 0",
    fontSize: 58,
    lineHeight: 1.07,
    letterSpacing: "-0.045em",
    fontWeight: 900,
    color: "#050816",
  },

  heroText: {
    marginTop: 28,
    fontSize: 17,
    lineHeight: 1.8,
    color: "#334155",
  },

  heroButtons: {
    marginTop: 34,
    display: "flex",
    gap: 14,
  },

  primaryButton: {
    background: "#2b124c",
    color: "#ffffff",
    textDecoration: "none",
    padding: "14px 26px",
    borderRadius: 16,
    fontWeight: 800,
  },

  secondaryButton: {
    background: "#ffffff",
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

  card: {
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 18,
    padding: 18,
    boxShadow: "0 8px 20px rgba(15,23,42,0.04)",
  },

  cardTitle: {
    margin: 0,
    fontSize: 15,
    lineHeight: 1.25,
    fontWeight: 850,
  },

  cardText: {
    margin: "9px 0 0",
    fontSize: 13,
    lineHeight: 1.55,
    color: "#475569",
  },

  heroRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  panelOuter: {
    width: "100%",
    maxWidth: 560,
    background: "#ffffff",
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

  panelTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  panelTitle: {
    fontSize: 14,
    fontWeight: 850,
  },

  panelSubtitle: {
    fontSize: 12,
    color: "#64748b",
    marginTop: 3,
  },

  liveBadge: {
    background: "#ecfdf5",
    color: "#047857",
    borderRadius: 999,
    padding: "6px 12px",
    fontSize: 12,
    fontWeight: 800,
  },

  audioBox: {
    background: "#ffffff",
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
    lineHeight: 1.6,
  },

  resultGrid: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },

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

  verseRef: {
    marginTop: 16,
    fontSize: 19,
    fontWeight: 900,
  },

  verseText: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#475569",
  },

  presenterBox: {
    background: "#2b124c",
    borderRadius: 20,
    padding: 18,
    color: "#ffffff",
  },

  presenterLabel: {
    textTransform: "uppercase",
    letterSpacing: "0.24em",
    color: "#f9e79f",
    fontSize: 10,
    fontWeight: 900,
  },

  presenterRef: {
    marginTop: 16,
    fontSize: 21,
    fontWeight: 900,
    color: "#f9e79f",
  },

  presenterText: {
    marginTop: 12,
    fontSize: 14,
    lineHeight: 1.6,
    color: "#ffffff",
  },

  sectionGray: {
    background: "#f8fafc",
    borderTop: "1px solid #e5e7eb",
    borderBottom: "1px solid #e5e7eb",
    padding: "90px 40px",
  },

  sectionInner: {
    maxWidth: 1400,
    margin: "0 auto",
  },

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
};