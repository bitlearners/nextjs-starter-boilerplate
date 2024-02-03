// src/pages/blog/tag/[slug].jsx
import { getPostsByCate } from "@/lib/data";

import Sidebar from "@/components/sidebar/sidebar"
import PostCard from "@/components/postcard/postCard"
const CategoryPage = async ({ params }) => {
  try {
    const { slug } = params;

    // Fetch posts by tag
    const posts = await getPostsByCate(slug);

    if (!posts || posts.length === 0) {
      C

      return <div>
        <div className="title-font lg:text-4xl md:text-3xl font-bold	 text-lg flex flex-wrap w-full py-20 px-10 bg-primary text-center text-gray-900 relative items-center justify-center ">

          No posts found for Category: {slug.toUpperCase()}

        </div>

      </div>;

    }

    return (
      <div>
        <div className="title-font  lg:text-4xl md:text-3xl font-bold	 text-lg flex flex-wrap w-full py-20 px-10 bg-primary text-center text-gray-900 relative items-center justify-center ">

          Category: {slug.toUpperCase()}

        </div>

        <section className="lg:mx-28 md:mx-16 mx-4 text-gray-600 my-6 ">
          {/* right side */}
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

            {/* left side (sidebar) */}
            <div className="hidden md:flex w-1/4 p-4">
              <Sidebar />


            </div>

          </div>

        </section>


      </div>
    );
  } catch (error) {
    // Handle errors during data fetching
    console.error("Error rendering page:", error);
    return <div>Error rendering page</div>;
  }
};

export default CategoryPage;
