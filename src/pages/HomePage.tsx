import appDownload from "../assets/appDownload.png";
import landing from "../assets/landing.png";
import { useNavigate } from "react-router-dom";
import SearchBar, { SearchForm } from "@/components/SearchBar";

export default function HomePage() {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className=" flex flex-col gap-12">
      <div className=" bg-white rounded-1g shadow-md py-8 flex-col gap-5 text-center -mt-16">
        <h1 className=" text-5xl font-bold tracking-tight text-orange-600">
          Tuck into takeway today
        </h1>
        <span className=" text-xl">Food is just a clik away!</span>
        <SearchBar
          placeHolder="seach by city or town"
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className=" grid md:grid-cols-2 gap-5">
        <img src={landing} alt="" />
        <div className=" flex flex-col items-center justify-center gap-4 text-center">
          <span className=" font-bold text-3xl tracking-tighter">
            Order takeway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownload} alt="" />
        </div>
      </div>
    </div>
  );
}
