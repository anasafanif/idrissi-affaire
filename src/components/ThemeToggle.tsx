import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
}

export function ThemeToggle({ className = "", size = 'default' }: ThemeToggleProps) {
  const { isDark, toggleTheme } = useTheme();

  const iconSize = size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5';

  return (
    <Button 
      onClick={toggleTheme} 
      variant="ghost"
      size="icon"
      className={`${className} hover:bg-accent transition-colors duration-200`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Sun className={`${iconSize} text-yellow-500`} />
        ) : (
          <Moon className={`${iconSize} text-slate-600 dark:text-slate-300`} />
        )}
      </motion.div>
    </Button>
  );
}
