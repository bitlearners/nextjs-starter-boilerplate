import Image from "next/image";
import Link from "next/link";
const PostCard = ({ post }) => {
  const maxLength = 200;
  return (
    <div className="my-4">
      <div className=" md:w-full p-2 h-full relative w-full  shadow-lg ring-1 ring-black/5 rounded-md flex flex-wrap  ">
        {post.img && (
          <Image
            src={post.img ? post.img : "/blog3.jpg"}
            alt="User Image"
            width={300}
            height={300}
            className="lg:w-1/2 w-full h-auto object-cover object-center p-3 rounded-md "
          />
        )}

        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 p-3">
          <Link
            href="/"
            className="p-1 text-xs rounded-md  bg-red-400 text-white"
          >
            Home
          </Link>

          <h1 className="text-gray-900 text-3xl title-font font-medium my-1">
            {post.title}
          </h1>

          <p className="leading-relaxed">
          {post.desc.length > maxLength
              ? post.desc.slice(0, maxLength) + "..."
              : post.desc}
            </p>

          <div className="flex items-center flex-wrap ">
            <Link
              href={`/blog/${post.slug}`}
              className="text-secondary inline-flex items-center md:mb-2 lg:mb-0"
            >
              Learn More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg
                className="w-4 h-4 mr-1"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
              6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
