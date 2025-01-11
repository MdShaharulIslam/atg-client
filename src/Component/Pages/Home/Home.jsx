import bgImage from "../../../assets/bg.png";
import SubNavbar from "../../Navber/SubNavber";
import Article from "../Article/Article";


const Home = () => {
  return (
    <div className="justify-center items-center text-gray-900">
      <header
        className="bg-cover h-96 bg-center bg-no-repeat bg-white dark:bg-gray-900"
        style={{
          backgroundImage: `url(${bgImage})`, // Correct way to interpolate the bgImage variable
        }}
      >
        <div className="container px-6 mx-auto text-left pt-60">
          <h1 className="text-3xl font-semibold text-white lg:text-4xl">
            Computer Engineering
          </h1>
          <p className="text-white">142,765 Computer Engineers follow this</p>
        </div>
      </header>
      <div className="mb-10"><SubNavbar></SubNavbar>  </div>
      
      <div>

        <Article></Article>
        
      </div>
     
    </div>
  );
};

export default Home;
