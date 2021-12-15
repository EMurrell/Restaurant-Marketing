import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="About" className="flex flex-col w-full p-4 md:flex-row">
      <div className="flex flex-col justify-center md:w-1/2">
        <h2 className="pt-12 text-4xl font-extrabold text-center text-stone-900">
          Experience True Burger Perfection
        </h2>
        <p className="p-6 text-lg md:p-10 md:text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex flex-row justify-center p-4 md:w-1/2 md:pt-12">
        <Image
          src="/about-burger.jpg"
          alt=" image of hamburger"
          width={400}
          height={500}
        />
      </div>
    </section>
  );
}
