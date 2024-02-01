import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend-server-66tm.vercel.app")
      .then((res) => res.json())
      .then((data) => setPortfolios(data));
  }, []);

  return (
    <div className="py-28 md:py-32 bg-themeColor" id="projects">
      <div className="w-11/12 m-auto text-center sm:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="mb-4 text-4xl sm:text-5xl lg:text-6xl xl:text-[4.2rem] 2xl:text-[5.5rem] font-bold text-white tracking-tight leading-none text-center m-auto "
        >
          A taste of what I can do{" "}
          <span className="text-yellowAc">for you</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
          viewport={{ once: true }}
          className="w-11/12 lg:w-7/12 2xl:text-2xl m-auto text-center mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl"
        >
          This section serves as a visual representation of my professional
          trajectory and the significant milestones I’ve achieved
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10">
          {portfolios.slice(0, 2).map((portfolio) => (
            <CardPF key={portfolio._id} portfolio={portfolio} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
          }}
          viewport={{ once: true }}
          className="flex items-center justify-center md:justify-end mt-10"
        >
          <Link
            to="/portfolio"
            className="w-fit m-auto sm:m-0 justify-center group group-*  flex items-center text-sm relative leading-6 text-black uppercase bg-white px-8 py-3 cursor-pointer rounded"
          >
            See More{" "}
            <span aria-hidden="true">
              <ArrowUpRightIcon className="h-5 w-5 relative text-black ml-1 group-hover:-mt-2 group-hover:-mr-2 group-hover:ml-3" />
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const CardPF = ({ portfolio }) => {
  const {
    portfolioCategory,
    portfolioDetails,
    portfolioImgLink,
    portfolioLiveLink,
    portfolioTitle,
    _id,
  } = portfolio;

  return (
    <>
      <div className="overflow-hidden border md:h-[32rem] 2xl:md:h-[40rem] h-[28rem] border-white/70 text-center p-7 pb-0 rounded-3xl group/pfCard pt-16 hover:shadow-lg">
        <div className="group-hover/pfCard:opacity-0 duration-500 ease-in ">
          <p className="text-white uppercase text-sm">{portfolioCategory}</p>
          <h2 className="text-white uppercase font-bold text-3xl my-2 tracking-tight">
            {portfolioTitle}
          </h2>
          <p className="mb-4 block font-sans text-base 2xl:text-xl leading-snug tracking-normal text-gray-200 antialiased">
            {portfolioDetails.length > 100
              ? `${portfolioDetails.substring(0, 100)}...`
              : portfolioDetails}
          </p>
        </div>
        <div className="translate-y-[0%] group-hover/pfCard:translate-y-[-20%] 2xl:group-hover/pfCard:translate-y-[-15%]  duration-500 ease-in">
          <div className="flex gap-2 items-center justify-center mb-5">
            {/* Case Study Button */}
            <Link
              to={`/portfolio/${_id}`}
              className=" group group-* mt-5 flex items-center text-sm 2xl:text-lg relative leading-6 text-white uppercase group-hover/pfCard:bg-white group-hover/pfCard:text-black group-hover/pfCard:px-6 group-hover/pfCard:py-2 rounded-full duration-500 ease-in"
            >
              Case Study{" "}
              <span aria-hidden="true">
                <ArrowUpRightIcon className="h-4 w-4 2xl:h-5 2xl:w-5 relative text-white group-hover/pfCard:text-black duration-500 ease-in ml-1  " />
              </span>
            </Link>
            {/* Live Link Button */}
            <Link
              to={portfolioLiveLink}
              target="_blank"
              className=" group mt-5 flex items-center text-sm 2xl:text-lg relative leading-6 text-white uppercase group-hover/pfCard:bg-white group-hover/pfCard:text-black group-hover/pfCard:px-6 group-hover/pfCard:py-2 rounded-full duration-500 ease-in"
            >
              Live{" "}
              <span aria-hidden="true">
                <ArrowUpRightIcon className="h-4 w-4 2xl:h-5 2xl:w-5 relative text-white group-hover/pfCard:text-black duration-500 ease-in ml-1 " />
              </span>
            </Link>
          </div>
          <img
            src={portfolioImgLink}
            alt=""
            srcSet=""
            className="rounded-t-xl "
          />
        </div>
      </div>
    </>
  );
};

export default Portfolios;
