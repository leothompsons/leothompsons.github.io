const Services = () => {
  const services = [
    {
      title: "Reliable delivery across the country",
      description: "Fast and secure shipping to your location"
    },
    {
      title: "Personalized approach to every order",
      description: "Tailored service for your specific needs"
    },
    {
      title: "Direct purchases from official stores",
      description: "Authentic products from authorized retailers"
    },
    {
      title: "Authentic products with no extra markups",
      description: "Genuine luxury items at fair prices"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A premium service you can trust
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;