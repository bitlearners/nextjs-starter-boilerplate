
import PostCard from "@/components/postcard/postCard";
import Sidebar from "@/components/sidebar/Sidebar";
import { getPosts } from "@/lib/data";


const Blog = async () => {

  const posts = await getPosts();


  return (
    <div>
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