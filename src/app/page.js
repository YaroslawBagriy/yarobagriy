'use client';

import Header from '../components/header'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'

export default function Home() {
  return (
    <div className="flex flex-col flex-1 font-sans min-h-screen md:justify-center max-w-2xl mx-auto w-full text-gray-900">
      <Header siteTitle={"Yaro Bagriy"} />

      <main className="flex flex-col flex-1 md:justify-center max-w-xl mx-auto px-4 py-8 md:p-8 w-full">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-indigo-600 leading-none font-inter space-x-48">
            I create digital products and invest in income producing assets.
          </h1>
          <br />
          <br />
          <h2 className="text-xl font-bold text-gray-800 leading-none text-left">
            About Yaro
          </h2>
          <br />
          <p className="mt-1 text-base text-gray-700 leading-relaxed text-left font-body">
            My goal is to build enough income producing assets to fully sustain my lifestyle. A few of those
            assets include SaaS projects, podcasts, newsletters, crypto, communities, real
            estate rentals, and a stock dividend portfolio.
          </p>
          <br />
          <p className="mt-1 text-base text-gray-700 leading-relaxed text-left font-body">
            My non-work hobbies include triathlons, traveling, poker, and spending
            quality time with my family.
          </p>
          <Newsletter/>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
