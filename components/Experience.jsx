"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../utils/styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, isVisible }) => {
  return (
    <VerticalTimelineElement
      visible={isVisible}
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: 'none',
        border: '2px solid #232631',
        padding: '2rem',
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <Image
            src={experience.icon.src}
            alt={experience.company_name}
            width={experience.icon.width}
            height={experience.icon.height}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex < experiences.length - 1 ? prevIndex + 1 : prevIndex));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`${styles.section} bg-[#030014]`}>
      <motion.div 
        initial="hidden"
        animate="show"
        variants={textVariant()}
        className="text-center"
      >
        <p className={`${styles.sectionSubText} text-gray-400`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-white`}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor="white">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              isVisible={index <= visibleIndex}
            />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default SectionWrapper(Experience, "work");