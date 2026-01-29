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
              <a class="hover:text-amber-600" href="/events">Events</a>
              <a class="hover:text-amber-600" href="/give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-amber-600" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
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
            <a class="block py-2 hover:text-brand-warm" href="/events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero split layout (matches provided design) */}
      <section id="home" class="pt-28 md:pt-32 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Left: image with title overlay */}
            <div class="relative rounded-xl overflow-hidden min-h-[320px] md:min-h-[460px]">
              <img src="https://www.genspark.ai/api/files/s/tfTjKs6e" alt="Radiant worship" class="absolute inset-0 w-full h-full object-cover"/>
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
              <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">Welcome. We're really glad you're here.</h1>
              <p class="mt-4 text-gray-600 leading-relaxed">If you've been longing for more depth in your walk with God—more clarity, more maturity, more alignment—you're not alone. And you didn't arrive here by accident.</p>
              <div class="mt-6 flex flex-wrap gap-3">
                <a href="/citizenship" class="btn btn-primary">Become a Citizen</a>
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

            {/* About intro */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Who We Are</h3>
              <p class="mt-4 text-gray-700">At The Radiant Republic, we walk with you as you grow into the radiant reflection of Christ. Not rushed. Not pressured. But intentional, accountable, and rooted in truth.</p>
              <p class="mt-3 text-gray-700">This is not church as usual. This is a journey for believers who are hungry to be formed—in character, in purity, and in purpose.</p>
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
                <img class="rounded-lg object-cover h-36 w-full" src="https://images.pexels.com/photos/6860380/pexels-photo-6860380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Community"/>
                <img class="rounded-lg object-cover h-36 w-full" src="https://images.pexels.com/photos/14664088/pexels-photo-14664088.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Gathering"/>
              </div>
            </div>

            {/* We Want to Meet You */}
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">We Want to Meet You</h3>
              <p class="mt-2 text-gray-700">We want to grow with you. And we want to help you become all God is shaping in this season.</p>
              <div class="mt-4">
                <a href="/gatherings" class="btn btn-outline">Plan a Visit</a>
              </div>
            </div>
            {/* Become a Citizen */}
            <div class="rounded-xl p-6 md:p-8 bg-brand-warm text-gray-900 border border-black/10">
              <h3 class="text-2xl font-extrabold">Become a Citizen</h3>
              <p class="mt-2">Citizenship here is spiritual and intentional. To be a Citizen of The Radiant Republic is to choose growth, maturity, accountability, and alignment with what God is doing in this season.</p>
              <div class="mt-4">
                <a href="/citizenship" class="btn btn-primary bg-gray-900 text-white hover:bg-black">Become a Citizen</a>
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
              <p class="mt-3 text-gray-700 text-sm max-w-sm">A people being formed into the radiant reflection of Christ.</p>
              <p class="mt-3 text-gray-600 text-sm">We can't wait to walk this journey with you.</p>
              <div class="mt-4 flex items-center gap-4 text-lg text-gray-700">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="TikTok" href="https://www.tiktok.com/@theradiantrepublic" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok" /></a>
                <a class="hover:text-brand-warm" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61576556033565" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
              </div>
              <p class="mt-2 text-gray-500 text-xs">@TheRadiantRepublic</p>
            </div>
            <div>
              <h4 class="font-semibold">Contact</h4>
              <ul class="mt-3 space-y-2 text-gray-700 text-sm">
                <li><i class="fa fa-clock text-brand-warm mr-2"/> Sundays 9:00 + 11:00 AM</li>
                <li><i class="fa fa-envelope text-brand-warm mr-2"/> hello@radiantrepublic.church</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Next Steps</h4>
              <ul class="mt-3 space-y-2 text-gray-700 text-sm">
                <li><a href="/gatherings" class="hover:text-gray-900">Plan a Visit</a></li>
                <li><a href="/about" class="hover:text-gray-900">About Us</a></li>
                <li><a href="/ministries" class="hover:text-gray-900">Ministries</a></li>
                <li><a href="/citizenship" class="hover:text-gray-900">Become a Citizen</a></li>
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
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
            <a class="block py-2 hover:text-brand-warm" href="/events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/give">Give</a>
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
            <p class="mt-2 text-gray-600 text-lg">We're building people—and we're building with you in mind.</p>
            <div class="mt-8 space-y-6">
              <div class="flex gap-4">
                <div class="w-1 bg-brand-warm rounded"></div>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-900">Our Purpose</h3>
                  <p class="text-gray-700 mt-1">The Radiant Republic exists because we believe God is preparing a glorious Church—a people being formed into the radiant reflection of Christ (Ephesians 5:27).</p>
                </div>
              </div>
              <div class="flex gap-4">
                <div class="w-1 bg-brand-dark rounded"></div>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-900">Our Journey</h3>
                  <p class="text-gray-700 mt-1">This journey is about maturity. About purity that makes power available. About believers who take responsibility for their walk with God and their place in the body.</p>
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
                <h3 class="text-3xl font-extrabold">Walk With Us</h3>
                <p class="mt-2">We don't replace your local church. We walk with you, sharpen you, and help you return to your world clearer, stronger, and more aligned with Christ.</p>
                <p class="mt-2">If you're tired of surface-level faith and ready for intentional growth, we would love to walk this journey with you.</p>
                <div class="mt-4"><a href="/citizenship" class="btn btn-outline">Become a Citizen</a></div>
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
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
            <a class="block py-2 hover:text-brand-warm" href="/events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/give">Give</a>
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
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Ministries</h1>
            <p class="mt-3 text-gray-700 text-lg">There is a place for you here.</p>
            <p class="mt-3 text-gray-600">We believe every believer carries grace, gifting, and responsibility within the body of Christ.</p>
            <p class="mt-3 text-gray-600">If you carry a burden for prayer, discipleship, service, or building others—we want to walk with you.</p>
            <p class="mt-3 text-gray-600">This is not about filling roles. It's about stewarding grace and expressing purpose.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="#list" class="btn btn-primary">Explore Ministries</a>
              <a href="#join" class="btn btn-outline">Join a Team</a>
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
              <h3 class="text-2xl font-extrabold text-gray-900">Stewarding Grace</h3>
              <p class="mt-2 text-gray-700">This is not about filling roles. It's about stewarding grace and expressing purpose within the body of Christ.</p>
            </div>
            <div id="join" class="rounded-xl p-6 md:p-8 bg-brand-warm text-gray-900 border border-black/10">
              <h3 class="text-2xl font-extrabold">Join a Team</h3>
              <p class="mt-2">If you carry a burden for prayer, discipleship, service, or building others—we want to walk with you.</p>
              <div class="mt-4"><a href="#" class="btn btn-primary bg-gray-900 text-white hover:bg-black">Join a Team</a></div>
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
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
            <a class="block py-2 hover:text-brand-warm" href="/events">Events</a>
            <a class="block py-2 hover:text-brand-warm" href="/give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero / Header block */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* Left column: Title + subtitle matching reference */}
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">Radiant Gatherings</h1>
            <p class="mt-4 text-gray-700 text-lg leading-relaxed">When we gather, we gather with intention.</p>
            <p class="mt-3 text-gray-600">Radiant Gatherings are spaces where prayer is reverent, teaching is clear, and formation is prioritized over performance.</p>
            <p class="mt-3 text-gray-600">You're not a spectator here. You're part of a people learning to hear God clearly and respond faithfully.</p>
            <div class="mt-6">
              <a href="#plan" class="btn btn-primary">Plan to Attend</a>
            </div>
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
            <div id="plan" class="bg-white rounded-xl p-6 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">We Want to Meet You</h3>
              <p class="mt-2 text-gray-700">Whether you're joining physically or virtually, we want to meet you. Meet our team in the lobby. Enjoy coffee & donuts. We can't wait to meet you.</p>
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
})

// Gatherings page

// Give page
app.get('/give', (c) => {
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
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

      {/* Hero and summary based on design */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
              <div class="text-5xl md:text-7xl font-black tracking-tight text-gray-900">GIVE</div>
              <h1 class="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">Support Our Mission</h1>
              <p class="mt-2 text-gray-600">Easily and securely donate using our online platform.</p>
            </div>
            <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
              <img src="https://page.gensparksite.com/v1/base64_upload/a0f6fc1ab938d9f12057b5f3854137f4" alt="Give design" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Options */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">Online Giving</h2>
              <p class="mt-2 text-gray-700">Easily and securely donate using our online platform.</p>
              <div class="mt-4"><a href="#" class="btn btn-primary">Donate Now</a></div>
            </div>
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">One-Time Gift</h2>
              <p class="mt-2 text-gray-700">Make a single, impactful donation today.</p>
              <div class="mt-4"><a href="#" class="btn btn-outline">Give Once</a></div>
            </div>
          </div>

          <div class="mt-10 grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Ways to Give</h3>
              <ul class="mt-4 space-y-3 text-gray-700">
                <li>Online — use our secure platform above</li>
                <li>Text-to-Give — Text: [keyword] to (number)</li>
                <li>By Mail — Send checks to our church office</li>
              </ul>
            </div>
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Secure Giving</h3>
              <div class="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-700">
                <div class="flex flex-col items-center"><i class="fa fa-shield-halved text-2xl text-brand-dark"></i><div class="mt-1">Secure</div></div>
                <div class="flex flex-col items-center"><i class="fa fa-lock text-2xl text-brand-dark"></i><div class="mt-1">Protected</div></div>
                <div class="flex flex-col items-center"><i class="fa fa-certificate text-2xl text-brand-dark"></i><div class="mt-1">Certified</div></div>
              </div>
            </div>
          </div>

          <div class="mt-10 grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
            <div class="md:col-span-2 bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold">Thank You</h3>
              <p class="mt-2">Your support has changed lives and helped our community in many meaningful ways. We’re grateful.</p>
            </div>
            <div class="rounded-xl overflow-hidden">
              <img class="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1514516345957-556ca7c9a7b4?q=80&w=1200&auto=format&fit=crop" alt="Family"/>
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
                <li><a href="/gatherings#messages" class="hover:text-gray-900">Watch Messages</a></li>
                <li><a href="/give" class="hover:text-gray-900">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Events page
app.get('/events', (c) => {
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
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

      {/* Intro split with supplied design image */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Events</h1>
            <p class="mt-2 text-gray-600">Gather with us for community, worship, and growth throughout the year.</p>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
            <img src="https://page.gensparksite.com/v1/base64_upload/c45cfcddae15d7311f4413bf2e07ae46" alt="Events design" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Events content based on supplied design */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-3 gap-6 md:gap-8 items-start">
            {/* Left: feature and list */}
            <div class="md:col-span-2 grid gap-6">
              {/* Feature event */}
              <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
                <div class="flex items-start gap-4">
                  <div class="flex-1">
                    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900">Community Picnic</h2>
                    <div class="text-gray-600 mt-1">April 23, 2024</div>
                    <p class="mt-4 text-gray-700">Join us for a gather—great food and time together at the park.</p>
                    <div class="mt-4"><a href="#" class="btn btn-outline bg-amber-500/90 text-gray-900 border-amber-500/0 hover:bg-amber-500">Register</a></div>
                  </div>
                  <img class="hidden sm:block w-28 h-28 object-cover rounded-lg" src="https://images.unsplash.com/photo-1529336953121-adb1189eff04?q=80&w=600&auto=format&fit=crop" alt="Picnic"/>
                </div>
              </div>

              {/* Stacked list */}
              <div class="grid gap-6">
                <div class="grid grid-cols-3 gap-4 bg-white rounded-xl p-5 border border-brand-dark/10 items-center">
                  <img class="col-span-1 rounded-lg object-cover aspect-[3/4] w-full" src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=600&auto=format&fit=crop" alt="Youth"/>
                  <div class="col-span-2">
                    <div class="text-xl md:text-2xl font-extrabold text-gray-900">Youth Conference</div>
                    <div class="text-gray-600">August 15, 2024</div>
                    <p class="text-gray-700 mt-1">Grow together through worship, study, and community.</p>
                    <div class="mt-3"><a class="btn btn-outline bg-amber-500/90 text-gray-900 border-amber-500/0 hover:bg-amber-500" href="#">Register</a></div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4 bg-white rounded-xl p-5 border border-brand-dark/10 items-center">
                  <img class="col-span-1 rounded-lg object-cover aspect-[3/4] w-full" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop" alt="Family"/>
                  <div class="col-span-2">
                    <div class="text-xl md:text-2xl font-extrabold text-gray-900">Family Fun Day</div>
                    <div class="text-gray-600">October 19, 2024</div>
                    <p class="text-gray-700 mt-1">Enjoy games, food, and time together.</p>
                    <div class="mt-3"><a class="btn btn-outline bg-amber-500/90 text-gray-900 border-amber-500/0 hover:bg-amber-500" href="#">Register</a></div>
                  </div>
                </div>
                <div class="grid grid-cols-3 gap-4 bg-white rounded-xl p-5 border border-brand-dark/10 items-center">
                  <img class="col-span-1 rounded-lg object-cover aspect-[3/4] w-full" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=600&auto=format&fit=crop" alt="Christmas"/>
                  <div class="col-span-2">
                    <div class="text-xl md:text-2xl font-extrabold text-gray-900">Christmas Service</div>
                    <div class="text-gray-600">December 24, 2024</div>
                    <p class="text-gray-700 mt-1">Join us for a special candlelight service.</p>
                    <div class="mt-3"><a class="btn btn-outline bg-amber-500/90 text-gray-900 border-amber-500/0 hover:bg-amber-500" href="#">Register</a></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: calendar + CTA */}
            <div class="grid gap-6">
              <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold text-gray-900">Event Calendar</h3>
                <div class="mt-4 text-sm text-gray-700">
                  <div class="flex items-center justify-between mb-3">
                    <button class="px-2 py-1 rounded border border-black/10 bg-white text-gray-700" aria-label="Prev">&lt;</button>
                    <div class="font-semibold">April 2024</div>
                    <button class="px-2 py-1 rounded border border-black/10 bg-white text-gray-700" aria-label="Next">&gt;</button>
                  </div>
                  <div class="grid grid-cols-7 gap-1 text-center">
                    <div class="text-gray-500">SUN</div><div class="text-gray-500">MON</div><div class="text-gray-500">TUE</div><div class="text-gray-500">WED</div><div class="text-gray-500">THU</div><div class="text-gray-500">FRI</div><div class="text-gray-500">SAT</div>
                    <div class="opacity-30">31</div><div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div>
                    <div>7</div><div>8</div><div>9</div><div>10</div><div>11</div><div>12</div><div class="rounded-full bg-amber-500 text-gray-900 font-bold">13</div>
                    <div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
                    <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
                    <div>28</div><div>29</div><div>30</div><div class="opacity-30">1</div><div class="opacity-30">2</div><div class="opacity-30">3</div><div class="opacity-30">4</div>
                  </div>
                </div>
              </div>
              <div class="rounded-xl p-6 md:p-8 bg-amber-500 text-gray-900 border border-brand-dark/10">
                <h3 class="text-3xl font-extrabold">Join Us</h3>
                <p class="mt-2">Let's maintain a community together and enjoy rich experiences throughout the year.</p>
                <div class="mt-4"><a href="/gatherings" class="btn btn-primary bg-gray-900 text-white hover:bg-black">Join us at an event</a></div>
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
})

// Citizenship page
app.get('/citizenship', (c) => {
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
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
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

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Become a Citizen</h1>
            <p class="mt-4 text-gray-700 text-lg leading-relaxed">Citizenship here is spiritual and intentional.</p>
            <p class="mt-3 text-gray-600">To be a Citizen of The Radiant Republic is to choose growth, maturity, accountability, and alignment with what God is doing in this season.</p>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
            <img src="https://page.gensparksite.com/v1/base64_upload/9d203efd148787105356059dce4824ef" alt="Citizenship" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95]">CITIZENSHIP</div>
              <div class="mt-2 text-lg font-semibold tracking-wide">THE RADIANT REPUBLIC</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* What is a Citizen */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-3xl font-extrabold text-gray-900">What is a Citizen?</h2>
              <p class="mt-4 text-gray-700">A citizen is someone willing to be formed—in character, in purity, and in responsibility as part of the body of Christ.</p>
              <p class="mt-3 text-gray-600">This does not mean leaving your local church. It does not mean isolation or elitism.</p>
              <p class="mt-3 text-gray-600">It means walking deliberately with others who are serious about becoming a glorious people unto God.</p>
            </div>

            {/* The Journey */}
            <div class="bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900 border border-brand-dark/10">
              <h2 class="text-3xl font-extrabold">The Journey</h2>
              <div class="mt-4 space-y-4">
                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <div class="font-semibold">Formation & Maturity</div>
                    <p class="text-gray-800 text-sm">Helping believers grow into depth and responsibility.</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <div class="font-semibold">Citizenship & Identity</div>
                    <p class="text-gray-800 text-sm">What it means to belong to a glorious people.</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <div class="font-semibold">Prayer & Alignment</div>
                    <p class="text-gray-800 text-sm">Prayer as posture, not performance.</p>
                  </div>
                </div>
                <div class="flex gap-3">
                  <div class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <div class="font-semibold">Community & Accountability</div>
                    <p class="text-gray-800 text-sm">Growing together with sincerity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Not Church as Usual */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Not Church as Usual</h3>
              <p class="mt-3 text-gray-700">This is a journey for believers who are hungry to be formed—in character, in purity, and in purpose.</p>
              <p class="mt-3 text-gray-600">We don't replace your local church. We walk with you, sharpen you, and help you return to your world clearer, stronger, and more aligned with Christ.</p>
            </div>

            {/* CTA */}
            <div class="bg-gray-900 rounded-xl p-6 md:p-8 text-white border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold">Ready to Begin?</h3>
              <p class="mt-3 text-gray-300">If you're tired of surface-level faith and ready for intentional growth, we would love to walk this journey with you.</p>
              <div class="mt-6">
                <a href="#" class="btn btn-primary bg-brand-warm text-gray-900 hover:bg-amber-500">Become a Citizen</a>
              </div>
            </div>

            {/* Images */}
            <div class="grid grid-cols-2 gap-4">
              <img class="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1529336953121-adb1189eff04?q=80&w=1000&auto=format&fit=crop" alt="Community"/>
              <img class="rounded-lg object-cover h-48 w-full" src="https://images.unsplash.com/photo-1514516345957-556ca7c9a7b4?q=80&w=1000&auto=format&fit=crop" alt="Gathering"/>
            </div>

            {/* Next Steps */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Next Steps</h3>
              <p class="mt-3 text-gray-700">We would love to stay connected with you.</p>
              <p class="mt-3 text-gray-600">Follow us on Instagram, TikTok, Facebook, and YouTube @TheRadiantRepublic.</p>
              <p class="mt-3 text-gray-700 font-medium">We can't wait to walk this journey with you.</p>
              <div class="mt-4 flex items-center gap-4 text-lg text-gray-700">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="TikTok" href="https://www.tiktok.com/@theradiantrepublic" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok" /></a>
                <a class="hover:text-brand-warm" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61576556033565" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
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
              <p class="mt-3 text-gray-700 text-sm max-w-sm">A people being formed into the radiant reflection of Christ.</p>
              <div class="mt-4 flex items-center gap-4 text-lg text-gray-700">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="TikTok" href="https://www.tiktok.com/@theradiantrepublic" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok" /></a>
                <a class="hover:text-brand-warm" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61576556033565" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
              </div>
            </div>
            <div>
              <h4 class="font-semibold">Contact</h4>
              <ul class="mt-3 space-y-2 text-gray-700 text-sm">
                <li><i class="fa fa-envelope text-brand-warm mr-2"/> hello@radiantrepublic.church</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Next Steps</h4>
              <ul class="mt-3 space-y-2 text-gray-700 text-sm">
                <li><a href="/about" class="hover:text-gray-900">About</a></li>
                <li><a href="/gatherings" class="hover:text-gray-900">Gatherings</a></li>
                <li><a href="/ministries" class="hover:text-gray-900">Ministries</a></li>
                <li><a href="/citizenship" class="hover:text-gray-900">Become a Citizen</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

export default app
