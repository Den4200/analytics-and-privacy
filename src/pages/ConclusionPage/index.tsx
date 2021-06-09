import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";

import conclusionImage from "./conclusion.png";

const ConclusionPage = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">Conclusion</h1>
    <hr />
    <img src={conclusionImage} alt="" />
    <hr className="mb-4" />

    <h2 className="text-2xl font-bold mb-2">A shift in topic</h2>
    <p className="text-lg">
      As mentioned in my introduction, my conclusion is actually contradictory with my topic.
      Perhaps I should change my topic from "Analytics and Data vs. Privacy" to "Analytics and Data
      & Privacy", now that you have learned that these two things work together hand in hand to
      push each other forward. At first glance, privacy may seem to limit the use of analytics and
      data, but it is the complete opposite.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">How can you protect your privacy?</h2>
    <p className="text-lg mb-8">
      Remember those popup modals asking you to accept a preposterous privacy policy in my
      introduction? I am certain that many of you clicked straight through, accepting them all, not
      even with the slightest thought as to read what you just accepted. To start protecting your
      own privacy, the first thing you can do is next time you encounter a similar popup on another
      website, be sure to read through what terms you are accepting before clicking that button to
      continue through.
    </p>

    <hr />
    <div className="flex flex-row m-2">
      <Link to="/analytics-vs-privacy">
        <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
      <div className="flex-grow" />
      <Link to="/works-cited">
        <ArrowCircleRightIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
    </div>
  </div>
);

export default ConclusionPage;
