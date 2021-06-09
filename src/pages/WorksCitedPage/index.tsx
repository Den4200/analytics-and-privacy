import { Link } from "react-router-dom";
import { ArrowCircleLeftIcon } from "@heroicons/react/outline";

import "./works_cited.css";

const WorksCitedPage = () => (
  <div className="content-container source-container mx-auto px-8 mt-8">
    <h1 className="text-3xl font-bold">Works Cited</h1>
    <hr className="my-4" />

    <p>
      Anant, Venky, et al. “The Consumer-Data Opportunity and the Privacy Imperative.” McKinsey &
      Company, McKinsey & Company, 27 Apr. 2020,
      http://www.mckinsey.com/business-functions/risk/our-insights/the-consumer-data-opportunity-and-the-privacy-imperative.
    </p>
    <p>
      Cavoukian, Ann, et al. “Have It All: Protecting Privacy in the Age of Analytics.” Deloitte,
      Deloitte Design Studio, 2015,
      http://www2.deloitte.com/content/dam/Deloitte/ca/Documents/Analytics/ca-en-analytics-ipc-big-data.pdf.
    </p>
    <p>
      Ellingwood, Justin. “User Data Collection: Balancing Business Needs and User Privacy.”
      DigitalOcean, DigitalOcean, 26 Sept. 2017,
      http://www.digitalocean.com/community/tutorials/user-data-collection-balancing-business-needs-and-user-privacy.
    </p>
    <p>
      Goswami, Swish. “Council Post: The Rising Concern Around Consumer Data And Privacy.” Forbes,
      Forbes Magazine, 14 Dec. 2020,
      http://www.forbes.com/sites/forbestechcouncil/2020/12/14/the-rising-concern-around-consumer-data-and-privacy/.
    </p>
    <p>
      Landgraf, Greg. “Data Collection and Privacy: Balancing Information Needs with Patron
      Protection. (TRENDS).” American Libraries, vol. 49, no. 9–10, Sept. 2018, p. 14. EBSCOhost,
      http://search.ebscohost.com/login.aspx?direct=true&db=edsric&AN=edsric.A553402600&authtype=sso&custid=s5519626&site=eds-live.
    </p>
    <p>
      Schwarz, Daniel. “UX Analytics: What They Are, and Why They Matter.” SitePoint, SitePoint, 11
      Dec. 2017, http://www.sitepoint.com/ux-analytics-what-they-are-why-they-matter/.
    </p>
    <p>
      Wieringa, Jaap, et al. “Data Analytics in a Privacy-Concerned World.” Journal of Business
      Research, Elsevier, 18 May 2019,
      http://www.sciencedirect.com/science/article/pii/S0148296319303078.
    </p>

    <hr className="mt-4" />
    <Link to="/conclusion">
      <ArrowCircleLeftIcon className="h-10 w-10 m-2 text-gray-700 hover:text-black" />
    </Link>
  </div>
);

export default WorksCitedPage;
