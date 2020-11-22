import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-indigo-600 leading-none tracking-loose inset-x-0.top-0">
      Podcats I'm featured in
    </h1>
    <br />
    <ul className="mt-1 text-xl text-gray-700 leading-loose text-left font-body list-disc">
      <li>
        <a className="text-blue-500" href="https://www.community-finder.co/podcasts/managing-indie-stack-community">
          Managing Indie stack community with a full time job with Yaro
        </a>
      </li>
      <li>
        <a className="text-blue-500" href="https://www.youtube.com/watch?v=6OezrHYCK5c">
          Indie Lifestyle, Managing Time, and How to Build Community!
        </a>
      </li>
      <li>
        <a className="text-blue-500" href="https://podcasts.apple.com/us/podcast/18-yaroslaw-bagriy-interview/id1503184253?i=1000484640098">
          Yaroslaw Bagriy Interview
        </a>
      </li>
    </ul>
    <br />
    <br />
    <h1 className="text-5xl font-extrabold text-indigo-600 leading-none tracking-loose inset-x-0.top-0">
      Blogs I'm featured in
    </h1>
    <br />
    <ul className="mt-1 text-xl text-gray-700 leading-loose text-left font-body list-disc">
      <li>
        <a className="text-blue-500" href="https://www.radletters.com/blog/newsletter-crew-a-podcast-for-newsletter-creators">
          Newsletter Crew: A Podcast for Newsletter Creators
        </a>
      </li>
      <li>
        <a className="text-blue-500" href="https://www.community-finder.co/post/acquiring-a-communitys">
          How Newsletter Crew acquired IndieMailer in 1 day
        </a>
      </li>
      <li>
        <a className="text-blue-500" href="https://alternativeassets.club/an-interview-with-yaro-bigry/">
        The World of Newsletter Acquisitions: Interview with Yaro Bagriy
        </a>
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
