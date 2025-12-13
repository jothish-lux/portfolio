import { motion } from 'framer-motion';

export default function Experience() {
  const experiences = [
    {
      role: 'Financial Head & Designer',
      company: 'NextStep Agency',
      location: 'Warsaw',
      period: '2025 - Current',
      description: [
        'Managing financial operations, reporting, and budget allocation',
        'Creating visual designs for marketing materials and branding',
        'Coordinating with clients and internal teams to ensure project delivery',
        'Supporting business growth through strategic planning and documentation',
      ],
      icon: 'ri-building-line',
    },
    {
      role: 'Video Editor',
      company: 'Freelance',
      location: 'Remote',
      period: 'May 2023 - Sep 2024',
      description: [
        'Edited and delivered 100+ high-quality videos',
        'Managed deadlines and project requirements',
        'Coordinated with creative teams',
        'Enhanced visuals using Adobe & DaVinci tools',
      ],
      icon: 'ri-film-line',
    },
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-gradient-to-b from-dark to-dark/95">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-[#FF6B35] font-display text-sm font-semibold tracking-wider uppercase">
            Career Journey
          </span>
          <h2 className="font-display font-bold text-4xl md:text-6xl mt-4">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-primary/50 transition-all group">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className={`${exp.icon} text-3xl`}></i>
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-2xl mb-1">{exp.role}</h3>
                        <p className="text-[#FF6B35] font-medium">
                          {exp.company} • {exp.location}
                        </p>
                      </div>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <i className="ri-arrow-right-s-line text-[#FF6B35] mt-1 flex-shrink-0"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-[#FF6B35]/20 to-[#F7931E]/20 rounded-2xl p-8 border border-[#FF6B35]/30"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-display font-bold text-2xl mb-2">Education</h3>
              <p className="text-lg font-medium">BA in Business & Security Analyst</p>
              <p className="text-white/60">Vistula University, Warsaw • 2025-2028 (Ongoing)</p>
              <p className="text-white/60 mt-2">Higher Secondary, Commerce</p>
              <p className="text-white/60">MD Seminary HSS Kottayam • 2022-2024</p>
            </div>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] flex-shrink-0">
              <i className="ri-graduation-cap-line text-4xl"></i>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
