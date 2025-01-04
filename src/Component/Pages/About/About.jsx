import { Link } from "react-router-dom";
import about from "../../../../src/assets/logo.png";

const About = () => {
  return (
    <section className="bg-white bg-opacity-5 py-16" id="about">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="neon-container">
            <img
              src={about}
              alt="EasyTechMart Logo"
              className="mx-auto"
            />
          </div>

          {/* Description Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Welcome to EasySubTech
            </h3>
            <p className="text-white mb-4">
              At <span className="font-medium te">EasySubsTech,</span> Welcome to EasySubTech, your trusted destination for top-notch electronic devices and accessories. We are dedicated to providing high-quality tech products to meet the needs of enthusiasts, professionals, and everyday users.
            </p>
            <p className="text-white mb-4">
            At EasySubTech, we offer a carefully curated selection of the latest smartphones, laptops, smart home devices, gaming equipment, and essential accessories. Our mission is to simplify your tech journey by delivering premium products directly to your doorstep.
            </p>
            <p className="text-white mb-4">
            What sets us apart is our commitment to quality, transparency, and exceptional customer service. We stock all products in-house, ensuring prompt delivery and rigorous quality checks. With fast shipping, secure payment options, and friendly support, EasySubTech is here to make your shopping experience seamless and enjoyable.
            </p>
            <div className="mt-6">
              <Link
                to="/services"
                className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition duration-200"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-white text-center mb-6">
            Why Choose Us?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Latest Products", "Affordable Prices", "Fast Shipping", "Secure Transactions", "Customer Support", "Exclusive Deals"].map((feature, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-blue-100 text-blue-600 font-semibold rounded-lg shadow-md"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
