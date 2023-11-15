import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import signature from '../../../../../../public/tasnimul-signature.png'
import './About.css'
import { motion } from 'framer-motion';
import arrow2 from '../../../../../assets/arrow2.svg'
import Marquee from 'react-fast-marquee';

function getAge(dateString) {
    const today = new Date();
    const givenDate = new Date(dateString);
    let age = today.getFullYear() - givenDate.getFullYear();
    const m = today.getMonth() - givenDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < givenDate.getDate())) {
        age--;
    }
    return age;
}



export default function About() {
    
    const Tasnimul = "https://i.ibb.co/sKQBwkc/Tasnimul-Haque.jpg"
  const [age, setAge] = useState(null);

  useEffect(() => {
      setAge(getAge("2003/12/24"));


  }, []);

    
    return (
        <div className=" md:pt-36  pt-28 bg-white">
            <div className="w-11/12 m-auto text-center sm:text-left">
                <motion.div
                initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                    viewport={{ once: true }}
                    className=''>
                    <h1
                    
                        className=" mb-4 text-4xl md:text-5xl lg:text-[3.5rem] xl:text-[4.2rem] 2xl:text-8xl font-bold text-black tracking-tight leading-none ">A visual designer focused on creating emotional digital experience</h1>
                    <Link to="/about" className="w-fit m-auto sm:m-0 justify-center group group-* md:mt-14 flex items-center text-sm relative leading-6 text-white uppercase bg-themeColor px-8 py-3 rounded">
                        Know More <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-white ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
                </motion.div>
               
                <div className="mx-auto grid  grid-cols-1 gap-x-8 md:gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 mt-12">
                    <motion.div
                    
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.7,
                        }}
                        viewport={{once: true}}
                        className="lg:pr-8">
                        <div className="m-auto">
                            <p className=" text-xl 2xl:text-[1.8rem] leading-8 2xl:leading-10 text-gray-950 ">Hello, I am Tasnimul Haque! I'm a {age}-year-old Web Developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</p>

                            <p className=" mt-6 text-xl 2xl:text-[1.8rem] 2xl:leading-10 leading-8 text-gray-950 ">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</p>
                            <img className='w-[9rem] m-auto md:m-0 md:w-[10rem] lg:w-[11rem] 2xl:w-[13rem] mt-2 mb-5' src={signature} alt="Tasnimul Signature" />
                        </div>
                    </motion.div>
                    <div className='md:-mt-16 '>
                        
                        <motion.img
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.8,
                            }}
                            viewport={{once: true}}
                            src={Tasnimul}
                            alt="Tasnimul Haque Image"
                            loading='lazy'
                            className="w-full md:w-11/12 m-auto md:m-0 md:float-right float-none rounded-xl shadow-xl lg:-ml-0  "
                        />
                            
                    </div>
                </div>
            </div>
            <div className='mt-20 md:mt-32 '>
                <Marquee speed={50} gradient={false} pauseOnHover={false} className='bg-themeColor marquee-text font-semibold py-4 text-white mt-10'>
                    <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /></Marquee>
            </div>
        </div>
    )
}


