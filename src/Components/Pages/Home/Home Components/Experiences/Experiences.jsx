import { useEffect, useState } from 'react';
import Experience from '../../../../Common/Experience/Experience';
import './Experiences.css'
import {motion} from 'framer-motion'

const Experiences = () => {

    const [experiences, setExperiences] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/experiences.json')
            .then(res => res.json())
            .then(data => setExperiences(data))
        
    }, [])

    return (
        <div className=' m-auto w-11/12 py-28 md:py-36 bg-white text-center sm:text-left'>
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-bold text-black tracking-tight leading-none text-center'>Employment <span className='text-themeColor'>background</span></motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}                
                    className='m-auto lg:w-7/12 w-[90%]  mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl 2xl:text-2xl text-center'>The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.9,
                }}
                viewport={{ once: true }}
                className='lg:flex gap-5 md:mt-10'>
                {
                experiences.map(experience => <Experience key={experience._id} experience={experience } />)
                 }
            </motion.div>
            

        </div>
    );
};

export default Experiences;