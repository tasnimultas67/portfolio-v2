import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';


const ClientsReview = () => {
    return (
        <>
            <section className="bg-white pb-48 pt-36" >
    <div className="w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16 justify-center">
        
                    <p className="text-8xl font-bold uppercase leading-8  text-gray-100">testimonials</p>
        <h1 className="mb-4 text-4xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl font-bold text-black tracking-tight leading-none  -mt-1">I worked with some of the most innovative industry leaders to help build their top-notch products </h1>
        {/* <p className="mb-8 w-9/12 text-lg font-light text-black lg:text-xl"> I have 4-years of experience in HTML, CSS, Tailwind, Javascript, WordPress, WooCommerce & Shopify. I work fast and you will get guaranteed quality results</p> */}
        <Link to="/contact" className="w-[11rem] justify-center group group-* mt-8 flex items-center text-sm relative leading-6 text-black uppercase bg-themeColor px-6 py-3">Contact Me <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span>
                        </Link>
    </div>
</section>
        </>
    );
};

export default ClientsReview;