import { Home, LayoutDashboard, Users, MessageSquare, Settings, TrendingUp } from 'lucide-react';

export const sidebarItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'properties', icon: Home, label: 'Properties' },
  { id: 'users', icon: Users, label: 'Users' },
  { id: 'messages', icon: MessageSquare, label: 'Messages' },
  { id: 'analytics', icon: TrendingUp, label: 'Analytics' },
  { id: 'settings', icon: Settings, label: 'Settings' }
];

export default function Sidebar({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white/90 backdrop-blur-xl shadow-xl z-30 flex flex-col border-r border-emerald-100">
      <div className="flex items-center gap-3 px-6 py-6 border-b border-emerald-100">
        <div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center">
          <Home className="w-6 h-6 text-white" />
        </div>
        <span className="text-2xl font-bold text-emerald-900 font-[Elegant]">LuxeRealty</span>
      </div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-all duration-200 font-medium ${
                  activeTab === item.id
                    ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 shadow'
                    : 'text-gray-700 hover:bg-emerald-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}