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
            My non-work hobbies include triathlons, collecting Pokemon cards, traveling, poker, chess, MMA, and spending
            quality time with my family.
          </p>
          <br />
          <h2 className="text-xl font-bold text-gray-800 leading-none text-left">
            Projects
          </h2>
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="min-w-full text-left text-sm font-light table-auto">
                    <thead class="border-b font-medium dark:border-neutral-500">
                      <tr>
                        <th scope="col" class="px-6 py-4">Project</th>
                        <th scope="col" class="px-6 py-4">Started</th>
                        <th scope="col" class="px-6 py-4">Description</th>
                        <th scope="col" class="px-6 py-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b dark:border-neutral-500 no-scrollbar">
                        <td class="whitespace-normal px-6 py-4"><a href="https://indiestack.co">IndieStack</a></td>
                        <td class="whitespace-normal px-6 py-4">10/21/2019</td>
                        <td class="whitespace-normal px-6 py-4">Private community for digital makers, bootstrappers, and indie founders.</td>
                        <td class="whitespace-normal px-6 py-4">Acquired (5-figure exit)</td>
                      </tr>
                      <tr class="border-b bg-gray-100 dark:border-neutral-800">
                        <td class="whitespace-normal px-6 py-4"><a href="https://newslettercrew.com">Newsletter Crew</a></td>
                        <td class="whitespace-normal px-6 py-4">1/05/2020</td>
                        <td class="whitespace-normal px-6 py-4">Podcast, membership, and blog helping you become a more successful newsletter creator.</td>
                        <td class="whitespace-normal px-6 py-4">Acquired (6-figure exit)</td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-normal px-6 py-4"><a href="https://referralkit.co">ReferralKit</a></td>
                        <td class="whitespace-normal px-6 py-4">10/01/2020</td>
                        <td class="whitespace-normal px-6 py-4">Newsletter referral SaaS. Put your newsletter growth on autopilot</td>
                        <td class="whitespace-normal px-6 py-4">Acquired (5-figure exit)</td>
                      </tr>
                      <tr class="border-b bg-gray-100 dark:border-neutral-800">
                        <td class="whitespace-normal px-6 py-4"><a href="https://playgroup.community">Playgroup</a></td>
                        <td class="whitespace-normal px-6 py-4">03/25/2021</td>
                        <td class="whitespace-normal px-6 py-4">Powerful platform to start and grow your own online community.  </td>
                        <td class="whitespace-normal px-6 py-4">Shutdown (acquired for a loss)</td>
                      </tr>
                      <tr class="border-b dark:border-neutral-500">
                        <td class="whitespace-normal px-6 py-4"><a href="https://alts.club">Alts Club</a></td>
                        <td class="whitespace-normal px-6 py-4">11/18/2022</td>
                        <td class="whitespace-normal px-6 py-4">Newsletter and community focusing on alternative investments.</td>
                        <td class="whitespace-normal px-6 py-4">Acquired (4-figure exit)</td>
                      </tr>
                      <tr class="border-b bg-gray-100 dark:border-neutral-800">
                        <td class="whitespace-normal px-6 py-4"><a href="https://supermatic.io">Supermatic</a></td>
                        <td class="whitespace-normal px-6 py-4">09/03/2023</td>
                        <td class="whitespace-normal px-6 py-4">Cold email outreach automation SaaS</td>
                        <td class="whitespace-normal px-6 py-4">Active</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <Newsletter/>
        </div>
      </main>

      <Footer></Footer>
    </div>
  )
}
