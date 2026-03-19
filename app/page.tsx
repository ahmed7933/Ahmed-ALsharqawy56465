import Head from 'next/head';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-500 selection:text-white">
      <Head>
        <title>Ahmed Alsharqawy | AI Video Ads Creator & Performance Marketer</title>
        <meta name="description" content="Portfolio of Ahmed Alsharqawy, specializing in AI Video Ads and Performance Marketing." />
      </Head>

      {/* Header / Nav */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold tracking-tighter">Ahmed<span className="text-blue-500">.</span></h1>
        <a href="#contact" className="px-5 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-full text-sm font-semibold">
          تواصل معي
        </a>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          إعلانات فيديو بالذكاء الاصطناعي <br className="hidden md:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">تحول المشاهدات إلى مبيعات</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl">
          أنا أحمد الشرقاوي، أدمج بين قوة إنتاج الفيديوهات بالـ AI وخبرتي كـ Performance Marketer لأصنع لك إعلانات تخطف الأنظار، تقلل تكلفة الاستحواذ (CPA)، وتضاعف أرباحك.
        </p>
        <div className="flex gap-4">
          <a href="#work" className="px-8 py-3 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-200 transition">
            شاهد أعمالي
          </a>
        </div>
      </section>

      {/* Featured Case Study: El-Okby Pharmacies */}
      <section id="work" className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            
            {/* Video Placeholder (Use Vimeo/YouTube unlisted or Mux here) */}
            <div className="w-full md:w-1/2 aspect-video bg-gray-700 rounded-2xl overflow-hidden shadow-2xl relative flex items-center justify-center group cursor-pointer border border-gray-600">
                {/* ضع كود تضمين الفيديو هنا (iframe) */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-20 transition">
                   <svg className="w-16 h-16 text-white opacity-80" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                </div>
            </div>

            {/* Case Study Copy */}
            <div className="w-full md:w-1/2 text-right" dir="rtl">
              <span className="text-blue-400 font-semibold tracking-wider text-sm uppercase mb-2 block">دراسة حالة مميزة</span>
              <h3 className="text-3xl font-bold mb-4">صيدليات العقبي - حملة العناية بالشعر</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                <strong className="text-white">التحدي:</strong> إطلاق حملة تسويقية قوية تستهدف النساء بمشاكل تساقط وتلف الشعر، وسط منافسة شرسة في سوق منتجات التجميل الطبية.
                <br /><br />
                <strong className="text-white">الحل:</strong> تصميم فيديو إعلاني بالكامل باستخدام الذكاء الاصطناعي (AI)، يركز على الـ Pain Points الخاصة بالعميل. مع ربط الإعلان باستراتيجية أداء (Performance Strategy) دقيقة لاستهداف الشريحة المثالية.
                <br /><br />
                <strong className="text-white">النتيجة:</strong> تفاعل استثنائي، تقليل تكلفة النقرة (CPC)، وزيادة ملحوظة في طلبات الشراء عبر الإنترنت.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Your Edge / Value Proposition */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">لماذا تعمل معي؟</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-right" dir="rtl">
          
          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            <div className="text-blue-400 text-3xl mb-4">🤖</div>
            <h4 className="text-xl font-bold mb-3">سرعة وابتكار بالـ AI</h4>
            <p className="text-gray-400 text-sm leading-relaxed">إنتاج فيديوهات إعلانية عالية الجودة في وقت قياسي مقارنة بالتصوير التقليدي، مع إمكانية عمل A/B Testing لعدة نسخ بمرونة.</p>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            <div className="text-blue-400 text-3xl mb-4">📈</div>
            <h4 className="text-xl font-bold mb-3">عقلية الـ Performance</h4>
            <p className="text-gray-400 text-sm leading-relaxed">أنا لست مجرد مصمم، أنا أفهم الأرقام. كل لقطة في الفيديو مصممة لزيادة الـ CTR وتحسين معدل التحويل (Conversion Rate).</p>
          </div>

          <div className="p-8 bg-gray-800 rounded-2xl border border-gray-700 hover:border-blue-500 transition">
            <div className="text-blue-400 text-3xl mb-4">📊</div>
            <h4 className="text-xl font-bold mb-3">تحليل ورؤى شاملة</h4>
            <p className="text-gray-400 text-sm leading-relaxed">أقدم حلولاً متكاملة تشمل تحليل بيانات الحملات وربطها بـ Dashboards احترافية لضمان أفضل عائد على الاستثمار (ROI).</p>
          </div>

        </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black text-center px-6">
        <h3 className="text-4xl font-bold mb-6">جاهز لمضاعفة مبيعاتك؟</h3>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          احجز مكالمة استكشافية الآن لنتحدث عن كيف يمكن لإعلانات الفيديو بالذكاء الاصطناعي أن تنقل البزنس الخاص بك للمستوى التالي.
        </p>
        <a href="mailto:your-email@example.com" className="inline-block px-10 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition shadow-lg shadow-blue-500/30">
          ابدأ مشروعك الآن
        </a>
      </section>
      
      {/* Footer */}
      <footer className="text-center p-6 text-gray-500 text-sm bg-black">
        © {new Date().getFullYear()} Ahmed Alsharqawy. All rights reserved.
      </footer>
    </div>
  );
}