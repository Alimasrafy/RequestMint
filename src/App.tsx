import { useState, useEffect } from 'react'

// Animated gradient background with subtle noise texture
function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900" />
      
      {/* Moving color orbs */}
      <div className="absolute top-0 -left-32 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/15 rounded-full blur-3xl animate-pulse-slowest" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvZz48L3N2Zz4=')] opacity-40" />
      
      {/* Top gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/80" />
      
      {/* Left-right edge fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
    </div>
  )
}

// Sticky nav
function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">RequestMint</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['How It Works', 'Features', 'Pricing', 'FAQ'].map(link => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
                className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                {link}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-3">
            <a href="#pricing" className="hidden sm:block text-slate-300 hover:text-white text-sm transition-colors">Sign in</a>
            <a href="#signup" className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25">
              Start Free Trial
            </a>
          </div>
          
          <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {mobileOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-white/5 px-4 py-4 space-y-3">
          {['How It Works', 'Features', 'Pricing', 'FAQ'].map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(/\s/g, '-')}`}
              className="block text-slate-300 hover:text-white py-2 text-sm"
              onClick={() => setMobileOpen(false)}>
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

// Trust logos bar
function TrustedBy() {
  const logos = [
    'RequestMint Inbox',
    'RequestMint Signals',
    'RequestMint Pages',
    'RequestMint Checkout',
    'RequestMint Delivery',
    'RequestMint Analytics'
  ]
  return (
    <section className="relative z-10 border-b border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-center text-slate-500 text-xs font-medium uppercase tracking-widest mb-8">
          Integrates with tools you already use
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map(logo => (
            <div key={logo} className="text-slate-600 font-bold text-base md:text-lg tracking-tight opacity-50 hover:opacity-80 transition-opacity cursor-default">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem section - agitate the pain
function ProblemSection() {
  const problems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      stat: '73%',
      label: 'of support requests are repeats',
      detail: 'Same questions. Same feature asks. Same frustrations. Every single week.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      stat: '14 hrs',
      label: 'wasted per week on repeat answers',
      detail: 'That\'s almost 2 full workdays answering the same thing over and over.'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      stat: '$47K',
      label: 'yearly revenue left on the table',
      detail: 'Agencies and SaaS founders estimate they could monetize 30% of support volume.'
    },
  ]

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            The Hidden Problem
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Your customers are telling you<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
              {' '}exactly what to sell
            </span>
            <span className="text-white"> — you're just not listening.</span>
          </h2>
          <p className="text-slate-400 text-lg mt-5 leading-relaxed">
            Every inbox message, every DM, every "can you add this?" is a data point. 
            Combined, they reveal exactly what your market is begging to pay for.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div key={i} className="group bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.06] transition-all duration-300 hover:-translate-y-1">
              <div className="text-slate-500 mb-4 group-hover:text-amber-400 transition-colors">{p.icon}</div>
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{p.stat}</div>
              <div className="text-indigo-400 font-semibold text-sm mb-3">{p.label}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// How it works - 4 step funnel
function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Connect Your Inbox',
      desc: 'Link your support email, forms, and customer channels. RequestMint starts reading every incoming message automatically.',
      detail: 'Takes 3 minutes. No coding. Read-only access.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      step: '02',
      title: 'Detect Repeated Demands',
      desc: 'Our NLP engine clusters similar requests and surfaces the top recurring themes — ranked by frequency, urgency, and willingness to pay.',
      detail: 'Updates in real-time as new requests come in.',
      color: 'from-indigo-500 to-violet-600',
    },
    {
      step: '03',
      title: 'Launch Your Offer in Minutes',
      desc: 'Pick a validated demand → set your price → RequestMint generates the landing page, checkout, and delivery flow. Live in under 30 minutes.',
      detail: 'Your branding. Your price. Your product.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      step: '04',
      title: 'Get Paid. Automatically.',
      desc: 'RequestMint handles payments, receipts, and delivery. You focus on delivery while recurring revenue flows in — with zero additional work.',
      detail: 'Instant payouts. Automated delivery. No extra ops work.',
      color: 'from-cyan-500 to-teal-600',
    },
  ]

  return (
    <section id="how-it-works" className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            The System
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            From customer request<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"> to paid product in 30 min</span>
          </h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative">
                <div className="bg-white/[0.04] border border-white/8 rounded-2xl p-7 hover:bg-white/[0.07] transition-all duration-300 h-full">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-sm mb-5 shadow-lg`}>
                    {s.step}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{s.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {s.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Feature deep-dive
function FeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Smart Demand Detection',
      subtitle: 'NLP-Powered Pattern Recognition',
      desc: 'Our engine doesn\'t just count keywords. It understands intent, urgency, and emotional weight — then ranks opportunities by monetization potential.',
      tags: ['Intent analysis', 'Frequency ranking', 'Sentiment scoring', 'Seasonal trends'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: 'Auto-Generated Offer Pages',
      subtitle: 'High-Converting Landing Pages Built for You',
      desc: 'Pick a validated demand. Set your price. RequestMint writes the headline, copy, pricing table, FAQs, and guarantee — using your branding automatically.',
      tags: ['AI copywriting', 'A/B tested layouts', 'Mobile-first design', 'SEO optimized'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      title: 'Built-In Payments',
      subtitle: 'RequestMint Payments. Zero Extra Setup.',
      desc: 'Accept online payments with automatic receipts, refunds, and licensing. You keep 92.5% of every sale — we take only 7.5% when you earn.',
      tags: ['92.5% payout', 'Instant transfers', 'Multi-currency', 'License management'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: 'Digital Product Delivery',
      subtitle: 'Instant Access. Zero Friction.',
      desc: 'Deliver PDFs, templates, videos, courses, private communities, or access links automatically after payment. One product or a full suite — your choice.',
      tags: ['File delivery', 'Member access', 'License keys', 'Course portal'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Revenue Dashboard',
      subtitle: 'Know What\'s Selling and Why',
      desc: 'Track which products are winning, revenue per demand signal, conversion rates, and customer LTV. Real data to decide what to build next.',
      tags: ['Real-time revenue', 'Demand tracking', 'Conversion funnel', 'LTV analysis'],
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
      ),
      title: 'Custom Domains & Branding',
      subtitle: 'White-Label. Your Domain. Your Brand.',
      desc: 'Run everything under your own domain. Your logo, your colors, your domain — so customers never know RequestMint is powering the back end.',
      tags: ['Custom domain', 'Brand editor', 'Email templates', 'Remove badges'],
    },
  ]

  return (
    <section id="features" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-cyan-500/10 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Platform Features
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Everything you need to<br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"> productize demand</span>
          </h2>
          <p className="text-slate-400 text-lg mt-4">One platform. From signal to sale. No tools, no integrations, no coding required.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div key={i} className="group bg-white/[0.03] border border-white/5 rounded-2xl p-7 hover:bg-white/[0.07] hover:border-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600/30 to-cyan-600/30 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 group-hover:from-indigo-600/50 group-hover:to-cyan-600/50 transition-all">
                {f.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-1">{f.title}</h3>
              <p className="text-indigo-400/80 text-xs font-medium mb-4">{f.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{f.desc}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/[0.05] text-slate-400 px-2.5 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Use cases / who it's for
function WhoIsItFor() {
  const audiences = [
    {
      role: 'Digital Agency Owners',
      pain: 'Clients keep asking for the same custom add-ons, templates, and strategies.',
      solution: 'Bundle them into products. Onboard once, bill monthly.',
      example: '"We turned our SEO audit checklist into a $199/mo product. Now 40+ agencies subscribe."',
    },
    {
      role: 'SaaS Founders',
      pain: 'Feature requests pile up. You can\'t build everything. But customers would pay for some of it.',
      solution: 'Validate and launch external products while you build the core product.',
      example: '"We productized our internal analytics dashboard as a $99/mo tool for other SaaS teams."',
    },
    {
      role: 'Course & Community Builders',
      pain: 'Students ask the same questions. The answers exist in your DMs, comments, and emails.',
      solution: 'Package the knowledge into digital products. Earn while you teach.',
      example: '"My most-asked copywriting question became a $47 template pack. $12K in 30 days."',
    },
    {
      role: 'Micro-SaaS Operators',
      pain: 'High-touch support costs eat your margins. Burnout is real.',
      solution: 'Turn common requests into self-serve products. Reduce support, increase revenue.',
      example: '"We replaced 30% of our support tickets with a $29 course. Support cost dropped 40%."',
    },
  ]

  return (
    <section className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-violet-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-violet-500/10 text-violet-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Built For
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Who is <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">RequestMint</span> for?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {audiences.map((a, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-2 h-2 rounded-full bg-violet-500" />
                <h3 className="text-white font-bold text-lg">{a.role}</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-rose-400/80 font-semibold uppercase tracking-wider">Pain</span>
                  <p className="text-slate-400 text-sm mt-1">{a.pain}</p>
                </div>
                <div>
                  <span className="text-xs text-emerald-400/80 font-semibold uppercase tracking-wider">Solution</span>
                  <p className="text-slate-300 text-sm mt-1">{a.solution}</p>
                </div>
                <div className="pt-3 border-t border-white/5">
                  <p className="text-indigo-300/90 text-sm italic leading-relaxed">{a.example}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// $1M Revenue Simulator
function RevenueSimulator() {
  const [demands, setDemands] = useState(50)
  const [conversion, setConversion] = useState(3)
  const [price, setPrice] = useState(99)
  const [lifetime, setLifetime] = useState(6)

  const monthlyRevenue = Math.round(demands * (conversion / 100) * price)
  const yearlyRevenue = monthlyRevenue * 12
  const yearlyLTV = Math.round(demands * (conversion / 100) * price * lifetime)

  const sliderStyle = (val: number, max: number) => ({
    width: `${(val / max) * 100}%`,
  })

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Revenue Calculator
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5">
            See what your demand could generate
          </h2>
          <p className="text-slate-400 mt-3">Adjust the sliders to match your real numbers</p>
        </div>

        <div className="bg-white/[0.04] border border-white/8 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Sliders */}
            <div className="space-y-6">
              {[
                { label: 'Monthly Requests Detected', value: demands, max: 500, set: setDemands, unit: '' },
                { label: 'Conversion Rate', value: conversion, max: 20, set: setConversion, unit: '%', step: 0.5 },
                { label: 'Price Per Product', value: price, max: 500, set: setPrice, unit: '$', step: 10 },
                { label: 'Avg Customer Lifetime (months)', value: lifetime, max: 24, set: setLifetime, unit: 'mo', step: 1 },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-slate-300">{s.label}</span>
                    <span className="text-white font-bold">{s.unit === '%' ? `${s.value}%` : s.unit === '$' ? `$${s.value}` : s.value}{s.unit && s.unit !== '%' && s.unit !== '$' ? ` ${s.unit}` : ''}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full transition-all duration-300"
                      style={sliderStyle(s.value, s.max)}
                    />
                  </div>
                  <input
                    type="range"
                    min={0}
                    max={s.max}
                    step={s.step || 1}
                    value={s.value}
                    onChange={e => s.set(parseFloat(e.target.value))}
                    className="w-full mt-1 accent-indigo-500"
                  />
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="flex flex-col justify-center">
              <div className="space-y-5">
                <div className="text-center p-6 bg-indigo-600/10 rounded-2xl border border-indigo-500/20">
                  <p className="text-slate-400 text-xs uppercase tracking-wider mb-2">Monthly Revenue</p>
                  <p className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                    ${monthlyRevenue.toLocaleString()}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/5">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Year 1</p>
                    <p className="text-xl font-bold text-white">${yearlyRevenue.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 bg-white/[0.03] rounded-xl border border-white/5">
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-1">Year 1 (w/ LTV)</p>
                    <p className="text-xl font-bold text-white">${yearlyLTV.toLocaleString()}</p>
                  </div>
                </div>
                {yearlyRevenue >= 12000 && (
                  <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                    <p className="text-emerald-400 text-sm font-semibold">🎯 You're on track for a $1M+ business</p>
                    <p className="text-emerald-400/70 text-xs mt-1">at {demands} requests/month × {conversion}% × ${price}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Pricing
function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '49',
      desc: 'Perfect for solo founders testing the waters.',
      features: [
        '3 demand source connections',
        '1 live product at a time',
        'AI offer page generator',
        'RequestMint checkout',
        'Basic analytics',
        'Email support',
      ],
      cta: 'Start Free Trial',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '149',
      desc: 'For agencies and creators serious about revenue.',
      features: [
        'Unlimited demand sources',
        '5 live products at a time',
        'AI landing page + copy',
        'RequestMint payments',
        'Revenue dashboard',
        'Custom domain',
        'Priority support',
        'A/B testing tools',
      ],
      cta: 'Start Free Trial',
      highlight: true,
    },
    {
      name: 'Scale',
      price: '399',
      desc: 'Full power for teams running multiple revenue streams.',
      features: [
        'Everything in Growth',
        'Unlimited live products',
        'White-label mode',
        'API access',
        'Team collaboration',
        'Advanced LTV analytics',
        'Dedicated success manager',
        'Custom integrations',
      ],
      cta: 'Contact Sales',
      highlight: false,
    },
  ]

  return (
    <section id="pricing" className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/20 to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Simple Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 leading-tight">
            Start free. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Scale when you earn.</span>
          </h2>
          <p className="text-slate-400 text-lg mt-4">
            14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`relative rounded-2xl p-8 ${p.highlight ? 'bg-gradient-to-b from-indigo-600/20 to-violet-600/10 border-2 border-indigo-500/40' : 'bg-white/[0.04] border border-white/8'} transition-all duration-300 hover:-translate-y-1`}>
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-white font-bold text-xl mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">${p.price}</span>
                <span className="text-slate-500 text-sm">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all ${p.highlight ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' : 'bg-white/[0.08] hover:bg-white/[0.13] text-white border border-white/10'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-8">
          Plus 7.5% revenue share on sales. No hidden fees. No platform ads on your pages.
        </p>
      </div>
    </section>
  )
}

// Social proof / testimonials
function Testimonials() {
  const testimonials = [
    {
      quote: "I was spending 12 hours a week answering the same questions. Now I have 3 digital products running on autopilot. RequestMint found $3,200/mo I didn't know existed.",
      name: "Sarah Chen",
      role: "UX Consultant",
      result: "$3,200/mo recurring",
      initials: "SC",
      color: "from-violet-600 to-indigo-600",
    },
    {
      quote: "Within 60 days, we launched 5 products from support requests. We hit $8K MRR from demand we already had. The onboarding was literally 10 minutes.",
      name: "Marcus Williams",
      role: "Agency Founder, Elevation Digital",
      result: "$8,000/mo in 60 days",
      initials: "MW",
      color: "from-cyan-600 to-blue-600",
    },
    {
      quote: "The demand detection is genuinely scary accurate. It found a pattern in my DMs I didn't realize existed. That single product now does $1,400/mo.",
      name: "Priya Sharma",
      role: "Content Strategist & Course Creator",
      result: "$1,400/mo from 1 product",
      initials: "PS",
      color: "from-amber-600 to-orange-600",
    },
  ]

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            Real Results
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5">
            People are already earning
          </h2>
          <p className="text-slate-400 text-lg mt-4">From the first month. No audience. No ads. Just demand they already had.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white/[0.04] border border-white/8 rounded-2xl p-8 hover:bg-white/[0.07] transition-all duration-300 flex flex-col">
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 flex-1">"{t.quote}"</p>
              <div className="flex items-center gap-4 pt-5 border-t border-white/5">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-slate-500 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-emerald-400 font-bold text-sm">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    {
      q: "How does RequestMint detect demand?",
      a: "You connect your support channels — email, forms, inboxes, or any simple intake flow. Our NLP engine reads every message, clusters similar requests by meaning (not just keywords), and surfaces the top recurring themes ranked by frequency and monetization potential. You see a ranked list of product opportunities with clear demand signals."
    },
    {
      q: "What kind of products can I sell?",
      a: "Anything digital: templates, checklists, mini-courses, webinars, e-books, swipe files, private communities, access passes, consulting packages, or service retainers. You set the format, price, and delivery method. RequestMint handles the infrastructure."
    },
    {
      q: "Do I need technical skills?",
      a: "No. That's the point. If you can use Gmail and fill out a form, you can use RequestMint. Landing pages, checkouts, and delivery are fully automated. You focus on your expertise, not the tech."
    },
    {
      q: "How does pricing work?",
      a: "Flat monthly plans ($49-$399/mo) + 7.5% revenue share on sales. You keep 92.5% of everything you earn. No surprise fees, no per-transaction charges beyond the platform share."
    },
    {
      q: "Can I use my own domain and branding?",
      a: "Yes. On Growth and Scale plans, you can run everything under your own domain with your own branding. Customers will never see the RequestMint name unless you tell them."
    },
    {
      q: "What happens after a customer buys?",
      a: "RequestMint processes the payment, sends a receipt, and automatically delivers the product — via download link, access portal, or license key. You get a notification. Everything else is handled."
    },
    {
      q: "Is there a free trial?",
      a: "Yes. 14 days, full access to Growth features. No credit card required. If it doesn't work for you, cancel with one click."
    },
    {
      q: "How is this different from other storefront tools?",
      a: "Most storefront tools help you sell after you already know what to offer. RequestMint helps you discover WHAT to sell from your existing customer communication, then launch it faster."
    },
  ]

  return (
    <section id="faq" className="relative z-10 py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-indigo-500/10 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-5">
            Questions people ask
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="text-white font-medium text-sm pr-4">{f.q}</span>
                <svg className={`w-5 h-5 flex-shrink-0 text-slate-500 transition-transform ${open === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">{f.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Final CTA / Signup
function SignupCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    
    // Simulate API call - in production, connect to a real backend
    setTimeout(() => {
      const leads = JSON.parse(localStorage.getItem('rm_leads') || '[]')
      if (!leads.includes(email)) {
        leads.push(email)
        localStorage.setItem('rm_leads', JSON.stringify(leads))
      }
      setSubmitted(true)
      setLoading(false)
    }, 1200)
  }

  return (
    <section id="signup" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-cyan-600/20 rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-b from-indigo-600/10 to-cyan-600/5 border border-indigo-500/20 rounded-3xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Your customers already told you<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400"> what to sell.</span>
            </h2>
            <p className="text-slate-400 text-lg mt-5 max-w-xl mx-auto">
              Stop guessing what to build. Start earning from demand you already have. 
              Free for 14 days. No credit card.
            </p>
            
            {!submitted ? (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  className="flex-1 bg-white/10 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.13] transition-all"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:shadow-lg hover:shadow-indigo-500/25 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Starting...
                    </span>
                  ) : 'Start Free Trial'}
                </button>
              </form>
            ) : (
              <div className="mt-10 p-5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                <p className="text-emerald-400 font-semibold text-sm">✅ You're on the list! Check your inbox for next steps.</p>
                <p className="text-emerald-400/70 text-xs mt-1">We'll be in touch within 24 hours.</p>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-slate-500 text-xs">
              {['No credit card required', '14-day free trial', 'Cancel anytime', '92.5% revenue share'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <svg className="w-3.5 h-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <span className="text-white font-bold text-lg">RequestMint</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
            <a href="#" className="hover:text-white transition-colors">Blog</a>
          </div>
          <p className="text-slate-600 text-xs">© 2026 RequestMint. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <NavBar />
      <main>
        {/* Hero */}
        <section className="relative min-h-screen flex items-center">
          <AnimatedHeroBackground />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 w-full">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-indigo-300 text-xs font-medium">Now in public beta — 200+ creators earning</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.08] tracking-tight">
                Turn customer demand<br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-400">
                  {' '}into digital products
                </span>
                <br />
                <span className="text-white">that sell themselves</span>
              </h1>
              
              <p className="text-slate-400 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed">
                RequestMint finds what your customers keep asking for, 
                builds the offer page and checkout in minutes, and delivers 
                it automatically. From signal to sale — on autopilot.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
                <a href="#signup" className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:shadow-2xl hover:shadow-indigo-500/30 hover:-translate-y-0.5">
                  Start Free — No Card Needed
                </a>
                <a href="#how-it-works" className="w-full sm:w-auto bg-white/[0.07] hover:bg-white/[0.12] border border-white/10 text-white px-8 py-4 rounded-xl font-semibold text-base transition-all hover:-translate-y-0.5">
                  See How It Works →
                </a>
              </div>
              
              <p className="text-slate-600 text-xs mt-5">Takes 3 minutes to set up. Free for 14 days.</p>

              {/* Social proof numbers */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-14 pt-14 border-t border-white/5">
                {[
                  { n: '200+', l: 'Creators earning' },
                  { n: '$2.4M+', l: 'Revenue generated' },
                  { n: '14 days', l: 'Free trial' },
                  { n: '3 min', l: 'Setup time' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-black text-white">{s.n}</div>
                    <div className="text-slate-500 text-xs mt-1">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
              <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce" />
            </div>
          </div>
        </section>

        <TrustedBy />
        <ProblemSection />
        <HowItWorks />
        <FeaturesSection />
        <WhoIsItFor />
        <RevenueSimulator />
        <Testimonials />
        <Pricing />
        <FAQ />
        <SignupCTA />
      </main>
      <Footer />
    </div>
  )
}
