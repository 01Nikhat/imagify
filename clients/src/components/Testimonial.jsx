import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import {motion} from 'framer-motion';

const Testimonial = () => {
  return (
    <motion.div  className='justify-center my-20 py-12 md:px-28 items-center flex flex-col '
    
    initial={{ opacity:0.2, y: 100 }}
    transition={{ duration: 1}}
    whileInView = {{ opacity: 1, y:0 }}
    viewport={{ once:true }}
    >
      <h1 className='text-3xl sm:text-4xl font-semibold mb-2'>Customer Testimonial</h1>
      <p className='text-grey-500 mb-12'>What our users are saying</p>
      <div className='flex flex-wrap md:flex-nowrap gap-6'>
        {testimonialsData.map((item,index)=>(
          <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md order w-80  cursor-pointer hover:scale-[1.02] transition-all'>
            <div className='flex flex-col items-center'>
             <img src={item.image} alt="" className='rounded-full w-14' />
             <h2 className='text-xl font-semibold mt-3'>{item.name}</h2>
             <p className='text-gray-500 mb-4'>{item.role}</p>
             <div className='flex mb-4'>
                {Array(item.stars).fill().map((starRating,index)=>(
                  <img key={index} src={assets.rating_star} alt="" />
                ))}
             </div>
             <p className='text-center text-sm text-gray-600'>{item.text}</p>
            </div>
            
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonial
