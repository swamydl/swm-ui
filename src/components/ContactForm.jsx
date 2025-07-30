const ContactForm = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-900 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            rows="4"
            className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded bg-gray-100 dark:bg-gray-800 text-black dark:text-white"
            placeholder="Your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;