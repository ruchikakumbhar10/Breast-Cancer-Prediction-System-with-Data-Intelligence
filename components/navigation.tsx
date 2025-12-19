'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Heart } from 'lucide-react'

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/form', label: 'Prediction' },
    { href: '/prevention', label: 'Prevention' },
    { href: '/awareness', label: 'Help & Tips' },
    { href: '/reports', label: 'Reports' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[#f0dce8] soft-shadow">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-[#c1235b]">
          <Heart className="w-6 h-6" />
          <span>HealthCare</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                pathname === item.href
                  ? 'text-[#c1235b]'
                  : 'text-slate-600 hover:text-[#c1235b]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="md:hidden">
          <button className="p-2 rounded-lg hover:bg-[#f0a8d8]/20">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
