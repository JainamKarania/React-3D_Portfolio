import React from 'react'
import { motion } from 'framer-motion';
import styles from "../Style";
import { FaLinkedin , FaGithub} from "react-icons/fa";
import HeroImage from "../assets/heroImage.png"
import Resume from '../assets/Jainam_Resume.pdf';
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto md:flex md:flex-row
       items-start gap-5`}>
        <div className="flex self-center md:mt-[-100px] items-center justify-center gap-4">
       <div className="flex flex-col justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full bg-[#804dee]' />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
       </div>
       <div>
         <h1 className={`${styles.heroHeadText} text-white`}>Welcome,I'm <span 
          className="text-[#804dee]">
          Jainam
         </span></h1>
         <p className={`${styles.heroSubText} mt-2 text-white-100 mb-4`}>I'm a <span>Frontend Developer & Webflow Developer.
         </span>
        </p>
        <div className="flex gap-4 mb-5 relative z-10">
        <a href="https://www.linkedin.com/in/jainam-karania/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-4xl cursor-pointer text-white hover:text-gray-300" /></a>
        <a href="https://github.com/JainamKarania" target="_blank" rel="noopener noreferrer"><FaGithub className="text-4xl text-white cursor-pointer hover:text-gray-300" /></a>
        </div>
        <a href={Resume} download><button className='flex bg-[#804dee] relative z-10 p-4 cursor-pointer border-none rounded-2xl'>Download CV</button></a>
      </div>
      </div>
      <div className="flex">
        <img src={HeroImage} alt="" className='max-w-full w-[525px] h-[525px] object-cover'/>
      </div>
    </div>
       <div className='md:absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero