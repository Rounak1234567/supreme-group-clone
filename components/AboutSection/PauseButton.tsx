const PauseButton = () => {
  return (
    <div className="absolute bottom-10 right-10 bg-white text-black rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <rect x="4" y="4" width="4" height="12" />
        <rect x="12" y="4" width="4" height="12" />
      </svg>
    </div>
  );
};

export default PauseButton;
