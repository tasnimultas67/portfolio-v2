import { useState } from 'react'
import { ArrowRightIcon, MinusIcon, ArrowLongRightIcon } from '@heroicons/react/24/solid';
import {motion} from 'framer-motion'

import './Hero.css'
import { Link } from 'react-router-dom';

const quotes = [
    { "quote": "I'm the new Moses" },
    { "quote": "Winning is the only option" },
    { "quote": "We will be recognized" },
    { "quote": "You can't look at a glass half full or empty if it's overflowing." },
    { "quote": "There are people sleeping in parking lots" },
    { "quote": "Distraction is the enemy of vision" },
    { "quote": "I'm nice at ping pong" },
    { "quote": "I give up drinking every week" },
    { "quote": "We will change the paradigm" },
    { "quote": "Sometimes you have to get rid of everything" },
    { "quote": "Life is the ultimate gift" },
    { "quote": "Burn that excel spread sheet" },
    { "quote": "People only get jealous when they care." },
    { "quote": "All you have to be is yourself" },
    { "quote": "Believe in your flyness...conquer your shyness." },
    { "quote": "George Bush doesn't care about black people" },
    { "quote": "Artists are founders" },
    { "quote": "I leave my emojis bart Simpson color" },
    { "quote": "There's so many lonely emojis man" },
    { "quote": "All the musicians will be free" },
    { "quote": "My memories are from the future" },
    { "quote": "I'm the best" },
    { "quote": "Style is genderless" },
    { "quote": "I watch Bladerunner on repeat" },
    { "quote": "If I got any cooler I would freeze to death" },
    { "quote": "Only free thinkers" }
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
        <div className="bg-themeColor text-white h-[100vh] flex items-center">

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
