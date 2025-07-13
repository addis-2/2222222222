import { Target, Eye, Lightbulb, Users, Award, Heart } from 'lucide-react'

function Mission() {
  const goals = [
    {
      icon: Target,
      title: 'Enhance Academic Experience',
      description: 'Provide support and resources to help students excel in their studies'
    },
    {
      icon: Heart,
      title: 'Promote Student Welfare',
      description: 'Ensure the well-being and safety of all students on campus'
    },
    {
      icon: Users,
      title: 'Foster Leadership Development',
      description: 'Create opportunities for students to develop leadership skills'
    },
    {
      icon: Lightbulb,
      title: 'Encourage Innovation',
      description: 'Support creative thinking and innovative solutions to challenges'
    },
    {
      icon: Award,
      title: 'Strengthen University Relations',
      description: 'Build strong partnerships between students and university administration'
    },
    {
      icon: Eye,
      title: 'Support Community Engagement',
      description: 'Connect students with local community service opportunities'
    }
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Mission & Vision
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Our mission and vision guide everything we do as we work to serve the student community
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl lg:text-3xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-lg text-blue-800 leading-relaxed">
              To advocate for student rights and interests, promote democratic governance, 
              and create an inclusive environment where all students can participate and 
              thrive in their university experience through leadership development, 
              community service, and academic excellence.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 lg:p-8">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-green-600 mr-3" />
              <h2 className="text-2xl lg:text-3xl font-bold text-green-900">Our Vision</h2>
            </div>
            <p className="text-lg text-green-800 leading-relaxed">
              To be the leading student union in Ethiopia, fostering academic excellence, 
              social engagement, and preparing students to become future leaders in their 
              communities and beyond while maintaining the highest standards of integrity 
              and service.
            </p>
          </div>
        </div>

        {/* Goals Section */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Goals
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These strategic goals drive our initiatives and programs throughout the academic year
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <goal.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {goal.title}
                </h3>
                <p className="text-gray-600">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Priorities */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-6 lg:p-8 text-white">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Strategic Priorities 2024
            </h2>
            <p className="text-blue-100 text-lg">
              Our focus areas for the current academic year
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Digital Innovation',
              'Student Wellness',
              'Academic Support',
              'Community Building'
            ].map((priority, index) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">
                  {index + 1}
                </div>
                <h3 className="font-semibold">
                  {priority}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mission