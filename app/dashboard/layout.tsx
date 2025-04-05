import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Economics Quiz Dashboard",
  description: "Interactive economics quiz dashboard for IB DP students",
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-gray-100">{children}</div>
}

