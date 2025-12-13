import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const supabaseUrl = import.meta.env.VITE_PUBLIC_SUPABASE_URL;
      
      const response = await fetch(`${supabaseUrl}/functions/v1/send-contact-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            I'm currently available for full-time or part-time opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-map-pin-line text-xl text-white"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Location</p>
                <p className="text-white font-medium">Warsaw, Poland</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-phone-line text-xl text-white"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Phone</p>
                <a href="tel:+48578972631" className="text-white font-medium hover:text-orange-500 transition-colors">
                  +48 578 972 631
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg border border-slate-700 hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 rounded-lg">
                <i className="ri-mail-line text-xl text-white"></i>
              </div>
              <div>
                <p className="text-sm text-slate-400 mb-1">Email</p>
                <a href="mailto:myselfjyothish@gmail.com" className="text-white font-medium hover:text-orange-500 transition-colors break-all">
                  myselfjyothish@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/jyothish-kumar-a9b221258/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-500 hover:bg-orange-500 transition-all group"
                >
                  <i className="ri-linkedin-fill text-xl text-slate-300 group-hover:text-white"></i>
                </a>
                <a
                  href="https://github.com/jyothishkumar-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-500 hover:bg-orange-500 transition-all group"
                >
                  <i className="ri-github-fill text-xl text-slate-300 group-hover:text-white"></i>
                </a>
                <a
                  href="https://www.instagram.com/j0thish/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-slate-800 rounded-lg border border-slate-700 hover:border-orange-500 hover:bg-orange-500 transition-all group"
                >
                  <i className="ri-instagram-fill text-xl text-slate-300 group-hover:text-white"></i>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form 
              id="contact-form"
              onSubmit={handleSubmit} 
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors text-sm"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-orange-500 transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
                <p className="text-xs text-slate-500 mt-1">{formData.message.length}/500 characters</p>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500 rounded-lg">
                  <p className="text-green-500 text-sm">✓ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500 rounded-lg">
                  <p className="text-red-500 text-sm">✗ Failed to send message. Please try again.</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
