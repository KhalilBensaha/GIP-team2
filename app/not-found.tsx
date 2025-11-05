import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
  <main className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-xl p-10 md:p-16 text-center">
          <div className="mx-auto max-w-sm">
            <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-linear-to-br from-amber-50 to-rose-50 mb-6 ring-1 ring-amber-100">
              {/* simple magnifier / not found illustration */}
              <svg className="w-14 h-14 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-foreground">404</h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-700">Page not found</h2>
            <p className="mt-4 text-gray-600">We couldn't find the page you're looking for. It may have been removed or the URL is incorrect.</p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Link href="/">Take me home</Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="/">Explore homepage</Link>
              </Button>
            </div>

            <div className="mt-8 text-xs text-gray-400">Tip: Check the URL for typos or head back to the homepage to continue exploring.</div>
          </div>
        </div>
      </div>
    </main>
  )
}
