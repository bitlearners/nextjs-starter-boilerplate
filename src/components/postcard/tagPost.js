// TagPost.js
import Link from "next/link";

const generateRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TagPost = ({ post }) => {
  const tags = post.tag.split(",").map((tag) => tag.trim());

  


  return (
    <div>

      {tags.map((tag, index) => (
        <div key={index} className="text-xs rounded-lg">
          <Link href={`/blog/tag/${tag}`}>

            <div
              style={{ borderColor: generateRandomColor() }}
              className="block border-2 font-semibold	 text-black rounded-md px-2 py-1 "
            >
              
              {capitalizeFirstLetter(tag)}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TagPost;




