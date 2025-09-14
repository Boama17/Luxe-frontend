import { Suspense } from 'react'
import DashboardContent from '@/components/agent/DashboardContent'
import DashboardSkeleton from '@/components/agent/DashboardSkeleton'

export default function AgentDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </div>
  )
}