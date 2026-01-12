import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import Link from 'next/link'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  // Get stats
  const [
    totalContacts,
    activeContacts,
    recentInteractions,
    upcomingMeetings,
  ] = await Promise.all([
    prisma.contact.count({ where: { createdById: session?.user?.id } }),
    prisma.contact.count({
      where: {
        createdById: session?.user?.id,
        status: { in: ['contacted', 'meeting', 'interested'] }
      }
    }),
    prisma.interaction.count({
      where: {
        createdById: session?.user?.id,
        createdAt: { gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
      }
    }),
    prisma.interaction.count({
      where: {
        createdById: session?.user?.id,
        type: 'meeting',
        meetingDate: { gte: new Date() }
      }
    }),
  ])

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Welcome back, {session?.user?.name}!</h1>
        <p className="mt-2 text-gray-600">Here's an overview of your fundraising progress</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Contacts</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{totalContacts}</p>
            </div>
            <div className="text-4xl">👥</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Deals</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{activeContacts}</p>
            </div>
            <div className="text-4xl">🎯</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Week's Activity</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{recentInteractions}</p>
            </div>
            <div className="text-4xl">📊</div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Upcoming Meetings</p>
              <p className="mt-2 text-3xl font-bold text-gray-900">{upcomingMeetings}</p>
            </div>
            <div className="text-4xl">📅</div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <Link
              href="/dashboard/contacts/new"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mr-3">➕</span>
              <div>
                <p className="font-medium text-gray-900">Add New Contact</p>
                <p className="text-sm text-gray-600">Add a new investor to your CRM</p>
              </div>
            </Link>
            <Link
              href="/dashboard/interactions/new"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mr-3">📝</span>
              <div>
                <p className="font-medium text-gray-900">Log Interaction</p>
                <p className="text-sm text-gray-600">Record a call, email, or meeting</p>
              </div>
            </Link>
            <Link
              href="/dashboard/insights"
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-2xl mr-3">🤖</span>
              <div>
                <p className="font-medium text-gray-900">View AI Insights</p>
                <p className="text-sm text-gray-600">Get personalized recommendations</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">🚀 Fundraising Progress</h2>
          <p className="mb-4">Your AI-powered fundraising assistant is here to help you close your round faster.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Track all investor conversations
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Get weekly progress insights
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Never miss a follow-up
            </li>
            <li className="flex items-center">
              <span className="mr-2">✓</span>
              Optimize your fundraising strategy
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
