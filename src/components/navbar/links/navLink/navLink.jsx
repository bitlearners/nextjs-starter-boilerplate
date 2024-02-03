"use client";
import { usePathname } from "next/navigation"
import Link from "next/link"

const NavLink = ({ item }) => {
  const pathName = usePathname()

  return (
    <div>
      <Link
        href={item.path}
        className={`${
          pathName === item.path
            ? "border-b-2 border-primary pb-1"
            : "text-gray-700"
        } hover:text-gray-900`}
      >
        {item.title}
      </Link>
    </div>
  )
}

export default NavLink