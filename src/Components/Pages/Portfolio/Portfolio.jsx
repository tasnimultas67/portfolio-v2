import {useState } from 'react';
import {useLoaderData } from 'react-router-dom';
import SinglePortfolioCard from '../../Common/SinglePortfolioCard/SinglePortfolioCard';
import {motion} from "framer-motion"

const Portfolio = () => {
    const loadedPortfolios = useLoaderData()
    const [portfolios, setPortfolios] = useState(loadedPortfolios)

    return (
        <div className='py-28  m-auto w-11/12 justify-center bg-white'>
            <div className='md:pt-28 md:pb-10 pt-16 pb-5 text-center sm:text-left'>
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                    }}
                    viewport={{ once: true }}
                    className='mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-black tracking-tight leading-none text-center w-full md:w-9/12 2xl:w-10/12 m-auto'>Helping brands to simplify their digital experiences.</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className='md:w-7/12 m-auto text-center mb-6 font-light text-gray-800 lg:mb-8 md:text-lg lg:text-xl 2xl:text-2xl 2xl:w-9/12'>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs</motion.p>
            </div>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    portfolios.map(portfolio => <SinglePortfolioCard key={portfolio._id} portfolio={portfolio}/>)
                }
            </div>
        </div>
    );
};

export default Portfolio;