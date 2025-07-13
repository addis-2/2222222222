import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Users, 
  Calendar, 
  MessageSquare, 
  Award, 
  TrendingUp, 
  Bell,
  BookOpen,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

function Dashboard({ user }) {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!user) {
    return (
      <div className="py-12 lg:py-20">
        <div className="container text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Please log in to access your dashboard
          </h1>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Sign In
          </Link>
        </div>
      </div>
    )
  }

  const getGreeting = () => {
    const hour = currentTime.getHours()
    if (hour < 12) return 'Good morning'
    if (hour < 17) return 'Good afternoon'
    return 'Good evening'
  }

  const stats = [
    { icon: Users, label: 'My Clubs', value: '3', color: 'bg-blue-500' },
    { icon: Calendar, label: 'Upcoming Events', value: '5', color: 'bg-green-500' },
    { icon: MessageSquare, label: 'Messages', value: '12', color: 'bg-purple-500' },
    { icon: Award, label: 'Achievements', value: '8', color: 'bg-yellow-500' }
  ]

  const recentActivities = [
    {
      id: 1,
      type: 'club',
      title: 'Joined Computer Science Society',
      time: '2 hours ago',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'event',
      title: 'Registered for Cultural Festival',
      time: '1 day ago',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'message',
      title: 'New message from Drama Club',
      time: '2 days ago',
      icon: MessageSquare,
      color: 'text-purple-600'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Annual Cultural Festival',
      date: '2024-03-15',
      time: '09:00 AM',
      location: 'Main Campus',
      status: 'registered'
    },
    {
      id: 2,
      title: 'Tech Innovation Workshop',
      date: '2024-03-20',
      time: '02:00 PM',
      location: 'Computer Lab',
      status: 'interested'
    },
    {
      id: 3,
      title: 'Student Council Meeting',
      date: '2024-03-25',
      time: '10:00 AM',
      location: 'Conference Hall',
      status: 'pending'
    }
  ]

  const notifications = [
    {
      id: 1,
      title: 'New club registration approved',
      message: 'Your application to join Photography Club has been approved',
      time: '1 hour ago',
      type: 'success',
      read: false
    },
    {
      id: 2,
      title: 'Event reminder',
      message: 'Cultural Festival starts tomorrow at 9:00 AM',
      time: '3 hours ago',
      type: 'info',
      read: false
    },
    {
      id: 3,
      title: 'Payment due',
      message: 'Club membership fee payment is due in 3 days',
      time: '1 day ago',
      type: 'warning',
      read: true
    }
  ]

  return (
    <div className="py-6 lg:py-8">
      <div className="container">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 lg:p-8 text-white mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">
                {getGreeting()}, {user.name}!
              </h1>
              <p className="text-blue-100 mb-4 lg:mb-0">
                Welcome back to your Student Council dashboard
              </p>
              <div className="text-sm text-blue-200">
                Last login: {new Date(user.loginTime || Date.now()).toLocaleString()}
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="text-blue-200">
                {currentTime.toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-4 lg:p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
                <div className={`w-10 h-10 lg:w-12 lg:h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
                <TrendingUp className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center`}>
                      <activity.icon className={`w-4 h-4 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/activity"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View all activity →
                </Link>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{event.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        event.status === 'registered' ? 'bg-green-100 text-green-800' :
                        event.status === 'interested' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {event.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {event.time}
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{event.location}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  to="/events"
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  View all events →
                </Link>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
              <Bell className="w-5 h-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-3 rounded-lg border ${
                    notification.read ? 'bg-gray-50 border-gray-200' : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      notification.type === 'success' ? 'bg-green-100' :
                      notification.type === 'warning' ? 'bg-yellow-100' :
                      'bg-blue-100'
                    }`}>
                      {notification.type === 'success' ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : notification.type === 'warning' ? (
                        <AlertCircle className="w-4 h-4 text-yellow-600" />
                      ) : (
                        <Bell className="w-4 h-4 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 text-sm">
                        {notification.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {notification.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/notifications"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                View all notifications →
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Join a Club', description: 'Browse and join student clubs', link: '/clubs', icon: Users, color: 'bg-blue-500' },
              { title: 'View Events', description: 'See upcoming events and activities', link: '/events', icon: Calendar, color: 'bg-green-500' },
              { title: 'Contact Support', description: 'Get help with any issues', link: '/contact', icon: MessageSquare, color: 'bg-purple-500' },
              { title: 'My Profile', description: 'Update your profile information', link: '/profile', icon: BookOpen, color: 'bg-orange-500' }
            ].map((action, index) => (
              <Link
                key={index}
                to={action.link}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard