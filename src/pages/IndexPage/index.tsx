import { Link } from "react-router-dom";

import topRightImage from "./top-right.svg";
import bottomLeftImage from "./bottom-left.svg";
import sampleMetrics from "./sample-metrics.png";

const IndexPage = () => (
  <div className="w-full px-6">
    <div className="mt-8 relative rounded-lg bg-indigo-700 container mx-auto flex flex-col items-center pt-12 sm:pt-24 pb-24 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64">
      <img
        className="mr-2 lg:mr-12 mt-2 lg:mt-12 absolute right-0 top-0"
        src={topRightImage}
        alt=""
      />
      <img
        className="ml-2 lg:ml-12 mb-2 lg:mb-12 absolute bottom-0 left-0"
        width="104px"
        height="95px"
        src={bottomLeftImage}
        alt=""
      />

      <div className="w-11/12 sm:w-2/3 mb-5 sm:mb-10">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-white font-bold leading-tight mb-4">
          User Analytics and Data vs. Privacy
        </h1>
        <h3 className="text-xl text-center text-gray-300 leading-tight">
          To what degree should user analytics and data be used to improve end-user experience in
          consideration of privacy?
        </h3>
      </div>

      <div className="flex justify-center items-center mb-10 sm:mb-20">
        <Link to="/introduction">
          <button className="hover:bg-white hover:text-indigo-600 hover:border-indigo-600 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
            Introduction
          </button>
        </Link>
        <button className="hover:bg-white hover:text-indigo-600 hover:border-indigo-600 ml-3 sm:ml-6 bg-transparent transition duration-150 ease-in-out focus:outline-none hover:bg-indigo-700-800 rounded border border-white text-white px-4 sm:px-8 py-1 sm:py-3 text-sm">
          Something?
        </button>
      </div>
    </div>

    <div className="container mx-auto flex justify-center lg:-mt-64 md:-mt-56 sm:-mt-48 -mt-24">
      <div className="relative sm:w-2/3 w-11/12">
        <img src={sampleMetrics} alt="" className="absolute" />
      </div>
    </div>
  </div>
);

export default IndexPage;
