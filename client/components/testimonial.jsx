/* This example requires Tailwind CSS v2.0+ */

export default function Testimonial () {
  return (
    <section className="py-8 bg-white shadow rounded-2xl overflow-hidden md:pb-16 md:pt-16 mb-16 md:mb-4 border border-black/5 dark:border-white/20 dark:text-white dark:bg-black/30 -mt-48 md:-mt-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto h-8 dark:invert"
            src="/styria-logo.svg"
            alt="Styria Media Group Logo"
          />
          <blockquote className="mt-8">
            <div className="max-w-3xl mx-auto text-center text-sm leading-6 md:text-2xl md:leading-9 font-medium text-gray-900 dark:text-white md:px-16">
              <p>
              Sanda ist ein Digital Native der ersten Stunde und hat die digitale Transformation der Styria Media Group maßgeblich mitgestaltet.</p>
              
              <p className="mt-8">Nach dem Relaunch der Website von vecernji.hr list hat Sanda 24sata.hr zur klaren Nummer 1 unter den Nachrichtenportalen in Kroatien gemacht. Es war nur logisch, dass sie in ihrer führenden Rolle im Digitalteam der Kleinen Zeitung auch die Zahlen der Website und der App auf neue Rekordhöhen treiben konnte.;
              </p>
            </div>
            <footer className="mt-10">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto size-12 md:size-16 rounded-full"
                    src="/bracun.jpeg"
                    alt=""
                  />
                </div>
                <div className="max-w-sm text-center pt-4 md:pt-0 md:text-left md:ml-4 flex flex-col">
                  <div className="text-base font-medium text-gray-900 dark:text-white">Helmut Bracun</div>

                  <div className="text-sm font-medium text-gray-500 mt-2 md:mt-0">Former Head of Classifieds Styria Media Group, <br/>Ex-CEO 24sata & Vercernji List</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
