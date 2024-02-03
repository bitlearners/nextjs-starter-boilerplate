
import { BsChatQuote } from "react-icons/bs";
import { MdOutlineVideoCameraFront } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { BsChatText } from "react-icons/bs";
import { BsTelephoneOutbound } from "react-icons/bs";
import { FiVideo } from "react-icons/fi";

import Image from "next/image"
import { IoCallOutline } from "react-icons/io5";

const Home = () => {

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return <div>

    <section className="text-gray-600 lg:mx-28 md:mx-16 mx-4 body-font">
      <div className="bg-gradient-to-r lg:h-64 from-[#f1e024] via-[#fffefb] to-[#f1e024] flex px-5 my-6   items-end relative rounded-lg ">
        <div className="md:w-1/3  ">

          <Image
            src="/hero.png"
            alt="User Image"
            width={400}
            height={400}

            className="md:w-48 w-36 lg:w-52 object-cover object-center rounded md:mx-14 pt-2 lg:mx-20"
          />

        </div>

        <div className="lg:flex-grow md:py-6 mx-1 md:mx-12 lg:mx-20 md:w-2/3 lg:flex lg:flex-col md:items-start md:text-left items-center text-center">
          <div className="md:leading-10 text-left	 ">
            <p className="lg:text-3xl md:text-2xl text-xl font-semibold  text-gray-900">
              Shweta Bhandarkar&nbsp;<span className="lg:text-3xl text-gray-700  md:text-2xl text-lg font-semibold">
                recommends&nbsp;
              </span>
              <span className="lg:text-3xl  md:text-2xl text-lg font-semibold text-gray-900">
                Astrotalk
              </span>
            </p>




          </div>

          <h1 className="title-font text-left lg:text-4xl md:text-3xl text-lg my-1 md:mb-4 font-normal  md:mt-5  text-gray-900">
            Chat With Astrologer
          </h1>

          <div className="flex justify-left">
            <button className="inline-flex text-white rounded-full bg-[#262626] border-0 my-2 py-1 px-4 md:py-2 md:px-8 focus:outline-none hover:bg-[#71717a] text-sm 	 md:text-lg">
              Chat Now
            </button>
          </div>
        </div>
      </div>
    </section>


    <section className="text-gray-600 lg:mx-28 md:mx-16 mx-4 body-font my-10">


      <div className="flex flex-row text-center  ">
        <div data-aos="fade-up-right" className=" basis-1/4 md:basis-1/3 w-auto h-auto mr-2 py-3 my-2 border-solid border shadow-xl shadow-primary/20 border-primary rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120  duration-200">
          <div className="border-solid border-2 bg-green-400 text-white rounded-full w-14 h-14 m-auto p-auto text-center flex items-center justify-center">
            <BsChatText className="w-7 h-7" />
          </div>
          <p>Chat with Doctor
          </p>
        </div>
        <div data-aos="fade-up-right" className="basis-1/4 md:basis-1/3 w-auto h-auto m-2 py-3 my-2 border-solid border shadow-xl shadow-primary/20 border-primary  rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120  duration-200">
          <div className="border-solid border-2 bg-pink-400 text-white rounded-full w-14 h-14 m-auto p-auto text-center flex items-center justify-center">
            <BsTelephoneOutbound className="w-7 h-7" />
          </div>
          <p>Talk with Doctor</p>
        </div>
        <div data-aos="fade-up-left" className="basis-1/4 md:basis-1/3 w-auto h-auto m-2 py-3 my-2 border-solid border shadow-xl shadow-primary/20 border-primary  rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120  duration-200">
          <div className="border-solid border-2 bg-cyan-400 text-white rounded-full w-14 h-14 m-auto p-auto text-center flex items-center justify-center">
            <FiVideo className="w-7 h-7" />
          </div>
          <p>Video Call with Doctor</p>
        </div>
        <div data-aos="fade-up-left" className="basis-1/4 md:basis-1/3 w-auto h-auto ml-2 py-3 my-2 border-solid border shadow-xl shadow-primary/20 border-primary  rounded-lg transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-120  duration-200">
          <div className="border-solid border-2 bg-purple-400 text-white rounded-full w-14 h-14 m-auto p-auto text-center flex items-center justify-center">
            <IoCallOutline className="w-7 h-7" />
          </div>
          <p>Call with Shweta Bhandarkar</p>
        </div>

      </div>

    </section>

    <section className="text-gray-600 my-10 bg-gray-50 ">
      <div className="lg:mx-28 md:mx-16 mx-4 body-font">
        <div className="container px-5 py-12 ">
          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base mb-6 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          {/* w-64 h-80 p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-[20px] */}


          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={720}
                  height={400}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-secondary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={720}
                  height={400}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap">
                    <a className="text-secondary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden">

                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={720}
                  height={400}
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                />

                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-secondary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                      <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>1.2K
                    </span>
                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                      <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto"> */}

    <section className="text-gray-600 my-10 ">
      <div className="lg:mx-28 md:mx-16 mx-4 body-font">
        <div className="container px-5 py-12 ">
          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base mb-6 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>

          <div className="flex flex-wrap -m-4 pt-6">
            <div className="lg:w-1/3 lg:mb-0  ">
              <div className="h-full text-center">
                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={302}
                  height={302}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                />

                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90`&apso;`s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
                <p className="text-gray-500">Senior Product Designer</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 ">
              <div className="h-full text-center">
                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={300}
                  height={300}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                />

                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90`&apso;`s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
                <p className="text-gray-500">UI Develeoper</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 ">
              <div className="h-full text-center">
                <Image
                  src="/720x400.png"
                  alt="User Image"
                  width={300}
                  height={300}
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                />

                <p className="leading-relaxed">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90`&apso;`s cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-block h-1 w-10 rounded bg-secondary mt-6 mb-4"></span>
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
                <p className="text-gray-500">CTO</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="text-gray-600 my-10 bg-gray-50">
      <div className="lg:mx-28 md:mx-16 mx-4 body-font">
        <div className="container px-5 py-12 ">


          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base mb-6 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>


          <div className="container mx-auto flex px-5 pt-6 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <Image
                src="/shweta.png"
                alt="User Image"
                width={720}
                height={600}
                className="object-cover object-center border-solid border shadow-2xl  rounded-lg"
              />

            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="text-black bg-primary border-0 py-2 px-6   btn btn-primary text-lg">
                  About Us
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section>


    <section className="text-gray-600 my-10 ">
      <div className="lg:mx-28 md:mx-16 mx-4 body-font">
        <div className="container px-5 py-12 ">


          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base mb-6 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/500x300.png"
                  alt="User Image"
                  width={500}
                  height={300}
                  className="w-full object-cover h-full object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/500x300.png"
                  alt="User Image"
                  width={500}
                  height={300}
                  className="w-full object-cover h-full object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
              <div className="md:p-2 p-1 w-full">
                <Image
                  src="/600x360.png"
                  alt="User Image"
                  width={600}
                  height={360}
                  className="w-full h-full object-cover object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <Image
                  src="/600x360.png"
                  alt="User Image"
                  width={600}
                  height={360}
                  className="w-full h-full object-cover object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/502x302.png"
                  alt="User Image"
                  width={502}
                  height={302}
                  className="w-full object-cover h-full object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
              <div className="md:p-2 p-1 w-1/2">
                <Image
                  src="/503x303.png"
                  alt="User Image"
                  width={503}
                  height={303}
                  className="w-full object-cover h-full object-center block border-solid border shadow-md  rounded-lg"
                />

              </div>
            </div>
          </div>


        </div>
      </div>

    </section>



    <section className="text-gray-600 mt-10 bg-gray-50">
      <div className="lg:mx-28 md:mx-16 mx-4 body-font">
        <div className="container px-5 py-12 ">




          <div className="text-center ">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 ">Raw Denim Heirloom Man Braid</h1>
            <span className="inline-block h-1 w-12 rounded bg-secondary"></span>

            <p className="text-base mb-6 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-gray-200 px-4 py-6 border bg-white shadow-md  rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-secondary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M8 17l4 4 4-4m-4-5v9"></path>
                  <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-gray-200 px-4 py-6 border bg-white shadow-md  rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-secondary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">1.3K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-gray-200 px-4 py-6 border bg-white shadow-md  rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-secondary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                  <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
                <p className="leading-relaxed">Files</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-gray-200 px-4 py-6 border bg-white shadow-md  rounded-lg">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-secondary w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
                <p className="leading-relaxed">Places</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    {/*          <div className="flex bg-gradient-to-r md:mx-28 mx-4 from-yellow-300 via-white to-yellow-300 p-4 rounded-2xl items-end relative shadow-md h-32">
            <div className="left-side-image-celb">
              <img
                className="object-cover h-full w-56"
                src="https://d1gcna0o0ldu5v.cloudfront.net/fit-in/320x410/assets/images/banner/archana-puran-c.webp"
                alt="Archana Puran Singh"

              />
            </div>
            <div className="right-side-content text-left relative mb-4 order-2 ml-4">
              <h1 className="ng-star-inserted">
                Archana Puran Singh{" "}
                <span className="unbold-class">recommends</span> Astrotalk
              </h1>




              <h2>Chat With Astrologer</h2>
              <a
                className="btn-contact-astrologer"
                href="/chat-with-astrologer"
              >
                Chat Now
              </a>
            </div>
          </div> */}

  </div>;
};

export default Home;