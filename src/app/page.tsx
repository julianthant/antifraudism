import MainCarousel from '@/components/MainCarousel';
import MainWrapper from '@/components/MainWrapper';
import { Button, buttonVariants } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-slate-50 pt-6 pb-20">
      <section>
        <MainWrapper className="space-y-16">
          <MainCarousel />

          <div className="h-32 shadow-wide bg-white"></div>

          <div className="flex items-center shadow-wide bg-white">
            <div className="">
              <img src="fraud.jpg" alt="fraud" />
            </div>
            <div className="flex-col flex justify-between ml-12 pl-6">
              <h1 className="text-4xl font-black py-5">What is Fraudism?</h1>
              <p className="pb-8 pt-4 text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, officiis nisi? Consequuntur unde magnam sit natus
                quisquam culpa ipsum. Veritatis placeat laudantium maxime
                assumenda tempore, voluptas alias nostrum modi impedit.
              </p>
              <Link
                href={'/'}
                className={buttonVariants({
                  size: 'sm',
                  variant: 'ghost',
                  className:
                    'flex items-center w-min text-sky-400 hover:text-sky-400 -ml-3',
                })}
              >
                <p className="font-bold text-base">Learn More</p>{' '}
                <ChevronRight size={'16px'} />
              </Link>
            </div>
          </div>

          <div
            className="bg-white p-12 shadow-wide"
            style={{ backgroundImage: 'url(/plant-bg.png)' }}
          >
            <div className="pb-8 space-y-3">
              <h1 className="text-4xl font-black text-center text-white">
                What we offer? Our mission?
              </h1>
              <h2 className="text-3xl font-light text-center text-white">
                Overcome your obstacles!
              </h2>
            </div>
            <div className="grid grid-flow-col gap-x-5 grid-cols-4">
              <div className="bg-white text-center p-4">
                <h3 className="text-xl font-semibold">Spread Awareness</h3>
                <h4 className="text-lg font-light pb-4">Identify your start</h4>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
              </div>
              <div className="bg-white p-4 text-center ">
                <h3 className="text-xl font-semibold">Stay Acknowledged</h3>
                <h4 className="text-lg font-light pb-4">
                  Bring your ideas to life
                </h4>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
              </div>
              <div className="bg-white p-4 text-center ">
                <h3 className="text-xl font-semibold">Share Experiences</h3>
                <h4 className="text-lg font-light pb-4">
                  Sell your vision to others
                </h4>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
              </div>
              <div className="bg-white p-4 text-center ">
                <h3 className="text-xl font-semibold">Support Everyone</h3>
                <h4 className="text-lg font-light pb-4">
                  Expand your business
                </h4>
                <p className="">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white p-12 flex flex-col items-center justify-center shadow-wide ">
            <div className="space-y-3">
              <h1 className="text-4xl font-black text-center">
                Choose your starting point
              </h1>
              <a
                href={'/'}
                className="font-medium text-sky-400 hover:underline flex justify-center pb-6"
              >
                Explore the community & services
              </a>
            </div>
            <div className="grid grid-flow-col gap-x-6 grid-cols-3 p-4">
              <div className="bg-white p-4 text-center border shadow-wide">
                <h2 className="pb-5 text-xl font-semibold">Read Our Blogs</h2>
                <p className="pb-[45px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className:
                      'flex items-center justify-center text-sky-400 hover:text-sky-400',
                  })}
                >
                  <p className="font-bold text-base ">Read More</p>{' '}
                  <ChevronRight size={'16px'} />
                </Link>
              </div>
              <div className="bg-white p-4 text-center border shadow-wide">
                <h2 className="pb-5 text-xl font-semibold">
                  Share Your Experience
                </h2>
                <p className="pb-[45px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className:
                      'flex items-center justify-center text-sky-400 hover:text-sky-400',
                  })}
                >
                  <p className="font-bold text-base ">Post Now</p>{' '}
                  <ChevronRight size={'16px'} />
                </Link>
              </div>
              <div className="bg-white p-4 text-center border shadow-wide">
                <h2 className="pb-5 text-xl font-semibold">
                  Feedbacks & Suggestions
                </h2>
                <p className="pb-[45px]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Repudiandae laborum voluptatem quod doloribus.
                </p>
                <Link
                  href={'/'}
                  className={buttonVariants({
                    size: 'sm',
                    variant: 'ghost',
                    className:
                      'flex items-center justify-center text-sky-400 hover:text-sky-400',
                  })}
                >
                  <p className="font-bold text-base ">Review Now</p>{' '}
                  <ChevronRight size={'16px'} />
                </Link>
              </div>
            </div>
          </div>
        </MainWrapper>
      </section>
    </main>
  );
}
