const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Luxury Brands from HK
          </h1>
          <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
            I am Anne Thompson, your personal shopper in Europe. I help you find authentic luxury items at the best prices.
          </p>
          <a
            href="https://api.whatsapp.com/message/MXYBYJWHBFKWG1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Place an order
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;