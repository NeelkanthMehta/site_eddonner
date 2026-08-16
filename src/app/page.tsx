'use client';

import { useState, useEffect } from "react";
import styles from "./page.module.css";

// Define the strategy type for the interactive backtester
type Strategy = {
  id: string;
  name: string;
  sharpe: string;
  annualReturn: string;
  drawdown: string;
  volatility: string;
  path: string;
  gradientId: string;
  color: string;
  description: string;
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("about");
  const [activeStrategy, setActiveStrategy] = useState<string>("qvm");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [typedIndex, setTypedIndex] = useState(0);

  // Raw log statements for terminal typing effect
  const rawLogs = [
    "INITIALIZING SYSTEM ALPHA-FEED...",
    "LOADING WORLDQUANT MSCI-FE OPTIMIZATIONS...",
    "EXTRACTING MACRO TIMING LAYERS...",
    "RUNNING MULTI-FACTOR EQUITIES ENGINE...",
    "QUALITY-VALUE-MOMENTUM LOADED (SHARPE: 3.09)",
    "READY FOR Systematic strategy deployment."
  ];

  // Typing simulator for Hero Terminal
  useEffect(() => {
    if (typedIndex < rawLogs.length) {
      const timeout = setTimeout(() => {
        setTerminalLogs((prev) => [...prev, rawLogs[typedIndex]]);
        setTypedIndex((prev) => prev + 1);
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [typedIndex]);

  // Strategy profiles
  const strategies: Strategy[] = [
    {
      id: "qvm",
      name: "QVM Equity Multi-Factor",
      sharpe: "3.09",
      annualReturn: "24.3%",
      drawdown: "-11.2%",
      volatility: "7.8%",
      // Rising steadily
      path: "M0,200 L40,195 L80,180 L120,185 L160,170 L200,165 L240,150 L280,155 L320,135 L360,140 L400,120 L440,110 L480,95 L520,100 L560,80 L600,75 L640,55 L680,60 L720,40 L760,25 L800,10",
      gradientId: "gradientCyan",
      color: "var(--accent-cyan)",
      description: "Equity strategy selecting based on Quality, Value, and Momentum factors, integrated with a macro timing overlay via QuantConnect LEAN, backtested over a 10-year period."
    },
    {
      id: "ts",
      name: "Time-Series LSTM Forecasting",
      sharpe: "2.14",
      annualReturn: "18.6%",
      drawdown: "-8.4%",
      volatility: "8.7%",
      // Moderate volatility
      path: "M0,200 L40,190 L80,185 L120,200 L160,195 L200,175 L240,180 L280,165 L320,175 L360,160 L400,155 L440,145 L480,155 L520,140 L560,135 L600,120 L640,130 L680,115 L720,105 L760,110 L800,85",
      gradientId: "gradientBlue",
      color: "var(--accent-blue)",
      description: "Applies ARIMA modeling combined with Long Short-Term Memory (LSTM) neural networks to forecast structural trends and execute volatility arbitrage across fixed income portfolios."
    },
    {
      id: "agent",
      name: "Multi-Agent Orderbook AI",
      sharpe: "2.86",
      annualReturn: "31.2%",
      drawdown: "-14.5%",
      volatility: "10.9%",
      // Highly jagged high return
      path: "M0,200 L40,210 L80,190 L120,180 L160,150 L200,160 L240,140 L280,150 L320,110 L360,130 L400,100 L440,115 L480,80 L520,95 L560,60 L600,75 L640,40 L680,55 L720,20 L760,35 L800,5",
      gradientId: "gradientGreen",
      color: "var(--accent-green)",
      description: "Utilizes decentralized multi-agent reinforcement learning frameworks to simulate market order book microstructures and harvest high-frequency bid-ask spread margins."
    }
  ];

  const currentStrategy = strategies.find((s) => s.id === activeStrategy) || strategies[0];

  return (
    <div className={styles.container}>
      {/* Navigation Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoDot}></span>
          <span>NM_SYSTEMS_v1.0</span>
        </div>
        <nav className={styles.nav}>
          <a
            href="#about"
            className={`${styles.navLink} ${activeTab === "about" ? styles.navLinkActive : ""}`}
            onClick={() => setActiveTab("about")}
          >
            ABOUT
          </a>
          <a
            href="#simulator"
            className={`${styles.navLink} ${activeTab === "simulator" ? styles.navLinkActive : ""}`}
            onClick={() => setActiveTab("simulator")}
          >
            SIMULATOR
          </a>
          <a
            href="#journey"
            className={`${styles.navLink} ${activeTab === "journey" ? styles.navLinkActive : ""}`}
            onClick={() => setActiveTab("journey")}
          >
            JOURNEY
          </a>
          <a
            href="#skills"
            className={`${styles.navLink} ${activeTab === "skills" ? styles.navLinkActive : ""}`}
            onClick={() => setActiveTab("skills")}
          >
            CORE_STACK
          </a>
          <a
            href="#portfolio"
            className={`${styles.navLink} ${activeTab === "portfolio" ? styles.navLinkActive : ""}`}
            onClick={() => setActiveTab("portfolio")}
          >
            PORTFOLIO
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.tagline}>
            <span className={styles.logoDot}></span> ALPHA SEEKER / MULTI-AGENT ARCHITECT
          </div>
          <h1 className={styles.title}>
            Neelkanth Mehta
          </h1>
          <p className={styles.subtitle}>
            Quantitative Researcher & Algorithmic Trader specializing in systematic strategy development, 
            end-to-end ML pipelines, and multi-agent AI frameworks to extract signals from market noise.
          </p>
          <div className={styles.heroActions}>
            <a href="#simulator" className={styles.btnPrimary + " " + styles.btn}>
              Test Backtest Alpha
            </a>
            <a href="mailto:neilstrong2003@yahoo.com" className={styles.btnSecondary + " " + styles.btn}>
              Connect
            </a>
          </div>
        </div>

        {/* Hero Terminal Card */}
        <div className={styles.terminalCard}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.dot + " " + styles.dotRed}></span>
              <span className={styles.dot + " " + styles.dotYellow}></span>
              <span className={styles.dot + " " + styles.dotGreen}></span>
            </div>
            <div className={styles.terminalTitle}>NEELKANTH_MEHTA_ROOT://bash</div>
          </div>
          <div className={styles.terminalContent}>
            {terminalLogs.map((log, index) => (
              <div key={index} className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span>{log}</span>
              </div>
            ))}
            {typedIndex < rawLogs.length && (
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.blink}>_</span>
              </div>
            )}
            {typedIndex === rawLogs.length && (
              <div className={styles.terminalLine}>
                <span className={styles.terminalPrompt}>$</span>
                <span className={styles.terminalSuccess}>INITIALIZATION SUCCESSFUL. DEPLOYMENT LIVE.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <div className={styles.metricsBar}>
        <div className={styles.metricCard + " glass-panel"}>
          <div className={styles.metricTitle}>Years in Markets</div>
          <div className={styles.metricVal + " " + styles.metricValCyan}>7+</div>
          <div className={styles.metricSubtext}>Bridging data engineering & Alpha</div>
        </div>
        <div className={styles.metricCard + " glass-panel"}>
          <div className={styles.metricTitle}>Target Sharpe Ratio</div>
          <div className={styles.metricVal + " " + styles.metricValGreen}>3.09</div>
          <div className={styles.metricSubtext}>10-yr backtested equity strategy</div>
        </div>
        <div className={styles.metricCard + " glass-panel"}>
          <div className={styles.metricTitle}>Assets Under Management</div>
          <div className={styles.metricVal}>~$3Bn</div>
          <div className={styles.metricSubtext}>Supported debt facilities at Amherst</div>
        </div>
        <div className={styles.metricCard + " glass-panel"}>
          <div className={styles.metricTitle}>Credentials</div>
          <div className={styles.metricVal}>MScFE</div>
          <div className={styles.metricSubtext}>WorldQuant University Graduate</div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>About Me</h2>
            <div className={styles.sectionTitleDesc}>ROOT_SYSTEM / CORE_BIOGRAPHY</div>
          </div>
        </div>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <p className={styles.aboutHighlight}>
              I am a quantitatively trained market professional and WorldQuant MScFE graduate transitioning into algorithmic trading and quantitative research.
            </p>
            <p>
              With over 7 years in financial markets, I specialize in bridging the gap between heavy, large-scale data engineering and alpha-generating trading strategies. My work is focused on systematic strategy development, using Python, end-to-end machine learning pipelines, and multi-agent AI development frameworks to discover actionable insights and trends.
            </p>
            <p>
              Recently, I engineered a multi-factor equity strategy (Quality, Value, Momentum) featuring a macro timing overlay via QuantConnect LEAN, achieving a Sharpe ratio of 3.09 over a 10-year backtest. I am actively seeking an entry-level Quant Trader or Researcher role where I can deploy rigorous statistical analysis and scalable code to drive systematic trading performance.
            </p>
          </div>
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.terminalDots}>
                <span className={styles.dot + " " + styles.dotRed}></span>
                <span className={styles.dot + " " + styles.dotYellow}></span>
                <span className={styles.dot + " " + styles.dotGreen}></span>
              </div>
              <div className={styles.terminalTitle}>MISSION_STATEMENT.json</div>
            </div>
            <div className={styles.terminalContent}>
              <pre style={{ whiteSpace: "pre-wrap", fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
{`{
  "focus": "Systematic Strategy Development",
  "methodology": "Rigorous Statistical Analysis",
  "toolkit": ["Python", "ML Pipelines", "Multi-Agent AI"],
  "domain_experience": {
    "structured_real_estate": "Single-Family Residential Portfolio Analytics",
    "macro_analysis": "Fixed Income & Investment Underwriting"
  },
  "objective": "Join an elite trading/research team to deploy alpha models."
}`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Backtest Simulator */}
      <section id="simulator" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Backtest Simulator</h2>
            <div className={styles.sectionTitleDesc}>SYSTEM_ALPHA / MODEL_SIMULATOR</div>
          </div>
        </div>
        
        <div className={styles.backtestWrapper}>
          <div className={styles.backtestControls}>
            <div className={styles.controlGroup + " glass-panel"}>
              <div className={styles.controlTitle}>Select Strategy Model</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {strategies.map((strat) => (
                  <div
                    key={strat.id}
                    className={`${styles.strategyOption} ${activeStrategy === strat.id ? styles.strategyOptionActive : ""}`}
                    onClick={() => setActiveStrategy(strat.id)}
                  >
                    <span>{strat.name}</span>
                    <span style={{ fontSize: "0.75rem", opacity: 0.7 }}>SR: {strat.sharpe}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.controlGroup + " glass-panel"}>
              <div className={styles.controlTitle}>Strategy Details</div>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)", lineHeight: 1.5 }}>
                {currentStrategy.description}
              </p>
            </div>
          </div>

          <div className={styles.terminalCard + " " + styles.backtestScreen}>
            <div className={styles.screenTitleBar}>
              <div className={styles.screenTitle}>MODEL_OUTPUT: //backtest_chart_view</div>
              <div className={styles.terminalSuccess} style={{ fontSize: "0.8rem", display: "flex", alignItems: "center", gap: "6px" }}>
                <span className={styles.logoDot}></span> ACTIVE FEED
              </div>
            </div>
            <div className={styles.chartContainer}>
              <div className={styles.chartSvgWrapper}>
                <svg width="100%" height="100%" viewBox="0 0 800 220" preserveAspectRatio="none" style={{ background: "rgba(0, 0, 0, 0.1)" }}>
                  <defs>
                    <linearGradient id="gradientCyan" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="var(--accent-cyan)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradientBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-blue)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="var(--accent-blue)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gradientGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-green)" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="var(--accent-green)" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Grid Lines */}
                  <g className={styles.chartGridLines}>
                    <line x1="0" y1="55" x2="800" y2="55" />
                    <line x1="0" y1="110" x2="800" y2="110" />
                    <line x1="0" y1="165" x2="800" y2="165" />
                    <line x1="160" y1="0" x2="160" y2="220" />
                    <line x1="320" y1="0" x2="320" y2="220" />
                    <line x1="480" y1="0" x2="480" y2="220" />
                    <line x1="640" y1="0" x2="640" y2="220" />
                  </g>

                  {/* Filled Gradient Area */}
                  <path
                    d={`${currentStrategy.path} L800,220 L0,220 Z`}
                    fill={`url(#${currentStrategy.gradientId})`}
                    style={{ transition: "all 0.5s ease" }}
                  />

                  {/* Line Path */}
                  <path
                    d={currentStrategy.path}
                    fill="none"
                    stroke={currentStrategy.color}
                    strokeWidth="3"
                    filter="url(#glow)"
                    style={{ transition: "all 0.5s ease" }}
                  />
                </svg>
              </div>
            </div>
            
            <div className={styles.backtestStats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Sharpe Ratio</span>
                <span className={styles.statValue} style={{ color: currentStrategy.color }}>{currentStrategy.sharpe}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Annualized Return</span>
                <span className={styles.statValue}>{currentStrategy.annualReturn}</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Max Drawdown</span>
                <span className={styles.statValue} style={{ color: "var(--accent-rose)" }}>{currentStrategy.drawdown}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Journey Timeline */}
      <section id="journey" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Career Journey</h2>
            <div className={styles.sectionTitleDesc}>HISTORICAL_LEDGER / TIMELINE</div>
          </div>
        </div>

        <div className={styles.timeline}>
          {/* Amherst Senior Analyst */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot + " " + styles.timelineDotActive}></div>
            <div className={styles.timelineContent + " glass-panel"}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.roleTitle}>Senior Financial Analyst – ALM</h3>
                  <div className={styles.companyInfo}>Amherst Group | Merchant Banking</div>
                </div>
                <div className={styles.timelineDate}>Dec 2023 - Feb 2026</div>
              </div>
              <ul className={styles.timelineDescList}>
                <li>Supported the merchant banking division’s Asset & Liability Management (ALM) function, focusing on optimizing debt facilities performance and financial transparency.</li>
                <li>Oversaw senior debt facility management for ~11,000 Single-Family Residential (SFR) units, managing Assets Under Management (AUM) of ~$3Bn.</li>
                <li>Developed reports, dynamic dashboards, and financial periodicals to meet rigorous reporting obligations and assist in data-driven strategic decisions.</li>
                <li>Leveraged and expanded deep knowledge in Power Query, building automated reporting flows across the broader Power Platform ecosystem.</li>
              </ul>
            </div>
          </div>

          {/* Amherst Analyst */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent + " glass-panel"}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.roleTitle}>Financial Analyst – Portfolio Accounting</h3>
                  <div className={styles.companyInfo}>Amherst Group | Concentrix Daksh Payroll</div>
                </div>
                <div className={styles.timelineDate}>Jun 2021 - Nov 2023</div>
              </div>
              <ul className={styles.timelineDescList}>
                <li>Delivered portfolio accounting, budgeting, and detailed analytics for large-scale Single-Family Residential (SFR) real estate investments.</li>
                <li>Supported cross-border investment teams by delivering valuation analyses and scenario-based financial modeling to optimize risk-adjusted returns and capital allocation.</li>
                <li>Built dynamic dashboards utilizing Tableau and Microsoft Excel to automate and streamline complex reporting workflows and visualize key performance metrics.</li>
              </ul>
            </div>
          </div>

          {/* Barclays Encore Fellow */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent + " glass-panel"}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.roleTitle}>Macro Business Analytics Specialist (Encore Fellow)</h3>
                  <div className={styles.companyInfo}>Barclays | Markets Division</div>
                </div>
                <div className={styles.timelineDate}>Feb 2020 - Jun 2020</div>
              </div>
              <ul className={styles.timelineDescList}>
                <li>Selected for the Barclays flagship Encore diversity and citizenship program helping professionals transition back into the market.</li>
                <li>Joined the Macro Business Analytics Team, developing and automating mission-critical business reports and dashboards for Barclays Markets vertical leadership.</li>
                <li>Engineered custom Python web scraping scripts using Selenium and automated complex Excel financial models, resulting in significant resource and time savings.</li>
              </ul>
            </div>
          </div>

          {/* J.P. Morgan */}
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent + " glass-panel"}>
              <div className={styles.timelineHeader}>
                <div>
                  <h3 className={styles.roleTitle}>Senior Portfolio Analyst</h3>
                  <div className={styles.companyInfo}>J.P. Morgan | Asset Management</div>
                </div>
                <div className={styles.timelineDate}>May 2016 - Aug 2018</div>
              </div>
              <ul className={styles.timelineDescList}>
                <li>Served under the Fixed Income LOB of JP Morgan's Asset Management vertical, analyzing and underwriting commercial real estate mortgage portfolios.</li>
                <li>Analyzed cash flow, debt service coverage, and property valuations to support underwriting decisions for commercial mortgages.</li>
                <li>Assisted the portfolio management team in performance reporting activities and client presentation preparations.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix & Education */}
      <section id="skills" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Skills Matrix</h2>
            <div className={styles.sectionTitleDesc}>CORE_STACK / CAPABILITIES</div>
          </div>
        </div>

        <div className={styles.skillsContainer}>
          {/* Quantitative Modeling */}
          <div className={styles.skillsGroup + " glass-panel"}>
            <h3 className={styles.skillsGroupTitle}>Quantitative Modeling</h3>
            <div className={styles.skillsList}>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Time-Series Analysis</span>
                  <span className={styles.skillValue}>90%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Factor Modeling (QVM)</span>
                  <span className={styles.skillValue}>85%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Risk Modeling (VaR / CVaR)</span>
                  <span className={styles.skillValue}>80%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Walk-Forward Validation</span>
                  <span className={styles.skillValue}>85%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Programming & AI */}
          <div className={styles.skillsGroup + " glass-panel"}>
            <h3 className={styles.skillsGroupTitle}>Programming & AI</h3>
            <div className={styles.skillsList}>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Python (Pandas, Scikit-Learn)</span>
                  <span className={styles.skillValue}>95%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "95%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>QuantConnect LEAN Engine</span>
                  <span className={styles.skillValue}>90%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Multi-Agent AI Frameworks</span>
                  <span className={styles.skillValue}>80%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>ML Pipelines (XGBoost, LSTM)</span>
                  <span className={styles.skillValue}>85%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Engineering & Tools */}
          <div className={styles.skillsGroup + " glass-panel"}>
            <h3 className={styles.skillsGroupTitle}>Data Engineering & BI</h3>
            <div className={styles.skillsList}>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Databases (SQL, PostgreSQL)</span>
                  <span className={styles.skillValue}>90%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "90%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Cloud Data (Snowflake, ETL)</span>
                  <span className={styles.skillValue}>80%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Power BI (Power Query)</span>
                  <span className={styles.skillValue}>85%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className={styles.skillItem}>
                <div className={styles.skillLabelRow}>
                  <span className={styles.skillName}>Selenium Web Scraping</span>
                  <span className={styles.skillValue}>90%</span>
                </div>
                <div className={styles.skillTrack}>
                  <div className={styles.skillProgress} style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Certs */}
        <div className={styles.eduCertGrid} style={{ marginTop: "40px" }}>
          <div className={styles.eduCard + " glass-panel"}>
            <h3 className={styles.skillsGroupTitle}>Education</h3>
            <div className={styles.eduItem}>
              <div className={styles.eduDegree}>Master of Science in Financial Engineering (MScFE)</div>
              <div className={styles.eduSchool}>WorldQuant University</div>
              <div className={styles.eduYear}>2017 - 2019</div>
              <div className={styles.eduDetails}>
                Focused on Quantitative Finance, systematic alpha design, stochastic processes, and mathematical modeling.
              </div>
            </div>
            <div className={styles.eduItem}>
              <div className={styles.eduDegree}>B.M.S., Management</div>
              <div className={styles.eduSchool}>University of Mumbai</div>
              <div className={styles.eduYear}>2004 - 2007</div>
            </div>
          </div>

          <div className={styles.certCard + " glass-panel"}>
            <h3 className={styles.skillsGroupTitle}>Certifications & Langs</h3>
            <div className={styles.certItem}>
              <div className={styles.eduDegree}>Certificate of Completion: Claude 101</div>
              <div className={styles.eduSchool}>Anthropic Learning</div>
            </div>
            <div className={styles.certItem}>
              <div className={styles.eduDegree}>Microsoft Power BI certification</div>
              <div className={styles.eduSchool}>In Progress (Power Platform Ecosystem)</div>
            </div>
            <div className={styles.certItem} style={{ borderLeft: "none", paddingLeft: 0, marginTop: "10px" }}>
              <div className={styles.eduDegree} style={{ fontSize: "0.95rem" }}>Languages</div>
              <div className={styles.eduDetails} style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--accent-cyan)" }}>
                English (Fluent) &bull; Hindi (Native)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={styles.section}>
        <div className={styles.sectionHeader}>
          <div>
            <h2 className={styles.sectionTitle}>Portfolio & Research</h2>
            <div className={styles.sectionTitleDesc}>FUTURE_RELEASES / COMING_SOON</div>
          </div>
        </div>

        <div className={styles.portfolioGrid}>
          <div className={styles.portfolioCard + " glass-panel"}>
            <div>
              <div className={styles.portfolioStatus + " " + styles.statusCompleted}>Deployed</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 6px 0" }}>QVM Equity Strategy</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)" }}>
                A multi-factor systematic trading framework incorporating Quality, Value, and Momentum criteria backtested in LEAN.
              </p>
            </div>
            <div style={{ marginTop: "12px" }}>
              <a href="https://github.com/in/neelkanth-mehta" target="_blank" rel="noopener noreferrer" className={styles.btnMono + " " + styles.btn}>
                View Repo
              </a>
            </div>
          </div>

          <div className={styles.portfolioCard + " glass-panel"}>
            <div>
              <div className={styles.portfolioStatus + " " + styles.statusUpcoming}>In Pipeline</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 6px 0" }}>Multi-Agent Market Sim</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)" }}>
                Simulating order book dynamics and liquidity provisions using cooperative AI agents.
              </p>
            </div>
            <div style={{ marginTop: "12px" }}>
              <span className={styles.textMono} style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>[STAGE: ARCHITECTURE]</span>
            </div>
          </div>

          <div className={styles.portfolioCard + " glass-panel"}>
            <div>
              <div className={styles.portfolioStatus + " " + styles.statusUpcoming}>In Pipeline</div>
              <h3 style={{ fontSize: "1.2rem", margin: "12px 0 6px 0" }}>LSTM Resampling ETL</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--fg-secondary)" }}>
                Real-time financial data resampling pipelines using Snowflake and PostgreSQL stream engines.
              </p>
            </div>
            <div style={{ marginTop: "12px" }}>
              <span className={styles.textMono} style={{ fontSize: "0.75rem", color: "var(--fg-muted)" }}>[STAGE: DATA INGESTION]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer & Contact */}
      <footer className={styles.footer}>
        <div className={styles.footerTop}>
          <div className={styles.contactInfo}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 800 }}>Let's Build Alpha Together.</h3>
            <p style={{ maxWidth: "450px", fontSize: "0.95rem" }}>
              Actively seeking opportunities in systematic trading, quantitative research, and financial data engineering.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <a href="mailto:neilstrong2003@yahoo.com" className={styles.contactLink}>
              <span>EMAIL:</span> neilstrong2003@yahoo.com
            </a>
            <a href="tel:+919324256300" className={styles.contactLink}>
              <span>PHONE:</span> +91 93242 56300
            </a>
            <a href="https://www.linkedin.com/in/neelkanth-mehta" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
              <span>LINKEDIN:</span> linkedin.com/in/neelkanth-mehta
            </a>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            &copy; {new Date().getFullYear()} Neelkanth Mehta. All rights reserved. Managed under NM_SYSTEMS.
          </div>
          <div className={styles.footerTech}>
            <span>ENGINE: NEXT.JS</span>
            <span className={styles.logoDot}></span>
            <span>STACK: TYPESCRIPT &amp; VANILLA CSS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
