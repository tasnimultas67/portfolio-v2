import { motion } from 'framer-motion'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import './Process.css'
import arrow2 from '../../../../../assets/arrow2.svg'
import Marquee from 'react-fast-marquee';

const Process = () => {

    const discoveryImg = "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1632&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const designImg = "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const buildImg = "https://images.unsplash.com/photo-1618477388954-7852f32655ec?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const launchImg ="https://images.unsplash.com/photo-1535957998253-26ae1ef29506?auto=format&fit=crop&q=80&w=1472&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


    return (
        <>
            <div className='pb-28 pt-14'>
            
                <motion.h1
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.5,
                }}
                viewport={{ once: true }}
                className="md:mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.5rem] font-bold text-black m-auto text-center md:w-8/12 w-full pb-12">You’re 4 steps away from a new<span className="text-themeColor"> website</span></motion.h1>
            
            <div className='w-11/12 m-auto'>
                
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                    <div className='flex flex-col gap-5'>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration:0.5
                            }}
                            viewport={{once:true}}
                            className='relative overflow-hidden h-[20rem] md:h-[25rem] w-full xl:h-[35rem] 2xl:h-[45rem] rounded-xl bg-white bg-clip-border group/p1'>
                                <img alt="Portfolio Cover Image" src={discoveryImg} className="absolute inset-0 h-full w-full object-cover group-hover/p1:scale-125 duration-300 ease-in-out" loading="lazy" />
                                <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/30 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end group-hover/p1:backdrop-blur-sm ">
                                    <div className="p-4 sm:p-6 flex-col flex gap-5 text-center md:text-left">
                                        <h3 className="text-4xl md:text-5xl justify-center md:justify-start font-bold text-white flex items-center ">Discovery <ArrowUpRightIcon className='h-10 w-10 ml-2'></ArrowUpRightIcon></h3>
                                    
                                        <p className='text-gray-100 2xl:text-xl z-50'>This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience.</p>
                                    </div>
                                </div>
                            </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration:0.5
                            }}
                            viewport={{ once: true }}
                            className='relative overflow-hidden h-[20rem] md:h-[25rem] w-full xl:h-[20rem] 2xl:h-[30rem] rounded-xl bg-white bg-clip-border group/p2'>
                            <img alt="Portfolio Cover Image" src={designImg} className="absolute inset-0 h-full w-full object-cover group-hover/p2:scale-125 duration-300 ease-in-out" loading="lazy" />
                            <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/30 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end group-hover/p2:backdrop-blur-sm">
                                <div className="p-4 sm:p-6 flex-col flex gap-5 text-center md:text-left">
                                    <h3 className="text-4xl md:text-5xl justify-center md:justify-start font-bold text-white flex items-center ">Design <ArrowUpRightIcon className='h-10 w-10 ml-2'></ArrowUpRightIcon></h3>
                                    <p className='text-gray-100 2xl:text-xl '>I take what I’ve learned about you & craft a bespoke website that’s tailored to meet your unique needs, all while accurately representing your brand & keeping things aesthetically pleasing & useable for your audience.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className='flex flex-col gap-5'>

                        <motion.div
                        
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration:0.5
                            }}
                            viewport={{ once: true }}
                            className='relative overflow-hidden h-[20rem] md:h-[25rem] w-full xl:h-[20rem] 2xl:h-[30rem] rounded-xl bg-white bg-clip-border group/p3'>
                            <img alt="Portfolio Cover Image" src={buildImg} className="absolute inset-0 h-full w-full object-cover group-hover/p3:scale-125 duration-300 ease-in-out" loading="lazy" />
                            <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/30 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end group-hover/p3:backdrop-blur-sm">
                                <div className="p-4 sm:p-6 flex-col flex gap-5 text-center md:text-left">
                                    <h3 className="text-4xl md:text-5xl justify-center md:justify-start font-bold text-white flex items-center">Build <ArrowUpRightIcon className='h-10 w-10 ml-2'></ArrowUpRightIcon></h3>
                                    <p className='text-gray-100 2xl:text-xl '>Once you’re happy with the designs, I will proceed to building them making sure everything is optimised to follow modern web practices, such as speed, security and reliability.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration:0.5
                            }}
                            viewport={{ once: true }}
                            className='relative overflow-hidden h-[20rem] md:h-[25rem] w-full xl:h-[35rem] 2xl:h-[45rem] rounded-xl bg-white bg-clip-border group/p4'>
                            <img alt="Portfolio Cover Image" src={launchImg} className="absolute inset-0 h-full w-full object-cover group-hover/p4:scale-125 duration-300 ease-in-out" loading="lazy" />
                            <div className="absolute to-bg-black-10 bg-gradient-to-t from-black/80 via-black/30 pt-32  sm:pt-48  lg:pt-64  h-full w-full flex items-end group-hover/p4:backdrop-blur-sm">
                                <div className="p-4 sm:p-6 flex-col flex gap-5 text-center md:text-left">
                                    <h3 className="text-4xl md:text-5xl justify-center md:justify-start font-bold text-white flex items-center">launch <ArrowUpRightIcon className='h-10 w-10 ml-2'></ArrowUpRightIcon></h3>
                                    <p className='text-gray-100 2xl:text-xl '>After I’ve completed the build and double checked everything alongside your approval, it’s time to launch your website. In this phase I will also provide some training videos on how you can add content to your website so you can do it yourself.</p>
                                </div>
                            </div>
                        </motion.div>
                        
                    </div>
                </div>
                
                </div>
                <Marquee speed={50} gradient={false} pauseOnHover={false} className='bg-themeColor marquee-text font-semibold py-4 text-white mt-10'>
                    <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WEB DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>WORDPRESS DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /><h2 className='uppercase text-lg md:text-2xl '>SHOPIFY DEVELOPMENT</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2 ' /><h2 className='uppercase text-lg md:text-2xl '>WORDPRESS CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /> <h2 className='uppercase text-lg md:text-2xl '>shopify CUSTOMIZATION</h2> <img src={arrow2} alt="" srcSet="" className='w-10 h-10 mx-2' /></Marquee>
            </div>   
        </>
    );
};

export default Process;