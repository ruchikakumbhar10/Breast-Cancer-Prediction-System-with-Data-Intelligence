import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Lightbulb, Users, Shield, Activity } from 'lucide-react'

export default function About() {
  const tips = [
    {
      icon: Lightbulb,
      title: 'What is Breast Cancer?',
      description: 'Breast cancer is when cells in the breast grow abnormally. Regular checks help catch it early when treatment is most effective.'
    },
    {
      icon: Users,
      title: 'Who Can Get It?',
      description: 'Breast cancer can affect women of any age. Most cases happen after age 50, but younger women should also stay aware and do self-checks.'
    },
    {
      icon: Shield,
      title: 'Early Detection Matters',
      description: 'Finding breast cancer in early stages means better treatment options and higher survival rates. Monthly self-exams are simple and important.'
    },
    {
      icon: Activity,
      title: 'When to See a Doctor',
      description: 'Visit your doctor if you notice lumps, pain, discharge, or skin changes. Regular mammograms after age 40 are also recommended.'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Understanding Breast Cancer
          </h1>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            Simple, easy-to-understand information about breast cancer that every woman should know.
          </p>
        </section>

        {/* Main Information */}
        <section className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-2xl soft-shadow mb-16">
          <div className="prose prose-lg max-w-none">
            <p className="text-foreground/80 leading-relaxed text-lg">
              Breast cancer is when cells in the breast grow in an abnormal way. While it sounds scary, catching it early gives you many more treatment options and much better chances of successful recovery. That's why knowing the basics is so important!
            </p>
            <p className="text-foreground/80 leading-relaxed text-lg mt-6">
              The good news? You have the power to take care of your health. By doing simple monthly self-checks and visiting your doctor regularly, you can catch any problems early.
            </p>
          </div>
        </section>

        {/* Info Cards Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tips.map((tip, index) => {
            const Icon = tip.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 soft-shadow card-hover"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {tip.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {tip.description}
                </p>
              </div>
            )
          })}
        </section>

        {/* Simple Facts */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Important Things to Know
          </h2>
          <div className="space-y-6">
            <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-bold text-primary text-lg mb-2">Monthly Self-Checks</h4>
              <p className="text-foreground/80">
                Get to know how your breasts normally feel. Check them once a month after your period. Look for lumps, dimples, or discharge.
              </p>
            </div>
            <div className="bg-accent/10 rounded-2xl p-6 border border-accent/20">
              <h4 className="font-bold text-accent text-lg mb-2">Regular Doctor Visits</h4>
              <p className="text-foreground/80">
                Talk to your doctor about when to start mammograms. Most women should start at age 40-50, but your doctor can advise you based on your health.
              </p>
            </div>
            <div className="bg-secondary/30 rounded-2xl p-6 border border-secondary/50">
              <h4 className="font-bold text-primary text-lg mb-2">Healthy Lifestyle</h4>
              <p className="text-foreground/80">
                Exercise regularly, eat healthy foods, limit alcohol, don't smoke, and maintain a healthy weight. These habits help reduce risk.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Factors */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Know Your Risk Factors
          </h2>
          <div className="bg-white rounded-2xl p-8 soft-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-primary mb-3">Higher Risk Factors</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Age over 50</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Family history of breast cancer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Starting periods early or menopause late</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-1">•</span>
                    <span>Obesity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-accent mb-3">You Can Control These</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Regular exercise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Healthy diet with fruits and vegetables</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Limit alcohol consumption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Don't smoke</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
