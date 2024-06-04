import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Style from "../Style";
import  BallCanvas  from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import  technologies  from "../constants/index";

const Skills = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={`${Style.sectionSubText}`}>Tech Stack</p>
      <p className={`${Style.sectionHeadText} mb-20`}>Professional Skills</p>
     </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Skills, "");