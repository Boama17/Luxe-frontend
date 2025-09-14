import AgentSidebar from '@/components/agent/AgentSidebar'
import AgentHeader from '@/components/agent/AgentHeader'

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-gray-50">
      <AgentSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AgentHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}