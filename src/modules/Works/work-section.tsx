import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const works = [
  {
    name: "skinstric.ai",
    jobTitle: "Frontend Engineer",
    date: "June 2025 - July 2025",
    location: "Remote",
    bulletPoints: [
      " Architected a real-time skin analysis platform using OpenAI Vision API and Next.js, achieving 98% detection accuracy across diverse skin conditions",
      " Developed responsive UI with TailwindCSS and GSAP animations, implementing dynamic skincare recommendation cards with 60% improved engagement",
      " Optimized performance using Next.js Server Components and Lottie animations, achieving sub-2-second analysis time for skin condition detection",
      " Built a custom animation system using GSAP timeline for seamless user experience during skin analysis processing, increasing user retention by 40%",
      " Implemented an efficient image processing pipeline combining OpenAI Vision API with a 4D Mini model for enhanced accuracy in skin tone and texture analysis",
    ],
  },
  {
    name: "Frontend Simplified",
    jobTitle: "Frontend Engineer & Support Staff",
    date: "May 2025 - Current",
    location: "Remote",
    bulletPoints: [
      " Selected as a peer mentor after achieving top 5% performance in the cohort, providing debugging support and code reviews for 20+ students across React and Next.js projects.",
      " Created and led workshops on modern frontend optimization techniques, helping students improve their portfolio project load times by an average of 50%.",
      " Developed comprehensive learning resources for React component architecture and TypeScript, resulting in 70% of mentored students successfully implementing type-safe applications.",
      " Built and shared a reusable component library using ShadCN/UI, reducing development time for student projects by 40% and improving code consistency",
    ]
  },
  {
    name: "McDonalds (R&J Investments of Eden, LLC)",
    jobTitle: "Shift Manager",
    location: "On-Site",
    date: "Aug 2022 - Current",
    bulletPoints: [
      " Promoted to management in 18 months (faster than average) for strong leadership and problem-solving.",
      " Supervised 10+ team members per shift, improving order accuracy and reducing wait times by 15%.",
      " Implemented process improvements, cutting resource waste by 10% while maintaining safety and quality.",
      " Developed teamwork and ownership skills that are directly transferable to agile software development."
    ]
  }
]

export const WorksSection = () => {
  return (
    <div className="w-full max-w-[1100px] mx-auto py-10 px-6 flex  flex-col justify-center items-center">
      <div className='text-3xl font-bold mb-10'>
        My Work Expereince
      </div>
      <Timeline position="alternate">
        {works.map((work, idx) => (
          <TimelineItem
            key={`${work.name}-${work.date}`}
            className="!min-h-[120px] p-2" // compact spacing
          >
            <TimelineSeparator>
              <TimelineDot />
              {idx < works.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <div className="mb-4 max-w-[600px] bg-[#fff] shadow-2xl shadow-amber-700 rounded-lg p-2 leading-tight tracking-tighter">
                <h3 className="font-bold text-lg">{work.jobTitle}</h3>
                <p className="text-md">{work.name}</p>
                <p className="text-sm ">{work.date} • {work.location}</p>
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  {work.bulletPoints.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

    </div>
  );
}