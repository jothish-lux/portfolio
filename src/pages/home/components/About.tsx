import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F7931E]/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-2xl blur-xl opacity-30"></div>
              <img
                src="https://static.readdy.ai/image/e388132ef9f5fd635098124b371fd5db/c7d77f36202b3256f14092111c74bb58.png"
                alt="Jyothish"
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
              />
            </motion.div>
          </div>

          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#FF6B35] font-display text-sm font-semibold tracking-wider uppercase"
            >
              About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display font-bold text-4xl md:text-5xl mt-4 mb-6"
            >
              Motivated Professional with Diverse Expertise
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-white/70 text-lg leading-relaxed mb-6"
            >
              I'm a customer-focused professional with experience in customer support, financial coordination, design, and IT tools. Based in Warsaw, Poland, I bring a unique blend of creativity and analytical thinking to every project.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed mb-8"
            >
              Skilled in handling customer inquiries, managing financial operations, creating brand designs, and supporting business processes. I'm adaptable, reliable, and always eager to learn and grow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <i className="ri-map-pin-line text-3xl text-[#FF6B35] mb-3"></i>
                <h3 className="font-display font-semibold text-lg mb-1">Location</h3>
                <p className="text-white/60 text-sm">Warsaw, Poland</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <i className="ri-briefcase-line text-3xl text-[#FF6B35] mb-3"></i>
                <h3 className="font-display font-semibold text-lg mb-1">Status</h3>
                <p className="text-white/60 text-sm">Available</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
