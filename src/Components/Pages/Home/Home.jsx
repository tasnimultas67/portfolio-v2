import './Home.css'
import {motion} from 'framer-motion'
import Hero from './Home Components/Hero/Hero';
import About from './Home Components/About/About';
import Experiences from './Home Components/Experiences/Experiences';
import Portfolios from './Home Components/Portfolios/Portfolios';
import Skills from './Home Components/Skills/Skills';
import ClientLogo from '../../Common/ClientLogo/ClientLogo';
import WhyChoose from './Home Components/WhyChoose/WhyChoose';
import Process from './Home Components/Process/Process';
import ContactMeBanner from '../../Common/ContactMeBanner/ContactMeBanner';


const Home = () => {
    return (
        <div className='home relative top-0 left-0'>
            <Hero></Hero>
            <About></About>
            <Portfolios />
            <WhyChoose></WhyChoose>
            <Experiences ></Experiences>
            <Process></Process>
            <Skills/>
            <div className='pb-24 pt-16 md:pb-32 md:pt-28'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-20 w-11/12  text-3xl md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold md:max-w-4xl 2xl:max-w-6xl m-auto text-black tracking-tight leading-none text-center'>Trusted by thousands of successful startups <span className='text-themeColor'>worldwide</span></motion.h1>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}>
                    <ClientLogo></ClientLogo>
                </motion.div>
            </div>
            <ContactMeBanner></ContactMeBanner>

        </div>
    );
};

export default Home;