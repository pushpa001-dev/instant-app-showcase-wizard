
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Clock, Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have streamlined their projects and boosted productivity with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Start Free Trial Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="flex flex-col items-center space-y-2">
              <Users className="h-8 w-8 text-blue-200" />
              <div className="text-2xl font-bold">10,000+</div>
              <div className="text-blue-200 text-sm">Happy customers</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Clock className="h-8 w-8 text-blue-200" />
              <div className="text-2xl font-bold">2 minutes</div>
              <div className="text-blue-200 text-sm">Setup time</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <Shield className="h-8 w-8 text-blue-200" />
              <div className="text-2xl font-bold">99.9%</div>
              <div className="text-blue-200 text-sm">Uptime guarantee</div>
            </div>
          </div>
          
          <div className="mt-8 text-blue-200 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
