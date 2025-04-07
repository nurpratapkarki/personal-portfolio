
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock blog data (would come from backend API)
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Responsive UI with Framer Motion",
    excerpt: "Learn how to create beautiful animations and transitions using Framer Motion in your React applications.",
    date: "April 2, 2025",
    author: "Nur Pratap Karki",
    category: "Development",
    tags: ["React", "Animation", "UI/UX"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Web Development in 2025",
    excerpt: "Exploring the emerging trends and technologies that will shape the future of web development in the coming year.",
    date: "March 28, 2025",
    author: "Nur Pratap Karki",
    category: "Industry",
    tags: ["Web Development", "Trends", "Technology"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Mastering TypeScript for React Development",
    excerpt: "A comprehensive guide to using TypeScript effectively in your React projects for better type safety and developer experience.",
    date: "March 21, 2025",
    author: "Nur Pratap Karki",
    category: "Development",
    tags: ["TypeScript", "React", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Creating Accessible UI Components",
    excerpt: "Best practices for building web components that are accessible to all users, including those with disabilities.",
    date: "March 14, 2025",
    author: "Nur Pratap Karki",
    category: "Accessibility",
    tags: ["Accessibility", "UI/UX", "HTML"],
    coverImage: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    readTime: "7 min read"
  },
];

// All available categories and tags (would come from API)
const ALL_CATEGORIES = ["All", "Development", "Industry", "Accessibility", "Design"];
const ALL_TAGS = ["React", "Animation", "UI/UX", "Web Development", "Trends", "Technology", "TypeScript", "JavaScript", "Accessibility", "HTML"];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter blog posts based on search, category, and tags
  const filteredPosts = BLOG_POSTS.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesTags = selectedTags.length === 0 || 
                        selectedTags.some(tag => post.tags.includes(tag));
    
    return matchesSearch && matchesCategory && matchesTags;
  });

  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const pageVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0 }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            className="mb-12 text-center"
            variants={itemVariants}
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-gradient">Blog</h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology.
            </p>
          </motion.div>

          <motion.div 
            className="mb-10 space-y-6"
            variants={itemVariants}
          >
            {/* Search and filters */}
            <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Input
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-background"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                  {ALL_CATEGORIES.map(category => (
                    <Button 
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className="whitespace-nowrap"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium mr-2 py-1">Popular Tags:</span>
                {ALL_TAGS.map(tag => (
                  <Badge 
                    key={tag}
                    variant={selectedTags.includes(tag) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => toggleTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredPosts.map((post) => (
              <motion.article 
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <Badge>{post.category}</Badge>
                      <span className="text-xs text-foreground/70">{post.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                    <p className="text-foreground/80 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-border/30">
                      <span className="text-sm font-medium">{post.author}</span>
                      <span className="text-xs text-foreground/70">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div 
              className="text-center py-16"
              variants={itemVariants}
            >
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-foreground/70 mb-6">Try adjusting your search or filter criteria.</p>
              <Button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setSelectedTags([]);
                }}
              >
                Reset Filters
              </Button>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BlogPage;
