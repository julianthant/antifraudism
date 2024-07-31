import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const MainCarousel = () => {
  return (
    <div className="flex items-center pt-20">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full shadow-wide"
      >
        <CarouselContent>
          <CarouselItem className="bg-white h-min grid grid-cols-2">
            <div className="p-12 flex flex-col">
              <div className="bg-sky-100 text-sky-500 font-semibold rounded-md w-fit px-3 py-1">
                Featured Blog
              </div>
              <h1 className="text-4xl font-black py-5">
                Bonus abuse: how to dectect and prevent fraud in America
              </h1>
              <p className="text-gray-500 pb-8 max-xl:hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum commodi qui modi, placeat consequatur, est natus soluta
                iure similique quis mollitia voluptates fuga, voluptatum
                adipisci at omnis. Recusandae, incidunt cum.
              </p>
              <Link
                href={'/'}
                className="flex items-center font-bold text-sky-400"
              >
                Read More <ChevronRight size={'16px'} />
              </Link>
            </div>
            <div>
              <img src="phone.jpg" alt="phone" />
            </div>
          </CarouselItem>
          <CarouselItem className="bg-white h-min grid grid-cols-2">
            <div className="p-12 flex flex-col">
              <div className="bg-sky-100 text-sky-500 font-semibold rounded-md w-fit px-3 py-1">
                Featured Blog
              </div>
              <h1 className="text-4xl font-black py-5">
                Bonus abuse: how to dectect and prevent fraud in America
              </h1>
              <p className="text-gray-500 pb-8 max-xl:hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum commodi qui modi, placeat consequatur, est natus soluta
                iure similique quis mollitia voluptates fuga, voluptatum
                adipisci at omnis. Recusandae, incidunt cum.
              </p>
              <Link
                href={'/'}
                className="flex items-center font-bold text-sky-400"
              >
                Read More <ChevronRight size={'16px'} />
              </Link>
            </div>
            <div>
              <img src="phone.jpg" alt="phone" />
            </div>
          </CarouselItem>
          <CarouselItem className="bg-white h-min grid grid-cols-2">
            <div className="p-12 flex flex-col">
              <div className="bg-sky-100 text-sky-500 font-semibold rounded-md w-fit px-3 py-1">
                Featured Blog
              </div>
              <h1 className="text-4xl font-black py-5">
                Bonus abuse: how to dectect and prevent fraud in America
              </h1>
              <p className="text-gray-500 pb-8 max-xl:hidden">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Nostrum commodi qui modi, placeat consequatur, est natus soluta
                iure similique quis mollitia voluptates fuga, voluptatum
                adipisci at omnis. Recusandae, incidunt cum.
              </p>
              <Link
                href={'/'}
                className="flex items-center font-bold text-sky-400"
              >
                Read More <ChevronRight size={'16px'} />
              </Link>
            </div>
            <div>
              <img src="phone.jpg" alt="phone" />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default MainCarousel;
