import {motion} from 'framer-motion'
import RubicsCube from '../../../../Common/RubicsCube/RubicsCube';

const WhyChoose = () => {

    return (
        <>
            <div
                className="bg-themeColor lg:py-48 py-28 text-white">
                <div className="w-11/12 m-auto lg:flex lg:justify-between text-center sm:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{opacity: 1, y: 0}}
                        
                        transition={{
                            duration: 0.5,
                        }}
                        viewport={{ once: true }}
                        className="lg:w-7/12 ">
                        <h4 className="text-xl 2xl:text-2xl font-bold pb-4">WHY CHOOSE ME?</h4>
                        <div  className="text-2xl 2xl:text-3xl gap-y-5 flex flex-col">
                            <p>I work with startup companies and freelancers to create beautiful and creative websites, visual designs, logos, and brands.</p>
                            <p>I expand beyond the ordinary and form creative solutions.</p>
                            <p>Taking complex ideas and turning them into extraordinary websites, designs, and brands.</p>
                            
                        </div>
                    </motion.div>
                    <div className='lg:pr-28 hidden lg:block '>
                        <RubicsCube></RubicsCube>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChoose;