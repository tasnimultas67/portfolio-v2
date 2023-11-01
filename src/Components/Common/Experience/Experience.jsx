

const Experience = ({ experience }) => {
    const icon = "https://i.ibb.co/8NRgKx2/online-work.png"
    const {position, company, startDate, endDate, description} = experience
    return (
            <div className='mb-7 lg:mb-0'>
                <div className=" bg-gray-100 px-10 py-10 rounded-xl">
                    <div className=" ">
                        <div className='mb-4 '>
                            <img src={icon} className="h-16 w-16 m-auto sm:m-0" />
                        </div>
                        <h3 className="text-xl md:text-2xl 2xl:text-[1.7rem] font-bold mb-5 text-black">{[position]}</h3>
                        <p className="block mb-5 text-lg 2xl:text-xl font-semibold leading-4 text-gray-900">{ company}</p>
                            <div className='xl:flex x items-center justify-between'>
                                <p className="pb-2 xl:pb-0 block mb-2 text-base 2xl:text-xl font-normal leading-4  text-gray-900">Start: <span className=''> {startDate}</span></p>
                                <p className="pb-2 xl:pb-0 block mb-2 text-base 2xl:text-xl font-normal leading-3 text-gray-900">End: <span className=''>{ endDate}</span></p>    
                            </div>
                        <p className="text-base 2xl:text-xl font-normal text-gray-800">{description}</p>
                    </div>
            
                </div>
            </div>
    );
};

export default Experience;