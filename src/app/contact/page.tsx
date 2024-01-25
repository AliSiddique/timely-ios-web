"use client"
import React from 'react'
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

type Props = {}
const faqs = [
    {
      id: 1,
      question: "Who can i contact for help?",
      answer:
        "Please email alisiddique10@hotmail.com if you have any questions or concerns.",
    },
    // More questions...
  ]
export default function page({}: Props) {
    const [email, setEmail] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [status, setStatus] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [name, setName] = React.useState("")
    const [phone, setPhone] = React.useState("")

  return (
    <div>
  <section className="bg-regent-500 overflow-hidden relative border-b border-black/5">
  <div className="w-full mx-auto max-w-7xl relative">
    <div
      className="relative flex flex-col w-full p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-16">
      <div
        className="flex flex-row items-center justify-between text-regent-900 text-sm lg:justify-start">
        <a href="/">
          <div className="text-xl inline-flex items-center">
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
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600">
          Have a different question and can’t find the answer you’re looking for? Reach out to our support team by{' '}
          <a href="mailto:alisiddique10@hotmail.com" className="font-semibold text-indigo-600 hover:text-indigo-500">
            sending us an email
          </a>{' '}
          and we’ll get back to you as soon as we can.
        </p>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
                <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>



    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 ring-1 ring-gray-900/10 lg:w-1/2">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    x="100%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" strokeWidth={0} fill="white" />
                <svg x="100%" y={-1} className="overflow-visible fill-gray-50">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Get in touch</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
             Have a question or want to learn more about Timely? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
              <div className="flex gap-x-4">
              </div>
              <div className="flex gap-x-4">

              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                </dt>
                <dd>
                  <a className="hover:text-gray-900" href="mailto:hello@example.com">
                    alisiddique10@hotmail.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <form  className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                   value={message}
                     onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault() 
                    setTimeout(() => toast.success("Thank you for contacting us! We will get back to you shortly."), 500)}}
                className="rounded-md cursor bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send message
              </button>
            </div>
            
        </form>
        </div>
   </div> 
    </div>
  )
}