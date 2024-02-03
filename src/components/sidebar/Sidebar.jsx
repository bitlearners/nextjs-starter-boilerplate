import NewPostCard from "@/components/postcard/newPostCard";
import { getPosts, getAllCategories } from "@/lib/data";
import AllCategoryPost from "../postcard/allCategoryPost";
import Link from "next/link";



import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';




const Sidebar = async () => {
  const posts = await getPosts();
  const cates = await getAllCategories();

  return (
    <div>
      <div className=" md:w-full  h-full relative w-full  flex flex-col ">

        <div className="p-2 rounded-md bg-gray-100/50 mb-6">
          <div className="text-center	">
            <h1 className=" text-lg	font-semibold text-black">Search Blogs</h1>
          </div>
          <div className="flex items-center gap-4 flex-wrap py-4">






          </div>



        </div>

        <div className="p-2 rounded-md  bg-gray-100/50 mb-6">
          <div className="text-center	">
            <h1 className=" text-lg	font-semibold text-black">Recent Post</h1>
          </div>
          {posts.map((post) => (
            <div key={post.id}>
              <NewPostCard post={post} />
            </div>
          ))}
        </div>


        <div className="p-2 rounded-md bg-gray-100/50 mb-6">
          <div className="text-center	">
            <h1 className=" text-lg	font-semibold text-black">All Category</h1>
          </div>
          <div className="flex items-center gap-4 flex-wrap py-4">



            {cates.map((cate, index) => (
              <div key={index}>

                <AllCategoryPost cate={cate} />

              </div>
            ))}
          </div>



        </div>

        <div className="p-2 rounded-md bg-gray-100/50 mb-6">
          <div className="text-center">
            <h1 className="text-lg font-semibold text-black">Stay In Touch</h1>
          </div>
          <div className="flex items-center justify-center gap-4 flex-wrap py-4">
            <Link href="/">
              <div className="hover:bg-blue-800 bg-white hover:text-white text-blue-800 shadow-md rounded-full flex p-2 h-full items-center">
                <FaFacebookF className="h-6 w-6" />
              </div>
            </Link>

            <Link href="/">
              <div className="hover:bg-blue-400 bg-white text-blue-400 hover:text-white shadow-md rounded-full flex p-2 h-full items-center">
                <FaTwitter className="h-6 w-6" />
              </div>
            </Link>

            <Link href="/">
              <div className="hover:bg-pink-500 bg-white text-pink-500 hover:text-white shadow-md rounded-full flex p-2 h-full items-center">
                <FaInstagram className="h-6 w-6" />
              </div>
            </Link>
            <Link href="/">
              <div className="hover:bg-[#007bb6] bg-white text-[#007bb6] hover:text-white shadow-md rounded-full flex p-2 h-full items-center">
                <FaLinkedin className="h-6 w-6" />
              </div>
            </Link>
          </div>
        </div>




      </div>
    </div>


  )
}

export default Sidebar
