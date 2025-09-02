const CustomerLogos = () => {
  // Placeholder for customer logos - in a real implementation, you'd use actual logo images
  const customers = [
    "OpenAI", "Coursera", "Square", "Lime", "Twilio", "Etsy", "Lyft"
  ];

  return (
    <section className="py-16 bg-white border-t border-neutral-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-neutral-dark mb-4">
            Trusted by startups and the world's largest companies
          </h3>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {customers.map((customer, index) => (
            <div key={index} className="text-neutral-dark/60 font-semibold text-lg">
              {customer}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-neutral-dark/70">
            Scale where you want, how you want • 150+ countries and territories • 1+ localized languages
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
