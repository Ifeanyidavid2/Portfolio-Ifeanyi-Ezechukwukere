import React, { useState, useEffect } from 'react';
import { SocialIcon } from './Icons';
import profileImage from './access/Me.png';

interface HeroProps {
  scrollToContacts: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToContacts }) => {
  const titles = ["Cybersecurity Analyst", "Risk Management Consultant", "Business Strategist"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === titles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (reverse ? -1 : 1));
    }, reverse ? 75 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, titles]);

  return (
    <section className="min-h-screen flex items-center bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-indigo-900 opacity-30"></div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <span className="text-indigo-400 font-semibold tracking-wider">Welcome to my world</span>
            <h1 className="text-4xl md:text-6xl font-extrabold my-4 leading-tight">
              Hi, I’m <span className="text-indigo-500">Ifeanyi Ezechukwukere</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              a <span className="text-green-400">{`${titles[index].substring(0, subIndex)}`}</span>
              <span className="animate-ping">|</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              Strategic and results-oriented Cybersecurity Analyst and Risk Management Consultant with over 15 years of cross-sector experience delivering robust security solutions, large-scale data integrity projects, and regulatory compliance for government and private organizations.
            </p>
            <div className="mt-8 flex justify-center md:justify-start items-center space-x-6">
               <button onClick={scrollToContacts} className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-transform transform hover:scale-105 duration-300">
                Contact Me
              </button>
              <div className="flex space-x-4">
                <SocialIcon href="https://www.linkedin.com/in/ifeanyi-davidezechukwukere" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full transform -rotate-12"></div>
              <img 
                src= {profileImage}
                alt="Ifeanyi David Ebere Ezechukwukere" 
                className="relative w-full h-full object-cover rounded-full shadow-2xl border-4 border-gray-800"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
