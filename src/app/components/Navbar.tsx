
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-grey-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Developer Community</div>

        {/* yaha pr ham ne hideen property use ki jo k agr screen siz medium se kam hoga 
        tw navbar me se component hide hojyngy */}
        <ul className=" space-x-4 'gap-10 lg:gap-16 hidden md:flex">
          <li>
            <Link href="/" className="text-white hover:text-blue-300">
              Home
            </Link>
          </li>
         

          <li>
            <Link href="/about" className="text-white hover:text-blue-300">
              About Us
            </Link>
            &nbsp;
          </li>

          <li>
            <Link href="/service" className="text-white hover:text-blue-300">
              Service
            </Link>
            &nbsp;
          </li>

          <li>
            <Link href="/contact" className="text-white hover:text-blue-300">
              Contact us
            </Link>
            &nbsp;
          </li>


          <li>
            <Link href="/errorpage" className="text-white hover:text-blue-300">
              Error Page
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
