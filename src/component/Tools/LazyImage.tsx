import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import LoadingSpinner from './loadingSpinner';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  [key: string]: string | undefined;
}

const LazyImage = ({ src, alt, className, ...props }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      ref={imgRef}
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.1)',
      }}
    >
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className={className}
          onLoad={() => setIsLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          {...props}
        />
      )}
      {!isLoaded && isInView && (
        <LoadingSpinner />
      )}
    </Box>
  );
};

export default LazyImage;