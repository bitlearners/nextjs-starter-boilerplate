
import PostCard from "@/components/postcard/postCard";
import Sidebar from "@/components/sidebar/Sidebar";
import { getPosts } from "@/lib/data";



const Blog = async () => {

  const posts = await getPosts();


  return (
    <div>
      <div className="title-font lg:text-4xl md:text-3xl font-bold	 text-lg flex flex-wrap w-full py-20 px-10 bg-primary text-center text-gray-900 relative items-center justify-center ">

        Blog

      </div>
      <section className="lg:mx-28 md:mx-16 mx-4 text-gray-600 my-6 ">

        <div className="flex ">

          <div className="flex-1 w-3/4 p-4">

            <div className="flex flex-wrap">
              {posts.map((post) => (
                <div key={post.id}>
                  <PostCard post={post} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex w-1/4 p-4">
            <Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog; 