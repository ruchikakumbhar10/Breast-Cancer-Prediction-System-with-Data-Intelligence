'use client'

import { useState, useEffect } from 'react'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { Trash2, Edit2, Eye } from 'lucide-react'

interface Prediction {
  id: string
  date: string
  age: string
  riskLevel: string
  score: number
  lumpFelt: boolean
  painLevel: string | null
  familyHistory: boolean
  textureChanges: boolean
  tumorSize: string
}

export default function ReportsDashboard() {
  const [predictions, setPredictions] = useState<Prediction[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editData, setEditData] = useState<Partial<Prediction>>({})

  useEffect(() => {
    const stored = localStorage.getItem('predictions')
    if (stored) {
      try {
        setPredictions(JSON.parse(stored))
      } catch (err) {
        console.error('Failed to load predictions:', err)
      }
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('predictions', JSON.stringify(predictions))
    }
  }, [predictions, isLoading])

  const handleDelete = (id: string) => {
    setPredictions(predictions.filter(p => p.id !== id))
  }

  const handleEditStart = (prediction: Prediction) => {
    setEditingId(prediction.id)
    setEditData(prediction)
  }

  const handleEditSave = () => {
    if (editingId) {
      setPredictions(predictions.map(p =>
        p.id === editingId ? { ...p, ...editData } : p
      ))
      setEditingId(null)
      setEditData({})
    }
  }

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'high':
        return 'bg-red-100 text-red-800'
      case 'medium':
        return 'bg-orange-100 text-orange-800'
      case 'low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
        {/* Header Section */}
        <section className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold heading-dark-pink mb-4 text-balance">
            Your Health Reports
          </h1>
          <p className="text-lg text-slate-600 mb-2 subheading-puppy-pink font-semibold">
            View and manage all your predictions
          </p>
          <p className="text-slate-600">
            Track your health assessments over time and manage your records.
          </p>
        </section>

        {/* Dashboard Content */}
        <section className="max-w-6xl mx-auto px-4 pb-16">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-slate-600">Loading...</p>
            </div>
          ) : predictions.length === 0 ? (
            <div className="bg-white rounded-2xl p-12 text-center soft-shadow">
              <p className="text-lg text-slate-600 mb-4">
                No predictions yet. Start by taking an assessment!
              </p>
              <a
                href="/form"
                className="inline-block px-8 py-3 bg-[#c1235b] text-white rounded-xl font-semibold hover:bg-[#a01a48] transition-colors"
              >
                Take Assessment
              </a>
            </div>
          ) : (
            <div className="bg-white rounded-2xl overflow-hidden soft-shadow">
              {/* Table Header */}
              <div className="grid grid-cols-1 md:grid-cols-8 gap-4 p-6 bg-gradient-to-r from-[#c1235b] to-[#e888c7] text-white font-semibold">
                <div>Date</div>
                <div>Age</div>
                <div>Risk Level</div>
                <div>Score</div>
                <div>Lump</div>
                <div>Pain</div>
                <div>Family Hx</div>
                <div className="text-center">Actions</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-slate-200">
                {predictions.map((pred, idx) => (
                  <div key={pred.id} className="grid grid-cols-1 md:grid-cols-8 gap-4 p-6 hover:bg-slate-50 transition-colors">
                    {editingId === pred.id ? (
                      <>
                        <input
                          type="text"
                          value={editData.date || ''}
                          onChange={(e) => setEditData({ ...editData, date: e.target.value })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        />
                        <input
                          type="text"
                          value={editData.age || ''}
                          onChange={(e) => setEditData({ ...editData, age: e.target.value })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        />
                        <select
                          value={editData.riskLevel || ''}
                          onChange={(e) => setEditData({ ...editData, riskLevel: e.target.value })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        >
                          <option>low</option>
                          <option>medium</option>
                          <option>high</option>
                        </select>
                        <input
                          type="number"
                          value={editData.score || 0}
                          onChange={(e) => setEditData({ ...editData, score: parseInt(e.target.value) })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        />
                        <select
                          value={editData.lumpFelt ? 'Yes' : 'No'}
                          onChange={(e) => setEditData({ ...editData, lumpFelt: e.target.value === 'Yes' })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                        <input
                          type="text"
                          value={editData.painLevel || ''}
                          onChange={(e) => setEditData({ ...editData, painLevel: e.target.value })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        />
                        <select
                          value={editData.familyHistory ? 'Yes' : 'No'}
                          onChange={(e) => setEditData({ ...editData, familyHistory: e.target.value === 'Yes' })}
                          className="px-3 py-2 border-2 border-[#f0a8d8] rounded-lg"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={handleEditSave}
                            className="px-3 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-3 py-2 bg-slate-400 text-white rounded-lg hover:bg-slate-500 transition-colors text-sm"
                          >
                            Cancel
                          </button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="text-sm text-slate-700">{pred.date}</div>
                        <div className="text-sm text-slate-700">{pred.age}</div>
                        <div>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getRiskColor(pred.riskLevel)}`}>
                            {pred.riskLevel.charAt(0).toUpperCase() + pred.riskLevel.slice(1)}
                          </span>
                        </div>
                        <div className="text-sm font-semibold text-slate-700">{pred.score}</div>
                        <div className="text-sm text-slate-700">{pred.lumpFelt ? 'Yes' : 'No'}</div>
                        <div className="text-sm text-slate-700 capitalize">{pred.painLevel || '-'}</div>
                        <div className="text-sm text-slate-700">{pred.familyHistory ? 'Yes' : 'No'}</div>
                        <div className="flex gap-2 justify-center">
                          <button
                            onClick={() => handleEditStart(pred)}
                            className="p-2 bg-[#f0a8d8] text-[#c1235b] rounded-lg hover:bg-[#e888c7] transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(pred.id)}
                            className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  )
}
