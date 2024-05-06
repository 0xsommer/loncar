/* This example requires Tailwind CSS v2.0+ */

export default function Testimonial () {
  return (
    <section className="py-12 bg-gray-100  rounded-2xl overflow-hidden md:pb-20 md:pt-16 mb-16 md:mb-40 border border-black/5 dark:text-white dark:bg-black/30 ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <img
            className="mx-auto h-8 dark:invert"
            src="/styria-logo.svg"
            alt="Styria Media Group Logo"
          />
          <blockquote className="mt-8">
            <div className="max-w-3xl mx-auto text-center text-lg leading-7 md:text-2xl md:leading-9 font-medium text-gray-900 dark:text-white px-4 md:px-16">
              <p>
              &quot;Wir waren auf der Suche nach einem erfahrenen Partner, der uns in unserer digitalen Transformation unterstützen konnte. Sanda erwies sich als genau die Expertin, die wir brauchten. Wir sind heute besser positioniert, um den Herausforderungen einer digitalisierten Welt zu begegnen.&quot;
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <img
                    className="mx-auto h-10 w-10 rounded-full"
                    src="/schweighofer.jpeg"
                    alt=""
                  />
                </div>
                <div className="mt-4 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900 dark:text-white">Klaus Schweighofer</div>

                  <svg className="hidden md:block mx-1 h-5 w-5 text-black-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div className="text-base font-medium text-gray-500">Geschäftsführer, Styria Media International</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
