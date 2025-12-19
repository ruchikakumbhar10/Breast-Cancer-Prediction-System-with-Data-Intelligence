'use client'

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Heart, ArrowRight, MessageCircle } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const initChatbot = () => {
      if (!window.chatbase || window.chatbase("getState") !== "initialized") {
        window.chatbase = (...args) => {
          if (!window.chatbase.q) {
            window.chatbase.q = []
          }
          window.chatbase.q.push(args)
        }
        window.chatbase = new Proxy(window.chatbase, {
          get(target, prop) {
            if (prop === "q") {
              return target.q
            }
            return (...args) => target(prop, ...args)
          }
        })
      }

      const onLoad = () => {
        const script = document.createElement("script")
        script.src = "https://www.chatbase.co/embed.min.js"
        script.id = "fHrP8OfxOdDOZb4G25b3W"
        script.domain = "www.chatbase.co"
        document.body.appendChild(script)
      }

      if (document.readyState === "complete") {
        onLoad()
      } else {
        window.addEventListener("load", onLoad)
      }
    }

    initChatbot()
  }, [])

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="mb-8 inline-block p-4 rounded-full bg-[#f0a8d8]/20">
            <Heart className="w-12 h-12 text-[#c1235b]" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold heading-dark-pink mb-4 text-balance">
            Your Health Matters
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto text-balance">
            Early detection saves lives. Learn about breast cancer awareness, prevention, and take a simple self-assessment test with our friendly guide.
          </p>

          <Link
            href="/form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1235b] text-white rounded-2xl font-bold text-lg btn-smooth hover:shadow-lg hover:scale-105 transition-all"
          >
            Start Test <ArrowRight className="w-5 h-5" />
          </Link>
        </section>

        {/* Image Section */}
        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="h-72 bg-gradient-to-br from-[#c1235b]/20 to-[#f0a8d8]/20 rounded-2xl flex items-center justify-center soft-shadow">
            <img src="/breast-cancer-awareness-ribbon-pink.jpg" alt="Awareness Ribbon" className="w-32 h-32 object-contain" />
          </div>
          <div className="h-72 bg-gradient-to-br from-[#f0a8d8]/20 to-[#c1235b]/20 rounded-2xl flex items-center justify-center soft-shadow">
            <img src="/women-health-wellness-care.jpg" alt="Women's Health" className="w-32 h-32 object-contain" />
          </div>
          <div className="h-72 bg-gradient-to-br from-[#e888c7]/20 to-[#f0a8d8]/20 rounded-2xl flex items-center justify-center soft-shadow">
            <img src="/early-detection-healthcare-support.jpg" alt="Early Detection" className="w-32 h-32 object-contain" />
          </div>
        </section>

        {/* Info Cards */}
        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-2xl p-8 soft-shadow card-hover">
            <div className="w-12 h-12 bg-[#f0a8d8]/40 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#c1235b]" />
            </div>
            <h3 className="text-xl font-bold heading-dark-pink mb-3">Early Detection</h3>
            <p className="text-slate-600">
              Finding breast cancer early can significantly improve treatment outcomes and prognosis.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 soft-shadow card-hover">
            <div className="w-12 h-12 bg-[#e888c7]/40 rounded-xl flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#c1235b]" />
            </div>
            <h3 className="text-xl font-bold heading-dark-pink mb-3">Simple Guidance</h3>
            <p className="text-slate-600">
              Our easy-to-understand tools help you learn about symptoms and when to see a doctor.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 soft-shadow card-hover">
            <div className="w-12 h-12 bg-[#f0a8d8]/40 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-[#c1235b]" />
            </div>
            <h3 className="text-xl font-bold heading-dark-pink mb-3">Support & Resources</h3>
            <p className="text-slate-600">
              Access helpline numbers, self-examination guides, and practical prevention tips.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 bg-gradient-to-r from-[#f0a8d8]/20 to-[#e888c7]/20 rounded-3xl text-center mb-16">
          <h2 className="text-3xl font-bold heading-dark-pink mb-4">Ready to Check Your Health?</h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto">
            Take our simple, friendly assessment to understand your health better. It only takes a few minutes.
          </p>
          <Link
            href="/form"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#c1235b] text-white rounded-2xl font-bold btn-smooth hover:shadow-lg hover:scale-105 transition-all"
          >
            Begin Assessment <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
      <Footer />
    </>
  )
}
