import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: "#ffffff", color: "#171717" }}>
      {/* Dark header */}
      <header style={{ backgroundColor: "#000000" }} className="px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Mather Labs"
            width={220}
            height={55}
            style={{ objectFit: "contain", objectPosition: "left center" }}
            priority
          />
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight" style={{ color: "#111827" }}>
              Building software that works.
            </h1>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: "#4b5563" }}>
              Mather Labs Ltd is a UK technology company developing software products and services.
              We focus on building practical, well-crafted tools for real problems.
            </p>
          </div>
        </section>

        {/* About */}
        <section style={{ backgroundColor: "#f9fafb", borderTop: "1px solid #f3f4f6", borderBottom: "1px solid #f3f4f6" }}>
          <div className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold mb-8" style={{ color: "#111827" }}>About</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  Company
                </h3>
                <p className="leading-relaxed" style={{ color: "#374151" }}>
                  Mather Labs Ltd is registered in England and Wales. We build and operate software
                  products serving customers across the UK.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  Focus
                </h3>
                <p className="leading-relaxed" style={{ color: "#374151" }}>
                  Our work spans web applications, automation tooling, and software infrastructure.
                  We ship products that are reliable, fast, and easy to use.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: "#6b7280" }}>
                  Team
                </h3>
                <p className="leading-relaxed" style={{ color: "#374151" }}>
                  Founded and led by Thomas Mather. We operate with a lean team and move quickly to
                  deliver value for our users.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #f3f4f6", backgroundColor: "#f9fafb" }}>
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid md:grid-cols-2 gap-6 text-sm" style={{ color: "#6b7280" }}>
            <div className="space-y-1">
              <p className="font-medium" style={{ color: "#374151" }}>Mather Labs Ltd</p>
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
          <div className="mt-6 pt-6 text-xs" style={{ borderTop: "1px solid #e5e7eb", color: "#9ca3af" }}>
            &copy; {new Date().getFullYear()} Mather Labs Ltd. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
