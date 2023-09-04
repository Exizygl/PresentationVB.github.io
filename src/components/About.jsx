import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { services } from '../constants'
import { fadeIn, textVariant } from '../motion'

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full black-red-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants ={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Intro</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        Je suis un developeur web avec de l'experience en React,PHP, Nodejs cherchant une alternance, Je suis à la recherche d'une entreprise pour le titre de Concepteur Developpeur D'Application (Titre RNCP niveau 6 - Bac+3/4) à la 2i Academy qui commence en Septembre/Novembre, avec un rythme de 3 semaines en entreprise et une semaine en formation.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about")