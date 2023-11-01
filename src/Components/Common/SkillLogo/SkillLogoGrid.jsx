import './SkillLogoGrid.css'
import {motion} from 'framer-motion'

const SkillLogoGrid = () => {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{opacity: 1, y: 0}}
                transition={{
                    duration: 0.5,
                }}
                viewport={{ once: true }}
                className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-20 align-middle items-center">
                <img className="skill-logo html-g" src="https://cdn.iconscout.com/icon/free/png-256/html5-40-1175193.png" alt="" />
                <img className="skill-logo css-g" src="https://cdn.iconscout.com/icon/free/png-512/css-118-569410.png" alt="" />
                <img className="skill-logo javascript-g" src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-3521515-2945018.png" alt="" />
                <img className="skill-logo node-g" src="https://download.logo.wine/logo/Node.js/Node.js-Logo.wine.png" alt="" />
                <img className="skill-logo expressJs-g" src="https://amt.in/img/services/express.png" alt="" />
                <img className="skill-logo react-g" src="https://cdn.iconscout.com/icon/free/png-256/free-react-3521666-2945110.png" alt="" />
                <img className="skill-logo firebase-g" src="https://pluspng.com/img-png/firebase-logo-png-firebase-brand-guidelines-938x264.png" alt="" />
                <img className="skill-logo mongodb-g" src="https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg?" alt="" />
                <img className="skill-logo bootstrap-g" src="https://cdn.iconscout.com/icon/free/png-256/free-bootstrap-226077.png" alt="" />
                <img className="skill-logo tailwind-g" src="https://iconape.com/wp-content/png_logo_vector/tailwind-css-logo.png" alt="" />
                <img className="skill-logo material-g" src="https://seeklogo.com/images/M/material-ui-logo-5BDCB9BA8F-seeklogo.com.png" alt="" />
                <img className="skill-logo framerMotion-g" src="https://pagepro.co/blog/wp-content/uploads/2020/03/framer-motion-346x334.png" alt="" />
                <img className="skill-logo swiperJs-g" src="https://swiperjs.com/images/swiper-logo.svg" alt="" />
                <img className="skill-logo wordpress-g" src="https://seeklogo.com/images/W/wordpress-icon-logo-45667D3313-seeklogo.com.png" alt="" />
                <img className="skill-logo shopify-g" src="https://seeklogo.com/images/S/shopify-logo-1C711BCDE4-seeklogo.com.png" alt="" />
                <img className="skill-logo figma-g" src="https://seeklogo.com/images/F/figma-logo-E4E21D3AEA-seeklogo.com.png" alt="" />
            </motion.div>
        </div>
    );
};

export default SkillLogoGrid;