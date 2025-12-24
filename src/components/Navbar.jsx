import { appleImg, bagImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Christmas Lights Container */}
<div className="absolute top-0 left-0 w-full h-4 overflow-hidden flex justify-center space-x-6 z-50 pointer-events-none">
  {/* The Wire */}
  <div className="absolute top-0 w-full h-[1px] bg-gray-800 opacity-50"></div>
  
  {/* The Bulbs */}
  {[...Array(20)].map((_, i) => (
    <div 
      key={i}
      className={`
        w-2 h-2 rounded-full mt-1 
        ${i % 2 === 0 ? 'bg-red-500 shadow-[0_0_10px_3px_rgba(239,68,68,0.6)]' : 'bg-green-500 shadow-[0_0_10px_3px_rgba(34,197,94,0.6)]'}
        animate-pulse
      `}
      style={{ animationDelay: `${i * 0.1}s` }} // Staggered blinking
    ></div>
  ))}
</div>
        <img src={appleImg} alt="Apple" width={24} height={28} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))} */}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          
          <img src={bagImg} alt="bag" width={68} height={68} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar