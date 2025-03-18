import React, { useState, useEffect } from 'react';
import { Plane as Plant, Bug, LineChart, Cloud, FlaskRound as Flask, Tractor, ArrowRight, Leaf, Target, Users, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Menu, X } from 'lucide-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'glass-effect'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Leaf className={`h-8 w-8 ${isScrolled ? 'text-green-600' : 'text-green-400'}`} />
            <span className={`text-2xl font-bold ml-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              Bhoomi
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`font-medium hover:text-green-500 transition-colors ${
                  isScrolled ? 'text-gray-600' : 'text-white'
                }`}
              >
                {item}
              </a>
            ))}
            <a href="https://bhoomi.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-6 py-2 rounded-full font-medium 
              hover:bg-green-600 transition-all transform hover:scale-105">
              Get Started
            </button>
           </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={isScrolled ? 'text-gray-800' : 'text-white'} />
            ) : (
              <Menu className={isScrolled ? 'text-gray-800' : 'text-white'} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg mt-2 p-4 absolute left-4 right-4">
            {['Home', 'Features', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-gray-600 hover:text-green-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-green-500 text-white px-6 py-2 rounded-full font-medium 
              hover:bg-green-600 transition-all transform hover:scale-105 mt-4">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover-scale">
      <div className="h-16 w-16 bg-gradient-custom rounded-2xl flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function TargetCard({ title, description }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover-scale">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function App() {
  const features = [
    {
      icon: Plant,
      title: "Crop Recommendation",
      description: "Get AI-powered suggestions for optimal crop selection based on soil and climate conditions."
    },
    {
      icon: Bug,
      title: "Disease Identification",
      description: "Quickly identify plant diseases and get treatment recommendations using image recognition."
    },
    {
      icon: LineChart,
      title: "Yield Prediction",
      description: "Forecast crop yields accurately using advanced machine learning models."
    },
    {
      icon: Cloud,
      title: "Weather Forecast",
      description: "Access real-time weather updates and forecasts for better planning."
    },
    {
      icon: Flask,
      title: "Fertilizer Recommendation",
      description: "Receive customized fertilizer recommendations based on soil analysis."
    },
    {
      icon: Tractor,
      title: "Smart Farming",
      description: "Get guidance on modern farming techniques and best practices."
    }
  ];

  const targets = [
    {
      title: "Small-Scale Farmers",
      description: "Empowering local farmers with technology to improve their yield and income."
    },
    {
      title: "Agricultural Cooperatives",
      description: "Supporting farmer groups with collective decision-making tools and insights."
    },
    {
      title: "Research Institutions",
      description: "Providing valuable data and analytics for agricultural research and development."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section - Home */}
      <div 
        id="home"
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/70"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="flex items-center justify-center mb-8 animate-float">
            <Leaf className="h-16 w-16 text-green-400" />
            <h1 className="text-5xl font-bold text-white ml-4">Bhoomi</h1>
          </div>
          <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
            Empowering Farmers with<br />
            <span className="text-green-400">AI-Driven</span> Crop Management
          </h2>
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your farming practices with intelligent insights, real-time monitoring,
            and data-driven recommendations.
          </p>
          <a href="https://bhoomi.streamlit.app/" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 text-white px-10 py-5 rounded-full text-xl font-semibold 
            hover:bg-green-600 transition-all transform hover:scale-105 flex items-center mx-auto">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </button>
          </a>
        </div>
      </div>

      {/* Our Motive Section - About */}
      <div id="about" className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Motive</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              At Bhoomi, we believe in sustainable agriculture through technology. Our mission is to bridge the gap between traditional farming practices and modern agricultural technology, making smart farming accessible to everyone.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-8 rounded-2xl bg-gradient-custom hover-scale">
              <Users className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Farmer Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">Enabling farmers with data-driven decisions</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-custom hover-scale">
              <Target className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Sustainable Agriculture</h3>
              <p className="text-gray-600 leading-relaxed">Promoting eco-friendly farming practices</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-custom hover-scale">
              <LineChart className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Increased Productivity</h3>
              <p className="text-gray-600 leading-relaxed">Optimizing yields through AI insights</p>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Features */}
      <div id="features" className="max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Crop Management Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our AI-powered platform provides end-to-end solutions for modern agriculture,
            helping you maximize yields and optimize resource utilization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      {/* Our Target Section */}
      <div className="bg-gradient-custom py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Target Audience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're committed to serving the diverse needs of the agricultural community
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targets.map((target, index) => (
              <TargetCard key={index} {...target} />
            ))}
          </div>
        </div>
      </div>

      <div id="sdg" className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Target</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#CD8B2A] rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">RESPONSIBLE CONSUMPTION AND PRODUCTION</h3>
              <p className="text-lg">Supporting sustainable agriculture and efficient resource management</p>
            </div>
            <div className="space-y-6">
              <div className="bg-[#CD8B2A] rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Efficient Resource Use</h4>
                <p>By 2030, achieve sustainable management and efficient use of natural resources.</p>
              </div>
              <div className="bg-[#CD8B2A] rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Reduce Waste Generation</h4>
                <p>By 2030, substantially reduce waste generation through prevention, reduction, recycling, and reuse.</p>
              </div>
              <div className="bg-[#CD8B2A] rounded-lg p-6 text-white">
                <h4 className="text-xl font-bold mb-2">Encourage Sustainable Practices</h4>
                <p>By 2030, ensure people everywhere have the relevant information and awareness for sustainable development and lifestyles in harmony with nature.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section - Contact */}
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 mb-8">
            Have questions about Bhoomi? We're here to help you get started with smart farming.
          </p>
          <div className="space-y-4">
            <p className="text-gray-600">Email: support@bhoomi.com</p>
            <p className="text-gray-600">Phone: +91 987654xxxx</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <Leaf className="h-10 w-10 text-green-400" />
                <span className="text-3xl font-bold ml-3">Bhoomi</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transforming agriculture through innovative technology and sustainable practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <ul className="space-y-4">
                 <li><a href="https://bhoomi.streamlit.app/" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6">Connect With Us</h3>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Facebook className="h-8 w-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Twitter className="h-8 w-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram className="h-8 w-8" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors transform hover:scale-110">
                  <Linkedin className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Bhoomi. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
