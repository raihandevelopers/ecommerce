import { useEffect, useState } from "react";
import Search from "../src/components/Search";
import StoreCarousel from "../src/components/StoreCarousel";
import SmallCardsTest from "./components/SmallCardsTest";
import Spinner from "./components/Spinner";
import { getProductCategories } from "./redux/actions/product";
import SmallCards from "./components/SmallCards";

export const tempCategoriesDataArray = [
  {
    image: "/cards.gif",
    slug: "Trading Cards",
    name: "Trading Cards",
  },
  {
    image: "/beauty.png",
    slug: "Beauty/Makeup",
    name: "Beauty/Makeup",
  },
  {
    image: "/toy.gif",
    slug: "Toys",
    name: "Toys",
  },
  {
    image: "/electronics.png",
    slug: "electronics",
    name: "Electronics",
  },
  {
    image: "/job.png",
    slug: "Jobs",
    name: "Jobs",
  },
  {
    image: "/pharmacy.png",
    slug: "Pharmacy",
    name: "Pharmacy",
  },
  {
    image: "/renovation.png",
    slug: "Home Improve",
    name: "Home Improve",
  },
  {
    image: "/furniture.png",
    slug: "Furniture",
    name: "Furniture",
  },

  {
    image: "/hongry.png",
    slug: "Hongry",
    name: "Hongry",
  },
  {
    image: "/book.png",
    slug: "Books",
    name: "Books",
  },
  {
    image: "/nft.png",
    slug: "NFTs",
    name: "NFTs",
  },
  {
    image: "/boat.png",
    slug: "Boats",
    name: "Boats",
  },
  {
    image: "/movies.png",
    slug: "Entertainment",
    name: "Entertainment",
  },
  {
    image: "/store.png",
    slug: "My Store",
    name: "My Store",
  },
  {
    image: "/cars and trucks.png",
    slug: "auto-parts",
    name: "Auto Parts",
  },
  {
    image: "/real Estate.png",
    slug: "estate-sale",
    name: "Estate Sale",
  },
  {
    image: "/beauty.png",
    slug: "coupon",
    name: "Coupon",
  },

  { image: "/breakfast.png", slug: "food", name: "Food" },
  {
    image: "/cars and trucks.png",
    slug: "cars-trucks",
    name: "Cars & Trucks",
  },
  {
    image: "/real Estate.png",
    slug: "real-estate",
    name: "Real Estate",
  },
  {
    image: "/game.gif",
    slug: "video-games",
    name: "Video Games",
  },
  {
    image: "hotel.png",
    slug: "hotels",
    name: "Hotels",
  },
  {
    image: "/acquisition.png",
    slug: "business-4-sale",
    name: "Business 4 sale",
  },
  {
    image: "/computer.png",
    slug: "computer-parts",
    name: "Computer Parts",
  },
  {
    image: "/movies.png",
    slug: "womens-clothing",
    name: "Women's Clothing",
  },
  {
    image: "/cards.gif",
    slug: "mens-clothing",
    name: "Men's Clothing",
  },
  {
    image: "/toy.gif",
    slug: "toys",
    name: "Toys",
  },
];

const Home = () => {
  // const [categoriesData, setCategoriesData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   getProductCategories()
  //     .then((res) => {
  //       const tempData =
  //         res &&
  //         res?.map((el) => {
  //           return {
  //             ...el,
  //             image: tempCategoriesDataArray?.find(
  //               (item) => item?.slug === el?.slug
  //             )?.image,
  //           };
  //         });
  //       setCategoriesData(tempData);
  //     })
  //     .catch(() => {
  //       setCategoriesData([]);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  return (
    <div>
      <Search />
      <div className="uppercards grid xs:grid-cols-2 sm:grid-cols-3 xs:gap-x-0 sm:gap-x-5 gap-y-10 px-2 md:px-14 pt-3 md:pt-14 place-items-center grid-cols-1">
        {/* Mobile  */}
        <div className="card w-[90vw] xs:w-40 h-36 md:w-50 md:h-60 bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center">
          <img
            src="/mall.png"
            alt=""
            className="w-32 h-32 md:w-50 md:h-60 rounded-xl"
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Shopping Mall
          </div>
        </div>
        <div className="card w-[90vw] xs:w-40 h-36 md:w-50 md:h-60 bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center">
          <img
            src="/real Estate.png"
            alt=""
            className="w-32 h-32 md:w-50 md:h-60 rounded-xl"
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Real Estate
          </div>
        </div>
        <div className="card w-[90vw] sm:w-40 h-36 mx-auto bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center xs:ml-3 ml-1 ">
          <img
            src="/cars and trucks.png"
            alt=""
            className="md:w-50 md:h-60 rounded-xl w-[50vw] h-32 "
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Cars and Trucks
          </div>
        </div>
        {/* Desktop */}
        <a href={"/list-items"}>
          <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
            <img src="/mall.png" alt="" className=" h-48 rounded-xl" />
            <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
              Shopping Mall
            </div>
          </div>
        </a>
        <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
          <img src="/real Estate.png" alt="" className=" h-48 rounded-xl" />
          <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
            Real Estate
          </div>
        </div>
        <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
          <img src="/cars and trucks.png" alt="" className=" h-48 rounded-xl" />
          <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
            Cars and Trucks
          </div>
        </div>
      </div>

      {/* {isLoading ? (
        <Spinner /> // Render skeleton loading while data is loading
      ) : ( */}
      <SmallCardsTest categoriesData={tempCategoriesDataArray} />
      {/* )} */}
      {/* <SmallCards
        image1="/cards.gif"
        text1="Trading Cards"
        image2="/beauty.png"
        text2="Beauty/Makeup"
        image3="/toy.gif"
        text3="Toys"
        image4="/electronics.png"
        text4="Electronics"
        image5="/job.png"
        text5="Jobs"
        image6="/pharmacy.png"
        text6="Pharmacy"
      /> */}
      {/* <SmallCards
        image1="/renovation.png"
        text1="Home Improve"
        image2="/businessman.png"
        text2="Jobs"
        image3="hongry.png"
        text3="Hongry"
        image5="furniture.png"
        text5="Furniture"
        image6="book.png"
        text6="Books"
        image7="nft.png"
        text7="NFTs"
        image8="boat.gif"
        text8="Boats"
      /> */}
      {/* <SmallCards
        image1="/movies.png"
        text1="Entertainment"
        image3="/acquisition.png"
        text3="Business 4 Sale"
        image4="store.png"
        text4="My Store"
        image5="/brake.png"
        text5="Auto Parts"
        image6="/seller.png"
        text6="Estate Sale"
        image7="/coupon.png"
        text7="Coupon"
        image8="/free.png"
        text8="Free"
      /> */}
      <StoreCarousel />
    </div>
  );
};

export default Home;
