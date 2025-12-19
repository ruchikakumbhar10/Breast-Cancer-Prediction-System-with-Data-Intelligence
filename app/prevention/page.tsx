import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Leaf, Dumbbell, Heart, Moon, Droplet, AlertCircle } from 'lucide-react'

export default function Prevention() {
  const tips = [
    {
      icon: Dumbbell,
      title: 'Regular Exercise',
      description: 'Aim for at least 30 minutes of exercise most days of the week. This can be walking, dancing, swimming, or any activity you enjoy. Exercise helps maintain healthy weight and reduces breast cancer risk.'
    },
    {
      icon: Leaf,
      title: 'Healthy Eating',
      description: 'Eat plenty of vegetables, fruits, whole grains, and lean proteins. Limit red meat and processed foods. A healthy diet supports overall wellness and reduces health risks.'
    },
    {
      icon: Droplet,
      title: 'Limit Alcohol',
      description: 'If you drink, limit alcohol consumption. No more than 1 drink per day for women is recommended. Alcohol consumption is linked to increased breast cancer risk.'
    },
    {
      icon: Heart,
      title: 'Maintain Healthy Weight',
      description: 'Keep a healthy weight through balanced diet and exercise. Extra weight, especially after menopause, increases breast cancer risk. Talk to your doctor about a healthy weight for you.'
    },
    {
      icon: Moon,
      title: 'Don\'t Smoke',
      description: 'Smoking increases the risk of many health problems including breast cancer. If you smoke, seek help to quit. Many resources are available to support you.'
    },
    {
      icon: AlertCircle,
      title: 'Know Your Family History',
      description: 'Be aware if breast cancer runs in your family. Share this information with your doctor. You may need earlier or more frequent screening if you have family history.'
    }
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Prevention & Healthy Living
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Simple everyday habits that can help reduce your risk and support your overall health.
          </p>
        </section>

        {/* Main Tips */}
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

        {/* Monthly Self-Check Guide */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Monthly Self-Examination Guide
          </h2>
          <div className="bg-white rounded-2xl p-8 soft-shadow">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary text-lg mb-2">When to Check</h4>
                <p className="text-foreground/80">
                  Do your breast self-exam once a month, about 1 week after your period starts (or any day of the month if you don't have periods). Choose a day you'll remember easily.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-primary text-lg mb-4">How to Check - In Front of a Mirror</h4>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">1.</span>
                    <span>Stand in front of a mirror with arms at your sides</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">2.</span>
                    <span>Look for any dimpling, puckering, or redness</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">3.</span>
                    <span>Raise arms above your head and look again</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">4.</span>
                    <span>Check for any discharge from the nipples</span>
                  </li>
                </ol>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-primary text-lg mb-4">How to Check - By Touch</h4>
                <ol className="space-y-3 text-foreground/80">
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">1.</span>
                    <span>Lie on your back on your bed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">2.</span>
                    <span>Put a pillow under your right shoulder</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">3.</span>
                    <span>Use your left hand to examine your right breast in a circular pattern</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">4.</span>
                    <span>Use gentle pressure - you're checking for lumps or unusual thickening</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-primary flex-shrink-0">5.</span>
                    <span>Repeat on the left side with your right hand</span>
                  </li>
                </ol>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="font-bold text-accent text-lg mb-2">What to Look For</h4>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Lumps or knots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Thickening or swelling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Dimpling or puckering of skin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Redness or warmth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold mt-1">•</span>
                    <span>Discharge from nipple</span>
                  </li>
                </ul>
              </div>

              <div className="border-t border-border pt-6 bg-secondary/20 rounded-lg p-4">
                <p className="text-foreground/80">
                  <strong>Remember:</strong> Breast tissue naturally has bumps and lumps. Don't panic if you find something unusual - most lumps are not cancer. However, if you notice something new or different from your normal, contact your doctor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regular Screenings */}
        <section className="max-w-4xl mx-auto px-4 py-12 mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            When to Visit Your Doctor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8">
              <h4 className="font-bold text-primary text-lg mb-4">Regular Check-ups</h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Every year for clinical breast exams</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Mammograms starting at age 40-50 (ask your doctor)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Earlier if family history of breast cancer</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8">
              <h4 className="font-bold text-accent text-lg mb-4">See Doctor Immediately If</h4>
              <ul className="space-y-3 text-foreground/80 text-sm">
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>You find a new lump</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Persistent pain or swelling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Skin changes or dimpling</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Unusual discharge from nipple</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
