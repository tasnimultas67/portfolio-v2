import { XMarkIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

export default function TopBanner({handleClickHidden}) {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-white px-6 py-2.5 sm:px-3.5 sm:before:flex-1 z-[1000]">
     
      <div className="md:flex flex-wrap items-center gap-x-4 gap-y-2 text-center md:text-left">
        <p className="text-sm 2xl:text-lg leading-6 text-gray-900 flex items-center justify-center md:justify-start">
          <strong className="font-semibold flex items-center">Help the Palestinian People <img className='ml-2 h-5 w-7' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/255px-Flag_of_Palestine.svg.png" alt="" /></strong> 
        </p>
        <p className="text-sm 2xl:text-lg leading-6 text-gray-900">helps build rehabilitation centers to serve children with disabilities</p>
        <Link
          to="https://www.islamic-relief.org.uk/giving/appeals/palestine/"
          target='_blank'
          className="flex-none rounded-md bg-themeColor px-3.5 py-1 text-sm 2xl:text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Donate Now <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
      <div className="flex flex-1 justify-end isolate">
        <button onClick={handleClickHidden} type="button" className="-m-3 p-3 focus-visible:outline-offset-[-4px]">
          <span className="sr-only">Dismiss</span>
          <XMarkIcon className="h-5 w-5 2xl:h-8 2xl:w-8 text-gray-900" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
