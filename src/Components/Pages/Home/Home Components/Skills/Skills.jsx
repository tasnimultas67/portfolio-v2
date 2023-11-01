import { useEffect, useState } from 'react';
import './Skills.css'
import SkillLogo from '../../../../Common/SkillLogo/SkillLogo';
import { motion } from 'framer-motion'
import SkillLogoGrid from '../../../../Common/SkillLogo/SkillLogoGrid';

const Skills = () => {
    const [skills, setSkills] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/expertise.json')
            .then(res => res.json())
            .then(data =>setSkills(data))
    }, [])
    return (
        <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 md:pb-36 pb-28 pt-14 relative isolate overflow-hidden bg-white'>
            <div className=' pb-10'>

                <motion.h1
                    
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] 2xl:mb-6 font-bold text-black tracking-tight leading-none text-center'>Area of <span className='text-themeColor'>Specialization</span></motion.h1>
                
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className='w-11/12 lg:w-7/12 2xl:text-2xl lg:w-3xl  mb-6 font-light text-gray-900 lg:mb-8 md:text-lg lg:text-xl text-center m-auto'>This section outlines my specific area of expertise, highlighting the skills and knowledge I’ve acquired over the years.</motion.p>
            </div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.9,
                }}
                viewport={{ once: true }}
            className=''>
                {/* <SkillLogo></SkillLogo> */}
                <SkillLogoGrid></SkillLogoGrid>
            </motion.div>
            
            </div>
    );
};



export default Skills;