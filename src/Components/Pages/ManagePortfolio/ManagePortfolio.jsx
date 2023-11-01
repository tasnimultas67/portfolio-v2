import { useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import Swal from "sweetalert2"


export default function ManagePortfolio() {
    const loadedPortfolios = useLoaderData()
    const [portfolios, setPortfolios] = useState(loadedPortfolios)

    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`https://portfoliobackendserver-tasnimul.up.railway.app/portfolio/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                            'Deleted!',
                            'Your Portfolio has been deleted.',
                            'success'
                            )
                            const remaining = portfolios.filter(port => port._id !== _id)
                            setPortfolios(remaining)
                        }
                })

            }
        })
    }


  return (
      <>
      
          <div className=" bg-white py-36">
              
                        <ul role="list" className="divide-y divide-gray-200 w-10/12 m-auto">
                {portfolios.map((portfolio) => (
                    <li key={portfolio._id} className="flex justify-between items-center gap-x-6 py-5 rounded hover:shadow-md hover:bg-[#ffff00] px-5">
                    <div className="flex min-w-0 gap-x-4">
                        <img className="h-14 w-14 flex-none object-cover bg-gray-50" src={portfolio.portfolioImgLink} alt="Portfolio Image" loading="lazy" />
                        <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">{portfolio.portfolioTitle}</p>
                        
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, iusto.</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                        <div className="">
                                <button onClick={() => handleDelete(portfolio._id)} className="inline-flex w-full justify-center rounded bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Delete</button>
                                
                                
                                <Link to={`/portfolio/update/${portfolio._id}`}><button className="inline-flex w-full justify-center rounded bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 sm:ml-3 sm:w-auto">Edit</button></Link>
                            
                        </div>
                        
                    </div>
                    </li>
                ))}
                </ul>
      </div>
      </>
  )
}
