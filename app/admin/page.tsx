import { AdminPanel } from "@/components/admin-panel"

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Wedding Admin Panel</h1>
          <p className="text-gray-600">Manage your wedding guest list and RSVPs</p>
        </div>
        <AdminPanel />
      </div>
    </div>
  )
}
