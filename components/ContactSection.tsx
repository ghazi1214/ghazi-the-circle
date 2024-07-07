// components/ContactSection.tsx
import LeadershipTeam from './LeadershipTeam'

const ContactSection = () => (
  <section id="contact" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <form className="max-w-lg mx-auto">
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your name"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="your.email@example.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="Your message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Send Message
        </button>
      </form>
    </div>
    <LeadershipTeam />
  </section>
)

export default ContactSection
