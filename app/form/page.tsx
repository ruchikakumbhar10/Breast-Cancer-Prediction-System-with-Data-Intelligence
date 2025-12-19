'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { ChevronRight } from 'lucide-react'

export default function PredictionForm() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    age: '',
    lumpFelt: null,
    painLevel: null,
    familyHistory: null,
    textureChanges: null,
    tumorSize: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    
    let riskLevel = 'low'
    const score = 
      (formData.age > 50 ? 2 : 0) +
      (formData.lumpFelt ? 3 : 0) +
      (formData.painLevel === 'high' ? 2 : formData.painLevel === 'medium' ? 1 : 0) +
      (formData.familyHistory ? 2 : 0) +
      (formData.textureChanges ? 2 : 0) +
      (formData.tumorSize > 0 ? Math.ceil(formData.tumorSize) : 0)

    if (score >= 8) riskLevel = 'high'
    else if (score >= 4) riskLevel = 'medium'

    const prediction = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString(),
      ...formData,
      riskLevel,
      score
    }

    // Store result in both sessionStorage and localStorage
    sessionStorage.setItem('assessmentResult', JSON.stringify(prediction))
    
    const existingPredictions = localStorage.getItem('predictions')
    const predictions = existingPredictions ? JSON.parse(existingPredictions) : []
    predictions.push(prediction)
    localStorage.setItem('predictions', JSON.stringify(predictions))
    
    router.push('/result')
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Header */}
        <section className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold heading-dark-pink mb-4 text-balance">
            Health Assessment
          </h1>
          <p className="text-lg subheading-puppy-pink font-semibold mb-2">
            Simple questions about your health
          </p>
          <p className="text-sm text-slate-600">
            This assessment takes about 5 minutes and asks simple, easy-to-answer questions.
          </p>
        </section>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 pb-16">
          {/* Age */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <label className="block mb-4">
              <span className="text-xl font-bold heading-dark-pink block mb-3">
                1. How old are you?
              </span>
              <input
                type="number"
                required
                min="18"
                max="120"
                value={formData.age}
                onChange={(e) => setFormData({...formData, age: e.target.value})}
                placeholder="Enter your age"
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-[#f0a8d8] focus:border-[#c1235b] focus:outline-none bg-[#fef5fa]"
              />
            </label>
          </div>

          {/* Lump Felt */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <span className="text-xl font-bold heading-dark-pink block mb-4">
              2. Have you felt any lumps in your breasts?
            </span>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, lumpFelt: false})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.lumpFelt === false
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, lumpFelt: true})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.lumpFelt === true
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Pain Level */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <span className="text-xl font-bold heading-dark-pink block mb-4">
              3. Do you experience any breast pain or discomfort?
            </span>
            <div className="grid grid-cols-4 gap-3">
              {['No', 'Low', 'Medium', 'High'].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setFormData({
                    ...formData,
                    painLevel: level === 'No' ? null : level.toLowerCase()
                  })}
                  className={`py-4 px-4 rounded-xl font-bold text-base transition-all btn-smooth ${
                    (level === 'No' ? formData.painLevel === null : formData.painLevel === level.toLowerCase())
                      ? 'bg-[#c1235b] text-white'
                      : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Family History */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <span className="text-xl font-bold heading-dark-pink block mb-4">
              4. Does anyone in your family have a history of breast cancer?
            </span>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, familyHistory: false})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.familyHistory === false
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, familyHistory: true})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.familyHistory === true
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Texture Changes */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <span className="text-xl font-bold heading-dark-pink block mb-4">
              5. Have you noticed any changes in breast texture or skin?
            </span>
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setFormData({...formData, textureChanges: false})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.textureChanges === false
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                No
              </button>
              <button
                type="button"
                onClick={() => setFormData({...formData, textureChanges: true})}
                className={`flex-1 py-4 px-6 rounded-xl font-bold text-lg transition-all btn-smooth ${
                  formData.textureChanges === true
                    ? 'bg-[#c1235b] text-white'
                    : 'bg-[#f0a8d8] text-slate-700 hover:bg-[#e888c7]'
                }`}
              >
                Yes
              </button>
            </div>
          </div>

          {/* Tumor Size */}
          <div className="bg-white rounded-2xl p-8 soft-shadow mb-6">
            <label className="block mb-4">
              <span className="text-xl font-bold heading-dark-pink block mb-3">
                6. Have you noticed any lumps? If yes, how big (in cm)?
              </span>
              <input
                type="number"
                step="0.1"
                min="0"
                max="10"
                value={formData.tumorSize}
                onChange={(e) => setFormData({...formData, tumorSize: parseFloat(e.target.value) || ''})}
                placeholder="Leave blank if no lumps"
                className="w-full px-6 py-4 text-lg rounded-xl border-2 border-[#f0a8d8] focus:border-[#c1235b] focus:outline-none bg-[#fef5fa]"
              />
              <p className="text-sm text-slate-600 mt-3">
                Don't know the exact size? That's okay - just give your best guess or leave blank.
              </p>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-5 px-6 bg-[#c1235b] text-white rounded-2xl font-bold text-lg btn-smooth hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            Check Result <ChevronRight className="w-5 h-5" />
          </button>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-[#fef5fa] rounded-xl text-center border-2 border-[#f0a8d8]">
            <p className="text-sm text-slate-700">
              <strong>Important:</strong> This assessment is for informational purposes only. It is not a medical diagnosis. Please consult with a healthcare provider for proper medical evaluation.
            </p>
          </div>
        </form>
      </main>
      <Footer />
    </>
  )
}
