import { Hono } from 'hono'
import { renderer } from './renderer'

const gatherings = new Hono()

// Shared header/nav component (function returning JSX)
const Header = () => (
  <header id="header" class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-24 items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
          <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
        </a>
        <nav id="nav" class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a class="hover:text-brand-warm" href="/">Home</a>
          <a class="hover:text-brand-warm" href="/about">About</a>
          <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
          <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
          <a class="hover:text-brand-warm" href="/events">Events</a>
          <a class="hover:text-brand-warm" href="/give">Give</a>
          <div class="flex items-center gap-4 text-base">
            <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
            <a class="hover:text-brand-warm" aria-label="YouTube" href="https://www.youtube.com/@TheRadiant_Republic" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" /></a>
          </div>
        </nav>
        <button id="mobileTrigger" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Open menu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </div>
    {/* Mobile menu */}
    <div id="mobileMenu" class="md:hidden bg-white border-t border-brand-dark/10">
      <div class="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
        <a class="block py-2 hover:text-brand-warm" href="/">Home</a>
        <a class="block py-2 hover:text-brand-warm" href="/about">About</a>
        <a class="block py-2 hover:text-brand-warm" href="/gatherings">Gatherings</a>
        <a class="block py-2 hover:text-brand-warm" href="/ministries">Ministries</a>
        <a class="block py-2 hover:text-brand-warm" href="/events">Events</a>
        <a class="block py-2 hover:text-brand-warm" href="/give">Give</a>
      </div>
    </div>
  </header>
)

const Page = () => (
  <>
    <Header />
    {/* Hero / Header block */}
    <section class="pt-28 md:pt-32 bg-[#faf7f2]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
        {/* Left column: Title + subtitle matching reference */}
        <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
          <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Gatherings</h1>
          <p class="mt-2 text-gray-600 text-lg">The Radiant Republic</p>
        </div>
        {/* Right column: image */}
        <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
          <img src="https://page.gensparksite.com/v1/base64_upload/51c17b6c118825a0d601018a16415304" alt="Gatherings" class="absolute inset-0 w-full h-full object-cover" />
        </div>
      </div>
    </section>

    {/* Schedule blocks */}
    <section class="bg-[#faf7f2]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          {/* Sunday Services cards */}
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">Sunday Services</h2>
            <div class="mt-4 space-y-3">
              <div class="rounded-lg border border-black/10 overflow-hidden">
                <div class="bg-amber-500 text-gray-900 font-black text-3xl md:text-4xl px-6 py-4">9:00 AM</div>
              </div>
              <div class="rounded-lg border border-black/10 overflow-hidden">
                <div class="bg-amber-500 text-gray-900 font-black text-3xl md:text-4xl px-6 py-4">11:00 AM</div>
              </div>
            </div>
          </div>

          {/* Wednesday Night */}
          <div>
            <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">Wednesday Night</h2>
            <div class="text-gray-600 mt-1">Prayer & Study</div>
            <div class="mt-4 grid grid-cols-2 gap-4">
              <img class="rounded-lg object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1529336953121-adb1189eff04?q=80&w=1000&auto=format&fit=crop" alt="Small Groups"/>
              <div>
                <h3 class="text-2xl font-extrabold text-gray-900">Small Groups</h3>
                <p class="text-gray-700 mt-2">Weekly groups meeting across the city for prayer, study, and community.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lower grid: images, events list, what to expect */}
        <div class="mt-10 grid md:grid-cols-3 gap-6">
          <div class="space-y-6">
            <img class="rounded-lg object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1514516345957-556ca7c9a7b4?q=80&w=1000&auto=format&fit=crop" alt="Small Groups"/>
            <img class="rounded-lg object-cover aspect-[4/3] w-full" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Community"/>
          </div>
          <div class="bg-brand-warm rounded-xl p-6 text-gray-900 border border-brand-dark/10">
            <h3 class="text-2xl font-extrabold">Community Events</h3>
            <ul class="mt-4 space-y-2 text-gray-900">
              <li>April 28, 2024</li>
              <li>May 8, 2024</li>
              <li>June 11, 2024</li>
              <li>June 24, 2024</li>
            </ul>
          </div>
          <div class="bg-white rounded-xl p-6 border border-brand-dark/10">
            <h3 class="text-2xl font-extrabold text-gray-900">What To Expect</h3>
            <p class="mt-2 text-gray-700">Meet our team in the lobby. Enjoy coffee & donuts. We can’t wait to meet you.</p>
            <div class="mt-4"><a href="/about" class="btn btn-outline">Plan Your Visit</a></div>
          </div>
        </div>
      </div>
    </section>

    {/* Footer */}
    <footer class="bg-white border-t border-black/10">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div class="grid md:grid-cols-3 gap-8 text-gray-900">
          <div>
            <div class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </div>
            <p class="mt-3 text-gray-700 text-sm max-w-sm">A church family shining the light of Jesus across our city—warm, hopeful, and always moving toward people.</p>
          </div>
          <div>
            <h4 class="font-semibold">Contact</h4>
            <ul class="mt-3 space-y-2 text-gray-700 text-sm">
              <li><i class="fa fa-location-dot text-brand-warm mr-2"/> 123 Radiant Ave, City, ST</li>
              <li><i class="fa fa-clock text-brand-warm mr-2"/> Sundays 9:00 + 11:00 AM</li>
              <li><i class="fa fa-envelope text-brand-warm mr-2"/> hello@radiantrepublic.church</li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold">Next Steps</h4>
            <ul class="mt-3 space-y-2 text-gray-700 text-sm">
              <li><a href="/about" class="hover:text-gray-900">About</a></li>
              <li><a href="/events" class="hover:text-gray-900">Events</a></li>
              <li><a href="/#messages" class="hover:text-gray-900">Watch Messages</a></li>
              <li><a href="/give" class="hover:text-gray-900">Give</a></li>
            </ul>
          </div>
        </div>
        <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
      </div>
    </footer>
  </>
)

// Bind renderer and route
(gatherings as any).use(renderer)

gatherings.get('/', (c) => c.render(<Page />))

export default gatherings
