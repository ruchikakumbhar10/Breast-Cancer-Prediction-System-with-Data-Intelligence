'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { AlertCircle, CheckCircle, AlertTriangle, ArrowRight, RotateCcw } from 'lucide-react'
import Link from 'next/link'

interface AssessmentResult {
  riskLevel: 'low' | 'medium' | 'high'
  age: string
  lumpFelt: boolean
  painLevel: string | null
  familyHistory: boolean
  textureChanges: boolean
  tumorSize: string
}

export default function Result() {
  const router = useRouter()
  const [result, setResult] = useState<AssessmentResult | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = sessionStorage.getItem('assessmentResult')
    if (stored) {
      setResult(JSON.parse(stored))
    }
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!result) {
    return (
      <>
        <Navigation />
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <AlertCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-foreground mb-4">No Assessment Found</h1>
            <p className="text-foreground/70 mb-6">
              Please complete the assessment form first.
            </p>
            <Link
              href="/form"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-xl font-bold btn-smooth hover:scale-105"
            >
              Start Assessment
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  const riskConfig = {
    low: {
      icon: CheckCircle,
      title: 'Low Risk',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      description: 'Based on your answers, your risk appears to be low. Keep up with regular self-checks and annual doctor visits.',
      nextSteps: [
        'Continue monthly self-examination of your breasts',
        'Schedule annual check-ups with your doctor',
        'Maintain a healthy lifestyle with exercise and good nutrition',
        'Limit alcohol and avoid smoking',
        'Keep track of any changes and report to your doctor'
      ]
    },
    medium: {
      icon: AlertTriangle,
      title: 'Medium Risk',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      description: 'Your assessment shows some factors to monitor. Schedule a doctor\'s visit for professional evaluation.',
      nextSteps: [
        'Schedule an appointment with your doctor or gynecologist',
        'Discuss your symptoms and family history with your doctor',
        'Consider getting a mammogram if recommended by your doctor',
        'Do monthly breast self-examinations',
        'Maintain healthy habits: exercise, good diet, no smoking'
      ]
    },
    high: {
      icon: AlertCircle,
      title: 'Higher Risk',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      description: 'Your assessment indicates several factors that need professional attention. Please see a doctor as soon as possible.',
      nextSteps: [
        'Schedule an urgent appointment with your doctor or gynecologist',
        'Bring this assessment and any medical records with you',
        'Be prepared to discuss all symptoms in detail',
        'Your doctor may recommend imaging tests like mammogram or ultrasound',
        'Follow your doctor\'s recommendations carefully'
      ]
    }
  }

  const config = riskConfig[result.riskLevel]
  const Icon = config.icon

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-secondary/20">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Your Assessment Result
          </h1>
          <p className="text-foreground/70">
            Here's what your answers tell us
          </p>
        </section>

        {/* Result Card */}
        <section className="max-w-3xl mx-auto px-4 mb-12">
          <div className={`${config.bgColor} border-2 ${config.borderColor} rounded-2xl p-8 md:p-12`}>
            <div className="flex items-center gap-4 mb-6">
              <Icon className={`w-12 h-12 ${config.color}`} />
              <h2 className={`text-3xl font-bold ${config.color}`}>
                {config.title}
              </h2>
            </div>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              {config.description}
            </p>
            
            {/* Summary */}
            <div className="bg-white/70 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-foreground mb-4">Your Assessment Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-foreground/60">Age</p>
                  <p className="font-bold text-foreground">{result.age} years</p>
                </div>
                <div>
                  <p className="text-foreground/60">Lumps Felt</p>
                  <p className="font-bold text-foreground">{result.lumpFelt ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <p className="text-foreground/60">Family History</p>
                  <p className="font-bold text-foreground">{result.familyHistory ? 'Yes' : 'No'}</p>
                </div>
                <div>
                  <p className="text-foreground/60">Texture Changes</p>
                  <p className="font-bold text-foreground">{result.textureChanges ? 'Yes' : 'No'}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What to Do Next */}
        <section className="max-w-3xl mx-auto px-4 mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">What Should You Do Next?</h2>
          <div className="space-y-3">
            {config.nextSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-5 soft-shadow flex gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary text-sm">{index + 1}</span>
                </div>
                <p className="text-foreground/80 pt-1">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Important Note */}
        <section className="max-w-3xl mx-auto px-4 mb-12">
          <div className="bg-secondary/30 border border-border rounded-2xl p-8">
            <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Important Disclaimer
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              This assessment is for informational purposes only and is not a medical diagnosis. Your results should not replace professional medical advice. Please consult with a qualified healthcare provider for proper evaluation, diagnosis, and treatment. If you experience any concerning symptoms, seek immediate medical attention.
            </p>
          </div>
        </section>

        {/* Action Buttons */}
        <section className="max-w-3xl mx-auto px-4 pb-16 flex flex-col sm:flex-row gap-4">
          <Link
            href="/prevention"
            className="flex-1 py-4 px-6 bg-primary text-primary-foreground rounded-xl font-bold btn-smooth hover:scale-105 transition-all text-center flex items-center justify-center gap-2"
          >
            Learn Prevention Tips <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={() => {
              sessionStorage.removeItem('assessmentResult')
              router.push('/form')
            }}
            className="flex-1 py-4 px-6 bg-secondary text-foreground rounded-xl font-bold btn-smooth hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Retake Test <RotateCcw className="w-5 h-5" />
          </button>
        </section>
      </main>
      <Footer />
    </>
  )
}
