import MainCarousel from '@/components/MainCarousel';
import MainWrapper from '@/components/MainWrapper';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="bg-slate-50 pt-6 pb-20">
      <section>
        <MainWrapper className="">
          <MainCarousel />

          <div className="my-16 h-32 shadow-wide bg-white"></div>

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
                className="flex items-center font-bold text-sky-400"
              >
                Learn More <ChevronRight size={'16px'} />
              </Link>
            </div>
          </div>

          <div className="h-64">
            <div className="bg-white border shadow-wide w-40 h-40"></div>
            <div className="bg-white shadow-wide"></div>
            <div className="bg-white shadow-wide"></div>
            <div className="bg-white shadow-wide"></div>
          </div>
        </MainWrapper>
      </section>
    </main>
  );
}
