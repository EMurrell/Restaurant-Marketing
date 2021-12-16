import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section
      id="About"
      className="relative flex flex-col justify-center w-full px-8 py-10 mb-6 h-96"
    >
      <div className="absolute z-10 w-2/3 pt-20 md:text-lg lg:pl-20 2xl:pl-32 ">
        <h3 className="pb-4 text-xl font-bold lg:text-3xl ">
          A PASSION FOR BURGERS
        </h3>
        <p className="font-medium lg:text-xl font-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="absolute font-extrabold text-right drop-shadow opacity-70 text-7xl md:text-9xl text-neutral-300 right-8 md:right-20 lg:right-32 2xl:right-40">
        OUR <br /> STORY
      </div>
    </section>
  );
}
