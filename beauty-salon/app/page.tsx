export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 via-white to-white text-zinc-900">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 text-sm font-medium text-rose-700">
              Beauty Salon by Rahma Kalai
            </p>

            <h1 className="text-5xl font-bold leading-tight">
              L’élégance, le blond et la beauté inoubliable à Monastir
            </h1>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Bienvenue chez <span className="font-semibold">Beauty Salon</span>,
              l’univers beauté de <span className="font-semibold">Rahma Kalai</span>.
              Spécialiste du blond, du lissage et des transformations capillaires,
              nous vous accueillons à Sahline 5012, Monastir.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://wa.me/21652013984"
                className="rounded-2xl bg-gradient-to-r from-rose-500 to-fuchsia-600 px-6 py-3 font-semibold text-white shadow-lg"
              >
                Réserver sur WhatsApp
              </a>

              <a
                href="https://www.instagram.com/beautysalon_byrahmakalai/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-rose-200 px-6 py-3 font-semibold text-rose-700"
              >
                Voir Instagram
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">2580+</p>
                <p className="text-sm text-zinc-500">Followers</p>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">145+</p>
                <p className="text-sm text-zinc-500">Publications</p>
              </div>
              <div className="rounded-2xl border border-rose-100 bg-white p-4 shadow-sm">
                <p className="text-2xl font-bold">4.9/5</p>
                <p className="text-sm text-zinc-500">Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] bg-white p-6 shadow-2xl ring-1 ring-rose-100">
            <div className="rounded-[24px] bg-gradient-to-br from-rose-100 to-fuchsia-100 p-8 text-center">
              
 <div className="mx-auto h-28 w-28 overflow-hidden rounded-full shadow-lg">
  <img
    src="/logo.jpg"
    alt="logo"
    style={{ width: "100%", height: "100%", objectFit: "cover" }}
  />
</div>

              <h2 className="mt-6 text-3xl font-bold">Rahma Kalai</h2>
              <p className="mt-2 text-zinc-600">Beauty Salon • Sahline 5012, Monastir</p>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                Spécialiste du blond, du lissage, des extensions et des transformations
                capillaires haut de gamme.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-rose-100">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
            Nos spécialités
          </p>
          <h2 className="text-3xl font-bold">Des services pensés pour sublimer chaque cliente</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-rose-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Blond & Coloration</h3>
              <p className="mt-3 text-zinc-600">
                Des nuances lumineuses et un résultat moderne, élégant et féminin.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Lissage Professionnel</h3>
              <p className="mt-3 text-zinc-600">
                Des cheveux plus doux, brillants et disciplinés avec une finition premium.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Extensions</h3>
              <p className="mt-3 text-zinc-600">
                Volume, longueur et transformation capillaire avec un rendu naturel.
              </p>
            </div>

            <div className="rounded-3xl border border-rose-100 p-6 shadow-sm">
              <h3 className="text-xl font-semibold">Brushing & Style</h3>
              <p className="mt-3 text-zinc-600">
                Une coiffure raffinée pour tous les jours ou pour vos occasions spéciales.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-[32px] bg-gradient-to-br from-zinc-900 via-rose-900 to-fuchsia-900 p-8 text-white shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-200">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold">Prenez rendez-vous dès aujourd’hui</h2>
            <p className="mt-4 text-zinc-200">
              Nous sommes à votre disposition pour toute réservation ou demande
              d’information.
            </p>

            <div className="mt-8 space-y-4">
              <p><span className="font-semibold">Nom :</span> Rahma Kalai</p>
              <p><span className="font-semibold">Salon :</span> Beauty Salon</p>
              <p><span className="font-semibold">Téléphone :</span> +216 52 013 984</p>
              <p><span className="font-semibold">Adresse :</span> Sahline 5012, Monastir</p>
              <p><span className="font-semibold">Instagram :</span> @beautysalon_byrahmakalai</p>
            </div>

            <a
              href="https://wa.me/21652013984"
              className="mt-8 inline-block rounded-2xl bg-white px-6 py-3 font-semibold text-zinc-900"
            >
              Contacter sur WhatsApp
            </a>
          </div>

          <div className="rounded-[32px] border border-rose-100 bg-rose-50 p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-rose-500">
              À propos
            </p>
            <h2 className="mt-3 text-3xl font-bold">Une expérience beauté haut de gamme</h2>
            <p className="mt-4 leading-8 text-zinc-600">
              Chez Beauty Salon by Rahma Kalai, chaque cliente est unique.
              Notre mission est de révéler votre beauté avec élégance, confiance
              et professionnalisme.
            </p>

            <p className="mt-4 leading-8 text-zinc-600">
              Le site est prêt. Après, on pourra ajouter les vraies photos,
              les transformations avant/après et encore plus de détails.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}