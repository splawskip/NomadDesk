import React from 'react';
import styles from './VisuallyHidden.module.css';

type VisuallyHiddenProps = {
	className?: string,
	children: React.ReactNode,
};

const VisuallyHidden = ({
  className = '',
  children,
  ...delegated
} : VisuallyHiddenProps) => {
  return (
    <span
      className={`${styles.wrapper} ${className}`}
      {...delegated}
    >
      {children}
    </span>
  );
}

export default VisuallyHidden;
