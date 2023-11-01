import React from 'react';



const AddPortfolio = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const portfolioTitle = form.portfolioTitle.value;
        const portfolioCategory = form.portfolioCategory.value;
        const portfolioImgLink = form.portfolioImgLink.value;
        const portfolioDetails = form.portfolioDetails.value;
        const portfolioLiveLink = form.portfolioLiveLink.value

        const portInfo = { portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink }
        console.log(portInfo);

        // Send data to the server
        fetch('https://portfoliobackendserver-tasnimul.up.railway.app/portfolio', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(portInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Portfolio Added')
                    form.reset()
                }

            })
        
    }

    
    return (
        <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-28 lg:px-8 bg-white">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add portfolio to your website
          </h2>
        </div>

        <div className="mt-10 w-10/12 m-auto">
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        
        
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
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
                        </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Portfolio
              </button>
            </div>
          </form>
        </div>
      </div>

        
        
        </>
    );
};

export default AddPortfolio;