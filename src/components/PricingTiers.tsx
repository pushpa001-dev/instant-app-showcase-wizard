
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PricingTiers = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for individuals and small teams getting started",
      features: [
        "Up to 3 projects",
        "5 team members",
        "Basic reporting",
        "Email support",
        "1GB storage"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      period: "per user/month",
      description: "Ideal for growing teams and businesses",
      features: [
        "Unlimited projects",
        "Unlimited team members",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
        "Team collaboration tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$29",
      period: "per user/month",
      description: "For large organizations with advanced needs",
      features: [
        "Everything in Pro",
        "Advanced security",
        "Custom workflows",
        "Dedicated support",
        "Unlimited storage",
        "SSO integration",
        "Custom training",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              plan
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start free and scale as you grow. No hidden fees, cancel anytime.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-2xl border-2 transition-all duration-300 hover:shadow-xl animate-fade-in ${
                plan.popular 
                  ? "border-blue-500 bg-white shadow-lg scale-105" 
                  : "border-gray-200 bg-white hover:border-blue-300"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
                    : "bg-gray-900 hover:bg-gray-800 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-gray-600 mb-4">All plans include our 30-day money-back guarantee</p>
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ Secure payments</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTiers;
