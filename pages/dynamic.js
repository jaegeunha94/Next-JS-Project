// enter.tsx
import dynamic from 'next/dynamic';
import * as React from 'react';

const Thing = dynamic(() => import('../components/Dynamic'), {
  ssr: false,
  suspense: true,
});

export default function Enter() {
  return (
    <div>
      <button>Email</button>
      <button>Phone</button>

      <React.Suspense fallback="Loading a big component">
        <Thing />
      </React.Suspense>
    </div>
  );
}
