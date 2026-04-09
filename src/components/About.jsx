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
      Bonjour, je suis à la recherche d'une entreprise pour réaliser une alternance  de 18 mois dans le cadre du titre de Data Engineer (Titre RNCP niveau 7 – Bac+5) avec Simplon le 12 octobre .(Trois semaines en entreprise, une semaines en formation)
      Passionné par l’ingénierie des données, je souhaite contribuer à la conception de pipelines robustes et à la valorisation des données afin d’accompagner la prise de décision. Rigoureux et adaptable, je suis prêt à m’investir pleinement dans vos projets data.

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
