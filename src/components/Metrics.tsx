import React from 'react';
import { Trophy, Users, Clock, Building2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const metrics = [
  {
    icon: Trophy,
    label: 'Success Rate',
    value: '85%',
    description: 'Proven Track Record',
  },
  {
    icon: Users,
    label: 'Grant Professionals',
    value: '20+',
    description: 'Expert Team',
  },
  {
    icon: Clock,
    label: 'Years Experience',
    value: '15+',
    description: 'Industry Expertise',
  },
  {
    icon: Building2,
    label: 'Organizations',
    value: '500+',
    description: 'Client Base',
  },
];

const Metrics = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`text-center p-6 bg-white rounded-xl shadow-lg transform transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-primary/10 text-primary rounded-full">
                <metric.icon className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                {metric.value}
              </h3>
              <p className="text-lg font-semibold text-gray-600 mb-1">
                {metric.label}
              </p>
              <p className="text-gray-500">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;