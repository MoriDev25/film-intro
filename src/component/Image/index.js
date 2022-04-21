import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const Image = ({ src, alt, className, onClick }) => (
  <LazyLoadImage
    alt={alt}
    effect="blur"
    src={src}
    className={className}
    onClick={onClick} />
);

export default Image;