import Logo from "../assets/images/logo.svg";
import insta from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import facebook from "../assets/images/facebook.svg";
import twit from "../assets/images/twitter.svg";
const Fotter = () => {
  return (
    <div className="bg-[#010851] md:px-14 p-4 max-w-screen-2xl mx-auto text-white ">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            className="text-2xl font-semibold flex items-center space-x-3 text-white"
            href="/"
          >
            <img
              className="w-10 inline-block items-center "
              src={Logo}
              alt="logo"
            />
            <span>XYZ</span>
          </a>
          <p className="md:w-1/2 text-white">
            A simple paragraf is comprised of three major componets. The first
            sentence ,which is often start with big case.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-[#9a7af159] py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-secondary rounded-md -ml-2
            cursor-pointer hover:bg-white hover:text-primary duration-300 transition-all"
            />
          </div>
        </div>

        {/* fotter navigations */}
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-6">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <p className=" hover:text-gray-300">(012) 1234-567-890 </p>
              <p className=" hover:text-gray-300">123 xyz xyz</p>
              <p className=" hover:text-gray-300">
                qwuerybaihefv, qiwu - hrebcl
              </p>
              <p className=" hover:text-gray-300">095467</p>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between my-8">
        <p className="text-tartiary">@ XYZ 20XX --- 20XX. All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <img src={insta} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 rounded"/>
          <img src={facebook} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 rounded"/>
          <img src={twit} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 rounded"/>
          <img src={linkedin} className="w-8 cursor-pointer hover:-translate-y-4 transition-all duration-300 rounded"/>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
