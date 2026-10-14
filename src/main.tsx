import React, { useEffect, useState, type FormEvent } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { FiArrowDown, FiArrowRight, FiArrowUpRight, FiInstagram, FiMail, FiMapPin, FiMessageCircle, FiPhone, FiMenu, FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa6';
import './styles.css';

const navItems = [
  { to: '/collections', label: 'Collections' },
  { to: '/ready-to-wear', label: 'Ready to wear' },
  { to: '/our-story', label: 'Our story' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return <>
    <div className="announcement"><span>AFRICAN FASHION, MADE PERSONAL</span><span>MADE TO MEASURE · MADE FOR YOU</span></div>
    <header className="header">
      <Link to="/" className="brand" aria-label="Zidstyling home"><img src="/zidstyling-mark.png" alt="Zidstyling Fashion Brand" /></Link>
      <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      <nav className={menuOpen ? 'navigation is-open' : 'navigation'} aria-label="Main navigation">
        <NavLink end to="/" onClick={closeMenu}>Home</NavLink>
        {navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu}>{item.label}</NavLink>)}
        <NavLink className="navigation-cta" to="/consultation" onClick={closeMenu}>Book a consultation <FiArrowUpRight /></NavLink>
      </nav>
    </header>
  </>;
}

function SocialDock() {
  const [open, setOpen] = useState(false);
  const closeWhenFocusLeaves = (event: React.FocusEvent<HTMLElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
  };

  return <aside
    className={`social-dock${open ? ' is-open' : ''}`}
    aria-label="Contact Zidstyling on social media"
    onPointerEnter={(event) => { if (event.pointerType === 'mouse') setOpen(true); }}
    onPointerLeave={(event) => { if (event.pointerType === 'mouse' && !event.currentTarget.contains(document.activeElement)) setOpen(false); }}
    onFocus={() => setOpen(true)}
    onBlur={closeWhenFocusLeaves}
  >
    <div className="social-dock-links" id="social-dock-links" aria-hidden={!open}>
      <a href="https://www.instagram.com/zidstyling/" target="_blank" rel="noreferrer" aria-label="Instagram, Zidstyling" title="Instagram · @zidstyling" tabIndex={open ? 0 : -1}><FiInstagram /></a>
      <a href="https://wa.me/2348185893592" target="_blank" rel="noreferrer" aria-label="Chat with Zidstyling on WhatsApp" title="WhatsApp · 0818 589 3592" tabIndex={open ? 0 : -1}><FaWhatsapp /></a>
    </div>
    <button className="social-dock-toggle" type="button" aria-label={open ? 'Close social links' : 'Open social links'} aria-expanded={open} aria-controls="social-dock-links" onClick={() => setOpen((value) => !value)}>
      {open ? <FiX /> : <FiMessageCircle />}
    </button>
  </aside>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-main">
      <div><Link to="/" className="footer-brand"><img src="/zidstyling-mark.png" alt="Zidstyling" /></Link><p>Bespoke African fashion,<br />made to feel like you.</p></div>
      <div className="footer-group"><span>EXPLORE</span><Link to="/collections">Collections</Link><Link to="/ready-to-wear">Ready to wear</Link><Link to="/our-story">Our story</Link></div>
      <div className="footer-group"><span>GET IN TOUCH</span><a href="https://www.instagram.com/zidstyling/" target="_blank" rel="noreferrer"><FiInstagram /> @zidstyling</a><a href="https://www.instagram.com/zidstylingrtw/" target="_blank" rel="noreferrer"><FiInstagram /> @zidstylingrtw</a><a href="tel:+2347039782692"><FiPhone /> 0703 978 2692</a><a href="https://wa.me/2348185893592" target="_blank" rel="noreferrer">WhatsApp: 0818 589 3592</a><a href="mailto:sakayetunde7@gmail.com"><FiMail /> sakayetunde7@gmail.com</a><span className="footer-address"><FiMapPin /> 163 Ekoro Road, Ekoro Junction,<br />Abule Egba, Alimosho, Lagos, Nigeria</span></div>
      <div className="footer-group"><span>LET’S BEGIN</span><Link to="/consultation">Book a consultation <FiArrowUpRight /></Link></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Zidstyling Fashion Brand</span><span>Designed with care</span><Link to="/">Back to top ↑</Link></div>
  </footer>;
}

function HomePage() {
  return <>
    <main>
      <section className="home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> BESPOKE AFRICAN FASHION</p>
          <h1>Wear your story<br /><em>beautifully.</em></h1>
          <p className="hero-lead">Distinctive African fashion, thoughtfully made around you — your style, your silhouette, your moment.</p>
          <div className="hero-buttons"><Link className="button button-dark" to="/collections">Explore collections <FiArrowRight /></Link><Link className="quiet-link" to="/consultation">Create something bespoke <FiArrowUpRight /></Link></div>
          <div className="hero-note"><span>01</span><span>CONSIDERED DESIGN · PERSONAL FIT · YOURS TO WEAR</span></div>
        </div>
        <div className="hero-image-wrap"><img className="hero-image" src="/images/look-evening.jpeg" alt="Zidstyling client wearing a detailed purple bespoke gown" /><span className="photo-caption">THE OCCASION EDIT / ZIDSTYLING</span><div className="image-seal">Z<br /><small>MADE FOR YOU</small></div></div>
      </section>

      <section className="home-intro page-width">
        <p className="eyebrow"><span /> THE ZIDSTYLING POINT OF VIEW</p>
        <div className="home-intro-grid"><h2>Rooted in heritage.<br /><em>Made for your now.</em></h2><div><p>We create bespoke African fashion for the way you want to show up. Start with a piece from our collection or bring us an idea you’ve been holding onto.</p><Link className="text-link" to="/our-story">Get to know Zidstyling <FiArrowUpRight /></Link></div></div>
      </section>

      <section className="home-collection">
        <div className="home-collection-inner page-width"><div><p className="eyebrow"><span /> A STARTING POINT</p><h2>Find the feeling.<br /><em>We’ll perfect the fit.</em></h2></div><div className="home-collection-copy"><p>Explore statement occasionwear and African-inspired design. Every piece can begin a conversation about what works for you.</p><Link className="button button-light" to="/collections">View the collections <FiArrowRight /></Link></div></div>
      </section>

      <section className="home-steps page-width"><div><p className="eyebrow"><span /> MADE TO MEASURE, MADE TOGETHER</p><h2>Good style starts<br />with a <em>conversation.</em></h2></div><ol><li><span>01</span><div><b>Share your idea</b><p>Tell us about the piece, the occasion, and how you want to feel.</p></div></li><li><span>02</span><div><b>Shape the details</b><p>We’ll discuss the design direction and arrange your fitting.</p></div></li><li><span>03</span><div><b>Wear it your way</b><p>Your finished piece is made with care, especially for you.</p></div></li></ol><Link className="text-link" to="/consultation">Start with a consultation <FiArrowUpRight /></Link></section>
    </main>
  </>;
}

function CollectionsPage() {
  const filters = ['All pieces', 'Occasion', 'Bespoke'];
  const [activeFilter, setActiveFilter] = useState('All pieces');
  return <main className="inner-page">
    <section className="page-heading page-width"><p className="eyebrow"><span /> THE ZIDSTYLING COLLECTION</p><h1>Designed to make<br /><em>an entrance.</em></h1><p>Explore the details, then make the design your own. Our collection is a starting point for a piece made around you.</p></section>
    <section className="collection-page page-width">
      <div className="collection-toolbar"><div className="filter-list" aria-label="Filter collection">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'filter-active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><span>MADE TO ORDER · BESPOKE OPTIONS AVAILABLE</span></div>
      {activeFilter === 'Bespoke' ? <div className="custom-panel"><div className="custom-pattern" aria-hidden="true"><span>Z</span></div><div><p className="eyebrow"><span /> YOUR DESIGN, YOUR WAY</p><h2>Have a look in mind?<br /><em>Let’s make it yours.</em></h2><p>Bring us a reference, a fabric, or just the feeling you want your outfit to have. We’ll shape the details with you.</p><Link className="button button-dark" to="/consultation">Start a bespoke request <FiArrowUpRight /></Link></div></div> : <div className="collection-feature">
        <div className="collection-photo"><img src="/images/look-evening-detail.jpeg" alt="Purple embellished gown created by Zidstyling" /><span>LOOK 01 / OCCASION</span></div>
        <div className="collection-description"><p className="eyebrow"><span /> THE OCCASION EDIT</p><h2>A little drama.<br /><em>A lot of you.</em></h2><p>Rich colour, considered embellishment, and a silhouette tailored to your measurements. This look can be adapted around your preferences and occasion.</p><dl><div><dt>STYLE</dt><dd>Embellished evening gown</dd></div><div><dt>MADE FOR</dt><dd>Celebrations & special occasions</dd></div><div><dt>FIT</dt><dd>Made to measure</dd></div></dl><Link className="button button-dark" to="/consultation">Enquire about this look <FiArrowUpRight /></Link><span className="collection-index">01 <i /> 01</span></div>
      </div>}
      <div className="collection-bottom"><span>Each look is a conversation, not a size label.</span><Link className="text-link" to="/consultation">Have something else in mind? <FiArrowRight /></Link></div>
    </section>
  </main>;
}

function ReadyToWearPage() {
  return <main className="inner-page">
    <section className="page-heading page-width"><p className="eyebrow"><span /> THE ZIDSTYLING READY-TO-WEAR EDIT</p><h1>Made to wear.<br /><em>Made to stay with you.</em></h1><p>Discover ready-to-wear pieces from Zidstyling. Our lookbook is being prepared with the collection imagery and videos.</p></section>
    <section className="ready-page page-width">
      <div className="ready-intro"><div><p className="eyebrow"><span /> THE FIRST LOOKBOOK</p><h2>A new edit<br /><em>is on its way.</em></h2></div><p>We’re gathering the pieces and stories for this collection. Check back soon to explore the looks, fabrics, and details—or speak with us about what’s available.</p></div>
      <div className="ready-placeholder"><div className="ready-placeholder-mark">Z</div><span>READY-TO-WEAR LOOKBOOK</span><p>Collection photos and film coming soon</p></div>
      <div className="ready-bottom"><span>For a piece made especially for you</span><Link className="button button-dark" to="/consultation">Book a consultation <FiArrowUpRight /></Link></div>
    </section>
  </main>;
}

function StoryPage() {
  return <main className="inner-page">
    <section className="page-heading page-width"><p className="eyebrow"><span /> OUR STORY</p><h1>Personal style.<br /><em>Personal meaning.</em></h1><p>Zidstyling is a fashion brand devoted to bespoke African fashion and the individuality of the person wearing it.</p></section>
    <section className="story-content page-width"><div className="story-quote">“The best outfit is the one that feels like <em>you</em> the moment you put it on.”</div><div className="story-copy"><p className="eyebrow"><span /> HOW WE THINK ABOUT CLOTHES</p><h2>Made with you<br />in <em>every detail.</em></h2><p>We believe African fashion can honour where we come from and express who we are becoming. Zidstyling brings that belief into a personal design process: listen first, make with intention, and fit every piece to the person who will wear it.</p><Link className="button button-dark" to="/consultation">Meet us through a consultation <FiArrowUpRight /></Link></div></section>
  </main>;
}

function ConsultationPage() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/consultations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const responseText = await response.text();
      let result: { message?: string } = {};
      try {
        result = responseText ? JSON.parse(responseText) as { message?: string } : {};
      } catch {
        // Proxies and stopped servers can return plain text or an empty body.
      }
      if (!response.ok) throw new Error(result.message || `Booking service returned ${response.status}${response.statusText ? ` ${response.statusText}` : ''}.`);
      setSent(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'Could not reach the booking service. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  return <main className="inner-page">
    <section className="page-heading page-width consultation-heading"><p className="eyebrow"><span /> BESPOKE, BEGINNING WITH YOU</p><h1>Let’s start with<br /><em>a conversation.</em></h1><p>Tell us what you’re imagining. We’ll follow up to discuss the design, timing, and next steps.</p></section>
    <section className="consultation-layout page-width">
      <aside className="consultation-aside"><p className="eyebrow"><span /> YOUR FIRST FITTING STARTS HERE</p><h2>A few details<br />help us <em>get started.</em></h2><p>Share the occasion and the look you have in mind. You don’t need to have every detail figured out yet.</p><div className="aside-steps"><span>01</span><p>We’ll review your request</p><span>02</span><p>We’ll get in touch to arrange a conversation</p><span>03</span><p>Together, we’ll plan your piece</p></div><div className="contact-card"><p className="eyebrow"><span /> CONTACT ZIDSTYLING</p><a href="tel:+2347039782692">Call 0703 978 2692</a><a href="https://wa.me/2348185893592" target="_blank" rel="noreferrer">WhatsApp 0818 589 3592</a><a href="mailto:sakayetunde7@gmail.com">sakayetunde7@gmail.com</a><a href="https://www.instagram.com/zidstyling/" target="_blank" rel="noreferrer">Instagram @zidstyling</a><a href="https://www.instagram.com/zidstylingrtw/" target="_blank" rel="noreferrer">Ready-to-wear @zidstylingrtw</a><p className="contact-address">163 Ekoro Road, Ekoro Junction, Abule Egba, Alimosho, Lagos, Nigeria</p></div></aside>
      {sent ? <div className="success-card" role="status"><span className="success-mark">✓</span><p className="eyebrow"><span /> REQUEST RECEIVED</p><h2>Thank you.<br /><em>We’ll be in touch.</em></h2><p>Your consultation request has been saved. Zidstyling will contact you to discuss the next steps.</p><button className="text-link" onClick={() => setSent(false)}>Send another request <FiArrowRight /></button></div> : <form className="consultation-form" onSubmit={submit}>
        <div className="form-heading"><span>CONSULTATION REQUEST</span><span>ABOUT 2 MINUTES</span></div>
        <label>Full name<input name="name" autoComplete="name" placeholder="Your name" required /></label>
        <div className="form-row"><label>Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required /></label><label>Phone number<input type="tel" name="phone" autoComplete="tel" placeholder="+234" /></label></div>
        <div className="form-row"><label>What are you dressing for?<select name="occasion" defaultValue="" required><option value="" disabled>Choose an occasion</option><option>Wedding or engagement</option><option>Celebration</option><option>Everyday style</option><option>Other</option></select></label><label>When do you need the outfit?<input type="date" name="neededBy" /></label></div>
        <label>Tell us about your idea<textarea name="idea" rows={4} placeholder="The style, fabric, occasion, or feeling you have in mind…" /></label>
        <button className="button button-dark form-submit" type="submit" disabled={submitting}>{submitting ? 'Sending request…' : 'Request a consultation'} <FiArrowUpRight /></button>
        {error && <p className="form-error" role="alert">{error}</p>}
        <p className="form-note">Your request is sent securely to the Zidstyling booking service.</p>
      </form>}
    </section>
  </main>;
}

function PageFrame() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }); }, [location.pathname]);
  return <><Header /><Routes><Route path="/" element={<HomePage />} /><Route path="/collections" element={<CollectionsPage />} /><Route path="/ready-to-wear" element={<ReadyToWearPage />} /><Route path="/our-story" element={<StoryPage />} /><Route path="/consultation" element={<ConsultationPage />} /><Route path="*" element={<main className="not-found page-width"><p className="eyebrow"><span /> 404 / PAGE NOT FOUND</p><h1>Let’s get you<br /><em>back on track.</em></h1><Link className="button button-dark" to="/">Back to home <FiArrowRight /></Link></main>} /></Routes><Footer /><SocialDock /></>;
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><PageFrame /></BrowserRouter></React.StrictMode>);
