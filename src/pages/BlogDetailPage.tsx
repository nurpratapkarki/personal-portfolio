
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// Mock blog data (would come from API)
const BLOG_POSTS = [
  {
    id: 1,
    title: "Building Responsive UI with Framer Motion",
    content: `
      <p class="lead">Animation can take your React applications to the next level, providing users with a more engaging and intuitive experience.</p>
      
      <p>Framer Motion is a powerful library that makes it easy to add physics-based animations to your React components. In this article, we'll explore how to use Framer Motion to create smooth and responsive user interfaces.</p>
      
      <h2>Getting Started with Framer Motion</h2>
      
      <p>First, you'll need to install Framer Motion in your React project:</p>
      
      <pre><code>npm install framer-motion</code></pre>
      
      <p>Once installed, you can import the motion components and start animating your UI elements:</p>
      
      <pre><code>import { motion } from 'framer-motion';

const MyComponent = () => {
  return (
    &lt;motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    &gt;
      Hello, animated world!
    &lt;/motion.div&gt;
  );
};</code></pre>
      
      <h2>Creating Page Transitions</h2>
      
      <p>One of the most effective ways to use animation is for page transitions. This creates a smooth flow as users navigate through your application.</p>
      
      <p>To implement page transitions with Framer Motion, you can create a set of variants that define the initial, animate, and exit states:</p>
      
      <pre><code>const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};</code></pre>
      
      <h2>Gesture Animations</h2>
      
      <p>Framer Motion also makes it easy to add gesture-based animations, such as hover effects, taps, and drags.</p>
      
      <p>Here's an example of a card that scales up slightly when hovered:</p>
      
      <pre><code>&lt;motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="card"
&gt;
  Card content
&lt;/motion.div&gt;</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Animation is a powerful tool for enhancing user experience when used correctly. Framer Motion provides an intuitive API for adding animations to your React applications with minimal effort.</p>
      
      <p>Remember that good animations should enhance the user experience, not distract from it. Use animations purposefully to guide users' attention and provide feedback on their interactions.</p>
    `,
    date: "April 2, 2025",
    author: "Nur Pratap Karki",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    authorBio: "Full-stack developer specializing in React and modern JavaScript. Passionate about creating intuitive user interfaces and smooth user experiences.",
    category: "Development",
    tags: ["React", "Animation", "UI/UX"],
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "The Future of Web Development in 2025",
    content: `
      <p class="lead">As we progress through 2025, the web development landscape continues to evolve at a rapid pace, with new technologies and methodologies emerging to address the growing demands of modern web applications.</p>
      
      <p>In this article, we'll explore the key trends and technologies that are shaping the future of web development in 2025 and beyond.</p>
      
      <h2>WebAssembly Goes Mainstream</h2>
      
      <p>WebAssembly (Wasm) has been gaining momentum over the past few years, but 2025 marks the year it truly becomes mainstream. With near-native performance capabilities, WebAssembly is enabling a new class of applications on the web that were previously only possible in native environments.</p>
      
      <p>From complex data visualization to in-browser video editing and high-performance games, WebAssembly is blurring the line between web and native applications more than ever before.</p>
      
      <h2>AI-Driven Development</h2>
      
      <p>Artificial intelligence is now an integral part of the development process. AI-powered coding assistants have evolved beyond simple auto-completion to provide intelligent suggestions for entire code blocks, debug issues, and even automatically generate tests.</p>
      
      <p>This shift is enabling developers to focus more on architecture and problem-solving while letting AI handle more routine coding tasks, significantly increasing productivity and code quality.</p>
      
      <h2>Edge Computing Takes Center Stage</h2>
      
      <p>The edge computing paradigm is now a fundamental consideration in web architecture. With compute resources distributed closer to end users, applications are achieving unprecedented levels of performance and reliability.</p>
      
      <p>Edge functions and databases are allowing developers to execute code and store data at the network edge, drastically reducing latency and improving user experience for global audiences.</p>
      
      <h2>Micro-Frontends Architecture</h2>
      
      <p>As applications grow in complexity, the micro-frontends architecture has emerged as a solution for managing large-scale web applications. By decomposing the frontend into smaller, more manageable pieces that can be developed and deployed independently, teams can work more efficiently without stepping on each other's toes.</p>
      
      <h2>Conclusion</h2>
      
      <p>The web development landscape in 2025 is more exciting and dynamic than ever before. These advancements are not just making developers' lives easier but are also enabling entirely new categories of web applications that were previously impossible.</p>
      
      <p>As these technologies continue to mature, we can expect web applications to become even more powerful, performant, and user-friendly in the years to come.</p>
    `,
    date: "March 28, 2025",
    author: "Nur Pratap Karki",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    authorBio: "Full-stack developer specializing in React and modern JavaScript. Passionate about creating intuitive user interfaces and smooth user experiences.",
    category: "Industry",
    tags: ["Web Development", "Trends", "Technology"],
    coverImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    readTime: "8 min read"
  },
  {
    id: 3,
    title: "Mastering TypeScript for React Development",
    content: `<p>Content for TypeScript article...</p>`,
    date: "March 21, 2025",
    author: "Nur Pratap Karki",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    authorBio: "Full-stack developer specializing in React and modern JavaScript. Passionate about creating intuitive user interfaces and smooth user experiences.",
    category: "Development",
    tags: ["TypeScript", "React", "JavaScript"],
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Creating Accessible UI Components",
    content: `<p>Content for accessibility article...</p>`,
    date: "March 14, 2025",
    author: "Nur Pratap Karki",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    authorBio: "Full-stack developer specializing in React and modern JavaScript. Passionate about creating intuitive user interfaces and smooth user experiences.",
    category: "Accessibility",
    tags: ["Accessibility", "UI/UX", "HTML"],
    coverImage: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    readTime: "7 min read"
  },
];

// Get related posts based on tags
const getRelatedPosts = (currentPost, allPosts, limit = 3) => {
  const filtered = allPosts
    .filter(post => post.id !== currentPost.id)
    .sort((a, b) => {
      // Count matching tags
      const aMatches = a.tags.filter(tag => currentPost.tags.includes(tag)).length;
      const bMatches = b.tags.filter(tag => currentPost.tags.includes(tag)).length;
      return bMatches - aMatches;
    })
    .slice(0, limit);
  
  return filtered;
};

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const [post, setPost] = useState<any>(null);
  const [relatedPosts, setRelatedPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    window.scrollTo(0, 0);
    
    setTimeout(() => {
      const foundPost = BLOG_POSTS.find(p => p.id === parseInt(blogId || '0'));
      
      if (foundPost) {
        setPost(foundPost);
        setRelatedPosts(getRelatedPosts(foundPost, BLOG_POSTS));
      }
      
      setLoading(false);
    }, 300);
  }, [blogId]);

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

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-16 flex items-center justify-center">
          <div className="animate-pulse text-2xl">Loading...</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-24 pb-16 container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="mb-6">The blog post you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/blog')}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <motion.div 
      className="min-h-screen flex flex-col"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Header />
      <main className="flex-grow pt-20 pb-16">
        {/* Hero section */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-4 sm:px-6">
              <motion.div variants={itemVariants} className="max-w-3xl">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center mb-4 text-white/90 hover:text-white transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{post.title}</h1>
                <div className="flex flex-wrap items-center gap-4 text-white/90">
                  <div className="flex items-center">
                    <Avatar className="h-8 w-8 mr-2 border border-white/20">
                      <AvatarImage src={post.authorImage} alt={post.author} />
                      <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Badge variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 text-white">
                    {post.category}
                  </Badge>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Content section */}
        <div className="container mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <motion.div variants={itemVariants} className="lg:col-span-8">
              <article className="prose dark:prose-invert prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </article>
              
              <div className="mt-10 pt-6 border-t border-border/50">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-border/50">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12 border border-border/50">
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{post.author}</h3>
                    <p className="text-foreground/80">{post.authorBio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <div className="bg-card border border-border/50 rounded-lg p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="group">
                      <Link to={`/blog/${relatedPost.id}`} className="flex gap-4">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={relatedPost.coverImage} 
                            alt={relatedPost.title} 
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                            {relatedPost.title}
                          </h4>
                          <span className="text-xs text-foreground/70">{relatedPost.readTime}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h3 className="font-bold text-xl mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {Array.from(new Set(BLOG_POSTS.flatMap(p => p.tags))).slice(0, 8).map((tag) => (
                      <Link to={`/blog?tag=${tag}`} key={tag}>
                        <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                          {tag}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </motion.div>
  );
};

export default BlogDetailPage;
