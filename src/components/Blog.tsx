import React, { useState } from 'react';
import { Calendar, Clock, ChevronRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Post {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

const posts: Post[] = [
  {
    id: 1,
    title: "Maximizing Your Grant Success Rate: Expert Tips and Strategies",
    description: "Learn the proven strategies that can significantly improve your chances of securing competitive grants.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Grant Writing"
  },
  {
    id: 2,
    title: "Understanding Federal Contract Requirements: A Complete Guide",
    description: "Navigate the complex world of federal contracting with our comprehensive guide to requirements and compliance.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=600&q=80",
    date: "Mar 12, 2024",
    readTime: "8 min read",
    category: "Government Contracts"
  },
  {
    id: 3,
    title: "AI in Grant Writing: The Future of Proposal Development",
    description: "Discover how artificial intelligence is revolutionizing the grant writing process and improving success rates.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Technology"
  }
];

const categories = ["All", "Grant Writing", "Government Contracts", "Technology", "Best Practices"];

const BlogCard = ({ post }: { post: Post }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white text-primary">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <Clock className="w-4 h-4 mr-2" />
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <button className="inline-flex items-center text-primary font-semibold group/btn">
          Read More
          <ChevronRight className="w-5 h-5 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.article>
  );
};

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section id="blog" className="section bg-gray-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold mb-4">Latest Resources & Insights</h2>
          <p className="text-xl text-gray-600">
            Expert knowledge and actionable insights to help you succeed
          </p>
        </div>

        <div ref={ref} className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Tag className="w-4 h-4 inline mr-2" />
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Resources
            <ChevronRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;