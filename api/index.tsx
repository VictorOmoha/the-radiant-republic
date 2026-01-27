import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { jsxRenderer } from 'hono/jsx-renderer'

export const config = {
  runtime: 'edge'
}

const app = new Hono()

// Renderer middleware
app.use(jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>The Radiant Republic</title>
        <meta name="description" content="The Radiant Republic — a church family shining the light of Jesus with hope, warmth, and movement." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: `
          tailwind = {
            theme: {
              extend: {
                colors: {
                  brand: {
                    dark: '#1E1E1E',
                    light: '#FAFAFA',
                    warm: '#BA9871',
                    cool: '#415A93'
                  }
                },
                borderRadius: {
                  card: '12px',
                  button: '8px'
                }
              }
            }
          }
        ` }} />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.5.2/css/all.min.css" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{ __html: `
          .btn { display: inline-flex; align-items: center; justify-content: center; padding: 0.625rem 1.25rem; border-radius: 8px; font-weight: 600; font-size: 0.875rem; transition: all 0.15s; }
          .btn-primary { background: #BA9871; color: #1E1E1E; }
          .btn-primary:hover { background: #a8855f; }
          .btn-outline { border: 1px solid rgba(30,30,30,0.2); color: #1E1E1E; }
          .btn-outline:hover { background: rgba(30,30,30,0.05); }
        ` }} />
      </head>
      <body class="font-[Inter] text-gray-900 antialiased bg-[#faf7f2]">{children}</body>
    </html>
  )
}))

// Home page
app.get('/', (c) => {
  return c.render(
    <>
      <header id="header" class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logomark" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-28 md:pt-32 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <div class="relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[420px]">
            <img src="https://page.gensparksite.com/v1/base64_upload/0ee20b3eb9b72cd26ab1dcd20bd2b1b7" alt="Hero" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-black/10"></div>
            <div class="absolute bottom-6 left-6 right-6 text-white">
              <div class="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] tracking-tight">
                <div>THE</div>
                <div>RADIANT</div>
                <div>REPUBLIC</div>
              </div>
            </div>
          </div>
          <div class="bg-white rounded-xl p-8 md:p-10 flex flex-col justify-center border border-brand-dark/10">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]">Welcome. We're really glad you're here.</h1>
            <p class="mt-4 text-gray-600 leading-relaxed">If you've been longing for more depth in your walk with God—more clarity, more maturity, more alignment—you're not alone. And you didn't arrive here by accident.</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a href="/citizenship" class="btn btn-primary">Become a Citizen</a>
              <a href="/about" class="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div class="grid md:grid-cols-2 gap-6 md:gap-8">
            <div class="bg-white rounded-xl p-6 md:p-8 border border-brand-dark/10">
              <h3 class="text-3xl font-extrabold text-gray-900">Who We Are</h3>
              <p class="mt-4 text-gray-700">At The Radiant Republic, we walk with you as you grow into the radiant reflection of Christ. Not rushed. Not pressured. But intentional, accountable, and rooted in truth.</p>
              <p class="mt-3 text-gray-700">This is not church as usual. This is a journey for believers who are hungry to be formed—in character, in purity, and in purpose.</p>
            </div>
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

      <footer class="bg-white border-t border-black/10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="grid md:grid-cols-3 gap-8 text-gray-900">
            <div>
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logomark" class="h-20 md:h-24 w-auto"/>
              <p class="mt-3 text-gray-700 text-sm max-w-sm">A people being formed into the radiant reflection of Christ.</p>
              <p class="mt-3 text-gray-600 text-sm">We can't wait to walk this journey with you.</p>
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
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
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

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Gatherings page
app.get('/gatherings', (c) => {
  return c.render(
    <>
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Radiant Gatherings</h1>
            <p class="mt-4 text-gray-700 text-lg">When we gather, we gather with intention.</p>
            <p class="mt-3 text-gray-600">Radiant Gatherings are spaces where prayer is reverent, teaching is clear, and formation is prioritized over performance.</p>
            <div class="mt-6 grid md:grid-cols-2 gap-6">
              <div class="rounded-lg border border-black/10 overflow-hidden">
                <div class="bg-amber-500 text-gray-900 font-black text-3xl px-6 py-4">9:00 AM</div>
              </div>
              <div class="rounded-lg border border-black/10 overflow-hidden">
                <div class="bg-amber-500 text-gray-900 font-black text-3xl px-6 py-4">11:00 AM</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Ministries page
app.get('/ministries', (c) => {
  return c.render(
    <>
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Ministries</h1>
            <p class="mt-3 text-gray-700 text-lg">There is a place for you here.</p>
            <p class="mt-3 text-gray-600">We believe every believer carries grace, gifting, and responsibility within the body of Christ.</p>
            <p class="mt-3 text-gray-600">This is not about filling roles. It's about stewarding grace and expressing purpose.</p>
          </div>
        </div>
      </section>

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Citizenship page
app.get('/citizenship', (c) => {
  return c.render(
    <>
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Become a Citizen</h1>
            <p class="mt-4 text-gray-700 text-lg">Citizenship here is spiritual and intentional.</p>
            <p class="mt-3 text-gray-600">To be a Citizen of The Radiant Republic is to choose growth, maturity, accountability, and alignment with what God is doing in this season.</p>
            <div class="mt-8 grid md:grid-cols-2 gap-6">
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-warm text-gray-900 flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <div class="font-semibold">Formation & Maturity</div>
                  <p class="text-gray-600 text-sm">Helping believers grow into depth and responsibility.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-warm text-gray-900 flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <div class="font-semibold">Citizenship & Identity</div>
                  <p class="text-gray-600 text-sm">What it means to belong to a glorious people.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-warm text-gray-900 flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <div class="font-semibold">Prayer & Alignment</div>
                  <p class="text-gray-600 text-sm">Prayer as posture, not performance.</p>
                </div>
              </div>
              <div class="flex gap-3">
                <div class="w-8 h-8 rounded-full bg-brand-warm text-gray-900 flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <div class="font-semibold">Community & Accountability</div>
                  <p class="text-gray-600 text-sm">Growing together with sincerity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Events page
app.get('/events', (c) => {
  return c.render(
    <>
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Events</h1>
            <p class="mt-3 text-gray-700 text-lg">Upcoming gatherings and community moments.</p>
          </div>
        </div>
      </section>

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

// Give page
app.get('/give', (c) => {
  return c.render(
    <>
      <header class="sticky-nav fixed top-0 inset-x-0 z-50 bg-white border-b border-brand-dark/10 text-gray-900">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-24 items-center justify-between">
            <a href="/" class="flex items-center gap-2 font-bold tracking-wide">
              <img src="https://page.gensparksite.com/v1/base64_upload/a152be7d733f66fab925f760fdfb893a" alt="Radiant logo" class="h-20 md:h-24 w-auto"/>
            </a>
            <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
              <a class="hover:text-brand-warm" href="/">Home</a>
              <a class="hover:text-brand-warm" href="/about">About</a>
              <a class="hover:text-brand-warm" href="/gatherings">Gatherings</a>
              <a class="hover:text-brand-warm" href="/ministries">Ministries</a>
              <a class="hover:text-brand-warm" href="/events">Events</a>
              <a class="hover:text-brand-warm" href="/give">Give</a>
            </nav>
          </div>
        </div>
      </header>

      <section class="pt-32 md:pt-36 lg:pt-40 bg-[#faf7f2]">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="bg-white rounded-xl p-8 md:p-10 border border-brand-dark/10">
            <h1 class="text-5xl md:text-6xl font-extrabold text-gray-900">Give</h1>
            <p class="mt-3 text-gray-700 text-lg">Support the mission of The Radiant Republic.</p>
          </div>
        </div>
      </section>

      <footer class="bg-white border-t border-black/10 mt-14">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <div class="text-center text-xs text-gray-500">© {new Date().getFullYear()} The Radiant Republic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
})

export default handle(app)
