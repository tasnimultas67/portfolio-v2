import JoditEditor from 'jodit-react';
import { useState } from 'react';
import { useRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdatePortfolio = () => {
  
  const portfolio = useLoaderData();
      const { _id, portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink, pfContent, portfolioRole, portfolioYear, portfolioCountry } = portfolio;
    const editor = useRef(null);
	const [updatePfContent, setUpdatePfContent] = useState();


    const handleUpdatePortfolio = (event) => {
      event.preventDefault()
      const form = event.target;
      const portfolioTitle = form.portfolioTitle.value;
      const portfolioCategory = form.portfolioCategory.value;
      const portfolioImgLink = form.portfolioImgLink.value;
      const portfolioDetails = form.portfolioDetails.value;
      const portfolioLiveLink = form.portfolioLiveLink.value;
      const pfContent = updatePfContent;
      const portfolioRole = form.portfolioRole.value;
      const portfolioYear = form.portfolioYear.value;
      const portfolioCountry = form.portfolioCountry.value;

      const updatedPortfolio = { portfolioTitle, portfolioCategory, portfolioImgLink, portfolioDetails, portfolioLiveLink, pfContent, portfolioRole, portfolioYear, portfolioCountry }

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
        <div className="">
          <h2 className="text-center mt-10 text-3xl font-bold leading-9 tracking-tight text-gray-900">Update <span className='text-themeColor underline'>{ portfolioTitle}</span> Portfolio Information</h2>
        </div>

        <div className="mt-10 mx-auto w-11/12 md:w-10/12">
                    <form className="space-y-4" onSubmit={handleUpdatePortfolio}>
                        
              <div className='flex flex-col lg:flex-row gap-3'>
                {/* Portfolio Title */}
                <div className='flex-1'>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    Portfolio Title
                  </label>
                  <div className="mt-2">
                    <input
                      id="portfolioTitle"
                      name="portfolioTitle"
                      type="text"
                      required
                      placeholder='e.g. Tasnimul Haque'
                      defaultValue={portfolioTitle}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                  </div>
                  {/* Portfolio Live SIte Link */}
                  <div className='flex-grow'>
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
                      placeholder='e.g. https://devtasnimul.netlify.app/'
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                </div>
                {/* Portfolio Country */}
                <div>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    Portfolio Country
                  </label>
                  <div className="mt-2">
                    <input
                      id="portfolioCountry"
                      name="portfolioCountry"
                      type="text"
                      defaultValue={portfolioCountry}
                      placeholder='e.g. Bangladesh'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>  

                            <div className='flex flex-col lg:flex-row gap-3'>
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
                      placeholder='e.g. Wordpress'
                      required
                      defaultValue={portfolioCategory}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>  
                {/* Portfolio Role */}
                <div>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    Portfolio Role
                  </label>
                  <div className="mt-2">
                    <input
                      id="portfolioRole"
                      name="portfolioRole"
                      type="text"
                      defaultValue={portfolioRole}
                      placeholder='e.g. Ecommerce'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div> 
                {/* Portfolio Year */}
                <div>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    Portfolio Year
                  </label>
                  <div className="mt-2">
                    <input
                      id="portfolioYear"
                      name="portfolioYear"
                      type="text"
                      defaultValue={portfolioYear}
                      placeholder='e.g. 2021'
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                {/* Portfolio Image Link */}
                <div className='flex-grow'>
                  <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                    Image Link
                  </label>
                  <div className="mt-2">
                    <input
                      id="portfolioImgLink"
                      name="portfolioImgLink"
                      type="text"
                      placeholder='e.g. www.example.com/img/asdfh'
                      required
                      defaultValue={portfolioImgLink}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
                        
            {/* Portfolio Short Description */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                  Portfolio Short Description
                </label>
              </div>
              <div className="mt-2">
                <textarea
                name="portfolioDetails"
                id="portfolioDetails"
                rows={3}
                defaultValue={portfolioDetails}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              </div>
              </div>
              {/* Portfolio Details */}
              <div>
                <JoditEditor
                  
                  ref={editor}
                  value={pfContent}
                  tabIndex={1} // tabIndex of textarea
                  onBlur={newContent => setUpdatePfContent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={newContent => { setUpdatePfContent(newContent)}}
                >

                </JoditEditor>
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