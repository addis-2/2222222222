import { Link } from 'react-router-dom'
import { Users, BookOpen, Trophy } from 'lucide-react'

function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Exact match to screenshot */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Your Voice,{' '}
                <span className="text-yellow-400">Your Future</span>
              </h1>
              <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
                Join the Debre Birhan University Student Council and 
                shape your academic experience through leadership, 
                service, and community engagement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/clubs"
                  className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
                >
                  Join a Club
                  <span className="ml-2">→</span>
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Image - Rounded with students */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students with backpacks"
                  className="w-full h-80 lg:h-96 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Section - Exact match to screenshot */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-200 text-sm lg:text-base">Active Clubs</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">15K+</div>
              <div className="text-blue-200 text-sm lg:text-base">Students</div>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100+</div>
              <div className="text-blue-200 text-sm lg:text-base">Events/Year</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to grow, lead, and make a difference in your university experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Student Clubs',
                description: 'Join diverse clubs and organizations that match your interests and passions',
                icon: Users
              },
              {
                title: 'Leadership Programs',
                description: 'Develop leadership skills through various programs and initiatives',
                icon: Trophy
              },
              {
                title: 'Academic Support',
                description: 'Get help with academic challenges and connect with study groups',
                icon: BookOpen
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already making a difference at DBU
          </p>
          <Link
            to="/register"
            className="bg-yellow-500 text-blue-900 px-8 py-4 rounded-md font-semibold hover:bg-yellow-400 transition-colors inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home