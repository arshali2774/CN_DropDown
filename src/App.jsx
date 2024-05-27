import { PiCaretDownBold } from 'react-icons/pi';
import Dropdown from './components/Dropdown';

const itemsArr = [
  'Giggles McSnort',
  'Snickers Bananahammock',
  'Wacky Waddlebottom',
  'Chuckleberry Finn',
];

const App = () => {
  return (
    <div className='grid grid-cols-2 place-items-center gap-x-28 min-h-screen w-full'>
      <h1 className='text-5xl font-bold text-primary col-span-2'>
        Hello welcome to the dropdown component
      </h1>
      <div className='self-start justify-self-end w-[50%] h-full '>
        <h2 className='text-lg font-medium mb-4'>
          Made using TailwindCSS and state logic
        </h2>
        <Dropdown />
      </div>
      <div className='self-start justify-self-start w-[50%] h-full '>
        <h2 className='text-lg font-medium mb-4'>
          Made using TailwindCSS and DaisyUI
        </h2>
        <div className='dropdown dropdown-hover dropdown-bottom '>
          <div
            tabIndex={0}
            role='button'
            className='btn rounded-md bg-secondary text-primary-content hover:bg-primary m-1'
          >
            Hover to display the dropdown
            <PiCaretDownBold />
          </div>
          <ul
            tabIndex={0}
            className='dropdown-content z-[1] menu p-2 shadow bg-neutral rounded-box w-72'
          >
            {itemsArr.map((item) => (
              <li key={item}>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
