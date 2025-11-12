const Steps = () => {
  const steps = [
    {
      number: "01",
      title: "Send request",
      description: "You send me a photo or link to the item you want."
    },
    {
      number: "02",
      title: "Get confirmation",
      description: "I'll confirm availability, price, and delivery time."
    },
    {
      number: "03",
      title: "Make payment",
      description: "Once payment is made, I'll buy and ship your item."
    }
  ];

  return (
    <section id="steps" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Just 3 steps to your dream purchase
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl font-bold text-gray-300 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;