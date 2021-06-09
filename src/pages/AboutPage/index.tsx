import aboutHeaderImage from "./about-header.jpg";

const AboutPage = () => (
  <>
    <div className="relative text-center py-32">
      <div className="absolute w-full max-w-full top-1/3 z-10 text-white">
        <h1 className="text-6xl tracking-wide mb-2">About Me</h1>
        <div className="w-12 h-1 mx-auto" style={{ backgroundColor: "#1ebba3" }} />
      </div>
      <div
        className="absolute bg-repeat bg-cover top-0 bottom-0 w-full z-0"
        style={{ backgroundImage: `url(${aboutHeaderImage})` }}
      />
    </div>

    <div className="content-container mx-auto px-8 mt-8">
      <h1 className="text-3xl font-bold mb-2">Hey there, I'm Dennis 👋</h1>
      <p className="text-lg mb-4">
        I am a student living in the United States studying Computer Science, aspiring to be a
        software engineer. I work a lot with user data, both where I volunteer and in my personal
        endeavors. Privacy is something very important to me and the people I work with.
      </p>

      <h2 className="text-2xl font-bold mb-2">Python Discord</h2>
      <p className="text-lg mb-4">
        As an administrator of{" "}
        <a
          href="https://pythondiscord.com/"
          className="hover:underline"
          style={{ color: "#14b89e" }}
        >
          Python Discord
        </a>
        , I have access to and work with the data of the {">"}200,000 members in our community.
        With tools such as{" "}
        <a
          href="https://www.cloudflare.com/web-analytics/"
          className="hover:underline"
          style={{ color: "#14b89e" }}
        >
          Cloudflare Analytics
        </a>
        ,{" "}
        <a href="https://grafana.com/" className="hover:underline" style={{ color: "#14b89e" }}>
          Grafana
        </a>
        ,{" "}
        <a
          href="https://www.metabase.com/"
          className="hover:underline"
          style={{ color: "#14b89e" }}
        >
          Metabase
        </a>
        ,{" "}
        <a href="https://sentry.io/" className="hover:underline" style={{ color: "#14b89e" }}>
          Sentry
        </a>
        ,{" "}
        <a
          href="https://www.honeycomb.io/"
          className="hover:underline"
          style={{ color: "#14b89e" }}
        >
          Honeycomb
        </a>
        , and many others, we are able to visualize and analyze the data we collect on our users to
        better improve our community and services. We only collect data we deem necessary to
        function as an organization, whether it be for moderation purposes, to track bugs in our
        projects, or for general improvements in our server, such as channel structure.
      </p>
      <p className="text-lg mb-4">
        With all the data we collect, we must comply with data privacy laws and regulations around
        the world (GDPR, CCPA, DMCA, etc). We also have a{" "}
        <a
          href="https://pythondiscord.com/pages/privacy/"
          className="hover:underline"
          style={{ color: "#14b89e" }}
        >
          privacy policy
        </a>{" "}
        which clearly states all data we collect on our users, along with regular data reviews
        where we publicly audit the information held in our databases.
      </p>

      <h2 className="text-2xl font-bold mb-2">Personal Endeavors with Data</h2>
      <p className="text-lg mb-8">
        Not only do I work with data at Python Discord, I also do so in personal endeavors. For
        example, my friends and I chat in our own Discord server, where I collect metrics on them
        and their messages sent. A few graphs of the data collected were shown on the homepage.
        It's quite interesting to see our messaging habits in each channel during different hours
        of the day, which channel is most popular, who talks the most in each channel, etc. We have
        gained a lot of insight into what happens around the server.
      </p>
    </div>
  </>
);

export default AboutPage;
