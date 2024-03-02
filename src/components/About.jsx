import redadingImg from "../assets/images/about1.svg";
import dancingImg from "../assets/images/about2.svg";
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto spaec-y-10 ">
        
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* About picture section */}
        <div className="md:w-1/2">
          <img src={redadingImg} alt="readingImg" />
        </div>
        {/* About text content section */}
        <div className="md:w-2/5">
          <h2 className="ms:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product
            <span className="text-secondary"> for many years</span>
          </h2>
          <p className="text-tartiary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get started</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-2">
        {/* About picture section */}
        <div className="md:w-2/5">
          <img src={dancingImg} alt="dancing" />
        </div>
        {/* About text content section */}
        <div className="md:w-1/2 mt-5">
          <h2 className="ms:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any <br />
            <span className="text-secondary"> time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get started</button>
        </div>
      </div>
    </div>
  );
};

export default About;
