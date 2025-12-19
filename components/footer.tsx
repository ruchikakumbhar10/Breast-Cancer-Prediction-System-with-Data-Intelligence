export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-primary mb-4">About</h3>
            <p className="text-sm text-foreground/70">
              Supporting women's health through simple, friendly information about breast cancer awareness and early detection.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2 text-foreground/70">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/prevention" className="hover:text-primary transition-colors">Prevention</a></li>
              <li><a href="/awareness" className="hover:text-primary transition-colors">Help & Resources</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-primary mb-4">Support</h3>
            <p className="text-sm text-foreground/70 mb-3">
              For urgent health concerns, please contact your doctor or local healthcare provider.
            </p>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-foreground/60">
          <p>&copy; 2025 Breast Cancer Awareness Initiative. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
