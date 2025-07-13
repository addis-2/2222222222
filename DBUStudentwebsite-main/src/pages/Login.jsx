import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, Eye, EyeOff, LogIn } from 'lucide-react'

function Login({ setUser }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Demo accounts for testing
  const demoAccounts = [
    { email: 'student@dbu.edu.et', password: 'password', role: 'student', name: 'John Doe' },
    { email: 'admin@dbu.edu.et', password: 'admin123', role: 'admin', name: 'Admin User' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.endsWith('@dbu.edu.et')) {
      newErrors.email = 'Must use DBU email address (@dbu.edu.et)'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Check demo accounts
    const account = demoAccounts.find(
      acc => acc.email === formData.email && acc.password === formData.password
    )

    if (account) {
      const user = {
        id: Date.now(),
        name: account.name,
        email: account.email,
        role: account.role,
        loginTime: new Date().toISOString()
      }

      setUser(user)
      alert('Login successful!')
      navigate('/dashboard')
    } else {
      // For any other @dbu.edu.et email, create a generic student account
      if (formData.email.endsWith('@dbu.edu.et')) {
        const user = {
          id: Date.now(),
          name: formData.email.split('@')[0].replace('.', ' ').replace(/\b\w/g, l => l.toUpperCase()),
          email: formData.email,
          role: 'student',
          loginTime: new Date().toISOString()
        }

        setUser(user)
        alert('Login successful!')
        navigate('/dashboard')
      } else {
        setErrors({ email: 'Invalid email or password' })
      }
    }

    setIsSubmitting(false)
  }

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="container">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <LogIn className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Welcome Back
              </h1>
              <p className="text-gray-600">
                Sign in to your DBU Student Council account
              </p>
            </div>

            {/* Demo Accounts Info */}
            <div className="bg-blue-50 rounded-lg p-4 mb-6">
              <h3 className="font-medium text-blue-900 mb-2">Demo Accounts:</h3>
              <div className="text-sm text-blue-800 space-y-1">
                <p><strong>Student:</strong> student@dbu.edu.et / password</p>
                <p><strong>Admin:</strong> admin@dbu.edu.et / admin123</p>
                <p className="text-xs text-blue-600 mt-2">
                  Or use any @dbu.edu.et email with any password
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`pl-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.name@dbu.edu.et"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`pl-10 pr-10 w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700">
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Register Link */}
            <p className="text-center text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-700 font-medium">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login