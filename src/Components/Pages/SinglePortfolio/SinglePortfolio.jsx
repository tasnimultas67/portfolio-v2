import { Link, useLoaderData } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import {motion} from 'framer-motion'

const SinglePortfolio = () => {
    const portfolio = useLoaderData();
    const { _id, portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink, pfContent, portfolioRole, portfolioYear, portfolioCountry } = portfolio;
    return (
        <>
            {/* <div className="bg-white py-40">
                <div className="w-11/12 md:w-9/12 lg:w-9/12 xl:w-9/12 m-auto">
                    
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg shadow">
                            <img alt="Portfolio Cover Image" src={portfolioImgLink} className="absolute w-full object-cover" loading="lazy" />
                            <div className="relative bg-gradient-to-t from-black/80 to-black/25 pt-32 pb-4 sm:pt-48 sm:pb-5 lg:pt-64 lg:pb-6">
                                <div className="p-4 sm:p-6">
                                <p className="block text-sm text-white/90 backdrop-blur-lg bg-white/10 w-fit px-2 py-1 rounded-md">{ portfolioCategory}</p>
                                <h3 className="mt-2 text-5xl font-bold text-white mb-4">{portfolioTitle}</h3>
                                <Link className="text-white flex items-center w-fit" to={portfolioLiveLink} target="_blank">{portfolioLiveLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-white"/></Link>
                                </div>
                            </div>
                    </motion.div>
                    
                    {pfContent?.length>0 ? <div className="pt-16" dangerouslySetInnerHTML={{__html: pfContent}}></div> : <div className="md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto">
                        <div className="mt-5 py-4">
                            <h2 className="text-4xl font-extrabold">Focused on web standards and modern web app UX, you’re simply going to build better websites</h2>
                        </div>
                        <div>
                            <p className="py-4 text-md">{ portfolioDetails}</p>
                            <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis dolorum, omnis est autem reprehenderit delectus cupiditate? Neque omnis suscipit vero porro dicta asperiores! Similique consequuntur impedit ratione et quia ipsa quis iure quae, neque tempore officiis autem vero nihil necessitatibus sequi eius exercitationem voluptatibus rem optio doloribus? Impedit fugiat harum accusantium laudantium deserunt suscipit nostrum iusto, nihil maxime sapiente minus dicta, architecto exercitationem ut. Vel, at. Laudantium eaque repellendus sequi cumque dignissimos obcaecati eos? Voluptas quibusdam sint voluptatem iste similique modi quisquam et, sed vitae magni voluptatum quos, placeat voluptates eveniet sit maiores. Id assumenda quasi iusto ipsa amet!</p>

                            <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam repudiandae quos! Esse tempora quibusdam, quis, itaque velit at, corporis maxime explicabo tenetur vel enim totam facere harum nisi nam.</p>

                            <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe magnam deserunt aut nobis, nostrum ipsum, debitis ratione ea harum quis sit corrupti laudantium dolor itaque reiciendis veritatis? Ipsam et placeat iusto nihil dignissimos quisquam impedit eveniet. Recusandae tempore sapiente architecto perspiciatis blanditiis, iure impedit qui. Illum debitis laudantium consectetur.</p>

                            <p className="py-4 text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem aliquam doloribus iure possimus. Nam ullam pariatur alias soluta quasi. Doloremque, dolore sint explicabo molestiae blanditiis neque consequatur cupiditate temporibus aut tempora, natus ab laborum dignissimos consequuntur. Nobis animi laborum beatae libero excepturi, totam voluptatum natus quisquam assumenda numquam neque vero dolorem consectetur officiis fugiat cumque quibusdam impedit temporibus sequi eveniet explicabo repellat iste! Asperiores doloribus similique perferendis quos fugiat at atque ipsa ullam esse.</p>

                            <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur aperiam doloribus similique quis consectetur odit vitae veritatis dolorum voluptatibus!</p>

                            <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit aliquam reiciendis debitis hic, deserunt omnis sint aspernatur nemo ratione natus recusandae maiores eius asperiores, odio et nesciunt illum ullam obcaecati alias quas. Quo magnam ipsam cumque ipsa blanditiis rem eum dolores unde? Hic assumenda cupiditate dolorum autem eius molestias officia consequuntur esse? Ipsum tenetur sint deleniti! Nulla accusamus iure expedita, modi dolorem quas corporis! Cupiditate iste quia, animi minima unde esse corporis tempore accusantium, fuga excepturi, ad nemo harum rem voluptate. At sed, quibusdam debitis, modi ratione praesentium alias qui culpa architecto quae unde accusamus harum corporis, illum eos.</p>
                        </div>
                        <div>
                            <motion.img
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{
                                    duration: 0.5,
                                }}
                                viewport={{ once: true }}
                                className="rounded-lg" src="https://images.unsplash.com/photo-1694801928101-615280ca4e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Portfolio Image" loading="lazy" />
                        </div>
                    </div>}
                </div>
            </div> */}
            <div className="w-[95%] lg:w-[98%] m-auto pb-24 ">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 justify-center m-auto 2xl:pt-28 lg:pt-20 md:pt-32 pt-20">
                    
                    <div className=" lg:col-span-2">
                        {/* Banner */}
                        <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="relative overflow-hidden rounded-lg shadow hidden lg:block">
                            <img alt="Portfolio Cover Image" src={portfolioImgLink} className="absolute w-full object-cover" loading="lazy" />
                            <div className="relative bg-gradient-to-t from-black/90 to-black/20 pt-32 pb-4 sm:pt-48 sm:pb-5 lg:pt-52 2xl:pt-72 lg:pb-6">
                                <div className="p-4 sm:p-6">
                                    <h3 className="mt-2 text-5xl 2xl:text-7xl font-bold text-white mb-4">{portfolioTitle}</h3>
                                    <p className="text-base text-white mb-2 2xl:text-xl">{ portfolioDetails}</p>
                                <Link className="text-white flex items-center w-fit 2xl:text-xl" to={portfolioLiveLink} target="_blank">{portfolioLiveLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 2xl:h-6 2xl:w-6 ml-2 text-white"/></Link>
                                </div>
                            </div>
                        </motion.div>
                        <div className="block lg:hidden">
                            <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-lg shadow col-span-2">
                                <img alt="Portfolio Cover Image" src={portfolioImgLink} className="absolute w-full object-cover" loading="lazy" />
                                <div className="relative bg-gradient-to-t from-black/90 to-black/20 pt-32 pb-3 lg:pt-48 2xl:pt-64">
                                    <div className="p-4 sm:p-6">
                                        <div className="text-base flex-col flex 2xl:text-xl ">
                                            <p className="text-white">Category: Ecommerce</p>
                                            <p className="text-white">Country: Bangladesh</p>
                                            <p className="text-white">Year: 2023</p>
                                        </div>
                                        <p className="mt-4 text-white 2xl:text-xl ">Made with { portfolioCategory}</p>
                                        <h3 className="mt-2 text-3xl lg:text-5xl font-bold text-white lg:mb-4 mb-2">{portfolioTitle}</h3>
                                    <Link className="text-white flex items-center w-fit 2xl:text-xl " to={portfolioLiveLink} target="_blank">{portfolioLiveLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-white"/></Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                        {/* portfolio details */}
                        <div className="bg-gray-200 p-6 mt-4 rounded-lg">
                            {pfContent?.length>0 ? <div className="2xl:text-xl text-base" dangerouslySetInnerHTML={{__html: pfContent}}></div> : <div className="md:w-11/12 lg:w-11/12 xl:w-11/12 m-auto">
                                <div className="mt-5 py-4">
                                    <h2 className="text-4xl font-extrabold">Focused on web standards and modern web app UX, you’re simply going to build better websites</h2>
                                </div>
                                <div>
                                    <p className="py-4 text-md">{ portfolioDetails}</p>
                                    <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id perspiciatis dolorum, omnis est autem reprehenderit delectus cupiditate? Neque omnis suscipit vero porro dicta asperiores! Similique consequuntur impedit ratione et quia ipsa quis iure quae, neque tempore officiis autem vero nihil necessitatibus sequi eius exercitationem voluptatibus rem optio doloribus? Impedit fugiat harum accusantium laudantium deserunt suscipit nostrum iusto, nihil maxime sapiente minus dicta, architecto exercitationem ut. Vel, at. Laudantium eaque repellendus sequi cumque dignissimos obcaecati eos? Voluptas quibusdam sint voluptatem iste similique modi quisquam et, sed vitae magni voluptatum quos, placeat voluptates eveniet sit maiores. Id assumenda quasi iusto ipsa amet!</p>

                                    <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quisquam repudiandae quos! Esse tempora quibusdam, quis, itaque velit at, corporis maxime explicabo tenetur vel enim totam facere harum nisi nam.</p>

                                    <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe magnam deserunt aut nobis, nostrum ipsum, debitis ratione ea harum quis sit corrupti laudantium dolor itaque reiciendis veritatis? Ipsam et placeat iusto nihil dignissimos quisquam impedit eveniet. Recusandae tempore sapiente architecto perspiciatis blanditiis, iure impedit qui. Illum debitis laudantium consectetur.</p>

                                    <p className="py-4 text-md">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum quidem aliquam doloribus iure possimus. Nam ullam pariatur alias soluta quasi. Doloremque, dolore sint explicabo molestiae blanditiis neque consequatur cupiditate temporibus aut tempora, natus ab laborum dignissimos consequuntur. Nobis animi laborum beatae libero excepturi, totam voluptatum natus quisquam assumenda numquam neque vero dolorem consectetur officiis fugiat cumque quibusdam impedit temporibus sequi eveniet explicabo repellat iste! Asperiores doloribus similique perferendis quos fugiat at atque ipsa ullam esse.</p>

                                    <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat tenetur aperiam doloribus similique quis consectetur odit vitae veritatis dolorum voluptatibus!</p>

                                    <p className="py-4 text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim suscipit aliquam reiciendis debitis hic, deserunt omnis sint aspernatur nemo ratione natus recusandae maiores eius asperiores, odio et nesciunt illum ullam obcaecati alias quas. Quo magnam ipsam cumque ipsa blanditiis rem eum dolores unde? Hic assumenda cupiditate dolorum autem eius molestias officia consequuntur esse? Ipsum tenetur sint deleniti! Nulla accusamus iure expedita, modi dolorem quas corporis! Cupiditate iste quia, animi minima unde esse corporis tempore accusantium, fuga excepturi, ad nemo harum rem voluptate. At sed, quibusdam debitis, modi ratione praesentium alias qui culpa architecto quae unde accusamus harum corporis, illum eos.</p>
                                </div>
                                <div>
                                    <motion.img
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{opacity: 1, y: 0}}
                                        transition={{
                                            duration: 0.5,
                                        }}
                                        viewport={{ once: true }}
                                        className="rounded-lg" src="https://images.unsplash.com/photo-1694801928101-615280ca4e54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Portfolio Image" loading="lazy" />
                                </div>
                            </div>}
                        </div>
                    </div>
                    {/* Portfolio Side Bar */}
                    <div >
                        <div className="sticky top-[4.7rem] 2xl:top-[7rem] right-0 hidden lg:block">
                            <motion.div
                            initial={{ opacity: 0, y: 200 }}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{
                                duration: 0.5,
                            }}
                            viewport={{ once: true }}
                            className="relative overflow-hidden rounded-lg shadow col-span-2">
                                <img alt="Portfolio Cover Image" src={portfolioImgLink} className="absolute w-full object-cover" loading="lazy" />
                                <div className="relative bg-gradient-to-t from-black/90 to-black/20 pt-32 pb-3 lg:pt-48 2xl:pt-64">
                                    <div className="p-4 sm:p-6">
                                        <div className="text-base flex-col flex 2xl:text-xl ">
                                            <p className="text-white">Category: { portfolioRole?.length>0 ? {portfolioRole} : "Agency"}</p>
                                            <p className="text-white">Country: { portfolioCountry?.length>0 ? {portfolioCountry} : "United States"}</p>
                                            <p className="text-white">Year: { portfolioYear?.length>0 ? {portfolioYear} : "2023"}</p>
                                        </div>
                                        <p className="mt-4 text-white 2xl:text-xl ">Made with { portfolioCategory}</p>
                                        <h3 className="mt-2 text-5xl font-bold text-white mb-4">{portfolioTitle}</h3>
                                    <Link className="text-white flex items-center w-fit 2xl:text-xl " to={portfolioLiveLink} target="_blank">{portfolioLiveLink} <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-2 text-white"/></Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
            
        
        </>
    );
};

export default SinglePortfolio;