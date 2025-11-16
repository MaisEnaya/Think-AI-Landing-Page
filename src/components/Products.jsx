import React from 'react';
import SellingPoints from './SellingPoints.jsx';

const fabricProductsData = [
  {
    icon: <img src="/AI_Node_logo.svg" alt="AI SuperNode" className="h-8 w-8" />,
    title: 'AI SuperNode',
    description: 'The compute backbone to \n AI sovereignty',
  },
  {
    icon: <img src="/ilm_logo.svg" alt="AI SuperNode" className="h-8 w-8" />,
    title: 'ILM system',
    description: 'The Engine of AI Independence. Create and train any AI model.',
  },
  {
    icon:<img src="/AI_Node_logo.svg" alt="AI SuperNode" className="h-8 w-8" />,
    title: 'Constellation',
    description: 'Office by day, Supercompute \n cluster by night',
  },
];

const Products = () => {
  // Prefer local asset in /public to avoid external dependency
  const thinkAILogoUrl = '/think-logo.png';

  return (
    <div className="bg-[#0C0D0D] relative">
      {/* to do: adjust sv width for diffrent screen size*/}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-12 h-14 pointer-events-none">
        <svg
          width="100%"
          height="57"
          viewBox="0 0 1425 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0.5 56C0.5 56 0.499992 0 62.5 0.5C124.5 1 1303.5 0.5 1364 0.5C1424.5 0.5 1424.5 56 1424.5 56"
            stroke="#7EB3FF"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <SellingPoints
        points={fabricProductsData}
        showLogo={true}
        logoUrl={thinkAILogoUrl}
        className="pt-32 pb-24 bg-transparent"
      />
    </div>
  );
};

export default Products;
