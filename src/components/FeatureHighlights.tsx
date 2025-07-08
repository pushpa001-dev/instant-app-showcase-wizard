
import { MessageSquare, BarChart3, Shield, Zap } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Real-Time Chat",
      description: "Communicate instantly with your team members without leaving your workspace."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Visualize project progress with intuitive charts and automated reporting."
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance to keep your data safe and secure."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance ensures your team stays productive without delays."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              succeed
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to streamline your workflow and boost team productivity
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-200 group-hover:to-purple-200 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
