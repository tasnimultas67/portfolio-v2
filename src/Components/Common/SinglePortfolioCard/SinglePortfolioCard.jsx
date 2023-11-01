/* eslint-disable react/prop-types */
import './SinglePortfolioCard.css'
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

const SinglePortfolioCard = ({ portfolio }) => {
    const { portfolioCategory, portfolioDetails, portfolioImgLink, portfolioLiveLink, portfolioTitle, _id } = portfolio

    return (
        <>
           <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.5,
                }}
                viewport={{ once: true }}
                className="relative flex-col items-end justify-center overflow-hidden text-left border hover:border-black cursor-pointer bg-white rounded-md shadow-lg group/card">

                <div className="relative p-6  px-6 md:px-6 ">
                    <div className='border border-black/10 mb-4 h-[11rem] 2xl:h-[17rem] w-full object-cover rounded-md overflow-hidden'>
                        <img src={portfolioImgLink} loading='lazy' className="object-cover group-hover/card:scale-125 duration-300 ease-in-out" alt="Portfolio Image" />
                    </div>
                    <p className='bg-themeColor absolute top-[9.8rem] 2xl:top-[13.5rem] left-[2.5rem] px-2 py-0.5 inline-block text-sm 2xl:text-lg rounded shadow-lg text-white'>{ portfolioCategory}</p>
                    <h2 className="mb-2 block font-sans text-2xl 2xl:text-3xl font-semibold text-black antialiased ">{portfolioTitle}</h2>
                    <p className="mb-4 block font-sans text-base 2xl:text-xl leading-snug tracking-normal text-gray-800 antialiased">{portfolioDetails.length > 150 ? `${portfolioDetails.substring(0, 150)}...` : portfolioDetails}</p>
                     <div className='flex gap-2 items-center justify-between'>
                       
                        <Link to={`/portfolio/${_id}`} className=" group group-* mt-5 flex items-center text-sm 2xl:text-lg relative leading-6 text-black uppercase hover:text-yellow-600">
                        Case Study <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 2xl:h-5 2xl:w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>
                        
                        <Link to={portfolioLiveLink} target='_blank' className=" group mt-5 flex items-center text-sm 2xl:text-lg relative leading-6 text-black uppercase hover:text-yellow-600">
                        Live <span aria-hidden="true"><ArrowUpRightIcon className="h-4 w-4 2xl:h-5 2xl:w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3 group-hover:text-yellow-600"/></span>
                        </Link>   
                                       
                    </div>
                </div>
            </motion.div>

        </>
    );
};

export default SinglePortfolioCard;