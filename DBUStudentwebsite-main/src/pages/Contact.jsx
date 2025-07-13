import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@dbu.edu.et',
      description: 'Send us an email anytime',
      link: 'mailto:info@dbu.edu.et'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+251-11-XXX-XXXX',
      description: 'Call us during office hours',
      link: 'tel:+251-11-XXX-XXXX'
    },
    {
      icon: MapPin,
      title: 'Address',
      value: 'Debre Birhan University',
      description: 'Student Council Building, Room 201',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      value: 'Mon - Fri: 8:00 AM - 5:00 PM',
      description: 'Saturday: 9:00 AM - 1:00 PM',
      link: '#'
    }
  ]

  const categories = [
    'General Inquiry',
    'Academic Affairs',
    'Student Services',
    'Clubs & Organizations',
    'Sports & Recreation',
    'Cultural Affairs',
    'Community Outreach'
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '', category: '' })
    setIsSubmitting(false)
  }

  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto">
            Have questions, feedback, or suggestions? We're here to help and listen to your concerns.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                <info.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {info.title}
              </h3>
              {info.link !== '#' ? (
                <a
                  href={info.link}
                  className="text-blue-600 font-medium mb-1 block hover:text-blue-700"
                >
                  {info.value}
                </a>
              ) : (
                <p className="text-blue-600 font-medium mb-1">
                  {info.value}
                </p>
              )}
              <p className="text-gray-600 text-sm">
                {info.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                Send us a Message
              </h2>
              <p className="text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="your.email@dbu.edu.et"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a category</option>
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Brief subject of your message"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-colors"
                  placeholder="Write your message here..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 lg:mt-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                question: 'How do I join a student club?',
                answer: 'Visit our Clubs page to browse available clubs and contact the club leaders directly, or visit our office for assistance.'
              },
              {
                question: 'How can I start a new club?',
                answer: 'Contact our Clubs & Organizations branch with your proposal. You\'ll need at least 10 founding members and a faculty advisor.'
              },
              {
                question: 'What services does the Student Council provide?',
                answer: 'We provide academic advocacy, student welfare services, event coordination, and serve as a liaison between students and university administration.'
              },
              {
                question: 'How do I report a concern or complaint?',
                answer: 'You can contact the relevant branch directly, visit our office, or send us a message through this contact form.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact