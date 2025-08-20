import { navLinks } from "../../constants"

const Navbar = () => {
  return (
    <div className="flex md:flex-row flex-col md:justify-between items-center bg-gray-400 h-[50px]">
        <div className="flex flex-row ml-2 gap-2">
            <img src="/images/Apple_logo_black.svg" alt="apple_logo" height={20} width={20} />
            <p className="text-xl">Apple</p>
        </div>
        <div>
            <ul className="flex flex-row mr-4 gap-6">
                {navLinks.map((link) => (
                    <li className="text-xl cursor-pointer">{link.title}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Navbar