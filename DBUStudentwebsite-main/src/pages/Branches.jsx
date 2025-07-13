import { Mail, Users, Phone, MapPin } from 'lucide-react'

function Branches() {
  const branches = [
    {
      name: 'Academic Affairs',
      description: 'Handles academic policies, curriculum feedback, and student academic concerns',
      contact: 'academic@dbu.edu.et',
      phone: '+251-11-XXX-1001',
      responsibilities: [
        'Academic policy advocacy',
        'Curriculum feedback collection',
        'Grade appeal processes',
        'Faculty-student relations'
      ]
    },
    {
      name: 'Student Services',
      description: 'Manages student welfare, housing, dining, and general campus services',
      contact: 'services@dbu.edu.et',
      phone: '+251-11-XXX-1002',
      responsibilities: [
        'Housing and accommodation',
        'Dining services oversight',
        'Campus facility management',
        'Student welfare programs'
      ]
    },
    {
      name: 'Clubs & Organizations',
      description: 'Oversees student clubs, societies, and extracurricular activities',
      contact: 'clubs@dbu.edu.et',
      phone: '+251-11-XXX-1003',
      responsibilities: [
        'Club registration and approval',
        'Event coordination support',
        'Resource allocation',
        'Inter-club activities'
      ]
    },
    {
      name: 'Sports & Recreation',
      description: 'Coordinates sports activities, tournaments, and recreational programs',
      contact: 'sports@dbu.edu.et',
      phone: '+251-11-XXX-1004',
      responsibilities: [
        'Sports tournament organization',
        'Athletic facility management',
        'Recreational program development',
        'Inter-university competitions'
      ]
    },
    {
      name: 'Cultural Affairs',
      description: 'Organizes cultural events, festivals, and diversity programs',
      contact: 'culture@dbu.edu.et',
      phone: '+251-11-XXX-1005',
      responsibilities: [
        'Cultural festival organization',
        'Diversity and inclusion programs',
        'Traditional event coordination',
        'Cultural exchange activities'
      ]
    },
    {
      name: 'Community Outreach',
      description: 'Manages community service projects and volunteer opportunities',
      contact: 'outreach@dbu.edu.et',
      phone: '+251-11-XXX-1006',
      responsibilities: [
        'Community service coordination',
        'Volunteer program management',
        'Local partnership development',
        'Social impact initiatives'
      ]
    }
  ]

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our Branches
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            The DBU Student Council is organized into specialized branches to better serve 
            student needs and interests across all areas of university life.
          </p>
        </div>

        {/* Branches Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {branches.map((branch, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {branch.name}
                </h3>
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">
                {branch.description}
              </p>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="font-medium text-gray-900 mb-3">Key Responsibilities:</h4>
                <ul className="space-y-2">
                  {branch.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-600 text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-blue-600 mr-3" />
                  <a href={`mailto:${branch.contact}`} className="text-blue-600 hover:text-blue-700">
                    {branch.contact}
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-gray-600">{branch.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="bg-blue-50 rounded-2xl p-6 lg:p-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-blue-900 mb-4">
            Need Help?
          </h2>
          <p className="text-blue-800 mb-6 max-w-2xl mx-auto">
            Not sure which branch to contact? Reach out to our main office and we'll 
            direct you to the right department for your specific needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center text-blue-700">
              <Mail className="w-5 h-5 mr-2" />
              <span className="font-medium">info@dbu.edu.et</span>
            </div>
            <div className="flex items-center text-blue-700">
              <Phone className="w-5 h-5 mr-2" />
              <span className="font-medium">+251-11-XXX-1000</span>
            </div>
            <div className="flex items-center text-blue-700">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="font-medium">Student Council Building</span>
            </div>
          </div>
          
          <a
            href="mailto:info@dbu.edu.et"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Main Office
          </a>
        </div>
      </div>
    </div>
  )
}

export default Branches