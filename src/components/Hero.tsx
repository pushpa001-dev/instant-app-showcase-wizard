
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Manage Your Projects in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Minutes
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Collaborate, track, and deliver—all in one dashboard. 
                Streamline your workflow and boost team productivity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-gray-300 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Free 14-day trial
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                No credit card required
              </span>
            </div>
          </div>
          
          {/* Right Column - Product Screenshot */}
          <div className="relative animate-scale-in">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* Browser Chrome */}
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-500 ml-4">
                    dashboard.projectpro.com
                  </div>
                </div>
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Project Dashboard</h3>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-blue-600">24</div>
                      <div className="text-xs text-gray-500">Active Projects</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-green-600">89%</div>
                      <div className="text-xs text-gray-500">Completion</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-purple-600">12</div>
                      <div className="text-xs text-gray-500">Team Members</div>
                    </div>
                  </div>
                  
                  {/* Project List */}
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="text-sm font-medium">Website Redesign</span>
                      </div>
                      <div className="text-xs text-gray-500">Due: Tomorrow</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span className="text-sm font-medium">Mobile App Launch</span>
                      </div>
                      <div className="text-xs text-gray-500">Due: Next Week</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span className="text-sm font-medium">Marketing Campaign</span>
                      </div>
                      <div className="text-xs text-gray-500">Due: 2 weeks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
