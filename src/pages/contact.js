import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
      />
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-indigo-600 leading-none tracking-tight inset-x-0.top-0">
          Contact
        </h1>
        <br />
        <p className="mt-1 text-xl text-gray-700 leading-relaxed text-center font-body">
          The best way to contact me is{" "}
          <a
            className="text-blue-500"
            href="mailto: yaroslawbagriy@gmail.com"
          >
            email
          </a>
          ,{" "}
          <a className="text-blue-500" href="https://twitter.com/yarobagriy">
            Twitter DM
          </a>
          , or{" "}
          <a className="text-blue-500" href="https://calendly.com/yarobagriy">
            setup a meeting
          </a>
          .
        </p>
      </div>
    </Layout>
  );
}

export default ContactPage;
