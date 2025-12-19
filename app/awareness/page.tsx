import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Phone, MessageSquare, HelpCircle, Heart, AlertCircle } from 'lucide-react'

export default function Awareness() {
  const faqItems = [
    {
      question: 'What does a breast lump feel like?',
      answer: 'A breast lump might feel like a hard mass, thickening, or swelling. It could be round, irregular shaped, tender, or painless. Many lumps are not cancer (like cysts or fibroadenomas), but any new lump should be checked by a doctor.'
    },
    {
      question: 'Is breast pain a sign of cancer?',
      answer: 'Breast pain alone is rarely a sign of cancer. However, any persistent pain or unusual symptoms should be discussed with your doctor. Cyclic pain related to your period is common and usually not serious.'
    },
    {
      question: 'Can men get breast cancer?',
      answer: 'Yes, men can get breast cancer, though it\'s rare. About 1 in 100 breast cancer cases occur in men. Men should also be aware of any changes in their breast tissue and report them to a doctor.'
    },
    {
      question: 'At what age should I start mammograms?',
      answer: 'Guidelines vary, but most experts recommend starting at age 40-50. However, if you have family history or other risk factors, talk to your doctor about starting earlier. Your individual risk profile matters most.'
    },
    {
      question: 'What should I do if I find a lump?',
      answer: 'Don\'t panic. About 80% of breast lumps are not cancer. But you should call your doctor and describe what you found. Your doctor will examine you and may order imaging tests if needed. Early evaluation is always better than waiting.'
    },
    {
      question: 'How often should I do self-exams?',
      answer: 'Check your breasts once a month, about a week after your period starts. This helps you know what\'s normal for you. Consistency is more important than perfect technique - you\'re learning your own normal pattern.'
    },
    {
      question: 'Can stress cause breast cancer?',
      answer: 'There\'s no direct evidence that stress causes breast cancer. However, chronic stress can affect overall health. Managing stress through exercise, sleep, and relaxation is good for your general wellness and peace of mind.'
    },
    {
      question: 'Is mammography painful?',
      answer: 'Mammography involves gentle compression of the breast to get clear images. It might feel uncomfortable, especially before your period, but it shouldn\'t be painful. Tell the technician if you experience pain so they can adjust.'
    }
  ]

  const resources = [
    {
      title: 'National Breast Cancer Hotline',
      phone: '1-800-4-CANCER (1-800-422-6237)',
      description: 'Free information and support 24/7'
    },
    {
      title: 'Breast Cancer.org',
      phone: 'Website: www.breastcancer.org',
      description: 'Comprehensive information and community support'
    },
    {
      title: 'Susan G. Komen',
      phone: 'Phone: 1-877-4-KOMEN (1-877-465-6636)',
      description: 'Research, education, and community programs'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Help & Resources
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Support, information, and answers to common questions about breast cancer awareness.
          </p>
        </section>

        {/* Resources */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Helpful Resources & Support
          </h2>
          <div className="space-y-4">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 soft-shadow border-l-4 border-primary"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">
                  {resource.title}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {resource.phone}
                </p>
                <p className="text-foreground/70">
                  {resource.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Self-Examination Tips */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Simple Self-Examination Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-8 soft-shadow">
              <h4 className="font-bold text-primary text-lg mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Visual Check (Mirror Method)
              </h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>Stand shirtless in front of a mirror</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Look for dimples or puckering</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Check nipples for discharge</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Raise arms and look for changes</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 soft-shadow">
              <h4 className="font-bold text-accent text-lg mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Tactile Check (Touch Method)
              </h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">1.</span>
                  <span>Lie on your back with pillow support</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">2.</span>
                  <span>Use fingertips to check in circular motions</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">3.</span>
                  <span>Check armpit area too</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">4.</span>
                  <span>Repeat on both sides</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Warning Signs - When to See a Doctor
          </h2>
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <p className="text-foreground/80 mb-6">
              Contact your doctor right away if you notice:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'A new lump or mass (especially if hard)',
                'Redness or swelling',
                'Dimpling or puckering of skin',
                'Nipple discharge (especially bloody)',
                'Nipple turning inward',
                'Persistent breast pain in one area',
                'Skin texture changes (like orange peel)',
                'Swelling in armpit'
              ].map((sign, index) => (
                <div key={index} className="flex gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{sign}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center flex items-center justify-center gap-2">
            <HelpCircle className="w-8 h-8" />
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 soft-shadow"
              >
                <h4 className="font-bold text-foreground mb-3 text-lg">
                  Q: {item.question}
                </h4>
                <p className="text-foreground/80 leading-relaxed">
                  <span className="font-bold text-primary">A:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Emotional Support */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <div className="bg-primary/10 border-2 border-primary/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Heart className="w-6 h-6 text-primary" />
              Emotional Support Matters
            </h2>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              If you're worried about breast cancer, remember: most breast changes are not cancer. Still, your concerns are valid. Many women feel anxious about breast health, and that's completely normal.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Don't hesitate to reach out to friends, family, support groups, or counselors. Taking care of your mental health is just as important as your physical health. Together, we support each other through health journeys.
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Take Control of Your Health Today
          </h3>
          <p className="text-foreground/70 mb-6">
            Knowledge and awareness are your best tools for health. Start your assessment or learn more about prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/form"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold btn-smooth hover:scale-105 transition-all"
            >
              Take Assessment
            </a>
            <a
              href="/prevention"
              className="px-8 py-3 bg-secondary text-foreground rounded-xl font-bold btn-smooth hover:scale-105 transition-all"
            >
              Prevention Tips
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
