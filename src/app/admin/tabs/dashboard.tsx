import StatCard from "../components/StatCard";
import PropertyCard from "../components/PropertyCard";
import { Plus, UserCheck, MessageCircle } from "lucide-react";

export default function DashboardTab({
  statCards,
  properties,
  setShowPropertyModal,
}: {
  statCards: any[];
  properties: any[];
  setShowPropertyModal: (show: boolean) => void;
}) {
  return (
    <div className="space-y-8 px-4 sm:px-6 lg:px-8 py-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Properties */}
        <div className="lg:col-span-2 min-w-[20rem] lg:min-w-[50rem] place-self-center">
          <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-emerald-900 mb-4">Recent Properties</h3>
            <div className="space-y-4">
              {properties.slice(0, 3).map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <div className="bg-white/90 rounded-2xl shadow border border-emerald-100 p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-emerald-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button
                onClick={() => setShowPropertyModal(true)}
                className="w-full flex items-center gap-3 p-3 text-left bg-emerald-50 text-emerald-800 rounded-xl hover:bg-emerald-100 font-medium"
              >
                <Plus className="w-5 h-5" />
                Add New Property
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left bg-yellow-50 text-yellow-800 rounded-xl hover:bg-yellow-100 font-medium">
                <UserCheck className="w-5 h-5" />
                Approve Agents
              </button>
              <button className="w-full flex items-center gap-3 p-3 text-left bg-green-50 text-green-800 rounded-xl hover:bg-green-100 font-medium">
                <MessageCircle className="w-5 h-5" />
                View Messages
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
