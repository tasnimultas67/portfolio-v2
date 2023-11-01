import './ContactMeBanner.css'
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";

export default function ContactMeBanner() {

    return (
        <>
            <section className="bg-white py-28" >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="w-[96%] m-auto bg-gray-100 py-28 px-16 rounded-2xl flex justify-between">
                    <div>
                        <h1
                        className="mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-bold text-black tracking-tight leading-none">Get in touch right now</h1>
                        <p className='text-xl'>You can get in touch with me at your convenience.</p>
                    </div>
                    <div >
                        
                        <Link
                        to="/contact" className="w-fit justify-center group/contactMe mt-8 flex items-center text-sm  leading-6 text-white uppercase bg-themeColor px-6 py-3 m-auto rounded">Contact Me <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 text-white ml-1 group-hover/contactMe:-mt-2 group-hover/contactMe:-mr-2 group-hover/contactMe:ml-3" /></span>
                    </Link>
                    </div>
                </motion.div>
            </section>
        </>
  )
}
