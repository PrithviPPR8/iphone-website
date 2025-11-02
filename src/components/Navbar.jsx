import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center bg-gray-200 border-b border-gray-300 md:h-[60px] h-auto px-4 md:px-8 py-3 md:py-0">
      {/* Left Section — Logo + Brand */}
      <div className="flex flex-row items-center gap-2 mb-2 md:mb-0">
        <img
          src="/images/Apple_logo_black.svg"
          alt="apple_logo"
          className="h-5 w-5"
        />
        <p className="text-lg font-semibold tracking-tight">Apple</p>
      </div>

      {/* Right Section — Nav Links */}
      <ul className="flex flex-wrap md:flex-nowrap justify-center md:justify-end gap-4 md:gap-8 overflow-x-auto md:overflow-visible whitespace-nowrap">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className="text-base text-gray-700 cursor-pointer hover:text-black transition-colors duration-200 "
          >
            <a href={`#${link.id} whitespace-nowrap`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
