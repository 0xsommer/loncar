export default function Home() {
  return (
    <div className="w-full items-center justify-center flex flex-col py-32 px-6">
      <article className="w-full max-w-[60ch] items-center justify-center flex flex-col gap-16">
        <div className="article flex flex-col w-full gap-8">
          <h3 className="flex items-center text-base text-zinc-900 dark:text-zinc-100"><span className="h-4 w-0.5 rounded-full bg-zinc-500 dark:bg-zinc-500"></span><span className="ml-3">Informationspflicht</span></h3>
          <h1>Impressum</h1>
        </div>
        <div className="flex flex-col gap-16">
          <p className="underline underline-offset-8 leading-8">Informationspflicht laut §5 E-Commerce Gesetz, §14 Unternehmensgesetzbuch, §63 Gewerbeordnung und Offenlegungspflicht laut §25 Mediengesetz.</p>
          <div className="w-full max-w-5xl  flex flex-col gap-1">
            <p className="font-bold">Firmenbuchadresse</p>
            <p>Sanda Loncar e.U.</p>
            <p>Geweygasse 4a/4/8</p>
            <p>1190 Wien</p>
            <p>Österreich</p>
          </div>
          <div className="w-full max-w-5xl  flex flex-col gap-1">
            <p>Unernehmensgegenstand: Unternehmensberatung</p>
            <p>Firmenbuchnummer: FN 625832 t</p>
            <p>Firmenbuchgericht: Handelsgericht Wien</p>
            <p>Firmensitz: Wien</p>
          </div>
          <div className="w-full max-w-5xl  flex flex-col gap-1">
            <p>sanda@sandaloncar.com</p>
          </div>
          <div className="w-full max-w-5xl  flex flex-col gap-1">
            <p>Mitglied bei: WKO</p>
            <p>Berufsrecht: <a href="https://www.ris.bka.gv.at/GeltendeFassung.wxe?Abfrage=Bundesnormen&Gesetzesnummer=10007517" className="underline underline-offset-4" target="_blank">Gewerbeordnung</a></p>
            <p>Aufsichtsbehörde/Gewerbebehörde: Magistrat der Stadt Wien</p>
            <p>Verleihungsstaat: Österreich</p>
          </div>
        </div>
      </article></div>
  );
}