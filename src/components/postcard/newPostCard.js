import Image from "next/image";
import Link from "next/link";
const NewPostCard = ({ post }) => {
    const maxLength = 30; 

  return (
    <div>
      <Link  href={`/blog/${post.slug}`} className="flex items-center gap-4 p-2  ">

        <Image
           src={post.img ? post.img : "/blog3.jpg"}
          alt="User Image"
          width={100}
          height={100}
          className="w-14 h-14 rounded-md"
        />
        <div className="flex flex-col">
          <strong className="text-slate-900 text-sm font-medium dark:text-slate-200">
          {post.title}
          </strong>
          <span className="text-slate-500 text-sm font-medium dark:text-slate-400">
          {post.desc.length > maxLength
              ? post.desc.slice(0, maxLength) + "..."
              : post.desc}
          </span>


        </div>

      </Link>
    </div>
  );
};

export default NewPostCard;
