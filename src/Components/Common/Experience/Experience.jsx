import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion'


const Experience = ({ experience }) => {
    const icon = "https://i.ibb.co/8NRgKx2/online-work.png";
    const worksImg = "https://i.ibb.co/CtsJjvW/works.webp"
    const {position, company, startDate, endDate, description} = experience
    return (
                <>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration:0.5
                }}
                viewport={{ once: true }}
                className='relative overflow-hidden h-[20rem] md:h-[25rem] w-full xl:h-[25rem] 2xl:h-[30rem] rounded-xl bg-white bg-clip-border group/p2'>
                <img alt="Portfolio Cover Image" src={worksImg} className="absolute inset-0 h-full w-full object-cover group-hover/p2:scale-125 duration-300 ease-in-out" loading="lazy" />
                <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/80 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end backdrop-blur-sm">
                    <div className='p-7'>
                        <h3 className="text-xl 2xl:text-[1.6rem] font-semibold mb-5 text-white">{[position]}</h3>
                        <p className="block mb-5 text-lg 2xl:text-xl font-semibold leading-4 text-gray-200">{ company}</p>
                        <div className='xl:flex x items-center justify-between'>
                            <p className="pb-2 xl:pb-0 block mb-2 text-base 2xl:text-xl font-normal leading-4  text-gray-200">Start: <span className=''> {startDate}</span></p>
                            <p className="pb-2 xl:pb-0 block mb-2 text-base 2xl:text-xl font-normal leading-3 text-gray-200">End: <span className=''>{ endDate}</span></p>    
                        </div>
                        <p className='text-base 2xl:text-xl font-normal text-gray-200'>{ description}</p>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default Experience;