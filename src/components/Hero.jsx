import React from 'react'

import { motion } from 'framer-motion';
import { ComputersCanvas } from './canvas'
import { styles } from '../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className=' flex flex-col justify-center items-center mt-5'>
          <div className=" w-5 h-5 rounded-full bg-[#FC1D07]" />
          <div className=" w-1  sm:h-80 h-40 red-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Bonjour, je suis <span className='text-[#915eff'>Bastien</span></h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            Je suis un developeur web
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs bottom-10 bottom-32 w-full flex justify-center items-center'>
        

      </div>
    </section>
  )
}

export default Hero