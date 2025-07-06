import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '', show: false });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await axios.post('https://bkye-backend.onrender.com/api/send-message', form);
      setStatus({ message: 'Message sent via Telegram!', type: 'success', show: true });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMsg =
        error?.response?.data?.error || 'Failed to send message. Please try again.';
      setStatus({ message: errorMsg, type: 'error', show: true });
    } finally {
      setIsSending(false);
    }
  };

  useEffect(() => {
    if (status.show) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, show: false }));
      }, 4000); // 4 seconds before fading

      return () => clearTimeout(timer);
    }
  }, [status.show]);

  return (
    <section className="contact" id="contact" data-aos="fade-up">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={isSending}>
          {isSending ? <span className="spinner"></span> : 'Send Message'}
        </button>
      </form>

      {status.show && (
        <div className={`status-message ${status.type}`}>
          {status.message}
        </div>
      )}

      <div className="contact-info">
        <p>Email: <a href="mailto:sammyboakye295@gmail.com">sammyboakye295@gmail.com</a></p>
        <p>GitHub: <a href="https://github.com/SammyBGH" target="_blank" rel="noreferrer">github.com/SammyBGH</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/samuel-boakye-494084263" target="_blank" rel="noreferrer">linkedin.com/in/samuel-boakye</a></p>
      </div>
    </section>
  );
};

export default Contact;
