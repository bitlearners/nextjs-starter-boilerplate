import Link from "next/link"
import Links from "./links/Links"
import Image from "next/image"

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">



        <div className="flex items-center	justify-between	p-4">
          <Link href="/" className="flex w-18 h-12">

            <Image
              src="/logo.png"
              alt="User Image"
             width={205}
            height={75}
            />



          </Link>
          <Links />

        </div>



      </header>
    </div>
  )
}

export default Navbar
