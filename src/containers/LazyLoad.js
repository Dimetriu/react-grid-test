import React from 'react';

export default function LazyLoad({ children, placeholder }) {
  return (
    <React.Suspense fallback={placeholder}>
      {children}
    </React.Suspense>
  );
}
