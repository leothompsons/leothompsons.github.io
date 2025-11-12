const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to help you find your perfect piece
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Message me - I'll help you find the perfect item and handle your order with ease.
        </p>
        <a
          href="https://api.whatsapp.com/message/MXYBYJWHBFKWG1?autoload=1&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
        >
          WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;