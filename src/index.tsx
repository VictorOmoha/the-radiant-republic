import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Reusable Header Component (no social icons in header)
const Header = ({ currentPage = '' }: { currentPage?: string }) => (
  <header id="header" class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-24 items-center justify-between">
        <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
          <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logomark" class="h-20 md:h-24 w-auto"/>
        </a>
        <nav id="nav" class="hidden md:flex items-center gap-8 text-sm font-medium">
          <a class={`hover:text-amber-600 ${currentPage === 'home' ? 'text-amber-600' : ''}`} href="/">Home</a>
          <a class={`hover:text-amber-600 ${currentPage === 'about' ? 'text-amber-600' : ''}`} href="/about">About</a>
          <a class={`hover:text-amber-600 ${currentPage === 'gatherings' ? 'text-amber-600' : ''}`} href="/gatherings">Gatherings</a>
          <a class={`hover:text-amber-600 ${currentPage === 'ministries' ? 'text-amber-600' : ''}`} href="/ministries">Ministries</a>
          <a class={`hover:text-amber-600 ${currentPage === 'events' ? 'text-amber-600' : ''}`} href="/events">Events</a>
          <a class={`hover:text-amber-600 ${currentPage === 'give' ? 'text-amber-600' : ''}`} href="/give">Give</a>
        </nav>
        <button id="mobileTrigger" class="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg bg-black/5 hover:bg-black/10" aria-label="Open menu">
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </div>
    {/* Mobile menu */}
    <div id="mobileMenu" class="md:hidden bg-white/95 border-t border-black/10">
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

// Reusable Footer Component with social icons and updated content
const Footer = () => (
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
            <a class="hover:text-brand-warm" aria-label="YouTube" href="https://www.youtube.com/@TheRadiant_Republic" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" /></a>
          </div>
          <p class="mt-2 text-gray-500 text-xs">@TheRadiantRepublic</p>
        </div>
        <div>
          <h4 class="font-semibold">Contact</h4>
          <ul class="mt-3 space-y-2 text-gray-700 text-sm">
            <li><i class="fa fa-clock text-brand-warm mr-2"/> Sundays 6:00 PM WAT / 12:00 PM EST</li>
            <li>
              <a href="#" onclick="document.getElementById('emailModal').classList.remove('hidden'); return false;" class="hover:text-brand-warm cursor-pointer">
                <i class="fa fa-envelope text-brand-warm mr-2"/>Hello@radiantrepublic.org
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-semibold">Explore</h4>
          <ul class="mt-3 space-y-2 text-gray-700 text-sm">
            <li><a href="https://www.youtube.com/@TheRadiant_Republic" target="_blank" class="hover:text-gray-900">Watch a Sermon</a></li>
            <li><a href="/gatherings" class="hover:text-gray-900">Plan a Visit</a></li>
            <li><a href="/citizenship" class="hover:text-gray-900">Become a Citizen</a></li>
            <li><a href="/events" class="hover:text-gray-900">Join a Discipleship Class</a></li>
          </ul>
        </div>
      </div>
      <div class="mt-10 border-t border-black/10 pt-6 text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
    </div>
    {/* Email Modal */}
    <div id="emailModal" class="hidden fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div class="bg-white rounded-xl p-6 md:p-8 max-w-lg w-full relative">
        <button onclick="document.getElementById('emailModal').classList.add('hidden')" class="absolute top-4 right-4 text-gray-500 hover:text-gray-900">
          <i class="fa fa-times text-xl"></i>
        </button>
        <h3 class="text-2xl font-extrabold text-gray-900">Send us a message</h3>
        <form class="mt-4 space-y-4" action="mailto:Hello@radiantrepublic.org" method="post" enctype="text/plain">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
            <input type="text" name="name" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-warm focus:border-transparent" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
            <input type="email" name="email" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-warm focus:border-transparent" required />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea name="message" rows={4} class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-warm focus:border-transparent" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary w-full">Send Message</button>
        </form>
      </div>
    </div>
  </footer>
)

// Homepage
app.get('/', (c) => {
  return c.render(
    <>
      <Header currentPage="home" />

      {/* Hero Section with Image Carousel */}
      <section id="home" class="pt-28 md:pt-32 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            {/* Left: image carousel with title overlay */}
            <div class="relative rounded-xl overflow-hidden min-h-[320px] md:min-h-[460px]">
              {/* Slide 1 */}
              <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100">
                <img src="/static/heroImage.png" alt="Radiant worship" class="w-full h-full object-cover"/>
              </div>
              {/* Slide 2 */}
              <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0">
                <img src="/static/carousel-worship.png" alt="Worship moment" class="w-full h-full object-cover"/>
              </div>
              {/* Slide 3 */}
              <div class="carousel-slide absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0">
                <img src="/static/Corousel-worship2.png" alt="Praise and worship" class="w-full h-full object-cover"/>
              </div>
              <div class="absolute inset-0 bg-black/25"></div>
              <div class="absolute bottom-8 left-6 right-6 pb-2 flex items-end justify-between">
                <div class="text-white font-black leading-[1] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                  <div>THE</div>
                  <div>RADIANT</div>
                  <div>REPUBLIC</div>
                </div>
                <div class="flex gap-2 mb-1">
                  <button class="carousel-dot w-2.5 h-2.5 rounded-full bg-white/80 transition-colors" aria-label="Slide 1"></button>
                  <button class="carousel-dot w-2.5 h-2.5 rounded-full bg-white/40 transition-colors" aria-label="Slide 2"></button>
                  <button class="carousel-dot w-2.5 h-2.5 rounded-full bg-white/40 transition-colors" aria-label="Slide 3"></button>
                </div>
              </div>
            </div>
            {/* Right: headline and CTA */}
            <div class="bg-white rounded-xl p-8 md:p-10 flex flex-col justify-center border border-brand-dark/10">
              <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[1.1]">Raising a Glorious People, The Radiant Reflection of Christ</h1>
              <p class="mt-3 text-gray-600 text-sm italic">An auxiliary ministry to the Body of Christ, forming believers into maturity, purity, and responsibility.</p>
              <div class="mt-6 border-t border-gray-200 pt-6">
                <p class="text-lg font-semibold text-gray-900">Welcome! We're really glad you're here.</p>
                <p class="mt-2 text-gray-600 leading-relaxed">If you've been longing for more depth in your walk with God, more clarity, more maturity, more alignment, you're not alone. And you didn't arrive here by accident.</p>
              </div>
              <div class="mt-6 flex flex-wrap gap-3">
                <a href="/citizenship" class="btn btn-primary">Become a Citizen</a>
                <a href="/gatherings" class="btn btn-outline">Explore Gatherings</a>
              </div>
              <p class="mt-4 text-xs text-gray-500 italic">"And to present her to himself as a radiant church, without stain or wrinkle or any other blemish, but holy and blameless." — Ephesians 5:27 (NIV)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content grid */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Service Times */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-2xl font-extrabold text-gray-900">Service Times</h2>
              <div class="mt-6 grid grid-cols-2 gap-4 items-stretch">
                <div class="rounded-lg bg-amber-500 text-white p-5 flex flex-col justify-between">
                  <div class="text-sm font-semibold opacity-90">Sundays</div>
                  <div class="text-3xl md:text-4xl font-black">6:00<span class="text-lg align-top ml-1">PM</span></div>
                  <div class="text-xs mt-1 opacity-80">WAT / 12:00 PM EST</div>
                </div>
                <div class="rounded-lg bg-white border border-black/10 p-5">
                  <div class="text-gray-900 font-semibold text-sm">Schedule</div>
                  <div class="mt-2 space-y-2 text-sm text-gray-700">
                    <div class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-amber-500 mt-1.5"></span>
                      <span><strong>1st Sunday:</strong> Physical Service</span>
                    </div>
                    <div class="flex items-start gap-2">
                      <span class="w-2 h-2 rounded-full bg-brand-cool mt-1.5"></span>
                      <span><strong>2nd-4th Sundays:</strong> Virtual Services</span>
                    </div>
                  </div>
                  <a href="/gatherings" class="mt-3 inline-block text-sm text-amber-600 hover:text-amber-700 font-medium">View Schedule →</a>
                </div>
              </div>
            </div>

            {/* Who We Are */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Who We Are</h3>
              <p class="mt-4 text-gray-700">At The Radiant Republic, we walk with you as you grow into the radiant reflection of Christ. Not rushed. Not pressured. But intentional, accountable, and rooted in truth.</p>
              <p class="mt-3 text-gray-700">This is not church as usual. This is a journey for believers who are hungry to be formed, in character, in purity, and in purpose.</p>
              <p class="mt-3 text-gray-700">We want to meet you. We want to grow with you. And we want to help you become all God is shaping in this season.</p>
            </div>

            {/* Worship & Community */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Worship & Community</h3>
              <p class="mt-4 text-gray-700">Our worship creates room for reverence, sensitivity, and response. Beyond music, we gather.</p>
              <p class="mt-3 text-gray-700">We believe community should feel safe again. Through honest relationships, in homes, industries, and spaces of influence. We grow together, share life, and carry God's agenda.</p>
            </div>

            {/* Gatherings & Events */}
            <div class="grid gap-6">
              <div class="rounded-xl p-6 bg-brand-warm text-gray-900 border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold">Gatherings & Events</h3>
                <p class="mt-2">We are illuminated from within whenever we gather as Radiant citizens of the Republic. Each gathering is an intentional space for growth, clarity, accountability, and shared purpose.</p>
                <div class="mt-4">
                  <a href="/gatherings" class="text-gray-900 font-semibold hover:underline">→ Explore Our Gatherings</a>
                </div>
              </div>
              <div class="rounded-xl p-6 bg-white border border-black/10">
                <p class="text-gray-700">We glow beyond ourselves through events where we host the wider Body of Christ to moments of prayer, teaching, and activation for all who are hungry for more.</p>
                <div class="mt-4">
                  <a href="/events" class="text-amber-600 font-semibold hover:underline">→ View Upcoming Events</a>
                </div>
              </div>
            </div>

            {/* We Want to Meet You */}
            <div class="rounded-xl p-6 md:p-8 bg-white border border-black/10">
              <h3 class="text-2xl font-extrabold text-gray-900">We Want to Meet You</h3>
              <p class="mt-2 text-gray-700">Whether you're stepping into the tangible power of our physical gatherings or connecting to the timeless presence of God through our virtual services, you belong here.</p>
              <p class="mt-3 text-gray-700">We want to meet you.</p>
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

      <Footer />
    </>
  )
})

// About page
app.get('/about', (c) => {
  return c.render(
    <>
      <Header currentPage="about" />

      {/* Hero split */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="relative rounded-xl overflow-hidden min-h-[340px] md:min-h-[520px]">
            <img src="/static/heroImage.png" alt="Worship" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/25"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div class="text-white font-black leading-[0.95] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                <div>ABOUT</div>
                <div>US</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">We're building a people, and we're building with you in mind.</h1>
            <p class="mt-4 text-gray-700">The Radiant Republic exists because we believe God is preparing a glorious Church, a people being formed into the radiant reflection of Christ (Ephesians 5:27).</p>
            <p class="mt-3 text-gray-700">This journey is about maturity. About purity that makes power available. About believers who take responsibility for their walk with God and their place in the body.</p>
          </div>
        </div>
      </section>

      {/* Our Purpose */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-3xl font-extrabold text-gray-900">Our Purpose</h2>
              <p class="mt-4 text-gray-700">We don't replace your local church. We walk with you, sharpen you, and help you return to your world clearer, stronger, and more aligned with Christ.</p>
              <p class="mt-3 text-gray-700">If you're tired of surface-level faith and ready for intentional growth, we would love to walk this journey with you.</p>
            </div>
            <div class="bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900">
              <h2 class="text-3xl font-extrabold">Our Values</h2>
              <div class="mt-4 flex flex-wrap gap-3">
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Integrity</span>
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Purity</span>
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Accountability</span>
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Discipleship</span>
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Community</span>
                <span class="px-4 py-2 bg-white/80 rounded-full text-sm font-medium">Spiritual Maturity</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Faculty</h2>
          <div class="grid md:grid-cols-2 gap-8 items-start">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex gap-6 items-start">
                <img class="w-32 h-40 rounded-lg object-cover" src="/static/pastor-wilson.jpg" alt="Pastor Wilson Diamond"/>
                <div>
                  <h3 class="text-2xl font-extrabold text-gray-900">Pastor Wilson Diamond</h3>
                  <div class="text-amber-600 font-medium">Lead Steward</div>
                  <p class="text-gray-700 mt-3 text-sm">Pastor Wilson Diamond carries a clear mandate to raise a glorious people; mature, radiant, and valuable to society. His leadership is marked by integrity, depth in the Word, and a passion for believers to walk in purity, power, and purpose as living reflections of Christ.</p>
                </div>
              </div>
            </div>
            <div class="grid gap-6">
              <div class="rounded-xl p-6 bg-white border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold text-gray-900">The Faculty</h3>
                <p class="text-gray-700 mt-2">The Faculty serves at the School of Discipleship to help believers build spiritual capacity through intentional teaching and discipleship. We are out to strengthen their foundations, awakening hunger for more of God, and equipping them to steward and fully enjoy their new life in Christ.</p>
                <div class="mt-4"><a href="/events" class="btn btn-outline">Join a Class</a></div>
              </div>
              <div class="rounded-xl p-6 bg-brand-warm text-gray-900 border border-brand-dark/10">
                <h3 class="text-2xl font-extrabold">Become a Citizen</h3>
                <p class="mt-2">Ready to walk deliberately with others who are serious about becoming a glorious people unto God?</p>
                <div class="mt-4"><a href="https://bit.ly/RadiantRepublicCitizenshipForm" target="_blank" rel="noopener noreferrer" class="btn btn-primary bg-gray-900 text-white hover:bg-black">Become a Citizen</a></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

// Ministries page
app.get('/ministries', (c) => {
  return c.render(
    <>
      <Header currentPage="ministries" />

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[420px]">
            <img src="https://images.pexels.com/photos/6860380/pexels-photo-6860380.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Ministries hero" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/20"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-4xl sm:text-5xl md:text-6xl font-black leading-[0.95]">MINISTRIES</div>
              <div class="mt-2 text-lg font-semibold tracking-wide">THE RADIANT REPUBLIC</div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">There is a place for you here.</h1>
            <p class="mt-4 text-gray-700">We believe every believer carries grace, gifting, and responsibility within the body of Christ.</p>
            <p class="mt-3 text-gray-600">If you carry a burden for prayer, discipleship, service, or building others, then come serve Jesus with us!</p>
            <p class="mt-3 text-gray-600">At the Republic, it goes beyond filling roles. It's about sharing bonds, stewarding grace and expressing purpose.</p>
          </div>
        </div>
      </section>

      {/* Ministries Grid */}
      <section id="list" class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Prayer Ministry */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-amber-500 flex items-center justify-center">
                  <i class="fa-solid fa-hands-praying text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold text-gray-900">Prayer Ministry</h3>
              </div>
              <p class="text-gray-700">Raising believers who understand the power of intercession, alignment, and spiritual responsibility.</p>
            </div>

            {/* Teaching & Discipleship */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-brand-cool flex items-center justify-center">
                  <i class="fa-solid fa-book-open text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold text-gray-900">Teaching & Discipleship</h3>
              </div>
              <p class="text-gray-700">Grounding believers in truth, purity, and sound doctrine that produces transformation.</p>
              <p class="mt-2 text-gray-600 text-sm">We help believers build spiritual capacity through intentional teaching and discipleship. We are out to strengthen their foundations, awakening hunger for more of God, and equipping them to steward and fully enjoy their new life in Christ.</p>
            </div>

            {/* Community & Accountability */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center">
                  <i class="fa-solid fa-users text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold text-gray-900">Community & Accountability</h3>
              </div>
              <p class="text-gray-700">Creating safe and structured environments for confession, growth, and mutual sharpening.</p>
            </div>

            {/* Sound, Space & Structure */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <i class="fa-solid fa-sliders text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold text-gray-900">Sound, Space & Structure</h3>
              </div>
              <p class="text-gray-700">Stewarding the atmosphere so ministry moves without distraction. Here, we care about excellence behind the scenes; sound, visuals, facility setup, and flow.</p>
            </div>

            {/* Rays of Radiance */}
            <div class="bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900 border border-brand-dark/10">
              <div class="flex items-center gap-4 mb-4">
                <div class="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
                  <i class="fa-solid fa-sun text-white text-xl"></i>
                </div>
                <h3 class="text-2xl font-extrabold">Rays of Radiance</h3>
              </div>
              <p>Taking the message beyond gatherings by reflecting the radiance of Jesus into communities, conversations, and everyday life. Here, our hearts beat for souls and culture-shaping impact.</p>
            </div>

            {/* Join a Team CTA */}
            <div id="join" class="bg-gray-900 rounded-xl p-6 md:p-8 text-white">
              <h3 class="text-2xl font-extrabold">Join a Team</h3>
              <p class="mt-3 text-gray-300">If you carry a burden for prayer, discipleship, service, or building others, we want to walk with you.</p>
              <div class="mt-4 flex flex-wrap gap-3">
                <a href="https://bit.ly/RadiantRepublicCitizenshipForm" target="_blank" rel="noopener noreferrer" class="btn btn-outline border-white text-white hover:bg-white/10">Join a Team</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

// Gatherings page
app.get('/gatherings', (c) => {
  return c.render(
    <>
      <Header currentPage="gatherings" />

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">Radiant Gatherings</h1>
            <p class="mt-4 text-gray-700 text-lg leading-relaxed">Our gatherings are moments of alignment, teaching, prayer, and spiritual formation. They are designed to help believers hear God clearly, grow in maturity, and walk in obedience.</p>
            <div class="mt-6">
              <h3 class="font-semibold text-gray-900">What to Expect:</h3>
              <ul class="mt-2 space-y-1 text-gray-700">
                <li>• Christ-centered teaching</li>
                <li>• Prayer and spiritual alignment</li>
                <li>• A culture of accountability and growth</li>
                <li>• An atmosphere of reverence and hunger</li>
              </ul>
            </div>
            <p class="mt-4 text-gray-600">Whether you're joining physically or virtually, we want to meet you.</p>
            <div class="mt-6">
              <a href="#plan" class="btn btn-primary">Plan to Attend a Radiant Gathering</a>
            </div>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
            <img src="https://images.pexels.com/photos/6860380/pexels-photo-6860380.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Gatherings" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-8 items-start">
            {/* Physical Service */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                  <i class="fa-solid fa-church text-white"></i>
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">Physical Service</h2>
              </div>
              <div class="rounded-lg bg-amber-500 text-gray-900 font-black text-2xl md:text-3xl px-6 py-4 mb-4">
                1st Sunday • 6:00 PM WAT
              </div>
              <p class="text-gray-700">There's a grace that flows in the room. Through shared worship, clear teaching, and real community. We gather physically to encounter God together, sharpen one another, and grow in depth and accountability.</p>
              <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600"><strong>Venue:</strong> To be announced for next service</p>
                <p class="text-sm text-gray-600 mt-1">Check back for the flier of our next physical gathering.</p>
              </div>
            </div>

            {/* Virtual Service */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <div class="flex items-center gap-3 mb-4">
                <div class="w-10 h-10 rounded-full bg-brand-cool flex items-center justify-center">
                  <i class="fa-solid fa-video text-white"></i>
                </div>
                <h2 class="text-2xl md:text-3xl font-extrabold text-gray-900">Virtual Services</h2>
              </div>
              <div class="rounded-lg bg-brand-cool text-white font-black text-2xl md:text-3xl px-6 py-4 mb-4">
                2nd-4th Sundays • 6:00 PM WAT
              </div>
              <p class="text-gray-700">Wherever you are, you can stay connected. Virtual services allow you to remain aligned, taught, and spiritually fed, bridging distance while keeping you rooted in what God is doing in the Republic.</p>
              <div class="mt-4 p-4 bg-gray-50 rounded-lg">
                <p class="text-sm text-gray-600"><strong>YouTube:</strong> <a href="https://www.youtube.com/@TheRadiant_Republic" target="_blank" class="text-amber-600 hover:underline">@TheRadiant_Republic</a></p>
              </div>
            </div>
          </div>

          {/* Community Section */}
          <div class="mt-10 bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900">
            <h3 class="text-2xl font-extrabold">A Radiant Hub is Coming to You!</h3>
            <p class="mt-3">We're expanding our community presence. Stay tuned for updates on local hubs and cell gatherings in your area.</p>
          </div>

          {/* Plan to Visit */}
          <div id="plan" class="mt-10 grid md:grid-cols-2 gap-6">
            <div class="bg-white rounded-xl p-6 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">We Want to Meet You</h3>
              <p class="mt-2 text-gray-700">Whether you're joining physically or virtually, we want to meet you.</p>
              <div class="mt-4"><a href="/citizenship" class="btn btn-outline">Become a Citizen</a></div>
            </div>
            <div class="rounded-xl overflow-hidden">
              <img class="w-full h-56 object-cover" src="https://images.pexels.com/photos/14664088/pexels-photo-14664088.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Community"/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

// Give page
app.get('/give', (c) => {
  return c.render(
    <>
      <Header currentPage="give" />

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
            <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
              <div class="text-5xl md:text-7xl font-black tracking-tight text-gray-900">GIVE</div>
              <h1 class="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900">Led to Give?</h1>
              <p class="mt-2 text-gray-600">If there is a prompting in your heart to sow into the work at the Republic, kindly use the details below.</p>
            </div>
            <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
              <img src="https://images.pexels.com/photos/6860380/pexels-photo-6860380.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Give" class="absolute inset-0 w-full h-full object-cover" />
              <div class="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">

          {/* Payment method tabs */}
          <div class="flex justify-center gap-4 mb-10">
            <button class="give-tab active px-6 py-3 rounded-full font-bold text-sm transition-all bg-[#0070ba] text-white shadow-md" data-tab="paypal">
              <i class="fa-brands fa-paypal mr-2"></i>PayPal
            </button>
            <button class="give-tab px-6 py-3 rounded-full font-bold text-sm transition-all bg-white text-gray-700 border border-brand-dark/10 hover:bg-gray-50" data-tab="zelle">
              <i class="fa-solid fa-building-columns mr-2"></i>Zelle
            </button>
            <button class="give-tab px-6 py-3 rounded-full font-bold text-sm transition-all bg-white text-gray-700 border border-brand-dark/10 hover:bg-gray-50" data-tab="cash">
              <i class="fa-solid fa-hand-holding-dollar mr-2"></i>Cash
            </button>
          </div>

          {/* PayPal Tab */}
          <div class="give-panel active" data-panel="paypal">
            <div class="bg-white rounded-2xl border border-brand-dark/10 overflow-hidden max-w-2xl mx-auto">
              <div class="bg-[#0070ba] px-6 py-4 flex items-center gap-3">
                <i class="fa-brands fa-paypal text-white text-3xl"></i>
                <div>
                  <h3 class="text-xl font-extrabold text-white">Give via PayPal</h3>
                  <p class="text-white/80 text-sm">Scan the QR code below with your phone</p>
                </div>
              </div>
              <div class="p-8 flex flex-col items-center">
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                  <img src="/static/paypal-qr.png" alt="PayPal QR Code for The Radiant Republic" class="w-64 h-64 object-contain" />
                </div>
                <p class="text-gray-600 text-center text-sm max-w-md">Open your PayPal app, tap <strong>Scan</strong>, and point your camera at the QR code to send your gift securely.</p>
              </div>
            </div>
          </div>

          {/* Zelle Tab */}
          <div class="give-panel hidden" data-panel="zelle">
            <div class="bg-white rounded-2xl border border-brand-dark/10 overflow-hidden max-w-2xl mx-auto">
              <div class="bg-[#6d1ed4] px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-building-columns text-white text-3xl"></i>
                <div>
                  <h3 class="text-xl font-extrabold text-white">Give via Zelle</h3>
                  <p class="text-white/80 text-sm">Send directly from your banking app</p>
                </div>
              </div>
              <div class="p-8 flex flex-col items-center">
                <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
                  <img src="/static/zelle-qr.jpg" alt="Zelle QR Code for The Radiant Republic" class="w-64 h-64 object-contain" />
                </div>
                <p class="text-gray-600 text-center text-sm max-w-md">Open your banking app, select <strong>Send with Zelle</strong>, and scan the QR code above to send your gift.</p>
              </div>
            </div>
          </div>

          {/* Cash Tab */}
          <div class="give-panel hidden" data-panel="cash">
            <div class="bg-white rounded-2xl border border-brand-dark/10 overflow-hidden max-w-2xl mx-auto">
              <div class="bg-green-600 px-6 py-4 flex items-center gap-3">
                <i class="fa-solid fa-hand-holding-dollar text-white text-3xl"></i>
                <div>
                  <h3 class="text-xl font-extrabold text-white">Give in Person</h3>
                  <p class="text-white/80 text-sm">During any of our gatherings</p>
                </div>
              </div>
              <div class="p-8 flex flex-col items-center">
                <div class="bg-green-50 rounded-xl p-6 w-full max-w-sm text-center mb-6">
                  <i class="fa-solid fa-church text-green-600 text-4xl mb-3"></i>
                  <p class="text-lg font-bold text-gray-900">At Our Gatherings</p>
                  <p class="text-sm text-gray-600 mt-1">Sundays &amp; Wednesdays</p>
                </div>
                <p class="text-gray-600 text-center text-sm max-w-md">You can give your cash or check offering during any of our physical gatherings. Speak to an usher if you need assistance.</p>
              </div>
            </div>
          </div>

          {/* Thank You Note */}
          <div class="mt-10 bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900">
            <h3 class="text-2xl font-extrabold">Thank You</h3>
            <p class="mt-2">Thank you for yielding to God. He treasures a heart that responds to His leading.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

// Events page
app.get('/events', (c) => {
  return c.render(
    <>
      <Header currentPage="events" />

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">Events</h1>
            <p class="mt-2 text-xl text-gray-700">If you are a believer, there's a seat for you here.</p>
            <p class="mt-4 text-gray-600">At these events, we glow beyond the citizenship at the Republic, boundaries of your church, or the difference in our denominations. The divisions are blurred into the unity of one body.</p>
            <p class="mt-3 text-gray-600">Whether you are a citizen or not, we come together in one accord, aligning our hearts, praying, and taking our place in what the Head of the Body is doing in this season.</p>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
            <img src="https://images.pexels.com/photos/6860380/pexels-photo-6860380.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Events" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Events Overview */}
      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10 mb-8">
            <h2 class="text-2xl font-extrabold text-gray-900">Overview</h2>
            <p class="mt-3 text-gray-700">Our events are designed as spiritual moments, not performances. Each event carries an assignment to align believers with God's purposes for the season.</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Discipleship Classes */}
            <div class="bg-amber-500 rounded-xl p-6 text-gray-900">
              <h3 class="text-xl font-extrabold">Discipleship Classes</h3>
              <p class="mt-2 text-sm">Intentional teaching and formation for believers hungry for depth and spiritual growth.</p>
              <div class="mt-4">
                <a href="#" class="inline-block px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-black">Learn More</a>
              </div>
            </div>

            {/* Sozo */}
            <div class="bg-brand-cool rounded-xl p-6 text-white">
              <h3 class="text-xl font-extrabold">Sozo</h3>
              <p class="mt-2 text-sm">Inner healing and deliverance ministry for wholeness and freedom in Christ.</p>
              <div class="mt-4">
                <a href="#" class="inline-block px-4 py-2 bg-white text-brand-cool rounded-lg text-sm font-medium hover:bg-gray-100">Learn More</a>
              </div>
            </div>

            {/* Interdenominational Prayer */}
            <div class="bg-green-600 rounded-xl p-6 text-white">
              <h3 class="text-xl font-extrabold">Interdenominational Prayer</h3>
              <p class="mt-2 text-sm">United prayer gatherings across denominations for the body of Christ.</p>
              <div class="mt-4">
                <a href="#" class="inline-block px-4 py-2 bg-white text-green-600 rounded-lg text-sm font-medium hover:bg-gray-100">Learn More</a>
              </div>
            </div>

            {/* 40 Week Prayer */}
            <div class="bg-purple-600 rounded-xl p-6 text-white">
              <h3 class="text-xl font-extrabold">40 Week Prayer</h3>
              <p class="mt-2 text-sm">A sustained season of focused intercession and spiritual alignment.</p>
              <div class="mt-4">
                <a href="#" class="inline-block px-4 py-2 bg-white text-purple-600 rounded-lg text-sm font-medium hover:bg-gray-100">Learn More</a>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div class="mt-10 bg-brand-warm rounded-xl p-6 md:p-8 text-gray-900 text-center">
            <h3 class="text-2xl font-extrabold">Join Us at an Event</h3>
            <p class="mt-2">Let's come together in one accord, aligning our hearts with what God is doing.</p>
            <div class="mt-4">
              <a href="#" class="btn btn-primary bg-gray-900 text-white hover:bg-black">View Upcoming Events</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

// Citizenship page
app.get('/citizenship', (c) => {
  return c.render(
    <>
      <Header currentPage="citizenship" />

      {/* Hero */}
      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900">Become a Citizen</h1>
            <p class="mt-4 text-gray-700 text-lg leading-relaxed">Citizenship here is spiritual and intentional.</p>
            <p class="mt-3 text-gray-600">To be a Citizen of The Radiant Republic is to choose growth, maturity, accountability, and alignment with what God is doing in this season.</p>
            <p class="mt-3 text-gray-600">A citizen is someone willing to be formed, in character, in purity, and in responsibility as part of the body of Christ.</p>
          </div>
          <div class="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[420px]">
            <img src="/static/heroImage.png" alt="Citizenship" class="absolute inset-0 w-full h-full object-cover" />
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
            {/* What Citizenship Means */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h2 class="text-3xl font-extrabold text-gray-900">What Does It Mean?</h2>
              <p class="mt-4 text-gray-700">This does not mean leaving your local church. It does not mean isolation or elitism.</p>
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

            {/* CTA */}
            <div class="bg-gray-900 rounded-xl p-6 md:p-8 text-white border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold">Ready to Begin?</h3>
              <p class="mt-3 text-gray-300">If you're tired of surface-level faith and ready for intentional growth, we would love to walk this journey with you.</p>
              <div class="mt-6">
                <a href="https://bit.ly/RadiantRepublicCitizenshipForm" target="_blank" rel="noopener noreferrer" class="btn btn-primary bg-brand-warm text-gray-900 hover:bg-amber-500">Become a Citizen of The Radiant Republic</a>
              </div>
            </div>

            {/* Stay Connected */}
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-2xl font-extrabold text-gray-900">Stay Connected</h3>
              <p class="mt-3 text-gray-700">We would love to stay connected with you.</p>
              <p class="mt-3 text-gray-600">Follow us on Instagram, TikTok, Facebook, and YouTube @TheRadiantRepublic, or send us an email.</p>
              <p class="mt-3 text-gray-700 font-medium">We can't wait to read from you.</p>
              <div class="mt-4 flex items-center gap-4 text-lg text-gray-700">
                <a class="hover:text-brand-warm" aria-label="Instagram" href="https://www.instagram.com/theradiantrepublic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram" /></a>
                <a class="hover:text-brand-warm" aria-label="TikTok" href="https://www.tiktok.com/@theradiantrepublic" target="_blank" rel="noopener noreferrer"><i class="fab fa-tiktok" /></a>
                <a class="hover:text-brand-warm" aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61576556033565" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook" /></a>
                <a class="hover:text-brand-warm" aria-label="YouTube" href="https://www.youtube.com/@TheRadiant_Republic" target="_blank" rel="noopener noreferrer"><i class="fab fa-youtube" /></a>
              </div>
              <div class="mt-4">
                <a href="#" onclick="document.getElementById('emailModal').classList.remove('hidden'); return false;" class="btn btn-outline">
                  <i class="fa fa-envelope mr-2"></i>Send us an Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
})

export default app
