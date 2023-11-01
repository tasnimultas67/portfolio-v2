import { ArrowUpRightIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const CertificateSlider = () => {
    const [certificates, setCertificats] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/tasnimultas67/data_json/main/certificates.json')
            .then(res => res.json())
        .then(data => setCertificats(data))
    },[])
    return (
        <Swiper id='certificates' className=''
    
       modules={[Navigation, Pagination, Scrollbar]}
      spaceBetween={30}
      slidesPerView={1}
      breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
    //   navigation
      pagination={{ clickable: true }}
        >
    {
        certificates.map(certificate => (
            <SwiperSlide key={certificate._id} className='md:mb-16 mb-10'>
                <div className='  bg-white shadow-lg h-[27rem] md:h-[30rem] lg:h-[30rem] mb-6 sm:mb-0 p-6 rounded-md  border-t border-[#ffffff0d] duration-300 highlight-white/5'>
                    {/* box content */}
                    <div className="">
                            <div className='h-14 w-14 rounded-md flex  items-center  mb-4'>
                                <ShieldCheckIcon className="h-10 w-10 text-themeColor" />
                            </div>
                            <div>
                                <h3 className="text-xl md:text-lg lg:text-lg xl:text-xl font-bold text-black mb-5">{certificate.name}</h3>
                                <p className=" text-sm font-semibold text-gray-700">{ certificate.scholl}</p>
                                <time className="text-sm text-gray-700">Issue Date: {certificate.issueDate}</time>
                                <p className="block mb-2 text-sm font-normal  text-gray-700">Credential ID: { certificate.credentialId}</p>
                                <p className="text-base font-normal text-gray-700 grow">{certificate.description.length > 180 ? `${certificate.description.substring(0, 130)}...` : certificate.description}</p>
                            </div>
                    </div>
                    {/* box button */}
                    <div className='absolute bottom-6 '>
                                <Link to={certificate.certificateURL} className="w-fit justify-center group group-* mt-14 flex items-center text-sm leading-6 text-white uppercase bg-themeColor px-6 py-3 rounded">Download <span aria-hidden="true"><ArrowUpRightIcon className="h-5 w-5 relative text-white ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3"/></span></Link>
                    </div>
                </div>
            </SwiperSlide>))
    }
    </Swiper>
    );
};

export default CertificateSlider;