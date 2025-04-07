
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

export const ThemeToggle = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <Toggle 
      pressed={theme === 'dark'} 
      onPressedChange={toggleTheme}
      aria-label="Toggle theme"
      className={className}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        {theme === 'light' ? (
          <Sun className="h-5 w-5 transition-all" />
        ) : (
          <Moon className="h-5 w-5 transition-all" />
        )}
        <motion.div
          className="absolute inset-0 bg-primary rounded-full origin-center"
          initial={{ scale: 0 }}
          animate={{ scale: theme === 'light' ? 0 : 10 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ opacity: 0.05, zIndex: -1 }}
        />
      </motion.div>
    </Toggle>
  );
};
