import React, { useState } from "react";

// Inline Styles (like Tailwind but inline)
const styles = {
  container: { maxWidth: "1200px", margin: "0 auto", padding: "0 20px" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0" },
  navLink: { color: "#3B82F6", textDecoration: "none", marginLeft: "1.5rem", fontWeight: "bold" },
  hero: { textAlign: "center", padding: "4rem 0", backgroundImage: "url(https://picsum.photos/1920/600 )", backgroundSize: "cover", backgroundPosition: "center", color: "white" },
  ctaButton: { backgroundColor: "#3B82F6", color: "white", padding: "0.75rem 1.5rem", borderRadius: "0.375rem", fontWeight: "bold", textDecoration: "none", display: "inline-block", marginTop: "1rem" },
  contactButtons: { display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" },
  section: { padding: "2rem 0" },
  card: { backgroundColor: "white", borderRadius: "0.5rem", boxShadow: "0 4px 6px rgba(0,0,0,0.1)", padding: "1.5rem", marginBottom: "1.5rem" },
  footer: { textAlign: "center", padding: "2rem 0", borderTop: "1px solid #E5E7EB", marginTop: "2rem" },
  socialIcons: { display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1rem" }
};

// Embedded SVG Logo
const Logo = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="45" stroke="#3B82F6" strokeWidth="4" />
    <path d="M30 50L45 65L70 35" stroke="#3B82F6" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function App() {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    console.log(contactForm);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#F9FAFB" }}>
      {/* Header */}
      <header style={styles.header}>
        <Logo />
        <nav>
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#services" style={styles.navLink}>Services</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>✈️ Personalized Support for Your Academic, Travel & Visa Goals</h1>
        <p style={{ fontSize: "1.25rem", marginTop: "1rem" }}>At Kobis Travels & Tours, we help you achieve your dreams of studying, traveling, and living abroad.</p>
        <a href="#consultation" style={styles.ctaButton}>Book a Consultation</a>
        <div style={styles.contactButtons}>
          <a href="https://wa.me/+2348143574770 " target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: "#10B981" }}>WhatsApp</a>
          <a href="tel:+2348143574770" style={{ ...styles.ctaButton, backgroundColor: "#EF4444" }}>Call Us</a>
          <a href="mailto:kobistravelsandtours@gmail.com" style={{ ...styles.ctaButton, backgroundColor: "#F59E0B" }}>Email</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>About Us</h2>
          <p style={{ marginBottom: "1.5rem" }}>Kobis Travels & Tours is committed to helping individuals navigate the complex world of international travel, study, and visa applications with confidence and clarity.</p>
          <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>Why Choose Us?</h3>
          <ul style={{ listStyle: "disc inside", paddingLeft: "1rem", marginBottom: "1.5rem" }}>
            <li>Expert guidance from certified consultants</li>
            <li>Tailored support for each client’s unique needs</li>
            <li>Transparent pricing and honest advice</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Our Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <div style={styles.card}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>One-on-One Mentorship</h3>
              <p>Get personalized guidance tailored to your academic and career goals.</p>
              <button style={styles.ctaButton} onClick={() => alert("Booking consultation...")}>Book Now</button>
            </div>
            <div style={styles.card}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Study Pathway Advice</h3>
              <p>We help you choose the right country, school, and course based on your goals.</p>
              <button style={styles.ctaButton} onClick={() => alert("Booking consultation...")}>Book Now</button>
            </div>
            <div style={styles.card}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "0.5rem" }}>Visa Guidance</h3>
              <p>Step-by-step assistance with visa requirements, documentation, and interviews.</p>
              <button style={styles.ctaButton} onClick={() => alert("Booking consultation...")}>Book Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Book Consultation */}
      <section id="consultation" style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Book a Consultation</h2>
          <p style={{ marginBottom: "1.5rem" }}>Select a time slot and session type to connect with our experts.</p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            <input type="text" name="name" placeholder="Your Name" value={contactForm.name} onChange={handleChange} required style={{ padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #D1D5DB" }} />
            <input type="email" name="email" placeholder="Your Email" value={contactForm.email} onChange={handleChange} required style={{ padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #D1D5DB" }} />
            <textarea name="message" placeholder="Your Message" value={contactForm.message} onChange={handleChange} rows="4" required style={{ padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #D1D5DB" }}></textarea>
            <button type="submit" style={styles.ctaButton}>Send Message</button>
          </form>
          <p style={{ textAlign: "center", marginTop: "1rem" }}>Pricing: ₦10,000/hr</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <div style={styles.container}>
          <h2 style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}>Contact Us</h2>
          <p style={{ marginBottom: "1rem" }}>📞 Phone: +234 814 357 4770</p>
          <p style={{ marginBottom: "1rem" }}>📧 Email: kobistravelsandtours@gmail.com</p>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com/kobistravelsandtours " target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/kobistravelsandtours " target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://tiktok.com/ @kobistravelsandtours" target="_blank" rel="noopener noreferrer">TikTok</a>
          </div>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.577858998899!2d-73.98655238427202!3d40.748817479328535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2582b7ddfac5b%3A0x3fa563ba60bff78f!2sCentral%20Park%2C%20New%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sus!4v1684147200000!5m2!1sen!2sus" 
            width="100%" 
            height="300" 
            frameBorder="0" 
            style={{ border: 0, borderRadius: "0.5rem", marginTop: "1rem" }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Map"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2025 Kobis Travels & Tours Ltd. All rights reserved.</p>
        <div style={styles.contactButtons}>
          <a href=" https://wa.me/+2348143574770 " target="_blank" rel="noopener noreferrer" style={{ ...styles.ctaButton, backgroundColor: "#10B981" }}>WhatsApp</a>
          <a href="tel:+2348143574770" style={{ ...styles.ctaButton, backgroundColor: "#EF4444" }}>Call</a>
          <a href="mailto:kobistravelsandtours@gmail.com" style={{ ...styles.ctaButton, backgroundColor: "#F59E0B" }}>Email</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
