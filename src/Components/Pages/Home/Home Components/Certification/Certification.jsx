
import './Certification.css'
import CertificateSlider from '../../../../Common/CertificateSlider/CertificateSlider';

const Certification = () => {

    return (
      <>
      <div className='py-28 relative isolate overflow-hidden bg-gray-950'>
            <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
            <div className='w-full m-auto px-5 sm:px-7 md:px-10 lg:px-16 xl:px-16'>
                <div className='mb-16'>
                <h1 className='text-[2.5rem] md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-7xl mb-4 font-extrabold tracking-tight leading-none text-white '>Officially Recognize As</h1>
                <p className='max-w-2xl lg:max-w-4xl lg:w-2xl w-[90%]  mb-6 font-light text-gray-200 lg:mb-8 md:text-lg lg:text-xl'>You can lead and motivate people without a certificate or title, what you need to do is to tell people a compelling secret that was only known to you.</p>
            </div>
            <CertificateSlider/>
            </div>
        </div>
      </>
    );
};

export default Certification;