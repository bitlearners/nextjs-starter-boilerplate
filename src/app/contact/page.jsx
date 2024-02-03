import { GrAd } from "react-icons/gr";
import Image from "next/image"
import Link from "next/link"
const ContactPage = () => {
  return (
    <div>
      <section className="text-gray-600  body-font">
        <div className="lg:h-auto bg-primary flex px-5 py-12 md:py-20 mx-auto   items-end relative">

          <div className="lg:flex-grow md:py-6 mx-1 md:mx-12 lg:mx-20 md:w-2/3 lg:flex lg:flex-col md:items-start md:text-left items-center text-center">


            <h1 className=" title-font text-left lg:text-5xl md:text-4xl text-lg my-1 md:mb-4 font-bold  md:mt-5  text-gray-900">
              Customer care

            </h1>

            <h2 className="title-font text-left lg:text-3xl md:text-2xl text-lg my-1 md:mb-4 font-bold  md:mt-5  text-gray-800">
              We are 24 hours available for you.</h2>

            <div className="flex justify-left">
              <button className="inline-flex text-white rounded-full bg-[#262626] border-0 my-2 py-1 px-4 md:py-2 md:px-8 focus:outline-none hover:bg-[#71717a] text-sm 	 md:text-lg">
                Call Now
              </button>
            </div>
          </div>


          <div className="md:w-1/3">
          <Image
            src="/round-cercle.png"
            alt="User Image"
            width={400}
            height={400}
            className="md:w-54 w-36 lg:w-64 object-cover object-left rounded md:mx-10 mx-8  my-auto lg:mx-14"
            />



          </div>

        </div>
      </section>




      <section className="text-gray-600 body-font relative bg-gray-50">
        <div className="container px-5 py-12 md:py-20 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"

              title="map"

              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"

            ></iframe>
            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                <p className="mt-1">Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <Link href="mailto:email.gmail.com">email@gmail.com</Link>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                <p className="leading-relaxed">
                  <Link href="tel:123-456-7890">
                  123-456-7890
                  </Link>
                  </p>
              </div>
            </div>
          </div>
          <div className="shadow-md rounded p-8 lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full  mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-primary focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-black bg-primary border-0 py-2 px-6   btn btn-primary text-lg">
            Send Enquiry
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
            </p>
          </div>
        </div>
      </section>


      <section className="text-gray-600 body-font bg-awhite">
        <div className="container px-5 py-12 md:py-20mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">Authentic Cliche Forage</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">Kinfolk Chips Snackwave</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">Coloring Book Ethical</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">Typewriter Polaroid Cray</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">Pack Truffaut Blue</span>
              </div>
            </div>
            <div className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-50 shadow-md rounded flex p-4 h-full items-center">
              <GrAd  className="h-6 w-6 text-secondary  flex-shrink-0 mr-4" />
                <span className="title-font font-medium">The Catcher In The Rye</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}

export default ContactPage