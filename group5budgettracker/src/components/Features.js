import React from 'react';
import { Link } from 'react-router-dom';
import { BarChart3, Shield, Smartphone, Zap, PieChart, Bell } from 'lucide-react';
import { useTheme } from '@mui/material/styles';

const Features = () => {

  
const theme = useTheme();
const isDark = theme.palette.mode === 'dark';


  const features = [
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Get detailed insights into your spending patterns with intelligent categorization and trends.',
      color: 'bg-blue-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Your financial data is protected with enterprise-grade encryption and security measures.',
      color: 'bg-green-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Access your budget anywhere with our responsive design and native mobile experience.',
      color: 'bg-purple-400'
    },
    {
      icon: Zap,
      title: 'Real-Time Sync',
      description: 'Connect your accounts for automatic transaction imports and real-time balance updates.',
      color: 'bg-yellow-500'
    },
    {
      icon: PieChart,
      title: 'Visual Reports',
      description: 'Beautiful charts and graphs that make understanding your finances simple and intuitive.',
      color: 'bg-pink-500'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Stay on track with personalized alerts for bill reminders, budget limits, and more.',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className={`py-20 lg:py-32 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
         <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Everything you need to
            <span className={`block ${isDark ? 'text-white' : 'text-gray-900'}`}>
              master your money
            </span>
          </h2>
          <p>
            Powerful tools and insights designed to help you make better financial decisions and achieve your goals faster.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`inline-flex p-3 rounded-xl ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="h-6 w-6" />
              </div>
              
              <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              
              <p className={`leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.description}o
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-primary-700 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to transform your finances?</h3>
<p className={`text-xl max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>

              Join thousands of users who have already taken control of their financial future with Ledgerly.
            </p>
            <Link to="/register">
              <button className="bg-white text-primary-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Start Free Trial
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;