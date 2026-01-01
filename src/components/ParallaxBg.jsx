import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'motion/react';

import sky from '/assets/sky.jpg';
import mountain3 from '/assets/mountain-3.png';
import planets from '/assets/planets.png';
import mountain2 from '/assets/mountain-2.png';
import mountain1 from '/assets/mountain-1.png';

const ParallaxBg = () => {
    const { scrollYProgress } = useScroll();
    const x = useSpring(scrollYProgress,{damping: 50});
    const moutain3Y = useTransform(x, [0,0.5], ["0%","70%"]);
    const planetsX = useTransform(x, [0,0.5], ["0%","-20%"]);
    const moutain2Y = useTransform(x, [0,0.5], ["0%","30%"]);
    const moutain1Y = useTransform(x, [0,0.5], ["0%","0%"]);
  return (
    <section className='absolute inset-0 bg-black/40'>
        <div className='relative h-screen overflow-y-hidden'>
            <div className='absolute inset-0 w-full h-screen -z-50'
            style={{
                backgroundImage:`url(${sky})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
            }} />
            <motion.div  className='absolute inset-0 -z-40'
            style={{
                backgroundImage:`url(${mountain3})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:moutain3Y,
            }} 
            />
            <motion.div className='absolute inset-0 -z-30'
            style={{
                backgroundImage:`url(${planets})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                x:planetsX,
            }} />
            <motion.div className='absolute inset-0 -z-20'
            style={{
                backgroundImage:`url(${mountain2})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:moutain2Y
            }} />
            <motion.div className='absolute inset-0 -z-10'
            style={{
                backgroundImage:`url(${mountain1})`,
                backgroundPosition:"bottom",
                backgroundSize:"cover",
                y:moutain1Y,
            }}/>
        </div>
    </section>
  )
}

export default ParallaxBg;