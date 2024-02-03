// Import necessary dependencies and components
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

const AllCategoryPost = ({ cate }) => {
  const capitalizedCategory = capitalizeFirstLetter(cate);


  return (
    <div
    style={{ borderColor: generateRandomColor() }}
    className="block border-2 font-semibold	text-xs bg-white text-black rounded-md px-2 py-1 "
  >
<Link href={`/blog/category/${cate}`}>
            {capitalizedCategory}
</Link>
    </div>
  );
};

export default AllCategoryPost;
