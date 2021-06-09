import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";

import analyticsVsPrivacyImage from "./analytics-vs-privacy.webp";

const AnalyticsVsPrivacy = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">Analytics and Data vs. Privacy</h1>
    <hr />
    <img src={analyticsVsPrivacyImage} alt="" />
    <hr className="mb-4" />

    <h2 className="text-2xl font-bold mb-2">Privacy Laws and Regulations</h2>
    <p className="text-lg">
      Although it is true that user privacy is still breached a lot today despite the great
      advances in privacy mentioned before, new laws are also being put into effect to combat those
      breaches and protect user privacy. The many privacy breaches and rising demand of consumers
      for privacy and control of their own data "have led governments to adopt new regulations,
      such as the General Data Protection Regulation (GDPR) in Europe and the California Consumer
      Privacy Act (CCPA) in that U.S. state" (Anant).
    </p>

    <p className="text-lg mt-4 mb-8">
      These laws and regulations will help to ensure that user data and privacy are protected.
      Going back to an earlier point, this will only drive privacy and the usage of analytics and
      data forward together, as companies will have to implement privacy protections directly
      within their technologies in order to follow these laws. This, in turn, will help companies
      build trust with their customers, bringing them more business. Both sides of the spectrum
      will pull each other forward.
    </p>

    <hr />
    <div className="flex flex-row m-2">
      <Link to="/analytics-and-privacy">
        <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
      <div className="flex-grow" />
      <Link to="/conclusion">
        <ArrowCircleRightIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
    </div>
  </div>
);

export default AnalyticsVsPrivacy;
