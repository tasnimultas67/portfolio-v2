import tasnimulAboutBanner from '../../../assets/TasnimulHaqueAboutBanner.webp'
import tasnimulImage from '../../../assets/Tasnimul Haque 2.jpg'
import { useEffect, useState } from "react";
import { register } from 'swiper/element/bundle';
import { MapPinIcon } from '@heroicons/react/24/solid'
import 'swiper/css';
import CertificateSlider from '../../Common/CertificateSlider/CertificateSlider';
import {motion} from 'framer-motion'
import ClientLogo from '../../Common/ClientLogo/ClientLogo';
register();
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
const AboutMe = () => {
    const [age, setAge] = useState(null);

  useEffect(() => {
      setAge(getAge("2003/12/24"));

  }, []);
    
  
    return (
        <>
            <div className=''>
                <div className=' py-28 md:py-40 bg-white'>
                    <div className='w-11/12  m-auto'>
                        {/* Title */}
                        <div className='md:pb-24 pt-20 '>
                            <motion.h1
                                initial={{ opacity: 0, y: 200 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                    viewport={{ once: true }}
                                
                                className='text-center md:text-left text-4xl md:text-6xl lg:text-[4.2rem] 2xl:text-8xl font-extrabold w-full 2xl:w-10/12'>Not a dev, designer and most certainly not a role model. <span className='text-themeColor'>Just a stray cat trying to survive.</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.7,
                                }}
                                viewport={{ once: true }}
                                className="text-xl 2xl:text-[1.7rem] 2xl:leading-10 text-center md:text-left mt-9 md:ml-[10vw] text-gray-900 md:w-7/12">Hello, I am Tasnimul Haque! I'm a {age}-year-old developer and student based in Dhaka, Bangladesh. I completed a Higher Secondary Certificate degree from Bhola Govt College in 2021. Now I am doing BSS(Hons) in the Political Science department.</motion.p>
                        
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.9,
                                }}
                                viewport={{ once: true }}
                            className='flex items-center gap-3 text-xl mt-7 mb-7 md:mb-0 md:ml-[10vw] text-center md:text-left justify-center md:justify-start 2xl:text-[1.7rem] 2xl:leading-10'>
                            
                                <MapPinIcon className='h-6 w-6 fill-themeColor'></MapPinIcon>
                                localhost:3000/</motion.p>
                        </div>
                        {/* Image */}
                        <motion.img
                            initial={{ opacity: 0, y: 200 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                    viewport={{ once: true }}
                            className='m-auto  shadow-xl h-80 md:h-[100%]  md:max-h-none w-full object-cover rounded-lg ' loading='lazy' src={tasnimulAboutBanner} alt="Tasnimul Image" srcSet="" />
                        {/* Details about me */}
                        <div className=" m-auto md:m-0 text-center sm:text-left md:py-10 py-5 mt-10 text-xl md:w-8/12 2xl:text-[1.7rem] 2xl:leading-10">
                                <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="   mt-6 text-gray-900">Since the internet was introduced to me at an early age, I always aspired to use the internet to benefit myself or other people. I realised that the internet is a powerful tool capable of solving any problem. Whenever using the internet I always find myself analysing the design and functionality of websites - how they could be improved, what makes them successful.</motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    className="   mt-6 text-gray-900">I became fascinated with web design when I got my first computer several years ago, spending hours experimenting with CSS and HTML coding.As a person I am organized, punctual and a quick learner. I enjoy problem solving and motivating myself, which I feel plays a key part in learning how to use programming languages and creating websites.</motion.p>
                        </div>
                        <div className='md:flex gap-10 flex-row items-center mt-10'>
                            <div className='flex-1 '>
                                <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    className='text-4xl md:text-6xl 2xl:text-8xl text-center md:text-left font-bold text-black mb-7 md:mb-0'>I enjoy partnering with design-savvy experts.</motion.h1>
                            </div>
                            <div className='flex-1 text-center sm:text-left text-xl 2xl:text-[1.7rem] 2xl:leading-10'>
                                <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className=" text-gray-900">In my spare time I enjoy reading, music, watching movies, travelling, art and socialising, these have all led me to use the internet to research and keep updated with my interests. I have benefited greatly from applying the internet to my hobbies, which is another reason why I aspire to become a web developer. I have recently designed my own website which I use as a portfolio and a place to practice using HTML, CSS, JavaScript, React, WordPress & Shopify.</motion.p>
                                <motion.p
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{opacity: 1, y: 0}}
                                    transition={{
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true }}
                                    className="   mt-6 text-gray-900">I created this website so I could showcase all this and through this process, make it easier for you to connect with me. If you like what you see, head over to the contact section below and send me a text. I would love to hear from you!</motion.p>
                            </div>
                        </div>
                    </div>
                    <div  className="pt-28">
                        <ClientLogo></ClientLogo>
                    </div>
                    
                </div>
                {/* Certificates */}
                <div className='py-28 w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center bg-[#214FC6]'>
                    <CertificateSlider/>
                </div>
             </div>
        </>
    );
};

export default AboutMe;
