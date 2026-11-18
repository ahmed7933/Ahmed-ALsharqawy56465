"use client";

const WHATSAPP = "https://wa.me/201017854522";
const EMAIL = "mailto:alsharqawy.creative@gmail.com";
const LINKEDIN = "https://linkedin.com/in/ahmed-alsharqawy-511a75238";

const videos = {
  group1: ["8Se1ytPnnF4", "AIUSLDpLpSY"],
  group2: ["PGeBNE1oydg"],
  group3: ["XuGCHaZZtxY"],
  group4: ["voRJECxcNpU"],
};

function VideoCard({ id, category }: { id: string; category: string }) {
  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
      <div className="aspect-video">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}?rel=0`}
          title={category}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="p-5 text-sm space-y-1">
        <p className="text-blue-400 font-semibold">Category: {category}</p>
        <p className="text-gray-300">Hook: &quot;[opening line - to be added]&quot;</p>
        <p className="text-gray-300">Result: [metric - to be added]</p>
      </div>
    </div>
  );
}

function PlaceholderSlot({ label }: { label: string }) {
  return (
    <div className="bg-gray-800 rounded-2xl border border-dashed border-gray-600 overflow-hidden">
      <div className="aspect-video flex items-center justify-center text-gray-500 text-sm px-6 text-center">
        {label}
      </div>
      <div className="p-5 text-sm space-y-1">
        <p className="text-gray-300">Hook: &quot;[opening line - to be added]&quot;</p>
        <p className="text-gray-300">Result: [metric - to be added]</p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Email / WhatsApp: ${data.get("contact")}`,
      data.get("company") ? `Company / brand: ${data.get("company")}` : "",
      data.get("adlink") ? `Link to ad or page: ${data.get("adlink")}` : "",
      "",
      `${data.get("message")}`,
    ].filter(Boolean);
    window.open(
      `${WHATSAPP}?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-20 pb-16 max-w-4xl mx-auto">
        {/* [PHOTO: headshot of Ahmed, plain background, friendly expression] */}
        <div className="w-28 h-28 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center text-3xl font-bold text-blue-400 mb-6">
          AA
        </div>
        <p className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-3">
          Performance Creative Strategist | Meta Ads + AI Video
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Ahmed Alsharqawy
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
          Meta Ads that sell.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            AI videos that stop the scroll.
          </span>
        </h2>
        <p className="text-lg text-gray-400 mb-10 max-w-2xl">
          I manage e-commerce ad budgets and build the AI video ads that power
          them. 3.3M+ EGP managed. 12M+ EGP in sales. Open to remote roles and
          freelance projects.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 transition rounded-full font-semibold"
          >
            WhatsApp me
          </a>
          <a
            href={EMAIL}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-semibold"
          >
            Email me
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition rounded-full font-semibold"
          >
            LinkedIn
          </a>
          {/* [CV PDF FILE: place the file at public/cv.pdf and this link works] */}
          <a
            href="/cv.pdf"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 transition rounded-full font-semibold"
          >
            Download my CV
          </a>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Remote. Based in Egypt. Running campaigns across Egypt, Oman, Iraq and
          Libya.
        </p>
      </section>

      {/* 2. Numbers strip */}
      <section className="border-y border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-extrabold text-blue-400">3.3M+ EGP</p>
            <p className="text-sm text-gray-400 mt-1">Meta Ads spend managed</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-400">12M+ EGP</p>
            <p className="text-sm text-gray-400 mt-1">gross sales generated</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-400">~7x</p>
            <p className="text-sm text-gray-400 mt-1">return on ad spend</p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-blue-400">48-72h</p>
            <p className="text-sm text-gray-400 mt-1">
              per AI video ad, at 80%+ lower production cost
            </p>
          </div>
        </div>
      </section>

      {/* 3. Case study: Elokaby Pharmacy */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2">
          Case study: Elokaby Pharmacy
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-8">
          Scaling Elokaby Pharmacy to 12M+ EGP in sales
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="text-xl font-bold mb-3 text-white">The problem</h4>
            <p className="text-gray-300 leading-relaxed mb-8">
              Elokaby Pharmacy sells customized hair care and medical cosmetics
              packages. Prices are high, so buyers are skeptical. Video
              production was slow and expensive, ads went stale, and costs
              climbed.
            </p>
            <h4 className="text-xl font-bold mb-3 text-white">What I did</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed">
              <li>Managed 1.7M+ EGP in Meta Ads across full-funnel campaigns.</li>
              <li>
                Wrote direct-response hooks using my clinical background, to
                answer doubts before the click.
              </li>
              <li>
                Built an AI video engine: 3D, cinematic and UGC-style ad assets
                in 48-72 hours, at over 80% lower production cost.
              </li>
              <li>
                Tested bundles and offers to raise average order value and
                checkout conversion.
              </li>
              <li>
                Tracked hook rate, 3-second hold rate and CTR daily, and
                refreshed creative before fatigue hit.
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-3 text-white">
              The results (from the live Ads Manager account)
            </h4>
            <ul className="list-disc list-inside text-gray-300 space-y-2 leading-relaxed mb-8">
              <li>12M+ EGP in gross sales at ~7x ROAS</li>
              <li>251 ads tested in this account view</li>
              <li>Average hook rate: 32.12%. Best single ad: 51.96%.</li>
              <li>
                Cost per messaging conversation: as low as 4.03 EGP (4.03-14.67
                EGP across the top ads)
              </li>
            </ul>
            <img
              src="/case-study.png"
              alt="Live Ads Manager view from the Elokaby account"
              className="rounded-2xl border border-gray-700 w-full"
            />
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              Live Ads Manager view from the Elokaby account (names blurred in
              the screenshot itself). The total spend shown (485,497 EGP) is one
              account view - part of the full 1.7M+ EGP managed for Elokaby
              Pharmacy.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Agency work: Mindev */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2">
            Agency work
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Multi-country media buying at Mindev
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-3 leading-relaxed max-w-3xl">
            <li>
              Managed 1.6M+ EGP in Meta Ads for cosmetics and personal care
              brands at Mindev.
            </li>
            <li>Ran campaigns in four markets: Egypt, Oman, Iraq and Libya.</li>
            <li>
              Specialized in cash-on-delivery markets: optimized Cost per
              Confirmed Order against real confirmation rates and delivery
              cycles.
            </li>
            <li>
              Tested 15+ creative variants every week to find winning hooks and
              support multi-country scaling.
            </li>
            <li>
              Connected direct-response copy to targeted landing pages in
              full-funnel acquisition campaigns.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. The AI video engine */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2">
          The AI video engine
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-3">
          Ad-ready video in 48-72 hours
        </h3>
        <p className="text-gray-400 mb-10">
          An in-house pipeline that replaces a production crew. Over 80% lower
          cost per asset.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {[
            ["Hook and script", "direct-response copy, built from performance data.", "ChatGPT"],
            ["Visuals", "product shots and scenes.", "Midjourney"],
            ["Motion", "3D and cinematic video.", "Kling, Runway Gen-3, Luma Dream Machine"],
            ["Voice", "natural Arabic and English voiceover.", "ElevenLabs"],
            ["Edit and variants", "cuts, captions and hook versions for testing.", "CapCut"],
          ].map(([title, desc, tool], i) => (
            <div
              key={title}
              className="p-6 bg-gray-800 rounded-2xl border border-gray-700"
            >
              <p className="text-blue-400 font-extrabold text-2xl mb-2">{i + 1}</p>
              <h4 className="font-bold mb-2">{title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-2">{desc}</p>
              <p className="text-gray-500 text-xs">({tool})</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Selected work */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2">
            Selected work
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-3">
            Videos that carried real budgets
          </h3>
          <p className="text-gray-400 mb-12">
            Every ad below ran with real spend. Labels say what it was and what
            it did.
          </p>

          <h4 className="text-xl font-bold mb-4 text-white">3D Character Hooks</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.group1.map((id) => (
              <VideoCard key={id} id={id} category="3D Character Hooks" />
            ))}
          </div>

          <h4 className="text-xl font-bold mb-4 text-white">AI UGC</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.group2.map((id) => (
              <VideoCard key={id} id={id} category="AI UGC" />
            ))}
          </div>

          <h4 className="text-xl font-bold mb-4 text-white">Cinematic Product</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {videos.group3.map((id) => (
              <VideoCard key={id} id={id} category="Cinematic Product" />
            ))}
          </div>

          <h4 className="text-xl font-bold mb-4 text-white">Offers and Bundles</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {videos.group4.map((id) => (
              <VideoCard key={id} id={id} category="Offers and Bundles" />
            ))}
          </div>

          {/* Winner vs loser pair - videos to be selected by Ahmed */}
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-6">
            Same product. Two hooks.
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <PlaceholderSlot label="[Winner video - to be selected]" />
            <PlaceholderSlot label="[Loser video - to be selected]" />
          </div>
          <p className="text-gray-400 text-sm">
            Same product, same budget. Different hook. This is why I test 15+
            variants every week.
          </p>
        </div>
      </section>

      {/* 7. About */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2">
          About
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          From nursing to performance marketing
        </h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          I graduated as a nurse, then moved into e-commerce marketing. The
          medical background turned out to be an unfair advantage: I understand
          hair care, cosmetics and health products from the inside, and I know
          how skeptical buyers think. That is what my hooks are built on.
        </p>
        <p className="text-gray-300 leading-relaxed">
          For 2+ years I have managed Meta Ads budgets and built creative for
          D2C brands and agencies across Egypt and the Gulf. Today I run both
          sides of the job: the media buying and the AI video production that
          feeds it.
        </p>
      </section>

      {/* 8. Skills row */}
      <section className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed">
          <div>
            <h4 className="font-bold text-white mb-2">Media buying</h4>
            <p className="text-gray-400">
              Meta Ads Manager, full-funnel acquisition, budget scaling, A/B
              testing, ROAS, CPO/CPA, cost-control bidding
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Tracking and conversion</h4>
            <p className="text-gray-400">
              Meta Pixel, Conversion API, GA4, Google Tag Manager, landing page
              optimization, funnel diagnostics
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">Creative strategy</h4>
            <p className="text-gray-400">
              hook generation, direct-response copy, storyboarding, UGC and 3D
              direction, offers and bundles, creative testing
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-2">AI production</h4>
            <p className="text-gray-400">
              Midjourney, Kling, Runway Gen-3, Luma Dream Machine, ElevenLabs,
              ChatGPT, CapCut
            </p>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-2">Also</h4>
            <p className="text-gray-400">TikTok Ads Manager (small-budget tests)</p>
          </div>
        </div>
      </section>

      {/* 9. Contact + form */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black px-6">
        <div className="max-w-2xl mx-auto">
          <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase block mb-2 text-center">
            Work with me
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-3 text-center">
            Get a free creative audit
          </h3>
          <p className="text-gray-400 mb-3 text-center">
            Send me your best-performing ad. I will tell you exactly what I
            would test next. Free.
          </p>
          <p className="text-gray-500 text-sm mb-10 text-center">
            Hiring for a remote role?{" "}
            <a href="/cv.pdf" className="text-blue-400 hover:underline">
              Download my CV
            </a>{" "}
            or message me on{" "}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              WhatsApp
            </a>{" "}
            or{" "}
            <a href={LINKEDIN} target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">
              LinkedIn
            </a>
            .
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-900 p-8 rounded-xl shadow-2xl border border-gray-800 space-y-5"
          >
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                required
                name="name"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Email or WhatsApp number
              </label>
              <input
                required
                name="contact"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Company / brand (optional)
              </label>
              <input
                name="company"
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Link to your ad or page (optional)
              </label>
              <input
                name="adlink"
                type="url"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                required
                name="message"
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-full font-bold"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center p-8 text-gray-500 text-sm bg-black space-y-2">
        <p className="text-gray-400 font-semibold">
          Ahmed Alsharqawy - Performance Creative Strategist
        </p>
        <p>
          WhatsApp: wa.me/201017854522 | Email: alsharqawy.creative@gmail.com |
          LinkedIn: linkedin.com/in/ahmed-alsharqawy-511a75238
        </p>
      </footer>
    </div>
  );
}
