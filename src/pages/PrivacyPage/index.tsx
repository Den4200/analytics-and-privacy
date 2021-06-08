import { Chart } from "react-google-charts";

import Loading from "../../components/Loading";
import privacyImage from "./privacy.png";

const PrivacyPage = () => (
  <div className="content-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold mb-4">Privacy</h1>
    <hr />
    <img src={privacyImage} alt="" />
    <hr className="mb-4" />

    <h2 className="text-2xl font-bold mb-2">What is privacy?</h2>
    <p className="text-lg">
      Privacy is the right to be let alone, or freedom from interference or intrusion. For our
      purposes, privacy is specifically the right to have some control over how your personally
      identifiable information (PII) is collected and used.
    </p>

    <p className="text-lg mt-4">
      Privacy has been an issue for decades, but it has been especially prominent in the last few
      years. A big reason for "the jump in privacy concerns is primarily a result of consumers
      becoming more aware of how companies are using their data" (Goswami). Consumers previously
      did not fully grasp the amount of personal data that companies were collecting or how it was
      being used.
    </p>

    <p className="text-lg mt-4">
      Privacy even reaches as far as to arise in Supreme Court cases and major controversial
      issues, such as abortion and same-sex relationships. For example, in{" "}
      <a href="https://www.oyez.org/cases/1971/70-18" className="italic hover:underline">
        Roe v. Wade
      </a>
      , the U.S. Supreme Court ruled that the right to privacy under the Due Process Clause of the
      Fourteenth Amendment protects a woman's right to abortion. Some other Supreme Court cases
      that deal with privacy include{" "}
      <a href="https://www.oyez.org/cases/1971/70-17" className="italic hover:underline">
        Eisenstadt v. Baird
      </a>
      ,{" "}
      <a href="https://www.oyez.org/cases/2002/02-102" className="italic hover:underline">
        Lawrence v. Texas
      </a>
      , and{" "}
      <a href="https://www.oyez.org/cases/1964/496" className="italic hover:underline">
        Griswold v. Connecticut
      </a>
      . As seen, privacy reaches far and wide, and has been a large area of issue for many decades.
    </p>

    <h2 className="text-2xl font-bold mt-8 mb-2">Privacy in relation to data</h2>
    <p className="text-lg mb-4">
      Data privacy has been especially relevant in the previous few years, as technology has
      greatly advanced forward and the internet has become an essential need. To protect data
      privacy, new laws have been implemented all around the world; the most prominent one being
      General Data Protection Regulation (GDPR). It is an EU law on data protection and privacy,
      which sets guidelines for the collection and processing of personal information from
      individuals who live in the European Union. This was implemented by the European Parliament
      an Council of the European Union in recent years (May 25, 2018) in order to protect the
      privacy of individuals' data. It is known as the toughest privacy and security law in the
      world.
    </p>

    <p className="text-lg mb-4">
      Privacy, especially in relation to data, is very important to individuals all around the
      world. Here are some statistics about privacy.
    </p>

    <Chart
      chartType="PieChart"
      loader={<Loading />}
      data={[
        ["", ""],
        ["", 93],
        ["", 7],
      ]}
      options={{
        title: "Those who worry about their privacy online",
        legend: "none",
        pieStartAngle: 21,
        tooltip: { trigger: "none" },
        slices: {
          0: { color: "blue" },
          1: { color: "grey" },
        },
      }}
    />
    <br />
    <Chart
      chartType="PieChart"
      loader={<Loading />}
      data={[
        ["", ""],
        ["", 89],
        ["", 11],
      ]}
      options={{
        title:
          "Those who avoid doing business with companies that they believe do not protect their privacy",
        legend: "none",
        pieStartAngle: 33,
        tooltip: { trigger: "none" },
        slices: {
          0: { color: "blue" },
          1: { color: "grey" },
        },
      }}
    />
    <br />
    <Chart
      chartType="PieChart"
      loader={<Loading />}
      data={[
        ["", ""],
        ["", 45],
        ["", 55],
      ]}
      options={{
        title: "Those who do not trust companies with their personal information",
        legend: "none",
        pieStartAngle: 0,
        tooltip: { trigger: "none" },
        slices: {
          0: { color: "blue" },
          1: { color: "grey" },
        },
      }}
    />
  </div>
);

export default PrivacyPage;
