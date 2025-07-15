import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useEffect } from "react";

function LandingPage() {
  const onClickKenyans = () =>
    window.open(
      "https://www.kenyans.co.ke/news/102889-nairobi-emerges-second-among-african-cities-bad-traffic#:~:text=Nairobi%20was%20ranked%20at%20position,Nigeria's%20was%20pegged%20at%20354.5.",
      "_blank"
    );

  const onClickNumbeo = () =>
    window.open(
      "https://www.numbeo.com/traffic/rankings_current.jsp",
      "_blank"
    );

  const onClickTomtom = () =>
    window.open("https://www.tomtom.com/traffic-index/ranking/", "_blank");

  useEffect(() => {
    document.title = "MoveSmart KE";
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">MoveSmart KE</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="signup-btn">Sign Up</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>
      <section className="problem-section">
        <h2 id="home">Smarter Cities, Better Living.</h2>
        <div className="problem-sections problem-section-1">
          <div className="problem-card card">
            <h3>Kshs 50 Million Lost Daily</h3>
            <p>
              According to NTSA, traffic congestion costs Nairobi about Kshs 50
              million in daily unproductivity, amounting to roughly Kshs 21
              billion each year.
            </p>
          </div>
          <div className="problem-text" onClick={onClickKenyans}>
            <h1>2nd Most Traffic in Africa</h1>
            <h2>
              Nairobi ranked second-worst in traffic among African cities in
              2024
            </h2>
          </div>
        </div>
        <div className="problem-sections problem-section-2">
          <div className="problem-text" onClick={onClickNumbeo}>
            <h1>253.6</h1>
            <h2>Traffic Index, 13th Worst Globally</h2>
          </div>
          <div className="problem-card card">
            <h3>Environmental & Health Risks</h3>
            <p>
              Traffic congestion leads to increased fuel use and CO₂ emissions,
              worsening climate health and contributing to respiratory illnesses
            </p>
          </div>
        </div>
        <div className="problem-sections problem-section-3">
          <div className="problem-card card">
            <h3>Unplanned Public Transport</h3>
            <p>
              Urban transport systems evolved without planning, as informal
              networks filled gaps left by unaffordable or unavailable formal
              systems.
            </p>
          </div>
          <div className="problem-text" onClick={onClickNumbeo}>
            <h1>281.3</h1>
            <h2>Inefficiency Index, Long Commutes and Delays</h2>
          </div>
        </div>
        <div className="problem-sections problem-section-4">
          <div className="problem-text" onClick={onClickTomtom}>
            <h1>26 min</h1>
            <h2>Average Travel Time Per 10km</h2>
          </div>
          <div className="problem-card card">
            <h3>Data Deficit</h3>
            <p>
              Urban planners lack reliable, granular data — limiting their
              ability to design efficient, sustainable transportation systems
            </p>
          </div>
        </div>
      </section>
      <section id="about" className="about-section">
        <h1>What MoveSmart Aims To Do</h1>
        <div className="about-section-div">
          <div className="about-card card">
            <h3>
              Use AI-powered solutions designed to optimize transport systems in
              Kenya
            </h3>
            <p>
              Our AI-powered platform integrates real-time traffic, commuter,
              and route data to improve urban mobility. By leveraging predictive
              analytics, it intelligently optimizes route planning to help
              reduce congestion across Kenya’s transport systems. Commuters
              benefit from a user-friendly app that offers live, data-driven
              route suggestions for faster and more efficient travel.
            </p>
          </div>
        </div>
      </section>
      <section id="services" className="services-section">
        <h1>What does MoveSmart have to offer?</h1>

        <div className="services-cards-div">
          <div className="services-card card">
            <h2>Urban Planner Dashboard</h2>
            <h3>
              <p className="services-card-heading">
                Interface tailored for city authorities and transport planners
              </p>
              <CheckCircle className="checkmark" />
              <p>
                Real-time visualization of congestion hotspots and incident
                trends.
              </p>
              <CheckCircle className="checkmark" />
              <p>
                Decision-support tools for infrastructure planning and traffic
                policy assessment.
              </p>
              <CheckCircle className="checkmark" />
              <p>
                Access to long-term analytics and performance indicators based
                on historical data.
              </p>
            </h3>
          </div>
          <div className="services-card card">
            <h2>Commuter Web App</h2>
            <h3>
              <p className="services-card-heading">
                User-facing interface designed for daily public transport users
              </p>
              <CheckCircle className="checkmark" />
              <p>
                Receive real-time route suggestions based on current traffic
                conditions.
              </p>
              <CheckCircle className="checkmark" />
              <p>View live traffic updates and congestion alerts</p>
              <CheckCircle className="checkmark" />
              <p>Submission of crowdsourced incident reports </p>
            </h3>
          </div>
          <div className="services-card card">
            <h2>AI-powered predictive analytics</h2>
            <h3>
              <p className="services-card-heading">
                At the core of the platform's intelligence, this engine performs
                advanced analytics and predictive modeling
              </p>
              <CheckCircle className="checkmark" />
              <p>
                Congestion forecasting using historical and real-time data.
              </p>
              <CheckCircle className="checkmark" />
              <p>Route optimization based on predictive traffic flow.</p>
              <CheckCircle className="checkmark" />
              <p>Incident classification and impact prediction.</p>
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
