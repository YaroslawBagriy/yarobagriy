import React from "react";

import Layout from "../components/layout";
import Newsletter from "../components/newsletter";
import SEO from "../components/seo";

const Hero = () => (
  <div className="text-center">
    <h1 className="text-5xl font-extrabold text-indigo-600 leading-none font-inter space-x-48">
      I create digital products and invest in income producing assets.
    </h1>
    <br />
    <br />
    <h2 className="text-2xl font-bold text-gray-800 leading-none text-left">
      About
    </h2>
    <br />
    <p className="mt-1 text-lg text-gray-700 leading-relaxed text-left font-body">
      Ever since I stepped into my first job I knew I needed to find a way out.
      This led me on my entrepreneurial quest. This quest consists of building
      enough income producing assets to quit my full-time job. A few of those
      assets include SaaS projects, podcasts, newsletters, communities, real
      estate rentals, and a stock dividend portfolio.
    </p>
    <br />
    <p className="mt-1 text-lg text-gray-700 leading-relaxed text-left font-body">
      My non-work hobbies include triathlons, traveling, poker, and spending
      quality time with my family.
    </p>
    <Newsletter />
  </div>
);

function IndexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />

      <Hero />
    </Layout>
  );
}

export default IndexPage;
