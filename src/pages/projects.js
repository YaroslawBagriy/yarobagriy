import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-indigo-600 leading-none tracking-loose inset-x-0.top-0">
      Projects I'm working on
    </h1>
    <br />
    <ul className="mt-1 text-xl text-gray-700 leading-loose text-left font-body list-disc">
      <li>
        <a className="text-blue-500" href="https://www.newslettercrew.com">
          Newsletter Crew
        </a>{" "}
        - A podcast helping you become a more successful newsletter creator.
      </li>
      <li>
        <a className="text-blue-500" href="https://www.inboxstash.com">
          InboxStash
        </a>{" "}
        - Find amazing email newsletters with the newsletter directory.
      </li>
      <li>
        <a className="text-blue-500" href="https://www.indiestack.co">
          IndieStack
        </a>{" "}
        - A private community for digital makers, bootstrappers, and indie
        founders.
      </li>
    </ul>
  </div>
);

function ProjectsPage() {
  return (
    <Layout>
      <SEO title="Projects" keywords={[`Projects`]} />
      <Hero />
    </Layout>
  );
}

export default ProjectsPage;
