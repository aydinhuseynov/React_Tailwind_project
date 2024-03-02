import bannerImage from "../assets/images/bannerImage.svg";
import Banner from "../shared/Banner";
const Home = () => {
  return (
    <div className="md:px-12 max-w-screen-2xl mx-auto mt-24">
      <Banner
        bannerImage={bannerImage}
        heading="Develop ypur skill without diligence"
        subheading="  Agood example of paragraf contains a topic sentence ,details and
              aconculusion. There are many differnets kind of animals that live
              in China"
              btn1={'Get Started'}
              btn2={'Discount'}
      />
    </div>
  );
};

export default Home;
