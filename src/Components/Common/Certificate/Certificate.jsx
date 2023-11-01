/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { TrophyIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'


const Certificate = ({ certificate }) => {
    const {name, description, credentialId, issueDate, scholl,certificateURL} = certificate
    return (
        <div className=' backdrop-blur'>
 <div className="relative mb-6 sm:mb-0 p-6 rounded-md  border-t border-[#ffffff0d] duration-300 bg-slate-800 highlight-white/5 shadow-md">
            
                <div className="">
                    <div className='h-14 w-14 bg-slate-700 rounded-md flex justify-center items-center  mb-4 shadow-md'>
                        <ShieldCheckIcon className="h-6 w-6 text-yellow-300" />
                    </div>
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="block mb-2 text-sm font-normal  text-gray-300">{ scholl}</p>
                <time className="block mb-2 text-sm font-normal  text-gray-200">Issue Date: {issueDate}</time>
                <p className="block mb-2 text-sm font-normal  text-gray-200">Credential ID: { credentialId}</p>
                <p className="text-sm font-normal text-gray-200">{description}</p>
                
                <Link to={certificateURL} className=" inline-flex items-center mt-3 px-4 py-2 text-sm font-medium text-gray-300 bg-slate-700 border border-gray-700 rounded-lg hover:bg-gray-100 hover:text-yellow-500 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-yellow-500 dark:bg-gray-800 dark:text-gray-700 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Download <svg className="w-3 h-3 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/></svg></Link>
            </div>
            
        </div>
        </div>
       
    );
};

export default Certificate;