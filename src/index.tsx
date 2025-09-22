import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* Header / Nav */}
      <header id="header" class="sticky-nav fixed top-0 inset-x-0 z-50 glass text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <a href="#" class="flex items-center gap-2 font-bold tracking-wide">
              <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-ink font-black">RR</span>
              <span class="uppercase text-sm opacity-95">The Radiant Republic</span>
            </a>
            <nav id="nav" class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-amber-300" href="#home">Home</a>
              <a class="hover:text-amber-300" href="#about">About</a>
              <a class="hover:text-amber-300" href="#gatherings">Gatherings</a>
              <a class="hover:text-amber-300" href="#ministries">Ministries</a>
              <a class="hover:text-amber-300" href="#events">Events</a>
              <a class="hover:text-amber-300" href="#give">Give</a>
              <div class="flex items-center gap-4 text-base">
                <a class="hover:text-amber-300" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-amber-300" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
              </div>
            </nav>
            <button id="mobileTrigger" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-white/10 hover:bg-white/20" aria-label="Open menu">
              <i class="fa fa-bars"></i>
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        <div id="mobileMenu" class="md:hidden bg-ink/90">
          <div class="mx-auto max-w-7xl px-4 py-4 space-y-2 text-sm">
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#home">Home</a>
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#about">About</a>
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#gatherings">Gatherings</a>
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#ministries">Ministries</a>
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#events">Events</a>
            <a class="block py-2 text-white/90 hover:text-amber-300" href="#give">Give</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" class="relative min-h-[90vh] flex items-center bg-ink">
        <div class="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1507878866276-a947ef722fee?q=80&w=1974&auto=format&fit=crop" alt="Worship gathering" class="w-full h-full object-cover"/>
          <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 text-white">
          <div class="max-w-2xl">
            <p class="text-amber-300 font-semibold tracking-widest uppercase">The Radiant Republic</p>
            <h1 class="text-5xl sm:text-6xl font-black leading-tight mt-3 text-glow">We Shine Light</h1>
            <p class="mt-5 text-white/90 text-lg">A community shaped by Jesus, carrying hope into our city with warmth, joy, and movement.</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <a href="#gatherings" class="inline-flex items-center gap-2 rounded-full bg-amber-400 text-ink font-semibold px-6 py-3 shadow-glow hover:brightness-105">Join Us</a>
              <a href="#about" class="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-white/90 hover:bg-white/10">Learn More</a>
            </div>
          </div>
        </div>
        {/* Layered / diagonal break */}
        <div class="absolute bottom-0 left-0 right-0 h-24 bg-white diag-mask"></div>
      </section>

      {/* New Here */}
      <section id="about" class="bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div class="grid md:grid-cols-2 gap-10 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl md:text-4xl font-extrabold text-ink">New here?</h2>
              <p class="text-gray-600">We’d love to meet you. Start with a visit, come say hello, and discover how to find your people and purpose at Radiant.</p>
              <div class="grid sm:grid-cols-3 gap-4">
                <div class="p-5 rounded-2xl border border-gray-200">
                  <div class="text-amber-500 text-xl mb-2"><i class="fa fa-location-dot"></i></div>
                  <h3 class="font-semibold">Visit</h3>
                  <p class="text-gray-600 text-sm">Join a Sunday gathering and stop by the Connect Bar.</p>
                </div>
                <div class="p-5 rounded-2xl border border-gray-200">
                  <div class="text-amber-500 text-xl mb-2"><i class="fa fa-user-plus"></i></div>
                  <h3 class="font-semibold">Join</h3>
                  <p class="text-gray-600 text-sm">Jump into Alpha, a Group, or a Serve Team.</p>
                </div>
                <div class="p-5 rounded-2xl border border-gray-200">
                  <div class="text-amber-500 text-xl mb-2"><i class="fa fa-handshake-angle"></i></div>
                  <h3 class="font-semibold">Connect</h3>
                  <p class="text-gray-600 text-sm">We’ll help you take your next best step here.</p>
                </div>
              </div>
              <div>
                <a href="#gatherings" class="inline-flex items-center gap-2 rounded-full bg-ink text-white font-semibold px-6 py-3 hover:bg-ink/90">Plan Your Visit</a>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-3">
              <div class="panel-slice rounded-xl h-40 md:h-56 col-span-2">
                <img src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1974&auto=format&fit=crop" alt="Community moment"/>
              </div>
              <div class="panel-slice rounded-xl h-40 md:h-56">
                <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1974&auto=format&fit=crop" alt="Worship"/>
              </div>
              <div class="panel-slice rounded-xl h-40 md:h-56">
                <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1974&auto=format&fit=crop" alt="Prayer"/>
              </div>
              <div class="panel-slice rounded-xl h-40 md:h-56 col-span-2">
                <img src="https://images.unsplash.com/photo-1512777576244-b846ac3d8164?q=80&w=1974&auto=format&fit=crop" alt="Serving"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gatherings / Service Times */}
      <section id="gatherings" class="relative bg-ink text-white">
        <div class="absolute top-0 left-0 right-0 h-20 bg-ink diag-mask-rev"></div>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid lg:grid-cols-3 gap-10 items-start">
            <div class="lg:col-span-2">
              <h2 class="text-3xl md:text-4xl font-extrabold">Gather with us</h2>
              <p class="mt-3 text-white/80">Sundays 9:00am + 11:00am • 123 Radiant Ave, City, ST</p>
              <div class="mt-6 rounded-2xl overflow-hidden">
                <iframe title="Map" class="w-full h-72" loading="lazy" referrerPolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086480640441!2d-122.41941518468145!3d37.77492977975957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085814c2d0d0e5f%3A0x7e7b7f1b9e0b9a0!2sCity%20Hall!5e0!3m2!1sen!2sus!4v1680000000000"></iframe>
              </div>
            </div>
            <div class="space-y-4">
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 class="font-semibold">Kids & Students</h3>
                <p class="text-white/70 text-sm mt-2">Safe, joyful spaces for every age during each gathering.</p>
              </div>
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 class="font-semibold">Accessibility</h3>
                <p class="text-white/70 text-sm mt-2">Wheelchair access, assisted listening, and friendly hosts.</p>
              </div>
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 class="font-semibold">Coffee & Community</h3>
                <p class="text-white/70 text-sm mt-2">Arrive early to meet someone new and grab a warm drink.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section id="events" class="bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div class="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Upcoming Events</h2>
              <p class="text-gray-600 mt-1">What’s happening at Radiant.</p>
            </div>
            <a href="#" class="text-ink/80 hover:text-ink font-semibold">See all events →</a>
          </div>
          <div class="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3].map((i)=> (
              <article class="rounded-2xl overflow-hidden border border-gray-200 bg-white" key={i}>
                <div class="h-44 panel-slice">
                  <img src={`https://picsum.photos/seed/radiant-${i}/800/500`} alt="Event"/>
                </div>
                <div class="p-5">
                  <div class="text-amber-600 text-sm font-semibold">Oct {10+i}, 7:00 PM</div>
                  <h3 class="mt-1 text-lg font-bold text-ink">Radiant Night {i}</h3>
                  <p class="mt-1 text-gray-600 text-sm">An evening of worship, stories, and prayer for our city.</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section id="messages" class="bg-ink text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 class="text-3xl md:text-4xl font-extrabold">Latest Message</h2>
              <p class="mt-2 text-white/80">Catch up on this week’s teaching and worship.</p>
              <div class="mt-6 rounded-2xl overflow-hidden aspect-video bg-black/40">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Latest Sermon" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div class="mt-6">
                <a href="#" class="inline-flex items-center gap-2 rounded-full bg-amber-400 text-ink font-semibold px-6 py-3 shadow-glow hover:brightness-105">Watch Message</a>
              </div>
            </div>
            <div class="space-y-4">
              {[1,2,3].map((i)=> (
                <a class="group flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10" href="#" key={i}>
                  <div class="w-24 h-16 overflow-hidden rounded-lg bg-black/30">
                    <img class="w-full h-full object-cover" src={`https://picsum.photos/seed/sermon-${i}/400/300`} alt="Sermon thumb"/>
                  </div>
                  <div>
                    <div class="text-sm text-white/60">Series Title</div>
                    <div class="font-semibold">Message Title {i}</div>
                  </div>
                  <i class="fa fa-play text-white/60 ml-auto group-hover:text-white"></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Give */}
      <section id="give" class="bg-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div class="rounded-3xl p-8 md:p-12 bg-gradient-to-br from-amber-100 via-white to-amber-50 border border-amber-200">
            <div class="grid md:grid-cols-3 gap-8 items-center">
              <div class="md:col-span-2">
                <h2 class="text-3xl md:text-4xl font-extrabold text-ink">Practice Radical Generosity</h2>
                <p class="mt-2 text-gray-700">Your giving fuels mission: serving our city, discipling the next generation, and sending hope.</p>
              </div>
              <div class="md:text-right">
                <a href="#" class="inline-flex items-center gap-2 rounded-full bg-ink text-white font-semibold px-6 py-3 hover:bg-ink/90">Give Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer class="bg-ink text-white">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="flex items-center gap-2 font-bold tracking-wide">
                <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-400 text-ink font-black">RR</span>
                <span class="uppercase text-sm opacity-95">The Radiant Republic</span>
              </div>
              <p class="mt-3 text-white/70 text-sm max-w-sm">A church family shining the light of Jesus across our city—warm, hopeful, and always moving toward people.</p>
              <div class="mt-4 flex items-center gap-4 text-lg">
                <a class="hover:text-amber-300" aria-label="Instagram" href="#"><i class="fab fa-instagram" /></a>
                <a class="hover:text-amber-300" aria-label="YouTube" href="#"><i class="fab fa-youtube" /></a>
                <a class="hover:text-amber-300" aria-label="Facebook" href="#"><i class="fab fa-facebook" /></a>
              </div>
            </div>
            <div>
              <h4 class="font-semibold">Contact</h4>
              <ul class="mt-3 space-y-2 text-white/80 text-sm">
                <li><i class="fa fa-location-dot text-amber-400 mr-2"/> 123 Radiant Ave, City, ST</li>
                <li><i class="fa fa-clock text-amber-400 mr-2"/> Sundays 9:00 + 11:00 AM</li>
                <li><i class="fa fa-envelope text-amber-400 mr-2"/> hello@radiantrepublic.church</li>
              </ul>
            </div>
            <div>
              <h4 class="font-semibold">Next Steps</h4>
              <ul class="mt-3 space-y-2 text-white/80 text-sm">
                <li><a href="#about" class="hover:text-white">Plan a Visit</a></li>
                <li><a href="#events" class="hover:text-white">Events</a></li>
                <li><a href="#messages" class="hover:text-white">Watch Messages</a></li>
                <li><a href="#give" class="hover:text-white">Give</a></li>
              </ul>
            </div>
          </div>
          <div class="mt-10 border-t border-white/10 pt-6 text-xs text-white/50">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

export default app
