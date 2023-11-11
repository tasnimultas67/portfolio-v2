import { useState } from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'
import HeroTas from '../../../../../assets/Untitled design.jpg'

import './Hero.css'
import { Link } from 'react-router-dom';

const quotes = [
    { "quote": "My favorite machine at the gym is the vending machine" },
    { "quote": "If I were two-faced, would I be wearing this one?" },
    { "quote": "A day without laughter is a day wasted" },
    { "quote": "Never go to a doctor whose office plants have died" },
    { "quote": "All men are equal before fish" },
    { "quote": "I am only human, although I regret it" },
    { "quote": "When life gives you lemons, squirt someone in the eye" },
    { "quote": "Everything is funny, as long as it’s happening to somebody else" },
    { "quote": "I had plastic surgery last week – I cut up my credit cards" },
    { "quote": "There is no such thing as fun for the whole family" },
    { "quote": "Everything that used to be a sin is now a disease" },
    { "quote": "The road to success is always under construction" },
    { "quote": "If someone else is paying for it, food just tastes a lot better" },
    { "quote": "Fatherhood is great because you can ruin someone from scratch" },
    { "quote": "If you want to look thin: hang out with fat people" },
    { "quote": "My fake plants died because I did not pretend to water them" },
    { "quote": "We never really grow up, we only learn how to act in public" },
    { "quote": "There's so many lonely emojis man" },
    { "quote": "My memories are from the future" },
    { "quote": "Laugh a lot. It burns a lot of calories" },
    { "quote": "If you die in an elevator, be sure to push the up button" },
    { "quote": "If I got any cooler I would freeze to death" },
    { "quote": "If you think education is expensive, try ignorance" }
];


export default function Hero() {

    const randomIndex = () => {
        let randomIndex = Math.floor(Math.random() * quotes.length);
        return randomIndex;
    }
    const [selectedQuote, setSelectedQuote] = useState(quotes[randomIndex()]);

    const getQuote = () => {
        setSelectedQuote(quotes[randomIndex()]);
    }

    return (
        <div className="bg-themeColor text-white h-[100vh] flex items-center overflow-hidden">

            <div className="mx-auto w-full md:w-10/12 lg:w-10/12 xl:w-10/12 px-5 py-32 sm:py-36 lg:py-36 ">

                <div className="text-center ">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="text-5xl lg:text-7xl md:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-white">
                        {selectedQuote.quote}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.7,
                        }}
                        viewport={{ once: true }}
                        className="my-9 text-base md:text-lg md:leading-7 2xl:text-2xl text-gray-100 md:w-10/12 m-auto">Life is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn't mean you always wake up ready to seize the day, and sometimes need a reminder that life is a great gift.</motion.p>
                    
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.9,
                    }}
                    viewport={{ once: true }}
                    className=" block md:flex justify-center items-center gap-5">
                        <Link to="/portfolio" className='text-base 2xl:text-xl m-auto md:m-0 w-fit flex items-center justify-center bg-white text-black py-3 px-5 rounded-md font-semibold hover:bg-yellowAc mb-5 md:mb-0'>See my Projects <ArrowRightIcon className="h-5 w-5 text-black ml-2 group-hover:-mr-2 group-hover:ml-3"/> </Link>

                        <button
                            onClick={getQuote} className="w-fit group font-semibold flex items-center justify-center leading-6 text-yellowAc m-auto md:m-0 2xl:text-xl">
                            Try New Qoutes <span aria-hidden="true"><ArrowRightIcon className="h-5 w-5 text-yellowAc ml-1 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </button>
                    </motion.div>
            </div>
        </div>
    )
}
