const icons = [
  { label: 'Complete body', icon: '/icons/complete-body.svg' },
  { label: 'Front', icon: '/icons/front.svg' },
  { label: 'Cabin', icon: '/icons/cabin.svg' },
  { label: 'Trunk', icon: '/icons/trunk.svg' },
  { label: 'Exterior', icon: '/icons/exterior.svg' },
];

const NavigationIcons = () => {
  return (
    <div className="flex gap-6 justify-center items-center">
      {icons.map(({ label, icon }) => (
        <div key={label} className="flex flex-col items-center text-sm">
          <img src={icon} alt={label} className="w-8 h-8 mb-1" />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
};

export default NavigationIcons;
