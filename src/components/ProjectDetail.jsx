import React from 'react'
import {motion} from 'motion/react';

const ProjectDetail = ({
  title, 
  description, 
  subDescription, 
  image, 
  tags, 
  href,
  closeModal
  }) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <motion.div className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
      initial={{opacity: 0, scale: 0.5}}
      animate={{opacity: 1, scale: 1}}>
        <button onClick={closeModal} className='absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500'>
          <img src='assets/close.svg' className='w-6 h-6'/>
        </button>
        <img src={image} alt={title} className='w-full rounded-t-2xl'/>
        <div>
          <h5 className='px-3 mb-2 mt-2 text-2xl font-bold text-white'>{title}</h5>
          <p className='px-3 mb-3 font-normal text-neutral-300'>{description}</p>
          {subDescription.map((subDesc, index)=>(
            <p className=' px-3 mb-3 font-normal text-neutral-300'>{subDesc}</p>
          ))}
          <div className=' px-3 mb-3 flex items-center justify-between mt-4'>
            <div className='flex gap-3'>
              {tags.map((tag)=>(
                  <img 
                  key={tag.id} 
                  src={tag.path} 
                  alt={tag.name}
                  className='rounded-lag size-10 hover-animation'/>
              ))}
            </div>
            <a className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation'>
              view project <img  className='size-4' src="assets/arrow-up.svg"  href={href}/>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetail