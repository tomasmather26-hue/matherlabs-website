export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[var(--font-geist-sans)]">
      {/* Header */}
      <header className="border-b border-gray-100 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <span className="text-xl font-semibold tracking-tight text-gray-900">
              Mather Labs
            </span>
            <span className="ml-1 text-xs text-gray-400 font-normal align-top mt-1 inline-block">Ltd</span>
          </div>
          <nav>
            <a
              href="#contact"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Building software that works.
            </h1>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Mather Labs Ltd is a UK technology company developing software products and services.
              We focus on building practical, well-crafted tools for real problems.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">About</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Company
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Mather Labs Ltd is registered in England and Wales. We build and operate software
                  products serving customers across the UK.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Focus
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our work spans web applications, automation tooling, and software infrastructure.
                  We ship products that are reliable, fast, and easy to use.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Team
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded and led by Tommy Mather. We operate with a lean team and move quickly to
                  deliver value for our users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Get in touch
                </h3>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <span className="font-medium">Phone:</span>{" "}
                    <a
                      href="tel:+447756810397"
                      className="text-gray-900 hover:underline"
                    >
                      07756 810397
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Web:</span>{" "}
                    <a
                      href="https://matherlabs.co.uk"
                      className="text-gray-900 hover:underline"
                    >
                      matherlabs.co.uk
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Registered Address
                </h3>
                <address className="text-gray-700 not-italic leading-relaxed">
                  71-75 Shelton Street<br />
                  Covent Garden<br />
                  London<br />
                  WC2H 9JQ<br />
                  United Kingdom
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-500">
            <div className="space-y-1">
              <p className="font-medium text-gray-700">Mather Labs Ltd</p>
              <p>71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
              <p>Registered in England and Wales</p>
              <p>Director: Thomas Mather</p>
            </div>
            <div className="space-y-1 md:text-right">
              <p>
                <a href="tel:+447756810397" className="hover:text-gray-700 transition-colors">
                  07756 810397
                </a>
              </p>
              <p>
                <a href="https://matherlabs.co.uk" className="hover:text-gray-700 transition-colors">
                  matherlabs.co.uk
                </a>
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Mather Labs Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
