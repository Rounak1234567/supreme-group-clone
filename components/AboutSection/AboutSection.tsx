'use client';

import { VehicleProvider } from '../../context/VehicleContext';
import VehicleTabs from './VehicleTabs';
import ExplodedCarModel from './ExplodedCarModel';
import NavigationIcons from './NavigationIcons';
import PauseButton from './PauseButton';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
    const headingRef = useRef(null);
    const isInView = useInView(headingRef, { once: true, margin: '-20% 0px' }); // margin makes it trigger a bit before fully in view
    return (
        <VehicleProvider>
            <section className="bg-black text-white min-h-screen flex flex-col px-6 relative">
                {/* Sticky Animated Heading Section */}
                <div className="min-h-[150vh] flex items-center justify-center mb-2000">
                    <div className="sticky top-20 w-full z-20" ref={headingRef}>
                        <motion.div
                            className="w-full bg-black text-white flex items-center justify-center"
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                            transition={{ duration: 3, ease: 'easeIn' }}
                        >
                            <p className="text-center md:text-5xl text-xl font-light leading-relaxed">
                                Evolving the drive with <span className="font-semibold">360-degree</span><br />
                                comprehensive solutions
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Rest of your content */}
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
