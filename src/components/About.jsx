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
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}>Intro</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-3xl leading-[30px]'
      >
        Bonjour, je suis à la recherche d'une entreprise pour faire une alternance pour le titre
        de Concepteur Developpeur D'Application(titre RNCP de niveau II, équivalent Bac+3/4)
        en environnement DevOps avec Simplon qui commence le 12 février 2023, suivant un
        rythme de 3 semaines en entreprise et une semaine en formation. J’ai les capacités
        necessaires pour m’adapter à votre entreprise et je suis capable d’apprendre
        facilement les langages et framework que vous utilisez, Je suis donc capable de
        concevoir vos applications de demain.

        Voici mon <a href="https://github.com/Exizygl">GitHub</a>
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