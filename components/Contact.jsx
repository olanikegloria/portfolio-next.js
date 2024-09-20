"use client"
import { motion } from "framer-motion";


import { styles } from "../utils/styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
 

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <p className={styles.sectionSubText}>Email : olanikegloria2020@gmail.com</p>
        <p className={styles.sectionSubText}>linkedin:https://www.linkedin.com/in/olani </p>
        <p className={styles.sectionSubText}>github : https://github.com/olanikegloria</p>
        <p className={styles.sectionSubText}>whatsapp : +2349018063537</p>
        <p className={styles.sectionSubText}>phone : +2349116185832</p>
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