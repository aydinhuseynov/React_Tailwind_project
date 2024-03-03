import Banner from "../shared/Banner";
import newsletterImg from "../assets/images/newsletter.png";
const Newsletter = () => {

  const content = {
    head: "Each student an share their discount code for friends",
    body: "A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”",
  };

  return (
    <div className="md:px-14 p-4 max-w-screen 2xl mx-auto my-12">
      {/* using banner companent and passing props */}
      <Banner
        bannerImage={newsletterImg}
        heading={content.head}
        subheading={content.body}
        btn1={'I have a code'}
        btn2={'I have a code'}
      />
    </div>
  );
};

export default Newsletter;
