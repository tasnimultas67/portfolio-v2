import './ContactMeBanner.css'
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import {motion} from 'framer-motion'

import { Link } from "react-router-dom";

export default function ContactMeBanner() {

    return (
        <>
            <section className="bg-white pt-24 pb-32" >
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{ once: true }}
                    className="w-11/12 m-auto flex justify-between items-center">
                    <div>
                        <h1
                        className="text-4xl 2xl:text-5xl font-bold text-black tracking-tight leading-none">Is this what you’re <span className='text-themeColor'>looking</span> for?</h1>
                    </div>
                    <div className='flex items-center gap-x-10'>
                        <p className='text-black text-xl'>There's only one way to find out.</p>
                        <Link
                        to="/contact" className="w-fit justify-center group/contactMe flex items-center text-sm  leading-6 text-white uppercase bg-themeColor px-6 py-3 m-auto rounded">Contact Me <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 text-white ml-1 group-hover/contactMe:-mt-2 group-hover/contactMe:-mr-2 group-hover/contactMe:ml-3" /></span>
                    </Link>
                    </div>
                </motion.div>
            </section>
        </>
  )
}
