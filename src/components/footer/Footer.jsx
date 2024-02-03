import Link from "next/link"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image"

const Footer = () => {
  return (
    <div>

      <footer className="text-white body-font bg-[#454545]">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col ">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/" >

            <Image
            src="/logo.png"
            alt="User Image"
            width={201}
            height={75}
            className="flex items-center md:justify-start justify-center "
            />
            </Link>
            <p className="mt-2 text-sm ">Air plant banjo lyft occupy retro adaptogen indego</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-left ">
            <div className="lg:w-1/4 w-1/2  px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg ">CATEGORIES</h2>
              <span className="inline-block h-1 w-12 rounded bg-primary"></span>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">First Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Second Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Third Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 w-1/2 px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg">CATEGORIES</h2>
              <span className="inline-block h-1 w-12 rounded bg-primary"></span>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">First Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Second Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Third Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 w-1/2 px-4">
              <h2 className="title-font font-medium  text-white tracking-widest text-lg">CATEGORIES</h2>
              <span className="inline-block h-1 w-12 rounded bg-primary"></span>


              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">First Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Second Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Third Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Fourth Link</Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 w-1/2  px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-lg">CATEGORIES</h2>
              <span className="inline-block h-1 w-12 rounded bg-primary"></span>

              <nav className="list-none mb-10">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">First Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Second Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Third Link</Link>
                </li>
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">Fourth Link</Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className=" text-sm text-center sm:text-left">© 2020 Tailblocks —
              <Link href="/" rel="noopener noreferrer" className="text-secondary ml-1" target="_blank">@Shweta Bhandarkar</Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <Link href="/" className="ml-3 ">
                <FaInstagram />
              </Link>
              <Link href="/" className="ml-3 ">
                <FaFacebookF />
              </Link>
              <Link href="/" className="ml-3 ">
                <FaLinkedinIn />
              </Link>

            </span>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer