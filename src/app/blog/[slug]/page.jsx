import Image from "next/image"

import { Suspense } from 'react'

import PostUser from "@/components/postUser/postUser"
import { getPost, getSeo } from "@/lib/data"
import TagPost from "@/components/postcard/tagPost"
import Sidebar from "@/components/sidebar/Sidebar"


export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  const seo = await getSeo(post.seoId);

  return {
    title: seo.ptitle,
    description: seo.pdesc,
    keywords: seo.pkeywords || [], // Ensure it's an array, or provide a default empty array

  };
};




const SingleBlog = async ({ params }) => {
  const { slug } = params;
  // const post = await getData(slug)
  const post = await getPost(slug);
  return (
    <div>



      <section className="lg:mx-28 md:mx-16 mx-4 text-gray-600 my-6">
        {/* right side */}
        <div className="flex ">
          <div className="flex-1 w-3/4 p-4">

            {post.img && (
              <div className="rounded-lg h-auto overflow-hidden">


                <Image
                  src={post.img ? post.img : "/blog3.jpg"}
                  alt="User Image"
                  width={900}
                  height={500}
                  className="object-cover object-center h-full w-full my-2"
                />

              </div>
            )}

            <div className="inline-flex items-center py-1">
              Publied on
              <p className="text-secondary mx-1">  {post.createdAt.toString().slice(4, 16)}</p>  by

              <div className="flex-grow flex flex-col">
                <div className=" text-secondary mx-1">
                  {post && (
                    <Suspense fallback={<p>Loading feed...</p>}>
                      <PostUser userId={post.userID} />
                    </Suspense>
                  )}
                </div>
              </div>
            </div>


            <h1 className="text-4xl	font-sans leading-normal font-semibold text-gray-900	py-2">
              {post.title}
            </h1>

            <div>

            </div>






            <div className="rounded-lg h-auto overflow-hidden">



            </div>

            <div className="text-justify	">
              <p className="	font-sans leading-normal font-normal ">
                {post.desc}
              </p>

            </div>
            <div className="py-2">

              <div className="flex items-center gap-4 flex-wrap py-4">
              <h1 className="font-semibold	text-lg	">Tags:</h1>
                {post.tag && post.tag.split(',').map((tag, index) => (
                  <div key={index}>
                    <TagPost post={{ tag }} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* left side (sidebar) */}
          <div className="hidden md:flex w-1/4 p-4">
            <Sidebar />



          </div>

        </div>

      </section>





    </div>
  )
}

export default SingleBlog