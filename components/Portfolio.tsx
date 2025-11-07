import React from 'react';

const portfolioItems = [
  {
    title: 'OSINT Threat Intelligence Project',
    category: 'Cybersecurity',
    imageUrl: 'https://drive.google.com/uc?id=1aU0W6ZjHWvUQWT3KWstlFg1L3cP1rLPY',
    url: 'https://drive.google.com/file/d/1J27nE9Uaiooal-vgIzx97X30rdFpBVyK/view?usp=drive_link',
  },
  {
    title: 'SOC Analysis Capstone Project',
    category: 'Cybersecurity',
    imageUrl: 'https://drive.google.com/uc?id=1uFMuhmLs2cHAl7700WY5MFHqfPgHv7aR',
    url: 'https://drive.google.com/file/d/1f5PUKKO5309twiGPyx7MT-lj8IRfcyhu/view?usp=drive_link',
  },
  {
    title: 'Enhancing SOHO Network Security',
    category: 'Networking',
    imageUrl: 'https://drive.google.com/uc?id=11c2m9OsZszkFw8wWqT_Zc0ztTcyPbKCw',
    url: 'https://drive.google.com/file/d/1mm7-E4gvBiSG9pK3BfOagyvlelpxgYNk/view?usp=sharing',
  },
  {
    title: 'SOHO Networking Security Analysis Report - SolTech Ltd',
    category: 'Networking',
    imageUrl: 'https://drive.google.com/uc?id=1UjapJNQQ9s4T73CuMu7veBm7SirhMR2Q',
    url: 'https://drive.google.com/file/d/1590gfc5ovRqUxn2BcuHU63ysYKvIsFtb/view?usp=drive_link',
  },
  {
    title: 'Internal Penetration Test Report - Nova Ltd',
    category: 'Cybersecurity',
    imageUrl: 'https://drive.google.com/uc?id=1H_-IqItWcXAC2xoFIxO0MhTO99BXRb-a',
    url: 'https://drive.google.com/file/d/1AdtfBVGstJhtPX3PKZpYro9gUNGChuCv/view?usp=drive_link',
  },
  {
    title: 'GRC Capstone Project - Noventa Technologies Ltd',
    category: 'Cybersecurity',
    imageUrl: 'https://drive.google.com/uc?id=1wXc4j0go5GtY7bLy-vIObP0BX170vC4H',
    url: 'https://drive.google.com/file/d/1ZOAmwaDKReHbcTb8vZWMhY6m9nw4IyTA/view?usp=drive_link',
  },
];

const PortfolioItem: React.FC<{ title: string; category: string; imageUrl: string; url: string }> = ({ title, category, imageUrl, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="group block relative overflow-hidden rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <span className="text-indigo-400 text-sm font-semibold">{category}</span>
      <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
      <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
    </div>
  </a>
);

const Portfolio: React.FC = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">My Portfolio</h2>
          <p className="text-lg text-gray-400 mt-2">Visit my portfolio and keep your feedback.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
