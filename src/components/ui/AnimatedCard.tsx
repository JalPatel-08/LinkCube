
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  depth?: number;
  hoverEffect?: 'lift' | 'tilt' | 'glow' | 'none';
  borderGlow?: boolean;
}

const AnimatedCard = ({
  children,
  className,
  depth = 0.5,
  hoverEffect = 'tilt',
  borderGlow = false,
  ...props
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const cardVariants = {
    initial: {
      scale: 1,
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    },
    hover: {
      scale: hoverEffect === 'lift' ? 1.02 : 1,
      boxShadow: borderGlow 
        ? '0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3)' 
        : '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className={cn(
        'rounded-2xl bg-glass-gradient backdrop-blur-md border border-white/10 overflow-hidden',
        className
      )}
      initial="initial"
      whileHover="hover"
      animate={isHovered ? 'hover' : 'initial'}
      variants={cardVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ 
        transformStyle: 'preserve-3d',
      }}
      {...props}
    >
      {hoverEffect === 'tilt' ? (
        <motion.div
          className="h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
          whileHover={{
            rotateX: 5 * depth,
            rotateY: 5 * depth,
            transition: { duration: 0.2 },
          }}
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.div>
  );
};

export default AnimatedCard;
