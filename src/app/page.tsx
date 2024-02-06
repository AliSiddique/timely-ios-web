import Image from "next/image";


export default function Home() {

  return (
 <div>


<div id="newsletter-banner" className="sticky top-0 start-0 z-50 flex justify-between w-full p-4 border-b border-gray-200 bg-regent-500  dark:bg-gray-700 dark:border-gray-600">
    <div className="flex items-center flex-shrink-0 w-full mx-auto sm:w-auto">
        <form className="flex flex-col items-center w-full md:flex-row">
            <label htmlFor="email" className="flex-shrink-0 mb-2 me-auto text-sm font-medium text-regent-900 md:mb-0 md:me-4 dark:text-gray-400 md:m-0">Sign up for the IOS app</label>
            <iframe src="https://embeds.beehiiv.com/d6d9da1b-5cce-4d86-94da-b57bb4b1b632?slim=true" data-test-id="beehiiv-embed" height="52"  style={{margin: 0, borderRadius:" 0px !important", backgroundColor: "transparent"}}></iframe>

        </form>
    </div>
    <div className="flex items-center absolute top-2.5 end-2.5 md:relative md:top-auto md:end-auto">
        <button data-dismiss-target="#newsletter-banner" type="button" className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
            </svg>
            <span className="sr-only">Close banner</span>
        </button>
    </div>
</div>


  <section className="bg-regent-500 overflow-hidden relative border-b border-black/5">
  <div className="w-full mx-auto max-w-7xl relative">
    <div
      className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-16">
      <div
        className="flex flex-row items-center justify-between text-regent-900 text-sm lg:justify-start">
        <a href="/">
          <div className="text-xl inline-flex items-center">
            {/* <span>
              <svg
                className="w-6 h-6"
                viewBox="0 0 147 148"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"></path>
                <path
                  d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"></path>
                <path
                  d="M147 70.0938H0V77.2021H147V70.0938Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"></path>
                <path
                  d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"></path>
                <path
                  d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"></path>
                <path
                  d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"></path>
                <path
                  d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"></path>
                <path
                  d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"></path>
                <path
                  d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                  fill="currentColor"
                  fill-opacity="0.2"></path>
              </svg>
            </span> */}
            <img src="/pomodorotimer.png" alt="logo" className="w-6 h-6 rounded-full" />
            <span className="ml-3">Timely</span>
          </div>
        </a>
        <button
          className="inline-flex items-center justify-center p-2 text-regent-900 hover:text-regent-900 focus:outline-none focus:text-regent-900 md:hidden">
          <svg
            className="w-6 h-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              className="inline-flex"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
            <path
              className="hidden"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav
        className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
        <a
          className="px-2 lg:px-6 py-2 md:px-3 text-sm text-regent-900 font-medium hover:text-regent-900/70 lg:ml-auto"
          href="/">Home</a>
        <a
          className="px-2 lg:px-6 py-2 md:px-3 text-sm text-regent-900 font-medium hover:text-regent-900/70"
          href="/contact">
          Contact</a>

        <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
          {/* <a
            href="https://lexingtonthemes.lemonsqueezy.com/checkout/buy/e2d91f04-5944-495e-a679-b3df5c08b196"
            className="inline-flex items-center justify-center px-4 py-2 text-sm text-regent-900 bg-regent-300 rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-white/5 active:bg-fuchsia-50 active:text-[#0c1824] focus-visible:outline-fuchsia-50">
            Buy Timely
          </a> */}
        </div>
      </nav>
    </div>
  </div>
</section>
<section className="relative items-center flex justify-center bg-regent-500">
  <div
    className="relative w-full mx-auto max-w-7xl items-center pt-12 lg:px-16 lg:pt-32 md:px-12 px-5">
    <div>
      <div className="text-center">
        <p
          className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-tighter font-medium text-regent-900">
          Exciting new features <span className="block"
            >now available at Timely</span >
        </p><p className="max-w-xl mt-4 text-lg text-regent-900/80 mx-auto">
          Sign up for the wait list and be the first to know when we launch.
        </p>
      </div>
    </div><div className="relative w-full mx-auto max-w-7xl items-center mt-12 flex">
      <img alt="" className="relative w-full object-contain h-96" src="/StudyTimetable.png" />
      <img alt="" className="relative w-full object-contain h-96" src="/timer.png" />
      <img alt="" className="relative w-full object-contain h-96" src="/Settings.png" />
      <img alt="" className="relative w-full object-contain h-96" src="/launch.png" />

    </div>
  </div>
</section>
{/* 
<section>
  <div
    className="max-w-7xl px-8 md:px-12 lg:px-24 mx-auto py-12 lg:py-24 justify-center">
    <div className="text-center justify-center lg:justify-start">
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
        Our beloved customers</span>
    </div>
    <div
      className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 invert"
        src="/logos/basecamp.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 invert"
        src="/logos/dribbble.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 invert"
        src="/logos/stripe.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 invert"
        src="/logos/pipe.svg"
        alt=" logo"
        width="158"
        height="48"
      />
      <img
        className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 invert"
        src="/logos/github.svg"
        alt=" logo"
        width="158"
        height="48"
      />
    </div>
  </div>
</section>


<section>
  <div
    className="px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-32">
    <div>
      <span
        className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
        Components
      </span>
      <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
        See everything at a glance and take control of your business like never
        before! With our cutting-edge intuitive dashboard, you can effortlessly
        manage every aspect of your operations, empowering you to make informed
        decisions and drive success.
      </p>
    </div>

    <ul
      className="grid grid-cols-1 lg:mt-24 mt-12 gap-6 lg:gap-12 lg:grid-cols-3"
      role="list">
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">01</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Intelligent analytics
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Unlock the power of data: get real-time insights with our advanced
          intelligent analytics tools.
        </p>
      </li>
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">02</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Enhanced collaboration
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Seamlessly work together: boost productivity and teamwork through our
          enhanced collaboration features.
        </p>
      </li>
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">03</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Quick onboarding
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Start smoothly: experience a hassle-free onboarding process with our
          streamlined and user-friendly tools
        </p>
      </li>
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">04</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Custom tips
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Tailored for you: discover more opportunities with our personalized
          recommendations and content
        </p>
      </li>
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">05</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Mobile optimization
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Stay connected anywhere: enjoy seamless access and user-friendly
          interface with our mobile optimization
        </p>
      </li>
      <li>
        <div>
          <span className="text-lg text-medium text-regent-600 font-mono">06</span>
          <p className="text-regent-900 mt-8 font-medium lg:text-3xl text-xl">
            Advanced security
          </p>
        </div>
        <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
          Your data, fortified: rest easy knowing your information is protected
          by our state-of-the-art advanced security features
        </p>
      </li>
    </ul>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
      <div>
        <span
          className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
          No hidden fees
        </span>
        <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
          That's why we've made our product available at a
          price that's affordable for everyone.
        </p>
      </div>
      <div>
        <p className="text-slate-500 text-lg lg:text-xl tracking-wide">
          With a range of flexible pricing options and no hidden fees, you can
          get all the features and benefits of our product without breaking the
          bank. 
        </p>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-2 mt-24">
    <section className="relative bg-regent-500">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui7.png" className="w-full" />
      </div>
    </section><section className="relative bg-yellow-500">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui8.png" className="w-full" />
      </div>
    </section>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 pt-12 mx-auto md:px-12 lg:px-24 max-w-7xl lg:pt-32">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end">
      <div>
        <span
          className="text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
          Automaton
        </span>
        <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
          Simplify tasks with our automated workflows
        </p>
      </div>
      <div>
        <p className="text-slate-500 text-lg lg:text-xl tracking-wide">
          In today's fast-paced world, maximizing efficiency is crucial to stay
          competitive and achieve success. At Snow Peak, we understand the value
          of your time and resources. That's why we are proud to introduce our
          cutting-edge automated workflows, designed to streamline your
          processes and boost productivity like never before.
        </p>
      </div>
    </div>
  </div>
  <div className="grid grid-cols-2 lg:cols-4 mt-24">
    <section className="relative bg-regent-500">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui9.png" className="w-full" />
      </div>
    </section>
    <section className="relative bg-red-300">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui10.png" className="w-full" />
      </div>
    </section>
    <section className="relative bg-yellow-500">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui12.png" className="w-full" />
      </div>
    </section><section className="relative bg-lila-500">
      <div className="overflow-hidden h-full">
        <img alt="" src="/images/ui11.png" className="w-full" />
      </div>
    </section>
  </div>
</section>
<section>
  <div
    className="items-center w-full px-8 pt-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div>
      <p
        className="text-2xl font-normal tracking-tight lg:text-4xl text-regent-900">
        Discover what Timely includes and what is made of, you will find a ton
        of demo pages and components.
      </p>
    </div>
  </div>
  <div className="mt-24">
    <div className="grid gap-12 lg:gap-0 lg:grid-cols-2 items-center">
      <section className="relative md:px-12 lg:px-32 px-8">
        <div className="">
          <div className="text-left">
            <div>
              <p
                className="text-2xl font-normal tracking-tight lg:text-3xl text-regent-900 mt-12 lg:mt-0">
                "Snow Peaks automated workflows transformed our business. We now
                save time, avoid errors, and stay on top of operations
                effortlessly. Highly recommended for anyone seeking maximum
                efficiency."
              </p>
              <p className="max-w-xl mt-4 text-lg text-regent-900/80">
                John Smith CEO – of Nieve Supply Co.
              </p>
            </div>
            <div className="mt-10">
              <button
                className="inline-flex items-center lg:text-xl justify-center w-auto lg:px-12 px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regent-500 ring-offset-2 hover:bg-regent-100">
                <span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                    ></path>
                  </svg>
                </span>
                <span className="ml-3">Watch John's story</span></button
              >
            </div>
            <div
              className="inset-0 fixed overflow-y-auto z-10 hidden"
              role="dialog"
              aria-modal="true"
             
              aria-labelledby="modal-title-1">
              <div
                className="inset-0 fixed bg-black bg-opacity-50"
                >
              </div>
              <div
                className="flex hidden relative items-center justify-center min-h-screen p-4"

          >
                <div
                  className="w-full bg-dark p-4 rounded-3xl max-w-7xl overflow-y-auto relative shadow-3xl">
                  <iframe
                    className="w-full rounded-2xl aspect-video"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-regent-500 overflow-hidden">
        <div className="overflow-hidden h-full">
          <img
            className="aspect-square object-cover w-full"
            alt=""
            src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          />
        </div>
      </section>
    </div>
  </div>
</section>
<section className="relative border-white/5 border-y scroll-mt-24">
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-32">
    <div className="grid grid-cols lg:grid-cols-2 items-end">
      <div>
        <span
          className="w-auto text-base items-center inline-flex uppercase tracking-wide font-medium text-regent-600">
          <svg
            className="w-6 h-6"
            viewBox="0 0 147 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
              fill="currentColor"></path>
            <path
              d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path d="M147 70.0938H0V77.2021H147V70.0938Z" fill="currentColor"
            ></path>
            <path
              d="M147 70.0938H0V77.2021H147V70.0938Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
              fill="currentColor"></path>
            <path
              d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
              fill="currentColor"></path>
            <path
              d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
              fill="currentColor"></path>
            <path
              d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
              fill="currentColor"></path>
            <path
              d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
              fill="currentColor"></path>
            <path
              d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
            <path
              d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
              fill="currentColor"></path>
            <path
              d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
              fill="currentColor"
              fill-opacity="0.2"></path>
          </svg><span className="ml-4">frequent questions and answers</span>
        </span>
        <p className="mt-16 text-2xl font-normal lg:text-4xl text-regent-900">
          FAQ
        </p>
      </div>
      <p className="text-slate-500 mt-6 text-lg lg:text-xl tracking-wide">
        Fully automated, fully supported
      </p>
    </div>
    <div
      className="grid grid-cols-1 gap-x-6 gap-y-10 mt-12 lg:mt-24 items-baseline">
      <div className="col-span-2 space-y-24">
        <div>
          <div
            className="inline-flex items-center rounded-full bg-regent-100 px-3 py-0.5 text-sm font-medium text-regent-800">
            Miscelanea
          </div>
          <div className="mt-6 divide-y space-y-3">
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-regent-600 i py-3 text-left w-full"
                >How do I get started with your service?</summary
              >
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                To get started with our service, simply visit our website and
                sign up for an account. From there, you can explore our products
                and services and choose the ones that best meet your needs.
              </p>
            </details>
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-regent-600 i py-3 text-left w-full">
                What types of payment do you accept?</summary
              >
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                We accept a variety of payment methods, including credit cards,
                PayPal, and bank transfers. You can choose the method that works
                best for you during the checkout process.
              </p>
            </details>
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-regent-600 i py-3 text-left w-full">
                What is your refund policy?
              </summary>
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                We offer a 30-day money-back guarantee on most of our products
                and services. If you're not satisfied with your purchase, simply
                contact us within 30 days and we'll refund your money, no
                questions asked.
              </p>
            </details>
          </div>
        </div>
        <div>
          <span
            className="inline-flex items-center rounded-full bg-lila-100 px-3 py-0.5 text-sm font-medium text-lila-800">
            Account
          </span>
          <div className="mt-6 divide-y space-y-3">
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-lila-700 i py-3 text-left w-full">
                How long does it take to receive my order?
              </summary>
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                The time it takes to receive your order depends on the product
                or service you've purchased. Most orders are processed and
                delivered within a few business days, but some may take longer.
                You can check the estimated delivery time during the checkout
                process.
              </p>
            </details>
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-lila-700 i py-3 text-left w-full">
                Do you offer customer support?
              </summary>
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                Yes, we offer customer support via email, phone, and live chat.
                Our team is available to answer any questions or concerns you
                may have and provide assistance whenever you need it.
              </p>
            </details>
            <details>
              <summary
                className="text-regent-900 text-base lg:text-2xl font-medium tracking-tight focus:text-lila-700 i py-3 text-left w-full">
                Can I cancel my subscription at any time?
              </summary>
              <p className="text-slate-500 text-sm pt-5 lg:text-xl">
                Yes, you can cancel your subscription at any time by logging
                into your account and following the cancellation process. Please
                note that some subscriptions may require a certain amount of
                notice before cancellation.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<footer className="bg-white">
  <div
    className="items-center w-full px-8 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:pt-32">
    <div className="xl:gap-8 xl:grid xl:grid-cols-3">
      <div className="text-regent-900 xl:col-span-3">
        <div className="lg:inline-flex lg:items-center justify-between w-full">
          <div>
            <a href="/">
              <div className="text-xl inline-flex items-center font-medium">
                <span>
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 147 148"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                      fill="currentColor"></path>
                    <path
                      d="M77.0546 0.147949H69.9463V147.148H77.0546V0.147949Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M147 70.0938H0V77.2021H147V70.0938Z"
                      fill="currentColor"></path>
                    <path
                      d="M147 70.0938H0V77.2021H147V70.0938Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                      fill="currentColor"></path>
                    <path
                      d="M24.0282 19.1578L19.002 24.1841L122.946 128.128L127.972 123.101L24.0282 19.1578Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                      fill="currentColor"></path>
                    <path
                      d="M122.946 19.1564L19.002 123.1L24.0282 128.126L127.972 24.1827L122.946 19.1564Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                      fill="currentColor"></path>
                    <path
                      d="M6.7933 42.6484L4.11133 49.2314L140.248 104.695L142.93 98.1115L6.7933 42.6484Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                      fill="currentColor"></path>
                    <path
                      d="M97.9631 4.26955L42.5 140.406L49.083 143.088L104.546 6.95152L97.9631 4.26955Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                      fill="currentColor"></path>
                    <path
                      d="M140.41 42.8958L4.03809 97.7856L6.69233 104.38L143.064 49.4902L140.41 42.8958Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                    <path
                      d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                      fill="currentColor"></path>
                    <path
                      d="M49.3122 4.18875L42.7178 6.84229L97.5928 143.214L104.187 140.561L49.3122 4.18875Z"
                      fill="currentColor"
                      fill-opacity="0.2"></path>
                  </svg>
                </span>
                <span className="ml-3">Timely</span>
              </div>
            </a>
            <p className="mt-6">
              <span className="text-slate-500 mt-6 text-base tracking-wide"
                >The latest nonsense news, articles, and resources, sent to your
                spam-box daily.
              </span>
            </p>
          </div>
          <form className="mt-4 flex max-w-xl flex-col items-center">
            <div className="mt-3 flex w-full flex-col gap-1 sm:flex-row">
              <input
                name="email"
                type="email"
                className="lg:px-12 px-6 py-4 bg-white placeholder-slate-400 border border-slate-300 duration-200 focus:outline-none focus:ring focus:ring-regent-100 focus:border-regent-300 w-full rounded-full"
                placeholder="Enter your email..."
               /><button
                type="button"
                className="inline-flex items-center justify-center w-auto lg:px-12 px-6 py-4 text-center text-regent-900 duration-200 bg-regent-500 font-medium rounded-full text-base focus:outline-none focus:ring-2 focus:ring-offset-2 hover:text-white focus:ring-regent-900 ring-offset-2 hover:bg-regent-900"
                ><div style={{position:"relative"}}></div>Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6 xl:col-span-3 border-t pt-12">
        <div className="md:gap-8 md:grid md:grid-cols-2">
          <div>
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Navigation
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 inline-flex items-center hover:text-regent-600"
                  href="/">
                  <span>Overview</span>
                  <span
                    className="rounded-full items-center bg-regent-100 font-medium inline-flex ml-4 px-3 py-0.5 text-regent-700 text-xs"
                    >30+ Pages</span
                  >
                </a>
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="/style-guide">Style Guide</a
                >
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Socials
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://twitter.com/lexingtonthemes">@lexingtonthemes</a
                >
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://twitter.com/Mike_Andreuzza">@Mike_Andreuzza</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div className="md:gap-8 md:grid md:grid-cols-2">
          <div>
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              Stay updated
            </h3>
            <ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://www.lexingtonthemes.com/license">License</a
                >
              </li><li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://www.lexingtonthemes.com/documentation"
                  >Documentation</a
                >
              </li>
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-regent-900 font-medium lg:text-xl text-lg">
              More themes
            </h3><ul className="mt-4 space-y-2" role="list">
              <li>
                <a
                  className="text-base text-slate-500 hover:text-regent-600"
                  href="https://lexingtonthemes.com">Lexington Themes</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div><div className="w-full lg:px-16 max-w-7xl md:px-12 mx-auto px-8 py-4">
    <div className="md:flex md:items-center md:justify-between">
      <div className="mt-8 md:mt-0 md:order-1">
        <p>
          <span className="text-sm text-regent-900 mt-2 mx-auto"
            >© 2022 Lexington Themes. All rights reserved - Beautifully designed
            HTML, Astro.js and Tailwind themes! Save months of time and build
            your startup landing page in minutes.
          </span>
        </p>
      </div>
    </div>
  </div>
</footer> */}

 </div>
  );
}
