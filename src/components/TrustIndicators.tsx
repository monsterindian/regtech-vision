const TrustIndicators = () => {
  const stats = [
    { metric: "500+", label: "Financial Institutions" },
    { metric: "99.9%", label: "Compliance Accuracy" },
    { metric: "75%", label: "Cost Reduction" },
    { metric: "24/7", label: "Monitoring" }
  ];

  const clients = [
    "HSBC", "JPMorgan", "Deutsche Bank", "Wells Fargo", "Citibank", "Goldman Sachs"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Trust Stats */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-12 text-foreground">
            Trusted by Leading Financial Institutions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-8">
            Powering compliance operations at global institutions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clients.map((client, index) => (
              <div key={index} className="text-gray-400 font-semibold text-lg">
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
