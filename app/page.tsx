export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          DevOps Emergency Toolkit
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Rapid Cloud Service<br />
          <span className="text-[#58a6ff]">Suspension Recovery</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          When your cloud provider suspends your account, every minute costs revenue.
          Get pre-configured migration scripts, real-time health monitoring, and emergency
          runbooks to recover and migrate in hours — not days.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Recovery Kit — $99/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: '⚡', title: 'Instant Scripts', desc: 'Pre-built migration scripts for AWS, GCP, Azure, and DigitalOcean ready to deploy.' },
            { icon: '🔒', title: 'Encrypted Backups', desc: 'Encrypted config backups stored cross-region so you never lose critical settings.' },
            { icon: '📡', title: 'Live Monitoring', desc: 'Real-time cloud health dashboard with automated alerts before suspension hits.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-3">{f.icon}</div>
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$99<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Cancel anytime. Instant access.</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited migration scripts',
              'Real-time cloud health monitoring',
              'Emergency runbooks & playbooks',
              'Encrypted cross-region config backups',
              'Automated cross-cloud migration APIs',
              'Priority Slack support',
              'New provider integrations monthly'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Instant Access
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How quickly can I migrate after a suspension?',
              a: 'Most customers complete a full migration within 2–4 hours using our pre-configured scripts and step-by-step runbooks. The dashboard auto-detects your existing infrastructure and generates a tailored migration plan.'
            },
            {
              q: 'Which cloud providers are supported?',
              a: 'We support AWS, Google Cloud, Azure, DigitalOcean, Linode, Vultr, and Hetzner. Cross-cloud migrations between any combination of these providers are fully automated via provider APIs.'
            },
            {
              q: 'Is my configuration data secure?',
              a: 'Yes. All backup configurations are AES-256 encrypted before storage and distributed across multiple regions. Only you hold the decryption keys — we never have access to your credentials or config data.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Cloud Suspension Recovery Kit. All rights reserved.
      </footer>
    </main>
  )
}
