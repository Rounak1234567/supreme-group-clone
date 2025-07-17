'use client';

import { VehicleProvider } from '../../context/VehicleContext';
import VehicleTabs from './VehicleTabs';
import ExplodedCarModel from './ExplodedCarModel';
import NavigationIcons from './NavigationIcons';
import PauseButton from './PauseButton';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <VehicleProvider>
            <section className="bg-black text-white min-h-screen flex flex-col px-6 relative">
                {/* Animated Heading Section */}
                <motion.div
                    className="bg-black text-white flex items-center justify-center h-screen"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    <p className="text-center text-2xl md:text-4xl font-light leading-relaxed">
                        Evolving the drive with <span className="font-semibold">360-degree</span><br />
                        comprehensive solutions
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10">
                    <div className="lg:w-1/2">
                        <VehicleTabs />
                    </div>

                    <div className="lg:w-1/2 flex justify-center items-center">
                        <ExplodedCarModel />
                    </div>
                </div>

                <div className="mt-10">
                    <NavigationIcons />
                </div>

                <PauseButton />
            </section>
        </VehicleProvider>
    );
};

export default AboutSection;
