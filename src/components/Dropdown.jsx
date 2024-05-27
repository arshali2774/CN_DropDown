import { useState } from 'react';
import { PiCaretDownBold } from 'react-icons/pi';
const superheroNames = [
  'Black Panther',
  'Spider-Man',
  'Iron Man',
  'Thor',
  'Hulk',
];
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative w-fit  h-16' onMouseLeave={() => setIsOpen(false)}>
      <button
        className='bg-secondary flex gap-2 items-center justify-center text-secondary-content font-semibold text-sm rounded-md py-3.5 px-4 w-fit hover:bg-primary'
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>Hover to display the dropdown</span> <PiCaretDownBold />
      </button>
      {isOpen && (
        <div
          className='flex flex-col gap-1 z-[1] absolute bg-neutral top-14 rounded-xl w-72 py-2 px-2 '
          onMouseLeave={() => setIsOpen(false)}
        >
          {superheroNames.map((name, index) => (
            <a
              href='#'
              key={index}
              className='hover:bg-[#2a443c] rounded-full px-4 py-1.5'
              onClick={() => setIsOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
