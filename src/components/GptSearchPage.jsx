import { HOME_IMG } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={HOME_IMG} alt="Home img" className=" h-screen object-cover md:h-auto md:object-contain"/>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearchPage;
