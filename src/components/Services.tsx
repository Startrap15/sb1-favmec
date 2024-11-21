import React from 'react';
import { FileText, LandmarkIcon, BrainCircuit, ArrowRight, Mail } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, features, comingSoon = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden group"
    >
      {comingSoon && (
        <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
          Coming Soon
        </div>
      )}
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <ArrowRight className="w-5 h-5 text-primary mt-1 mr-2 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      {comingSoon ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">Be the first to know when we launch!</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary rounded-l-none">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <button className="btn-primary w-full group">
          Learn More
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      )}
    </motion.div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">
            Comprehensive grant and government contract solutions tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            icon={FileText}
            title="Professional Grant Writing"
            description="Expert grant writing services with a proven track record of success"
            features={[
              "Customized grant proposals",
              "Thorough research and analysis",
              "Compliance review",
              "Budget development",
              "Ongoing support and revisions"
            ]}
          />

          <ServiceCard
            icon={LandmarkIcon}
            title="Government Contracts"
            description="Navigate complex government contracting processes with confidence"
            features={[
              "Bid preparation",
              "Contract negotiation",
              "Compliance management",
              "Past performance documentation",
              "Technical writing support"
            ]}
          />

          <ServiceCard
            icon={BrainCircuit}
            title="AI Grant Assistant"
            description="Revolutionary AI-powered grant writing and analysis tools"
            features={[
              "Smart proposal generation",
              "Real-time compliance checking",
              "Success probability analysis",
              "Automated research tools",
              "24/7 AI-powered support"
            ]}
            comingSoon={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;