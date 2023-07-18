import heroImage from "../../assets/Book-PNG-Isolated-Picture.png";
const Hero = () => {
  return (
    <div>
      <div className="pt-32 md:py-12 xl:container m-auto px-6 md:px-12">
        <div
          aria-hidden="true"
          className="absolute inset-0 my-auto w-96 h-32 rotate-45 bg-gradient-to-r from-primaryLight to-secondaryLight blur-3xl opacity-50 dark:opacity-20"
        ></div>
        <div className="relative lg:flex lg:items-center lg:gap-12">
          <div className="text-center lg:text-left md:mt-12 lg:mt-0 sm:w-10/12 md:w-2/3 sm:mx-auto lg:mr-auto lg:w-6/12">
            <h1 className=" font-bold text-4xl md:text-6xl lg:text-5xl xl:text-6xl ">
              You’re in the right place. & <span className="text-primary dark:text-primaryLight">Books Catalog.</span>
            </h1>
            <p className="mt-8">
              Tell us what titles or genres you’ve enjoyed in the past, and we’ll give you surprisingly insightful recommendations
            </p>

            <div className="mt-12 flex gap-6 lg:gap-12 justify-between grayscale dark:grayscale-0"></div>
          </div>
          <div className="overflow-hidden w-full lg:w-7/12 lg:-mr-16">
            <img src={heroImage} alt="project illustration" height="" width="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
