import React from 'react';

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SODMIA",
    "url": "https://www.sodmia.com",
    "logo": "https://www.sodmia.com/logo.png",
    "sameAs": [
      "https://www.facebook.com/SODMIA",
      "https://www.linkedin.com/company/sodmia",
      "https://twitter.com/SODMIA"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+573023383780",
      "contactType": "customer service"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}