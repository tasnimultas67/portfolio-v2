import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePortfolio = () => {
    const portfolio = useLoaderData();

    const { _id, portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink } = portfolio;



    const handleUpdatePortfolio = (event) => {
        event.preventDefault()
        const form = event.target;
        const portfolioTitle = form.portfolioTitle.value;
        const portfolioCategory = form.portfolioCategory.value;
        const portfolioImgLink = form.portfolioImgLink.value;
        const portfolioDetails = form.portfolioDetails.value;
        const portfolioLiveLink = form.portfolioLiveLink.value

        const updatedPortfolio = { portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink }

        // Send data to the server
        fetch(`https://portfoliobackendserver-tasnimul.up.railway.app/portfolio/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedPortfolio)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your Portfolio has been updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                     })
                    form.reset()
                }

            })
        
    }

    return (
       <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-36 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Update { portfolioTitle} Portfolio Information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-4" onSubmit={handleUpdatePortfolio}>
                        
        
            {/* Portfolio Title */}
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Portfolio Title
              </label>
              <div className="mt-2">
                <input
                  id="portfolioTitle"
                  name="portfolioTitle"
                                    type="text"
                defaultValue={portfolioTitle}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

                        {/* Portfolio Category */}
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Portfolio Category
              </label>
              <div className="mt-2">
                <input
                  id="portfolioCategory"
                  name="portfolioCategory"
                                    type="text"
                defaultValue={portfolioCategory}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                        </div>

                    {/* Portfolio Image Link */}
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Image Link
              </label>
              <div className="mt-2">
                <input
                  id="portfolioImgLink"
                  name="portfolioImgLink"
                                    type="text"
                    defaultValue={portfolioImgLink}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                        </div>
                        
            {/* Portfolio Details */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                  Portfolio Details
                </label>
              </div>
              <div className="mt-2">
                <textarea
                name="portfolioDetails"
                id="portfolioDetails"
                                    rows={4}
                defaultValue={portfolioDetails}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
                        </div>
                        
                        {/* Portfolio Live SIte Link */}
            <div>
              <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                Live Site Link
              </label>
              <div className="mt-2">
                <input
                  id="portfolioLiveLink"
                  name="portfolioLiveLink"
                  type="text"
                                    required
                                    defaultValue={portfolioLiveLink}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                        </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Update Portfolio
              </button>
            </div>
          </form>
        </div>
      </div>

        
        
        </>
    );
};

export default UpdatePortfolio;