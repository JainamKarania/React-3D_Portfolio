import { motion } from "framer-motion"
import Style from "../Style"
import  staggerContainer  from "../utils/motion.js"

const SectionWrapper = (Component,idname) => 
    function HOC(){
   return (
    <motion.section variants={staggerContainer()}
     initial="hidden"
     whileInView="show"
     viewport={{once:true,amount:0.25}}
     className={`${Style.padding} max-w-7xl mx-auto relative z-0`}
     >
        <span className='hash-span' id={idname}>
          &nbsp;
        </span>
        <Component/>
    </motion.section>
  )
}


export default SectionWrapper