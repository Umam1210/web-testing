import CategoryLeftBar from '../../components/marketplace/categoryLeftBar';
import Header from '../../components/marketplace/header';
import ItemListCard from '../../components/marketplace/itemListCard';
import {
  RocketLaunchIcon,
  ShoppingCartIcon,
  StarIcon,
  ArrowPathIcon,
  LanguageIcon,
  CheckCircleIcon
} from '@heroicons/react/20/solid';
import { HeartIcon, HomeIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { Accordion } from 'flowbite-react';
import ReactPlayer from 'react-player/youtube';

const pages = [
  { name: 'Legal', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true }
];

export default function DetailLive() {
  return (
    <>
      <div className="col-span-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol role="list" className="flex items-center space-x-4">
            {pages.map((page, index) => (
              <li key={page.name}>
                <div className="flex items-center">
                  {index > 0 ? (
                    <ChevronRightIcon
                      className="mr-4 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  ) : null}
                  <a
                    href={page.href}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700"
                    aria-current={page.current ? 'page' : undefined}>
                    {page.name}
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </nav>

        <p className="mt-12 max-w-3xl text-4xl font-bold tracking-tight">
          Socket.IO (with websockets) - the details. (socket io v2)
        </p>

        <p className="mt-8 max-w-3xl text-lg">
          Socket io. For those who want to learn how to harness real-time communication on the web.
          With Cluster, redis, & React
        </p>

        <div className="mt-8 flex w-full items-center text-sm font-medium">
          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
            Live Lecture
          </span>
        </div>

        <div className="mt-4 flex w-full items-center text-sm font-medium">
          <span className="mr-8">
            Created by <span className="font-bold">Jonathan Karongkong</span>
          </span>
          <span>
            Managed by <span className="font-bold">ET Asia</span>
          </span>
        </div>

        {/* TIMER */}
        <div
          className="mt-12 flex aspect-[3/1] w-full flex-col items-center justify-center rounded-lg border border-slate-200 bg-white p-6 opacity-80 bg-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(circle at center center, rgb(239 68 68/20), rgb(239 68 68/40)), repeating-radial-gradient(circle at center center, rgb(239 68 68/10), rgb(239 68 68/10), 10px, transparent 20px, transparent 10px)`
          }}>
          <p className="mb-4 text-xl font-bold italic text-white">Starting in...</p>
          <p className="text-8xl font-bold text-white">23:54:11</p>
        </div>

        {/* WHAT YOU'LL LEARN */}
        <div className="mt-12 w-full rounded-lg border border-slate-200 p-6">
          <p className="mb-8 text-xl font-bold">What you'll learn</p>

          <div className="grid w-full grid-cols-2 gap-4">
            <div className="flex">
              <CheckCircleIcon className="mr-4 h-6 w-6" />
              <span className="flex-1">
                Socketio. That's (mostly) all we cover so when you finish, you'll know it!
              </span>
            </div>

            <div className="flex">
              <CheckCircleIcon className="mr-4 h-6 w-6" />
              <span className="flex-1">
                Setup a socketio application between the browser and an Express server and run
                real-time back and forth
              </span>
            </div>

            <div className="flex">
              <CheckCircleIcon className="mr-4 h-6 w-6" />
              <span className="flex-1">Understand the basics of websockets and how they work</span>
            </div>

            <div className="flex">
              <CheckCircleIcon className="mr-4 h-6 w-6" />
              <span className="flex-1">
                The basics of the transport layer and how a packet works
              </span>
            </div>
          </div>
        </div>

        {/* REQUIREMENTS */}
        <p className="mb-8 mt-12 text-xl font-bold">Requirements</p>
        <p className="mb-2 max-w-3xl">
          You have a solid working knowledge of JavaScript and nodejs (Not a ninja, but you are not
          new).
        </p>
        <p className="mb-2 max-w-3xl">
          You have used the node ecosystem (npm, Express, etc.). This is NOT an intro to node class
          and I will NOT cover these in detail.
        </p>
        <p className="mb-2 max-w-3xl">
          You have basic command line knowledge (at least capable of navigating and running a
          program)
        </p>
        <p className="mb-2 max-w-3xl">You have a computer capable of running Nodejs.</p>

        {/* DESCRIPTION */}
        <p className="mb-8 mt-12 text-xl font-bold">Description</p>
        <p className="max-w-3xl">
          Websockets are one of the coolest things to hit the web in ages. They allow the browser
          real-time communication bridging one of the last gaps in both human and web-based
          communication. Socket io is the king library that uses websockets under the hood. There's
          a good chance if you're reading this, you've heard about socket io. Maybe even done a
          tutorial on it. But how far did you get? In my experience, the vast majority of the
          material on the web goes no farther than a quick-start, instant chat app. You don't learn
          how anything works, never look at the docs, and are stuck at the end wondering what to do
          now. The remaining shred of material is waaaaay over everyone's head. The fact that the
          websocket API was standardized in 2011 and most developers still don't know how to use it
          is evidence of the gap.
          <br />
          <br /> This course is meant to alleviate that! It is not a quick start guide to socket.IO.
          There are loads of those all over the Internet. You should definitely look elsewhere if
          you are wanting a 10 minute intro to the 3-4 things you need to know to make something
          quick. On the other hand, if you are looking to really learn one of the most awesome
          JavaScript libraries in socket io, you should stick around. Like Express and other
          JavaScript/Node pieces, it's getting passed over in the wave to learn just enough to get
          to the term "full-stack developer." My main goal is to help you figure out how to go from
          being a good developer to a great developer. Understanding... not just knowing a few
          methods... of socketio is part of that! It even trancends the browser and node with
          implementations in most other languages, and even mobile. This means as you grow, you have
          the power of sockets without having to learn more than the socket io library.
          <br />
          <br /> I first used socket.IO in 2013 for a tiny company directory app. I've been
          following since and have been frustrated that it hasn't gotten more mainstream notice
          because it opens the way for so many improvements to existing applications and obvious
          groundwork for new ones. Let's change that :) Prepare to for a detailed look at socketio
          and websockets and start going real-time. <br />
          <br />
        </p>

        <button
          type="button"
          className="mt-8 inline-flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Get your tickets
          <RocketLaunchIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
        </button>

        <p className="mt-4 w-full text-center text-xs tracking-wide text-gray-500">
          Managed by ET Asia. Full Lifetime access.
        </p>
      </div>

      <div className="sticky top-24 col-span-4 h-fit rounded-lg shadow-md">
        <div className="w-full-auto aspect-video overflow-hidden rounded-t-lg bg-purple-200">
          <ReactPlayer
            controls={true}
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
        </div>
        <div className="p-4">
          <div className="flex w-full">
            <div className="flex-1">
              <p className="text-sm font-medium line-through">Rp800.000</p>
              <p className="text-2xl font-bold">Rp300.000</p>
            </div>
            <div className="ml-4">
              <button
                type="button"
                className="inline-flex items-center rounded-full  bg-white p-2 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <HeartIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="mt-4 flex w-full items-center text-sm font-medium">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Live Lecture
            </span>
          </div>

          <p className="mt-4 flex w-full items-center text-sm font-medium">
            Created by <span className="ml-1 font-bold">Jonathan Karongkong</span>
          </p>

          <button
            type="button"
            className="mt-8 inline-flex w-full flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Get your tickets
            <RocketLaunchIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
          </button>

          <p className="mt-4 w-full text-center text-xs tracking-wide text-gray-500">
            Managed by ET Asia. Full lifetime access with recordings.
          </p>
        </div>
      </div>
    </>
  );
}
