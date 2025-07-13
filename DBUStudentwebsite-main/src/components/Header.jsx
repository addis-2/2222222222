import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut } from 'lucide-react'

function Header({ user, setUser }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Mission & Vision', href: '/mission' },
    { name: 'Branches', href: '/branches' },
    { name: 'Clubs', href: '/clubs' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleLogout = () => {
    setUser(null)
    setIsMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div>
              <div className="font-bold text-gray-900 text-lg">DBU Student Council</div>
              <div className="text-xs text-gray-500 hidden sm:block">Debre Birhan University</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-4'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/dashboard"
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <User className="w-4 h-4" />
                  <span className="font-medium">{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 text-gray-600 hover:text-red-600 font-medium"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="text-blue-600 hover:text-blue-700 font-medium px-4 py-2"
                >
                  Sign In
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors px-2 py-1 ${
                    isActive(item.href)
                      ? 'text-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              
              {user ? (
                <div className="pt-4 border-t border-gray-200 space-y-4">
                  <Link
                    to="/dashboard"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 px-2 py-1"
                  >
                    <User className="w-4 h-4" />
                    <span className="font-medium">{user.name}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium px-2 py-1"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-blue-600 hover:text-blue-700 font-medium px-2 py-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                  >
                    Register
                  </Link>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header