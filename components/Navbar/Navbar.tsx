import { AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="w-full flex justify-center items-center py-11 px-4 md:px-10 fixed top-0 text-2xl text-[#fff] font-Roboto">
      <div className="w-full max-w-[1400px] flex justify-between items-center">
        <p className=" tracking-widest font-Poppins text-1xl md:text-3xl cursor-pointer">
          Olaf<span className="text-[#c3c3c3]"> Kudrewicz</span>
        </p>
        <ul className="hidden md:flex gap-4 cursor-pointer">
          <li className="hover:text-details hover:scale-110 active:scale-100 ease-in duration-200">
            <p>Over mij</p>
          </li>
          <li className="hover:text-details hover:scale-110 active:scale-100 ease-in duration-200">
            <p>Projecten</p>
          </li>
        </ul>
        <ul className="hidden md:flex cursor-pointer">
          <li className="flex gap-4 items-center hover:text-details hover:scale-110 active:scale-100 ease-in duration-200">
            <AiOutlineGithub size={35} />
            <p>Github</p>
          </li>
        </ul>
        <AiOutlineMenu size={35} className="md:hidden" />
      </div>
    </nav>
  );
};

export default NavBar;
