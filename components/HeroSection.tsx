const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[695px] overflow-hidden">
      {/* Background video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="./automotive.224e7418884105595114.mp4"
      />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <p className="text-base md:text-lg font-normal mb-2 tracking-wide">
          Driven by performance
        </p>
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          Soft trims and{' '}
          <span className="text-[#26b4f4]">NVH solutions</span>
        </h1>
        <p className="text-base md:text-2xl font-normal">
          for seamless rides
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
