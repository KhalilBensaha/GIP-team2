"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error("[v0] Global error:", error.message)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 mb-4">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h1>
                <p className="text-gray-600 text-sm mb-4">
                  We encountered an unexpected error. Please try again or contact support if the problem persists.
                </p>
                {error.digest && (
                  <p className="text-xs text-gray-500 bg-gray-50 p-3 rounded mt-4 font-mono break-all">
                    Error ID: {error.digest}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <Button onClick={() => reset()} className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  Try Again
                </Button>
                <Button onClick={() => (window.location.href = "/")} variant="outline" className="w-full">
                  Go Home
                </Button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500">Error details: {error.message || "Unknown error"}</p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
