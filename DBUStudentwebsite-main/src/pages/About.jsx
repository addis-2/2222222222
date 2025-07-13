import { Users, Target, Award, Heart } from 'lucide-react'

function About() {
  const values = [
    {
      icon: Target,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty and transparency in all our actions'
    },
    {
      icon: Users,
      title: 'Unity',
      description: 'We bring together students from all backgrounds and disciplines to work as one'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and encourage others to do the same'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'We are dedicated to serving the needs and interests of all students at DBU'
    }
  ]

  const leadership = [
    {
      name: 'Alemnesh Tadesse',
      position: 'President',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Leading strategic initiatives and student advocacy'
    },
    {
      name: 'Bekele Mekonnen',
      position: 'Vice President',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Coordinating daily operations and branch activities'
    },
    {
      name: 'Hewan Tadesse',
      position: 'Secretary',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Managing documentation and communications'
    }
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About DBU Student Council
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            The Debre Birhan University Student Council is the official representative body 
            of all students at DBU, dedicated to enhancing student life and academic experience.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20">
          <div className="bg-blue-50 rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4 lg:mb-6">Our Mission</h2>
            <p className="text-lg text-blue-800 leading-relaxed">
              To advocate for student rights and interests, promote academic excellence, 
              and create an inclusive environment where all students can thrive and succeed 
              in their university journey through leadership development and community engagement.
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-6 lg:p-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-green-900 mb-4 lg:mb-6">Our Vision</h2>
            <p className="text-lg text-green-800 leading-relaxed">
              To be the leading student organization in Ethiopia, fostering innovation, 
              leadership, and community engagement while preparing students to become 
              future leaders in their respective fields and communities.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide our actions and decisions in serving the student community
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced and dedicated leaders guiding the student council forward
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {leader.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {leader.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {leader.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* History */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center">
            Our History
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The DBU Student Council was established in 2010 with the founding of Debre Birhan University. 
              Since then, we have been the voice of students, advocating for their rights and working 
              tirelessly to improve the university experience for all.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over the years, we have successfully implemented numerous initiatives including the 
              establishment of over 50 student clubs, organizing hundreds of events, and creating 
              platforms for student voices to be heard in university governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About