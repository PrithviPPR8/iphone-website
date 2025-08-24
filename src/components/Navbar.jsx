import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center bg-gray-200 md:h-[50px] h-[70px] lg:pt-0 pt-2 px-10">
        <div className="flex flex-row ml-2 gap-2">
            <img src="/images/Apple_logo_black.svg" alt="apple_logo" height={20} width={20} />
            <p className="text-xl font-sans">Apple</p>
        </div>
        <div>
            <ul className="flex flex-row mr-4 gap-6">
                {navLinks.map((link) => (
                    <li className="text-xl text-gray-700 cursor-pointer">{link.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar