
import React, { useState } from 'react';

type Tab = 'Experience' | 'Education' | 'Skills';

const experienceData = [
  {
    role: 'Cybersecurity Analyst',
    company: 'Amdari Inc. - UK',
    period: 'May 2025 – Present',
    details: [
        'Utilized SIEM tools for log and network traffic analysis, enhancing threat detection and reducing false positives by 25%.',
        'Designed and deployed security configurations for firewalls, IDS/IPS, and antivirus solutions, blocking 98% of unauthorized access attempts.',
        'Applied risk management frameworks to enhance cybersecurity policies, ensuring 100% compliance with regulatory standards.',
        'Assessed and mitigated phishing, malware, and ransomware threats, reducing incidents by 30% using sandbox environments and threat intelligence feeds.',
    ]
  },
  {
    role: 'Information Security & Risk Management Consultant',
    company: 'Plusious Limited',
    period: '2015 – 2025',
    details: [
        'Founded and led Plusious Limited, overseeing business operations, strategy, and client engagement.',
        'Designed and executed a robust Central Database System for the Imo State Government workforce.',
        'Implemented advanced data verification to eliminate fraudulent activities like ghost workers, saving significant government funds.',
        'Enabled seamless e-payment operations and improved decision-making through secure, real-time access to workforce data.',
    ]
  },
  {
    role: 'Manager',
    company: 'Exmark Technologies Limited',
    period: '2007 – 2012',
    details: [
        'Led a large-scale workforce verification project for the Anambra State Government.',
        'Directed end-to-end verification exercises to eliminate fraudulent activities and improve payroll integrity.',
        'Developed and implemented robust data capture and auditing methodologies.',
        'Acted as the main liaison between the company and government stakeholders.',
    ]
  },
];

const educationData = [
    {
        degree: 'Bachelor of Engineering (B.Eng)',
        institution: 'University of Port Harcourt',
        year: '2003',
        description: 'Completed a comprehensive engineering program, gaining strong analytical and problem-solving skills essential for a career in technology and systems management.',
    },
    {
        degree: 'Cybersecurity Analytics Certification',
        institution: '10Alytics',
        year: '2025',
        description: 'Specialized training in cybersecurity principles, tools, and techniques for identifying, analyzing, and mitigating security threats.',
    },
];

const skillsData = {
    technical: ['Windows, macOS, Linux', 'TCP/IP, FTP, SSH, DNS', 'VMware, VirtualBox', 'Nmap, Hydra, Metasploit', 'Active Directory, Cisco Routing', 'Office 365, G Suite'],
    core: ['Network Security', 'Vulnerability Assessment', 'Penetration Testing', 'Threat Intelligence', 'Risk Analysis', 'Incident Response', 'Malware Analysis', 'Security Auditing', 'Log Analysis', 'Endpoint Security', 'Firewall Configuration', 'Problem Solving']
};

const TabButton: React.FC<{ active: boolean; onClick: () => void; children: React.ReactNode }> = ({ active, onClick, children }) => (
    <button onClick={onClick} className={`px-6 py-2 font-semibold rounded-t-lg transition-colors duration-300 ${active ? 'bg-gray-700 text-indigo-400' : 'bg-gray-800 text-gray-400 hover:bg-gray-700'}`}>
        {children}
    </button>
);

const Resume: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('Experience');

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">My Resume</h2>
          <p className="text-lg text-gray-400 mt-2">Over 15 Years of Experience in the Field.</p>
          <div className="mt-4 w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <div className="flex border-b border-gray-700">
            <TabButton active={activeTab === 'Experience'} onClick={() => setActiveTab('Experience')}>Experience</TabButton>
            <TabButton active={activeTab === 'Education'} onClick={() => setActiveTab('Education')}>Education</TabButton>
            <TabButton active={activeTab === 'Skills'} onClick={() => setActiveTab('Skills')}>Skills</TabButton>
          </div>

          <div className="bg-gray-800 p-8 rounded-b-lg shadow-2xl min-h-[400px]">
            {activeTab === 'Experience' && (
              <div className="space-y-8">
                {experienceData.map((job, index) => (
                  <div key={index} className="border-l-2 border-indigo-500 pl-6 relative">
                     <div className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-gray-800"></div>
                     <span className="text-sm font-semibold text-indigo-400">{job.period}</span>
                     <h3 className="text-xl font-bold text-white mt-1">{job.role}</h3>
                     <h4 className="text-md text-gray-400">{job.company}</h4>
                     <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
                        {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
                     </ul>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Education' && (
               <div className="space-y-8">
                {educationData.map((edu, index) => (
                  <div key={index} className="border-l-2 border-indigo-500 pl-6 relative">
                     <div className="absolute -left-[11px] top-1 w-5 h-5 bg-indigo-500 rounded-full border-4 border-gray-800"></div>
                     <span className="text-sm font-semibold text-indigo-400">{edu.year}</span>
                     <h3 className="text-xl font-bold text-white mt-1">{edu.degree}</h3>
                     <h4 className="text-md text-gray-400">{edu.institution}</h4>
                     <p className="mt-2 text-gray-400">{edu.description}</p>
                  </div>
                ))}
              </div>
            )}
            {activeTab === 'Skills' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillsData.technical.map((skill, index) => (
                      <span key={index} className="bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Core Competencies</h3>
                   <div className="flex flex-wrap gap-3">
                    {skillsData.core.map((skill, index) => (
                      <span key={index} className="bg-indigo-900 text-indigo-300 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
