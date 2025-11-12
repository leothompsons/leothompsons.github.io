const Testimonials = () => {
  const testimonials = [
    {
      text: "Thank you for the handbag - it's 100% authentic with the receipt included. Arrived quickly and perfectly packed. Will order again!",
      author: "Hellen"
    },
    {
      text: "I found this personal shopper by chance and I'm so glad I did. Ordered sneakers and they arrived in less than two weeks. Everything was perfect!",
      author: "Olivia"
    },
    {
      text: "I was a bit nervous about paying upfront, but my jacket arrived exactly as described. Highly recommend!",
      author: "Kate"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What clients say
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-900 font-semibold">
                - {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;