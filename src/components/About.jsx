import redadingImg from "../assets/images/about1.svg";
import dancingImg from "../assets/images/about2.svg";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto spaec-y-10 " id="about">
        
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {/* About picture section */}
        <motion.div
        variants={fadeIn("right",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="md:w-1/2">
          <img src={redadingImg} alt="readingImg" />
        </motion.div>
        {/* About text content section */}
        <motion.div
        variants={fadeIn("left",0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="md:w-2/5">
          <h2 className="ms:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            We have been improving our product
            <span className="text-secondary"> for many years</span>
          </h2>
          <p className="text-tartiary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get started</button>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
        {/* About picture section */}
        <motion.div
        variants={fadeIn("down",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="md:w-2/5">
          <img src={dancingImg} alt="dancing" />
        </motion.div>
        {/* About text content section */}
        <motion.div
        variants={fadeIn("up",0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false,amount:0.7}}
        className="md:w-1/2 mt-5">
          <h2 className="ms:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">
            You can Practice at any <br />
            <span className="text-secondary"> time convinent for you.</span>
          </h2>
          <p className="text-tartiary text-lg mb-7 ">
            A good example of a paragraph contains a topic conclusion. There are
            many different kinds of animals that live in China.
          </p>
          <button className="btnPrimary">Get started</button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
