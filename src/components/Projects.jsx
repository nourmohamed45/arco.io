import PropTypes from "prop-types";
import { BiLoaderCircle } from "react-icons/bi";
import { FaArrowUp, FaStackOverflow } from "react-icons/fa";
import { IoIosArrowUp, IoMdArrowDropright } from "react-icons/io";
import { MdOfflineBolt } from "react-icons/md";
import { SiHackthebox } from "react-icons/si";
import { TbVectorBezierCircle } from "react-icons/tb";

const Projects = () => {
  const Cards = ({ img, title, desc }) => {
    return (
      <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
        <img
          src={img}
          alt=""
          className="lg:w-full md:w-52 mx-auto rounded-xl"
        />
        <div className="flex items-center justify-between md:w-auto w-60 mx-auto">
          <span className="text-[#003b29] pt-2">
            <p className="text-xl primary-font font-medium">{title}</p>
            <p>{desc}</p>
          </span>
          <FaArrowUp className="text-2xl rotate-45" />
        </div>
      </div>
    );
  };

  Cards.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
  };
  return (
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
      <div className="xl:w-[1200px] mx-auto px-3 max-w-[75%] pt-8">
        <section className="relative lg:py-0 py-8">
          <p className=" text-center text-[#fb7a3f]">Our recent works</p>
          <h1 className="text-center text-[#054130] primary-font lg:text-5xl text-xl font-semibold">
            Our completed projects
          </h1>

          <div className="md:flex items-center justify-between lg:pt-20 pt-8 gap-x-16">
            <Cards
              img={"/assets/grid_image1.png"}
              title={"CTF Trade Center"}
              desc={"Raleigh & Durham, NC"}
            />
            <Cards
              img={"/assets/grid_image2.png"}
              title={"Guangzhou Tower"}
              desc={"Portland, ME"}
            />
            <Cards
              img={"/assets/grid_image3.png"}
              title={"MK Finance Center"}
              desc={"Sarasota, FL"}
            />
          </div>
          <button className="rounded-full mx-auto mt-12 px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110">
            <p>Load more</p>
            <IoMdArrowDropright className="text-xl" />
          </button>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]" />
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]" />
        </section>
        <section className="flex items-center justify-between mt-24 mb-16 gap-2">
          <span className="flex items-center lg:gap-x-2">
            <MdOfflineBolt className="text-3xl" />
            <p className="font-medium primary-font text-xl">Boltshift</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <SiHackthebox className="text-3xl" />
            <p className="font-medium primary-font text-xl">Lightbox</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <FaStackOverflow className="text-3xl" />
            <p className="font-medium primary-font text-xl">FeatherDev</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <BiLoaderCircle className="text-3xl" />
            <p className="font-medium primary-font text-xl">Spherule</p>
          </span>
          <span className="flex items-center lg:gap-x-2">
            <TbVectorBezierCircle className="text-3xl" />
            <p className="font-medium primary-font text-xl">Nietzsche</p>
          </span>
        </section>
        <section className="lg:flex justify-between items-center relative mt-12 lg:p-8">
          <div className="lg:w-1/2">
            <p className="text-[#fb7a3f]">Our Newsletter</p>
            <h1 className="text-[#054130] primary-font lg:text-4xl text-xl font-semibold pt-4 pb-6">
              Subscribe our daily{" "}
              <span className="underline decoration-[#fdca51]">Newsletter</span>{" "}
              for update
            </h1>
            <p className="text-black leading-8">
              Studying Architecture is demanding and is rated as one of the most
              challenging courses at the university. it requires long hours,
              commitment, and a seven-year study period.
            </p>
            <div className="relative flex items-center pt-8">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white rounded-full w-full md:px-6 h-16 outline-none"
              />
              <button className="absolute md:right-4 right-1 rounded-full md:px-8 px-3 flex items-center md:text-sm text-xs bg-[#fd7b47] text-white gap-2 transition ease-out duration-300 transform hover:scale-110 ">
                <p>Subscribe</p>
                <IoMdArrowDropright className="text-xl h-12" />
              </button>
            </div>
          </div>

          <div className="lg:py-0 py-8 flex justify-center">
            <img
              src="/assets/subscribe_image.png"
              alt=""
              className="lg:w-full w-80"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
