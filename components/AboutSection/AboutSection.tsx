import { VehicleProvider } from '../../context/VehicleContext';
import VehicleTabs from './VehicleTabs';
import VehicleDescription from './VehicleDescription';
import ExplodedCarModel from './ExplodedCarModel';
import NavigationIcons from './NavigationIcons';
import PauseButton from './PauseButton';

const AboutSection = () => {
    return (
        <VehicleProvider>
            <section className="bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 relative">
                <div className="bg-black text-white flex items-center justify-center h-screen">
                    <p className="text-center text-2xl md:text-4xl font-light leading-relaxed">
                        Evolving the drive with <span className="font-semibold">360-degree</span><br />
                        comprehensive solutions
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row w-full max-w-7xl gap-10">
                    <div className="lg:w-1/2">
                        <VehicleTabs />
                        <VehicleDescription />
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
