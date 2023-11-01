import { Swiper, SwiperSlide } from 'swiper/react';
import './ClientLogo.css'
import Marquee from 'react-fast-marquee';
import 'swiper/css';

export default function ClientLogo() {
  return (
      <>
          <div className='bg-white'>
        <Marquee speed={50} gradient={true} pauseOnHover={false} className=' marquee-logo font-semibold grayscale '>
          <div className='flex gap-16 md:gap-32 items-center justify-center m-auto'>
            <img className="dhakaStartup m-auto" src="https://i.ibb.co/SngBKn1/Dhaka-Startup.png" alt="Dhaka Startup" />
            <img className="theFundSociety" src="https://i.ibb.co/C9vXPg4/thefundsociety.png" alt="The Fund Society" />
            <img className="viveFitness" src="https://i.ibb.co/zVMYvRM/vivefitness.png" alt="Vive Fitness" />
            <img className="whoWillSpeakForYou" src="https://i.ibb.co/sKXqN1z/whowillspeakforyou.png" alt="Who will speak for you" />
            <img className="dorfladen" src="https://i.ibb.co/1GnkKjD/dorfladen.png" alt="Dorfladen" />
            <img className="dulhan" src="https://i.ibb.co/R06N2dB/dulhan.png" alt="Dulhan" />
            <img className="fusionArts" src="https://i.ibb.co/09p6KZL/fusion-arts.png" alt="Fusion Arts" />
            <img className="greenlife" src="https://i.ibb.co/YQDdJP2/greenlife.webp" alt="GreenLife" />
            <img className="herbsWorld" src="https://i.ibb.co/zbzRRT3/herbsworld.png" alt="Herbs World Limited" />
            <img className="marlonNikolai" src="https://i.ibb.co/n6YkK9X/marlonnikolai.png" alt="Marlon Nikolai" />
            <img className="mundgefuhl" src="https://i.ibb.co/HNvTbsv/mundgefuhl.png" alt="Mundgefuhl" />
            <img className="oremy" src="https://i.ibb.co/GcJfd7F/oremy.jpg" alt="Oremy" />
            <img className="sparkyMall" src="https://i.ibb.co/rQ2xh8h/sparkymall.png" alt="Sparky Mall" />
            <p className='text-blue-700 text-xl uppercase mr-10 text-center font-semibold'>Boon Solutions</p>
          </div>
    </Marquee>

          </div>
      
    </>
    
  );
}
