import Layout from "~/src/components/Layout";
import FingerPrint from "~/src/icons/FingerPrint";

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

export default function Index() {
  return (
    <Layout>
      <main>
        <article>
          <section className="bg-sea-green">
            <div className="container py-4">
              <div className="px-4">
                <h1 className="uppercase text-[13ch] z-[1] relative">
                  chefs in the kitchen
                </h1>
                <p className="uppercase text-4xl font-bold">
                  Vamos
                </p>

                <div className="absolute top-40 right-60 z-0">
                  <FingerPrint className="fill-hot-pink rotate-12" width={340} height={340} />
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img src="/images/slatt-burger.png" alt='burger' width={500} height={500} className='w-full max-w-xl' />
                <p className="text-center px-4">
                  {paragraph}
                </p>
              </div>
            </div>
          </section>
        </article>
      </main>
    </Layout>
  );
}
