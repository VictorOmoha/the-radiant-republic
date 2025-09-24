import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)


app.get('/', (c) => {
  return c.render(
    <>
      {/* Header / Nav */}
      <header id="header" class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="#" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logomark" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav id="nav" class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-amber-600" href="#home">Home</a>
              <a class="hover:text-amber-600" href="/about">About</a>
              <a class="hover:text-amber-600" href="/gatherings">Gatherings</a>
              <a class="hover:text-amber-600" href="/ministries">Ministries</a>
              <a class="hover:text-amber-600" href="#events">Events</a>
              <a class="hover:text-amber-600" href="#give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-amber-600" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-amber-600" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
              </div>
            </nav>
            <button id="mobileTrigger" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Open menu">
              <i class="fa fa-bars"></i>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobileMenu" class="md:hidden bg-white/95 border-t border-black/10">
          <div class="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
            <a class="block py-2 hover:text-brand-warm" href="#home">Home</a>
            <a class="block py-2 hover:text-brand-warm" href="/about">About</a>
            <a class="block py-2 hover:text-brand-warm" href="/gatherings">Gatherings</a>
            <a class="block py-2 hover:text-brand-warm" href="/ministries">Ministries</a>
            <a class="block py-2 hover:text-brand-warm" href="#events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="#give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero split layout (matches provided design) */}
      <section id="home" class="pt-28 md:pt-32 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Left: image with title overlay */}
            <div class="relative rounded-xl overflow-hidden min-h-[320px] md:min-h-[460px]">
              <img src="https://page.gensparksite.com/v1/base64_upload/9d203efd148787105356059dce4824ef" alt="Radiant worship" class="absolute inset-0 w-full h-full object-cover"/>
              <div class="absolute inset-0 bg-black/25"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div class="text-white font-black leading-[0.95] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                  <div>THE</div>
                  <div>RADIANT</div>
                  <div>REPUBLIC</div>
                </div>
              </div>
            </div>
            {/* Right: headline and CTA */}
            <div class="bg-white rounded-xl p-8 md:p-10 flex flex-col justify-center border border-brand-dark/10">
              <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-[1.05]">Come<br/>As You Are</h1>
              <p class="mt-4 text-gray-600">Join us this Sunday</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a href="/gatherings" class="btn btn-primary">Join this Sunday</a>
                <a href="#messages" class="btn btn-outline">Watch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Service Times composite card */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-2xl font-extrabold text-gray-900">Service Times</h2>
              <div class="mt-6 grid grid-cols-2 gap-4 items-stretch">
                <div class="rounded-lg bg-amber-500 text-white p-5 flex flex-col justify-between">
                  <div class="text-sm font-semibold opacity-90">Sundays</div>
                  <div class="text-3xl md:text-4xl font-black">9:00<span class="text-lg align-top ml-1">AM</span></div>
                </div>
                <div class="rounded-lg bg-white border border-black/10 p-5">
                  <div class="text-gray-900 font-semibold">Sundays</div>
                  <div class="mt-2 space-y-1 text-2xl font-bold text-gray-900">
                    <div>9:00 <span class="text-sm align-top">AM</span></div>
                    <div>11:00 <span class="text-sm align-top">AM</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature message intro */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">He Is Risen</h3>
              <div class="text-gray-600 mt-1">John 20:1–18</div>
              <p class="mt-4 text-gray-700">Enjoy a slow, attentive time in news reheartening a good one—and celebration.</p>
            </div>

            {/* Latest Sermon video */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Latest Sermon</h3>
              <div class="mt-4 rounded-lg overflow-hidden bg-black/5 aspect-video">
                <div class="relative w-full h-full">
                  <img class="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/qoQ7QvlWfmg/maxresdefault.jpg" alt="Latest Sermon thumbnail"/>
                  <a href="https://www.youtube.com/watch?v=qoQ7QvlWfmg&list=RDqoQ7QvlWfmg&start_radio=1" target="_blank" rel="noopener" class="absolute inset-0 grid place-items-center bg-black/25 hover:bg-black/35">
                    <span class="inline-flex items-center gap-3 text-white font-semibold bg-black/40 backdrop-blur px-4 py-2 rounded-full">
                      <i class="fa fa-play"></i>
                      Watch on YouTube
                    </span>
                  </a>
                </div>
              </div>
              <div class="mt-3">
                <div class="font-semibold">He Is Risen</div>
                <div class="text-sm text-gray-600">John 20:1–18</div>
                <p class="text-gray-700 mt-2">Experience the care of God in a message full of hope.</p>
              </div>
            </div>

            {/* Events column with orange + white cards and photos */}
            <div class="grid gap-6">
              <div class="rounded-xl p-6 bg-brand-warm text-gray-900 border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold">Community Picnic</h3>
                <div class="text-gray-800/90 font-semibold mt-1">April 23, 2024</div>
                <p class="text-gray-900 mt-2">Join us for a gather—great eats and time together at the park.</p>
              </div>
              <div class="rounded-xl p-6 bg-white border border-black/10">
                <h3 class="text-2xl font-extrabold text-gray-900">Worship Night</h3>
                <div class="text-gray-600 mt-1">May 5, 2024</div>
                <p class="text-gray-700 mt-2">An evening of worship and stories. Family-friendly with space for prayer.</p>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <img class="rounded-lg object-cover h-36 w-full" src="https://images.unsplash.com/photo-1529336953121-adb1189eff04?q=80&w=1000&auto=format&fit=crop" alt="Community"/>
                <img class="rounded-lg object-cover h-36 w-full" src="https://images.unsplash.com/photo-1514516345957-556ca7c9a7b4?q=80&w=1000&auto=format&fit=crop" alt="Gathering"/>
              </div>
            </div>

            {/* Get Involved */}
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Get Involved</h3>
              <p class="mt-2 text-gray-700">Need prayer? We would love to pray for you. Fill out our online form to let us know how we can support you.</p>
            </div>
            {/* Prayer Requests */}
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Prayer Requests</h3>
              <p class="mt-2 text-gray-700">Need prayer? We would love to pray for you.</p>
              <div class="mt-4">
                <a href="#" class="btn btn-primary">Submit Request</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer class="bg-white border-t border-black/10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid md:grid-cols-3 gap-8 text-gray-900">
            <div>
              <div class="flex items-center gap-2 font-bold tracking-wide">
                <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logomark" class="h-20 md:h-24 w-auto"/>
              </div>
              <p class="mt-3 text-gray-700 text-sm max-w-sm">A church family shining the light of Jesus across our city—warm, hopeful, and always moving toward people.</p>
              <div class="mt-4 flex items-center gap-4 text-lg text-gray-700">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
                <a class="hover:text-brand-warm" aria-label="Facebook" href="#"><i class="fab fa-facebook" /></a>
              </div>
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
                <li><a href="#about" class="hover:text-gray-900">Plan a Visit</a></li>
                <li><a href="#events" class="hover:text-gray-900">Events</a></li>
                <li><a href="#messages" class="hover:text-gray-900">Watch Messages</a></li>
                <li><a href="#give" class="hover:text-gray-900">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// About page
app.get('/about', (c) => {
  return c.render(
    <>
      {/* Header / Nav (same style, white background) */}
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
              <a class="hover:text-brand-warm" href="/#events">Events</a>
              <a class="hover:text-brand-warm" href="/#give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
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
            <a class="block py-2 hover:text-brand-warm" href="/#events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/#give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero split */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="relative rounded-xl overflow-hidden min-h-[340px] md:min-h-[520px]">
            <img src="https://page.gensparksite.com/v1/base64_upload/9d203efd148787105356059dce4824ef" alt="Worship" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div class="text-white font-black leading-[0.95] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                <div>THE</div>
                <div>RADIANT</div>
                <div>REPUBLIC</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-5xl font-extrabold text-gray-900">About Us</h1>
            <p class="mt-2 text-gray-600">We’re a church family shaped by Jesus—warm, hopeful, and always moving toward people.</p>
            <div class="mt-8 space-y-6">
              <div class="flex gap-4">
                <div class="w-1 bg-brand-warm rounded"></div>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-900">Our Story</h3>
                  <p class="text-gray-700 mt-1">The Radiant Republic began in a living room in Cleveland, OH with a simple desire: to shine light in our city through hospitality, worship, and discipleship.</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-1 bg-brand-dark rounded"></div>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-900">Our Mission</h3>
                  <p class="text-gray-700 mt-1">Make the Good News accessible to all people everywhere—welcoming, equipping, and sending carriers of hope.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Our Values</h2>
          <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            <div class="text-center">
              <div class="text-3xl text-brand-dark"><i class="fa-solid fa-hands-praying"></i></div>
              <div class="mt-2 font-medium">Worship</div>
            </div>
            <div class="text-center">
              <div class="text-3xl text-brand-dark"><i class="fa-solid fa-hands"></i></div>
              <div class="mt-2 font-medium">Prayer</div>
            </div>
            <div class="text-center">
              <div class="text-3xl text-brand-dark"><i class="fa-solid fa-users"></i></div>
              <div class="mt-2 font-medium">Community</div>
            </div>
            <div class="text-center">
              <div class="text-3xl text-brand-dark"><i class="fa-solid fa-gift"></i></div>
              <div class="mt-2 font-medium">Generosity</div>
            </div>
            <div class="text-center">
              <div class="text-3xl text-brand-dark"><i class="fa-solid fa-handshake"></i></div>
              <div class="mt-2 font-medium">Integrity</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <div class="grid md:grid-cols-2 gap-8 items-start">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="grid grid-cols-2 gap-4">
                <img class="rounded-lg object-cover aspect-[4/5] w-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop" alt="Leader"/>
                <img class="rounded-lg object-cover aspect-[4/5] w-full" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=1000&auto=format&fit=crop" alt="Leader"/>
              </div>
              <div class="mt-4">
                <h3 class="text-2xl font-extrabold text-gray-900">Pastor</h3>
                <div class="text-gray-600">Lead Pastor</div>
                <p class="text-gray-700 mt-2">Short bio or welcome message here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              </div>
            </div>
            <div class="grid gap-6">
              <div class="rounded-xl p-6 bg-white border border-brand-dark/10">
                <h3 class="text-3xl font-extrabold text-gray-900">Leadership Team</h3>
                <p class="text-gray-700 mt-2">We lead together with humility and clarity across ministries, groups, and next generation.</p>
              </div>
              <div class="rounded-xl overflow-hidden">
                <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop" alt="Community"/>
              </div>
              <div class="rounded-xl p-6 bg-brand-warm text-gray-900 border border-brand-dark/10">
                <h3 class="text-3xl font-extrabold">Join Our Community</h3>
                <p class="mt-2">Find your people and your purpose at Radiant.</p>
                <div class="mt-4"><a href="/gatherings" class="btn btn-outline">Plan a Visit</a></div>
              </div>
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
                <li><a href="/#about" class="hover:text-gray-900">About</a></li>
                <li><a href="/#events" class="hover:text-gray-900">Events</a></li>
                <li><a href="/#messages" class="hover:text-gray-900">Watch Messages</a></li>
                <li><a href="/#give" class="hover:text-gray-900">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Ministries page
app.get('/ministries', (c) => {
  return c.render(
    <>
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
              <a class="hover:text-brand-warm" href="/#events">Events</a>
              <a class="hover:text-brand-warm" href="/#give">Give</a>
            </nav>
            <button id="mobileTrigger" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Open menu">
              <i class="fa fa-bars"></i>
            </button>
          </div>
        </div>
        <div id="mobileMenu" class="md:hidden bg-white border-t border-brand-dark/10">
          <div class="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
            <a class="block py-2 hover:text-brand-warm" href="/">Home</a>
            <a class="block py-2 hover:text-brand-warm" href="/about">About</a>
            <a class="block py-2 hover:text-brand-warm" href="/gatherings">Gatherings</a>
            <a class="block py-2 hover:text-brand-warm" href="/ministries">Ministries</a>
            <a class="block py-2 hover:text-brand-warm" href="/#events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/#give">Give</a>
          </div>
        </div>
      </header>

      {/* Top split: title/image left, Serve header right */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[420px]">
            <img src="https://page.gensparksite.com/v1/base64_upload/1582d07c38eee188b34fbde81de6110d" alt="Ministries hero" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95]">MINISTRIES</div>
              <div class="mt-2 text-lg font-semibold tracking-wide">THE RADIANT REPUBLIC</div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Serve</h1>
            <p class="mt-3 text-gray-600">Join a team, make difference.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#list" class="btn btn-primary">Explore Ministries</a>
              <a href="/gatherings#messages" class="btn btn-outline">Watch</a>
            </div>
          </div>
        </div>
      </section>

      {/* Grid content */}
      <section id="list" class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Left column heading and Sundays times card */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-3xl font-extrabold text-gray-900">Ministries</h2>
              <div class="mt-6 grid grid-cols-2 gap-4 items-stretch">
                <div class="rounded-lg bg-amber-500 text-gray-900 p-5">
                  <div class="font-semibold">WORSHIP TEAM</div>
                  <p class="mt-2 text-sm">Enjoy an invite to serve across music and creative arts.</p>
                </div>
                <div class="rounded-lg bg-white border border-black/10 p-5">
                  <div class="text-gray-900 font-semibold">Sundays</div>
                  <div class="mt-2 space-y-1 text-2xl font-bold text-gray-900">
                    <div>9:00 <span class="text-sm align-top">AM</span></div>
                    <div>11:00 <span class="text-sm align-top">AM</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Youth Ministry card with photo */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10 grid grid-cols-3 gap-4 items-center">
              <img class="col-span-1 rounded-lg object-cover aspect-square w-full" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1000&auto=format&fit=crop" alt="Youth"/>
              <div class="col-span-2">
                <h3 class="text-2xl font-extrabold text-gray-900">Youth Ministry</h3>
                <p class="text-gray-700 mt-2">Join students as they grow in faith and community.</p>
              </div>
            </div>

            {/* Children's and Small Groups */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Children’s Ministry</h3>
              <div class="mt-4 rounded-lg overflow-hidden relative">
                <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1589831377283-33cb1cc6bd5c?q=80&w=1200&auto=format&fit=crop" alt="Children"/>
              </div>
              <div class="mt-6">
                <div class="font-semibold">Small Groups</div>
                <div class="text-sm text-gray-600">John 20:1-18</div>
                <p class="text-gray-700 mt-1">Experience an all-age environment cared by incredible teams.</p>
              </div>
            </div>

            {/* Women's and Men's and Prayer */}
            <div class="grid gap-6">
              <div class="rounded-xl p-6 bg-brand-warm text-gray-900 border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold">Women’s Ministry</h3>
                <div class="text-gray-800/90 font-semibold mt-1">April 23, 2024</div>
                <p class="mt-2">Gatherings and Bible studies to encourage and equip.</p>
              </div>
              <div class="rounded-xl p-6 bg-white border border-black/10">
                <h3 class="text-2xl font-extrabold text-gray-900">MEN Ministry</h3>
                <div class="text-gray-600 mt-1">May 5, 2024</div>
                <p class="text-gray-700 mt-2">Join our weekly gathering for study, prayer, and community.</p>
              </div>
              <div class="rounded-xl overflow-hidden">
                <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop" alt="Prayer"/>
              </div>
              <div class="rounded-xl p-6 bg-white border border-black/10">
                <h3 class="text-2xl font-extrabold text-gray-900">Prayer Ministry</h3>
                <p class="text-gray-700 mt-2">Our prayer team would love to pray for you.</p>
              </div>
            </div>

            {/* Bottom CTA row */}
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Get Involved</h3>
              <p class="mt-2 text-gray-700">Need prayer? We would love to pray for you. Fill out our online form to let us know how we can support you.</p>
            </div>
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Join a Ministry</h3>
              <p class="mt-2 text-gray-700">Ready to serve? Let us know.</p>
              <div class="mt-4"><a href="#" class="btn btn-primary">Serve</a></div>
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
                <li><a href="/#events" class="hover:text-gray-900">Events</a></li>
                <li><a href="/#messages" class="hover:text-gray-900">Watch Messages</a></li>
                <li><a href="/#give" class="hover:text-gray-900">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Gatherings page
app.get('/gatherings', (c) => {
  return c.render(
    <>
      {/* Header / Nav (same style, white background) */}
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
              <a class="hover:text-brand-warm" href="/#events">Events</a>
              <a class="hover:text-brand-warm" href="/#give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
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
            <a class="block py-2 hover:text-brand-warm" href="/#events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/#give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero / Header block */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
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
                <li><a href="/#events" class="hover:text-gray-900">Events</a></li>
                <li><a href="/#messages" class="hover:text-gray-900">Watch Messages</a></li>
                <li><a href="/#give" class="hover:text-gray-900">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Gatherings page

export default app
