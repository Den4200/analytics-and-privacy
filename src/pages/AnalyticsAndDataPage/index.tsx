import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from "@heroicons/react/outline";

import analyticsAndDataImage from "./analytics-and-data.png";

const AnalyticsAndDataPage = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">User Analytics and Data</h1>
    <hr />
    <img src={analyticsAndDataImage} alt="" />
    <hr className="mb-4" />

    <h2 className="text-2xl font-bold mb-2">What are analytics?</h2>
    <p className="text-lg">
      Analytics are insights extracted from data to discover useful information which drives
      business and development. Put more simply, it is "made up of data that can be analyzed to
      draw logical conclusions" (Anant). Analytics are critical to organizations and businesses, as
      they allow them to "better understand the consumer's pain points and unmet needs" (Anant).
      These insights help to develop new products and services tailored to consumers' needs, as
      well as personalized advertising and marketing.
    </p>
    <p className="text-lg mt-4">
      To look at some specific benefits of analytics, let's look at UX design. It is especially
      critical for UX designers to have the insights gained from the analytics of their end-users.
      The data collected for UX design "contains information about the users of your app or
      website, such as their age, their location, their interests, or simply their behavior — that
      is, how they use your app or website" (Schwarz). With this data, UX designers can find out at
      what point users are leaving their site, and the most probable cause why. They can then
      improve the UX of that specific part of the website to improve the customer's journey,
      reducing exit rates. UX analytics make a large impact on end-user experience for websites.
      Without knowing the behavior of customers and what they need, it would be very difficult to
      design and improve UX.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">What is data?</h2>
    <p className="text-lg">
      Data, in our use case here, is information about users of a particular product or service.
      There are three different types of data: explicit, implicit, and third-party.
    </p>
    <h3 className="text-xl font-bold mt-4">Explicit Data</h3>
    <p className="text-lg">
      Explicit data refers to data that was given by a user directly. This includes "preferences,
      personally identifiable information (PII) like name, mailing address, email, social accounts,
      billing data, and more" (Ellingwood). PII can be a major issue for privacy, as it is
      information that can directly identify an individual from others.
    </p>
    <h3 className="text-xl font-bold mt-4">Implicit Data</h3>
    <p className="text-lg">
      Implicit data is not provided by users directly. Instead, it is "gleaned by collecting and
      analyzing data from user interactions or from existing explicit data" (Ellingwood). For
      example, a streaming service could collect information about when you watch their content,
      what type of content you watch, and what quality you are watching the content at. This
      implicit data would be very useful for those companies, as it would allow them to learn a lot
      about your watching habits, among other things.
    </p>
    <h3 className="text-xl font-bold mt-4">Third-Party Data</h3>
    <p className="text-lg mb-8">
      Third-party data consists of data acquired from external parties. This data "may have been
      gathered explicitly or implicitly originally, but your organization's relationship to the
      data is filtered by another entity that has offered access to the information" (Ellingwood).
      This type of data can be especially useful for companies who are trying to go beyond its
      usual audience, but it also causes the largest concern for privacy. A large percentage of
      data breaches are linked back to third-party data. There can also be no transparency on how
      the third-party data was collected, and companies who use it may be put at risk of breaching
      data privacy regulations.
    </p>

    <hr />
    <div className="flex flex-row m-2">
      <Link to="/introduction">
        <ArrowCircleLeftIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
      <div className="flex-grow" />
      <Link to="/privacy">
        <ArrowCircleRightIcon className="h-10 w-10 text-gray-700 hover:text-black" />
      </Link>
    </div>
  </div>
);

export default AnalyticsAndDataPage;
