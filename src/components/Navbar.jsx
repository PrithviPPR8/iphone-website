import { navLinks } from "../../constants";

const Navbar = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center bg-gray-200 border-b border-gray-300 md:h-[50px] h-[60px] px-6">
      {/* Logo Section */}
      <div className="flex flex-row items-center gap-2">
        <img
          src="/images/Apple_logo_black.svg"
          alt="apple_logo"
          className="h-5 w-5"
        />
        <p className="text-lg font-semibold tracking-tight">Apple</p>
      </div>

      {/* Links */}
      <ul className="flex flex-row gap-6 mt-2 md:mt-0">
        {navLinks.map((link) => (
          <li
            className="text-base text-gray-700 cursor-pointer hover:text-black transition-colors duration-200"
            key={link.id}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
