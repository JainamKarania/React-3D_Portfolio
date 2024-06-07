import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import Style from '../Style'
import { fadeIn, textVariant } from '../utils/motion'
import services from "../constants/index.js"
import SectionWrapper from '../hoc/SectionWrapper.jsx'

const ServiceCard = ({index,title,icon})=>{
return(
  <Tilt className="xs:w-[235px] w-full">
    <motion.div variants={fadeIn("right","spring",0.5*index,0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
    <div
     options ={{
      max:45,
      scale:1,
      speed:450
     }}
     className='bg-tertiary rounded-2xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <img src={icon} alt="icon" className='w-16 h-16 object-contain' />
      <h3 className='text-white text-lg font-bold text-center'>{title}</h3>

    </div>
    </motion.div>

  </Tilt>
)
} 
const AboutMe = () => {
  return (
    <>
     <motion.div variants={textVariant()} className='mt-[200px] md:mt-0'>
      <p className={`${Style.sectionSubText}`}>Introduction</p>
      <p className={`${Style.sectionHeadText}`}>Overview</p>
     </motion.div>
     <motion.p variants={fadeIn("","",0.1,1)} className='mt-4 text-secondary text-lg max-w-3xl leading-[30px] text-justify'
     >
     I am Jainam Karania a Frontend & Webflow developer with a strong educational background, having completed a Master's in Computer Applications (MCA) from Jain University, Bangalore,
     and a Bachelor's in Computer Applications (BCA) from Shri Manilal Kadakia College, Ankleshwar, with comprehensive understanding of both theoretical concepts and practical applications in the field of computer science.
     With a keen interest in frontend web development, I have honed skills through hands-on experience and continuous learning ,and demonstrated proficiency in leveraging technologies such as HTML, CSS, JavaScript, and frameworks like React.js to create visually appealing and user-friendly web interfaces.I have also knowledge in Webflow, a popular visual development tool, enables me to efficiently design and develop responsive websites with ease.  
     </motion.p>
     <div className="mt-20 flex flex-wrap gap-10">
       {services.services.map((service,index) =>(
        <ServiceCard key={service.title} index={index} {...service} />
       )) }
     </div>
    </>
  )
}

export default SectionWrapper(AboutMe,"about")