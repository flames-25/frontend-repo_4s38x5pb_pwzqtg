import React, { useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, Mail, Linkedin, ExternalLink, ArrowDown } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const NAV = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function useScrollTo() {
  return (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

function Navbar() {
  const [open, setOpen] = React.useState(false)
  const scrollTo = useScrollTo()

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mt-4 backdrop-blur-xl bg-black/50 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => scrollTo('home')} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-400" />
              <span className="text-white font-semibold tracking-wide">Kishan Parvadiya</span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              {NAV.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-white/80 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://www.linkedin.com/in/kishan-parvadiya-593120268"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-black bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-full text-sm font-semibold transition-colors"
              >
                <Linkedin size={18} /> Connect
              </a>
            </div>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="md:hidden overflow-hidden border-t border-white/10"
              >
                <div className="px-4 py-3 grid gap-2">
                  {NAV.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setOpen(false)
                        scrollTo(item.id)
                      }}
                      className="text-left text-white/90 hover:text-yellow-400 py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <a
                    href="https://www.linkedin.com/in/kishan-parvadiya-593120268"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-black bg-yellow-400 hover:bg-yellow-300 px-4 py-2 rounded-full text-sm font-semibold w-max"
                  >
                    <Linkedin size={18} /> Connect
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  const scrollTo = useScrollTo()

  return (
    <section id="home" className="relative min-h-[90vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/80 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-24">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-yellow-400 font-semibold tracking-wide"
        >
          Product Designer & Aspiring Product Manager
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Building Data-Driven, Design-Forward Products
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-white/80"
        >
          I’m a Data Science Engineering student passionate about crafting intuitive, user-centered digital products that balance design elegance with functional strength.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors"
          >
            View My Work <ArrowRight size={18} />
          </button>
          <a
            href="https://www.linkedin.com/in/kishan-parvadiya-593120268"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-white hover:text-yellow-300"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-24 flex items-center gap-2 text-white/70"
        >
          <ArrowDown className="animate-bounce" size={18} />
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

function Section({ id, title, children, bg = 'bg-black', tint = false }) {
  return (
    <section id={id} className={`${bg} ${tint ? 'bg-gradient-to-b from-black to-black/95' : ''} text-white py-20` }>
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-3xl md:text-4xl font-bold"
        >
          {title}
        </motion.h2>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" title="About" bg="bg-black">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 text-white/80 leading-relaxed"
        >
          <p>
            I’m a Data Science Engineering student passionate about creating data-driven and user-centered digital products. My work bridges the gap between design, technology, and business strategy.
          </p>
          <p className="mt-4">
            As a Certified Scrum Master, I focus on agile product development, user research, and Figma prototyping to design impactful digital experiences. I thrive at the intersection of design and data, building intuitive products that are both visually appealing and functionally strong.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="text-sm text-white/70">Education</div>
          <div className="mt-2 font-semibold">B.Tech in Computer Science and Engineering</div>
          <div className="text-white/70">ITM (SLS) Baroda University, 2022–2026</div>
        </motion.div>
      </div>
    </Section>
  )
}

function Experience() {
  const items = useMemo(() => ([
    {
      role: 'Product Designer',
      org: 'Novus Ark',
      period: 'July 2025 – Present',
      desc: 'Working on complete product design lifecycle from user research to high-fidelity prototypes. Emphasis on usability, accessibility, and engagement.'
    },
    {
      role: 'UI/UX Designer Intern',
      org: 'Novus Ark',
      period: 'Jan 2025 – June 2025',
      desc: 'Collaborated on real-world projects, wireframing, and usability testing. Learned modern design systems and frameworks.'
    },
    {
      role: 'Freelance Product Designer',
      org: 'Self-employed',
      period: 'June 2024 – Present',
      desc: 'Worked with various clients to design digital solutions focusing on aesthetics and usability.'
    },
    {
      role: 'Data Science Intern',
      org: 'Innomatics Research Labs',
      period: 'Sept 2024 – Jan 2025',
      desc: 'Built ML models and data visualizations using Python, Pandas, and Scikit-learn.'
    },
  ]), [])

  return (
    <Section id="experience" title="Experience" bg="bg-black">
      <div className="grid gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.role + i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <div className="text-yellow-400 font-semibold">{item.role}</div>
                <div className="text-white text-lg">{item.org}</div>
              </div>
              <div className="text-white/60 text-sm">{item.period}</div>
            </div>
            <p className="mt-3 text-white/80">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Projects() {
  const projects = [
    {
      title: 'Design System Starter',
      desc: 'Reusable UI kit and tokens built in Figma, enabling rapid prototyping and consistent interfaces.',
      link: '#',
    },
    {
      title: 'User Research Playbook',
      desc: 'Interview guides, survey templates, and analysis boards to streamline discovery.',
      link: '#',
    },
    {
      title: 'Analytics Dashboard Concepts',
      desc: 'Data visualizations and interaction patterns combining clarity with visual appeal.',
      link: '#',
    },
  ]

  return (
    <Section id="projects" title="Projects" bg="bg-black">
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target={p.link.startsWith('http') ? '_blank' : undefined}
            rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all hover:-translate-y-0.5"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <ExternalLink className="text-white/40 group-hover:text-yellow-400 transition-colors" size={18} />
            </div>
            <p className="mt-3 text-white/80 text-sm leading-relaxed">{p.desc}</p>
          </motion.a>
        ))}
      </div>
    </Section>
  )
}

function Skills() {
  const groups = [
    {
      title: 'UI/UX Design',
      items: ['Design Thinking', 'User Research', 'Wireframing', 'Usability Testing', 'Accessibility']
    },
    {
      title: 'Figma & Prototyping',
      items: ['Figma', 'Prototyping', 'Design Systems', 'Auto Layout', 'Variables']
    },
    {
      title: 'Product Strategy',
      items: ['Roadmapping', 'Prioritization', 'Market Research', 'KPIs & Metrics', 'A/B Testing']
    },
    {
      title: 'Agile & Scrum',
      items: ['Scrum Master (CSM)', 'Sprint Planning', 'Backlog Grooming', 'Retrospectives']
    },
    {
      title: 'Data & Analytics',
      items: ['Python', 'Pandas', 'ML Models', 'Data Visualization']
    },
  ]

  return (
    <Section id="skills" title="Skills" bg="bg-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="text-yellow-400 font-semibold">{g.title}</div>
            <div className="mt-3 flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span key={it} className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 text-sm border border-yellow-400/20">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

function Contact() {
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:kishanpatel486630@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <Section id="contact" title="Contact" bg="bg-black" tint>
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/80">
            Interested in collaborating or discussing product design and strategy? I’m open to internships, freelance opportunities, and product roles.
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <a href="mailto:kishanpatel486630@gmail.com" className="inline-flex items-center gap-2 text-white/90 hover:text-yellow-300 transition-colors">
              <Mail size={18} /> kishanpatel486630@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/kishan-parvadiya-593120268" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white/90 hover:text-yellow-300 transition-colors">
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-2xl border border-white/10 bg-white/5"
        >
          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input name="name" required className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input type="email" name="email" required className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea name="message" rows="5" required className="w-full px-4 py-2 rounded-md bg-black/60 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Tell me about your project or opportunity" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-6 py-3 rounded-full transition-colors">
              Send Message <ArrowRight size={18} />
            </button>
          </div>
        </motion.form>
      </div>
    </Section>
  )
}

function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/70 text-sm">
        <div>© {new Date().getFullYear()} Kishan Parvadiya. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="mailto:kishanpatel486630@gmail.com" className="hover:text-yellow-300">Email</a>
          <a href="https://www.linkedin.com/in/kishan-parvadiya-593120268" target="_blank" rel="noreferrer" className="hover:text-yellow-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-[Inter]">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
