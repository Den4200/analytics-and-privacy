import analytiscAndPrivacyImage from "./analytics-and-privacy.png";

const AnalyticsAndPrivacyPage = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">Analytics and Data & Privacy</h1>
    <hr />
    <img src={analytiscAndPrivacyImage} alt="" />
    <hr className="mb-4" />

    <h2 className="text-2xl font-bold mb-2">A world with analytics and data alongside privacy</h2>
    <p className="text-lg">
      While analytics and data are considered the new oil of the economy, privacy concerns can
      limit their use. This leads to "a widespread sense that data analytics and privacy are
      contradictory", but in reality, "firms can implement a wide range of methods that satisfy
      different degrees of privacy and still enable them to leverage varied data analytics methods"
      (Wieringa 1). Some say that analytics and data challenge fundamental privacy protections,
      while others say that privacy requirements are a barrier to the fruits of advanced analytics.
      However, such a view is too narrow. Not only can there be a balance between privacy and the
      usage of analytics and data, they can actually drive each other forward and help the other
      progress further. Privacy "forces innovators to think creatively to find solutions that can
      serve multiple functionalities", so that analytics and data can be used in a safe manner
      (Cavoukian 5).
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">Privacy Protection</h2>
    <p className="text-lg">
      With the desire to utitlize analytics and data, innovators have found several ways to protect
      individuals' privacy, such as the usage of de-identified information. This type of
      information refers to "records that have had personal information removed or obscured such
      that there is no reasonable basis to believe that the information can be used to identify an
      individual" (Cavoukian 4). An example of de-identified information would be "instead of
      storing patron birthdates, the warehouse will only note the age of the patron at the time of
      a transaction. Or instead of tracking a checked-out item's full call number, it will store a
      truncated version to identify the general category but not a specific title" (Landgraf
      14-15). This detatches the individuals from their data, so that they cannot be identitifed.
      It would be completely anonymous, greatly protecting the privacy of those individuals.
    </p>
    <p className="text-lg mt-4">
      There is also aggregated information, which is "information whose values have been generated
      by performing a calculation across all individual units as a whole" (Cavoukian 4). This means
      that there is no way to pinpoint or identify specific individuals within the data.
    </p>
    <p className="text-lg mt-4">
      Innovators have come up with many ways to protect privacy in order to be able to use
      analytics and data.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">Privacy Integration</h2>
    <p className="text-lg">
      Companies have even begun to develop new ways to directly integrate privacy protection into
      their technologies, instead of addressing privacy breaches after they actually happen. These
      proactive approaches are starting to gain more popularity over reactive approaches to privacy
      breaches. They anticipate and prevent privacy invasive events before they can even happen, so
      that no privacy will be breached.
    </p>

    <p className="text-lg mt-4 mb-8">
      One of the most widely recognized proactive approaches to privacy is Privacy by Design (PbD).
      It was a framework created in the 1990s in response to the need of balancing analytics and
      data with privacy. PbD is endorsed by many authorities all over the world, "[including] the
      U.S. White House, Federal Trade Commission, Department of Homeland Security, Government
      Accountability Office, European Commission, European Parliament, and the Article 29 Working
      Party, among other public bodies around the world" (Cavoukian 6). The need for analytics and
      data has pushed innovators and developers to create approaches like these to further privacy
      protection all around the world. In turn, with more privacy, consumers and end-users will
      trust these companies much more, bringing them more business.
    </p>
  </div>
);

export default AnalyticsAndPrivacyPage;
