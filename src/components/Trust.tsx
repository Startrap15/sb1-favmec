import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TeamMember = ({ image, name, role, description }) => (
  <div className="text-center">
    <div className="relative w-32 h-32 mx-auto mb-4">
      <img
        src={image}
        alt={name}
        className="rounded-full w-full h-full object-cover shadow-lg"
        loading="lazy"
      />
    </div>
    <h4 className="text-xl font-bold mb-1">{name}</h4>
    <p className="text-primary font-semibold mb-2">{role}</p>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Testimonial = ({ content, author, role, company }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-8 relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-accent fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">{content}</p>
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-gray-600">
          {role} at {company}
        </p>
      </div>
    </motion.div>
  );
};

const Trust = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const team = [
    {
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256",
      name: "Sarah Anderson",
      role: "Lead Grant Writer",
      description: "15+ years experience in federal grants"
    },
    {
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256",
      name: "Michael Chen",
      role: "Government Contracts Specialist",
      description: "Former Federal Contracting Officer"
    },
    {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=256",
      name: "Emily Rodriguez",
      role: "AI Research Director",
      description: "PhD in Computer Science"
    }
  ];

  const testimonials = [
    {
      content: "The team's expertise in grant writing was instrumental in securing our $2.5M research grant. Their attention to detail and strategic approach made all the difference.",
      author: "Dr. James Wilson",
      role: "Research Director",
      company: "BioTech Innovations"
    },
    {
      content: "Working with their government contracts team streamlined our entire bidding process. We've seen a 40% increase in contract win rates since partnering with them.",
      author: "Lisa Thompson",
      role: "CEO",
      company: "DefenseTech Solutions"
    },
    {
      content: "Their comprehensive understanding of both technical requirements and compliance issues helped us navigate complex federal regulations with confidence.",
      author: "Robert Martinez",
      role: "Operations Manager",
      company: "GreenEnergy Corp"
    }
  ];

  const partners = [
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=200",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3624?auto=format&fit=crop&w=200",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3625?auto=format&fit=crop&w=200",
    "https://images.unsplash.com/photo-1560179707-f14e90ef3626?auto=format&fit=crop&w=200"
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Meet Our Expert Team</h2>
          <p className="text-xl text-gray-600 mb-12">
            Industry leaders with proven success in grants and government contracts
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div ref={ref}>
          <h2 className="text-4xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            {partners.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4">
                <img
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  className="max-h-12 opacity-70 hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;