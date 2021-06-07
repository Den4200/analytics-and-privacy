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

    <h2 className="text-2xl font-bold mt-8 mb-2">Data</h2>
    <p className="text-lg">
      Stuff about data!
    </p>
  </div>
);

export default AnalyticsAndDataPage;
