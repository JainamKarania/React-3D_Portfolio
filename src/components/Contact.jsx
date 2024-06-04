import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import  styles  from "../Style";
import  EarthCanvas from "./canvas/Earth";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_v8herm7', 'template_kct88l6', form.current, {
        publicKey: 'eRoY1OzyVF6A82LeH',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSubmitted(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-tertiary p-8 rounded-2xl'
      >
        <div className="md:w-full w-full bg-tertiary p-8 rounded-2xl">
      {!submitted ? (
              <>
      <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={sendEmail} ref={form}  className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-white">Name</label>
            <input type="text" id="name" name="name"  className="mt-1 p-2 w-full bg-tertiary border rounded-md" />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-white">Email</label>
            <input type="email" id="email" name="email"  className="mt-1 bg-tertiary p-2 w-full border rounded-md" />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-white">Your Message</label>
            <textarea id="message" name="message" rows="4"  className="mt-1 p-2 bg-tertiary w-full border rounded-md"></textarea>
          </div>
          <div>
              <label htmlFor="attachment" className="block text-lg font-medium text-white">Attachment</label>
              <input type="file" id="attachment" name="attachment" className="mt-1 p-2 bg-tertiary w-full border rounded-md" />
            </div>
          <button type="submit" className="bg-[#804dee] text-white px-4 py-2 rounded-md hover:bg-[#804dee]">Submit</button>
        </form>
        </>
              ) : (
                <div className="text-left">
                  <h2 className="text-3xl font-bold mb-4 text-white">Thank you for reaching out!</h2>
                  <p className="text-lg text-white">We appreciate your message. Our team will get back to you as soon as possible.</p>
                </div>
              )}
      </div>
        </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");