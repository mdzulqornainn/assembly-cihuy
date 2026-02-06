export default function Profile() {
  return (
    <section className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-6 font-press">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Assembly
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">
          Profile Group
        </h1>
        <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed">
          Halaman ini berisi ringkasan tentang Assembly. Kita berfokus pada
          kolaborasi kreatif, eksplorasi ide baru, dan berbagi karya terbaik
          bersama komunitas.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Misi</h2>
            <p className="mt-2 text-sm text-slate-600">
              Membangun ruang aman untuk bereksperimen, belajar, dan membuat
              proyek lintas minat.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">Nilai</h2>
            <p className="mt-2 text-sm text-slate-600">
              Kreatif, inklusif, dan konsisten menghasilkan karya yang memberi
              dampak positif.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
