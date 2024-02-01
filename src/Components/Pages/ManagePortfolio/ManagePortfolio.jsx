import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

export default function ManagePortfolio() {
  const loadedPortfolios = useLoaderData();
  const [portfolios, setPortfolios] = useState(loadedPortfolios);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://portfolio-backend-server-66tm.vercel.app/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Portfolio has been deleted.",
                "success"
              );
              const remaining = portfolios.filter((port) => port._id !== _id);
              setPortfolios(remaining);
            }
          });
      }
    });
  };

  return (
    <>
      <div className=" bg-white py-36">
        <ul role="list" className="divide-y divide-gray-200 w-10/12 m-auto">
          {portfolios
            .slice(0)
            .reverse()
            .map((portfolio) => (
              <li
                key={portfolio._id}
                className="md:flex justify-between items-center gap-x-6 py-5 rounded hover:shadow-md hover:bg-[#ffff00] px-5 bg-gray-100 my-2 cursor-pointer"
              >
                <div className="flex items-center min-w-0 gap-x-4">
                  <img
                    className="h-20 w-20 rounded-full ring-2 ring-themeColor flex-none object-cover bg-gray-50"
                    src={portfolio.portfolioImgLink}
                    alt="Portfolio Image"
                    loading="lazy"
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="border w-fit px-3 py-0.5 text-xs bg-themeColor/10 rounded-md">
                      {portfolio.portfolioCategory}
                    </p>
                    <Link
                      to={`/portfolio/${portfolio._id}`}
                      className=" font-semibold leading-6 text-themeColor"
                    >
                      {portfolio.portfolioTitle}
                    </Link>

                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {portfolio.portfolioDetails}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                  <div className="">
                    <button
                      onClick={() => handleDelete(portfolio._id)}
                      className="inline-flex w-full justify-center items-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Delete <TrashIcon className="ml-2 w-5 h-5"></TrashIcon>
                    </button>

                    <Link to={`/portfolio/update/${portfolio._id}`}>
                      <button className="inline-flex w-full justify-center items-center rounded bg-themeColor px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto">
                        Edit{" "}
                        <PencilSquareIcon className="ml-2 w-5 h-5"></PencilSquareIcon>
                      </button>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
