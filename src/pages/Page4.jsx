import React, { useState } from 'react';
import backgroundVideo from '../assets/page4video.mp4';

const sections = ['Experience', 'Education', 'Projects'];

const experiences = [
  {
    title: 'Retrack Automation',
    role: 'Software Developer',
    duration: 'Apr 2024 – May 2025',
    details: `• Developed enterprise apps using Angular, React, Node.js\n
• Built REST APIs, managed MongoDB/MySQL\n
• Used Docker, GitHub Actions for CI/CD\n
• Practiced Agile (Scrum), handled daily sprints`,
  },
  {
    title: 'Zyonyx Pvt Ltd (Freelancing)',
    role: 'Software Developer',
    duration: 'Mar 2023 – Apr 2024',
    details: `• Delivered full-stack apps with Django & MERN\n
• Focused on clean UI/UX and performance\n
• Deployed apps via Heroku and PythonAnywhere`,
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science and Engineering',
    duration: '2019 – 2023',
    score: '8.3 CGPA',
  },
  {
    degree: 'PG Diploma in Full Stack Development',
    duration: 'Feb 2023 – Aug 2023',
  },
  {
    degree: 'PG Diploma in Embedded Systems',
    duration: 'Aug 2023 – Oct 2023',
  },
];

const projects = [
  {
    title: 'Mood Music App',
    desc: 'Detects user mood and recommends Spotify tracks using Angular 17 + Node.js.',
    link: 'https://github.com/ayesh03/Mood-Music-App',
  },
  {
    title: 'TweetApp',
    desc: 'Twitter clone using Django with authentication and deployment.',
    link: 'https://github.com/ayesh03/ayesh-tweet',
  },
  {
    title: 'Sales Email Generator',
    desc: 'AI-powered email generation tool using OpenAI and NLP prompts.',
    link: 'https://github.com/ayesh03/Sales-Email-Generator',
  },
  {
    title: 'Feedback Management System',
    desc: 'React app for real-time feedback with edit/delete and star ratings.',
    link: 'https://github.com/ayesh03/feedback-system',
  },
];

const SectionContent = ({ active }) => {
  const sharedStyle = 'mb-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm text-white';

  if (active === 'Experience') {
  return (
    <div className='grid md:grid-cols-2 gap-6'>
      {experiences.map((exp, i) => (
        <div key={i} className='p-4 bg-white/10 rounded-xl backdrop-blur-md text-white'>
          <h3 className='text-xl font-bold'>{exp.title}</h3>
          <p className='text-gray-300 italic'>{exp.role} | {exp.duration}</p>
          <p className='whitespace-pre-line text-gray-200 mt-2'>{exp.details}</p>
        </div>
      ))}
    </div>
  )
}
else if (active === 'Education') {
    return (
      <div className='space-y-4'>
        {education.map((edu, i) => (
          <div key={i} className={sharedStyle}>
            <h3 className='text-xl font-semibold'>{edu.degree}</h3>
            <p className='text-gray-300 italic'>{edu.duration}</p>
            {edu.score && <p className='text-gray-200'>Score: {edu.score}</p>}
          </div>
        ))}
      </div>
    );
  } else if (active === 'Projects') {
    return (
      <div className='grid md:grid-cols-2 gap-6'>
        {projects.map((proj, i) => (
          <div key={i} className='bg-white/10 p-5 rounded-xl backdrop-blur-md text-white'>
            <h3 className='text-lg font-semibold'>{proj.title}</h3>
            <p className='text-gray-300'>{proj.desc}</p>
            <a
              href={proj.link}
              target='_blank'
              rel='noopener noreferrer'
              className='text-blue-400 underline mt-2 inline-block'
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const AnimatedJourneyPage = () => {
  const [active, setActive] = useState('Experience');
  const [clicked, setClicked] = useState(false);

  const handleResumeDownload = () => {
    setClicked(true);
    const link = document.createElement('a');
    link.href = '/assets/ayesh_resume.pdf';
    link.download = 'Ayesh_Resume.pdf';
    link.click();
    setTimeout(() => setClicked(false), 2000);
  };

  return (
    <div className='h-screen p-8 bg-white'>
      <div className='relative h-full w-full rounded-[50px] overflow-hidden bg-black text-white'>
        <video
          src={backgroundVideo}
          autoPlay
          muted
          loop
          className='absolute w-full h-full object-cover opacity-70'
        />

        <div className='absolute inset-0 z-10 overflow-y-auto flex flex-col items-center justify-start p-10 pt-20'>
          <h1 className='text-4xl font-extrabold text-center mb-10'>🌟 Explore My Journey</h1>

          <div className='flex flex-wrap justify-center gap-4 mb-10'>
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => setActive(s)}
                className={`px-6 py-2 rounded-full border-2 transition duration-300 font-semibold ${
                  active === s
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent border-white hover:bg-white hover:text-black'
                }`}
              >
                {s}
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className={`px-6 py-2 rounded-full border-2 transition duration-300 font-semibold ${
                clicked
                  ? 'bg-white text-black border-white'
                  : 'bg-transparent text-white border-white hover:bg-white hover:text-black'
              }`}
            >
              {clicked ? 'Downloading...' : 'Download Resume'}
            </button>
          </div>

          <div className='w-full max-w-5xl'>
            <SectionContent active={active} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedJourneyPage;
