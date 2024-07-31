import MainWrapper from './MainWrapper';
import { Icons } from './Icons';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="py-20 bg-slate-950 text-white">
      <MainWrapper className="flex justify-between items-center">
        <div className="space-y-3 max-w-[280px]">
          <h1 className="text-2xl font-semibold tracking-widest">
            ANTIFRADUISM
          </h1>
          <p className="text-sm font-light pb-3 leading-6 tracking-wide">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
            assumenda.
          </p>
          <div className="flex gap-2 items-center">
            <Button variant={'outline'} className="rounded-full w-9 h-9 p-0">
              <Icons.gitHub className="w-[25px] h-[25px]" />
            </Button>
            <Button variant={'outline'} className="rounded-full w-9 h-9 p-0">
              <Icons.facebook className="w-8 h-8" />
            </Button>
            <Button variant={'outline'} className="rounded-full w-9 h-9 p-0">
              <Icons.twitter className="w-[26px] h-[26px]" />
            </Button>
          </div>
        </div>

        <div className="space-y-4 max-w-[200px]">
          <h2 className="text-lg font-medium text-center">Quick Links</h2>
          <nav className="flex gap-x-6 gap-y-3 flex-wrap justify-center">
            <Link href={'/'} className="text-sm font-light">
              Home
            </Link>
            <Link href={'/about'} className="text-sm font-light">
              About
            </Link>
            <Link href={'/discussion'} className="text-sm font-light">
              Discussion
            </Link>
            <Link href={'/blog'} className="text-sm font-light">
              Blog
            </Link>
            <Link href={'/contact'} className="text-sm font-light">
              Contact
            </Link>
          </nav>
        </div>

        <div className="w-[350px] space-y-2">
          <h3 className="text-sm font-medium">Get updates from antifraudism</h3>
          <Input
            type="email"
            className="rounded-none shadow-none"
            placeholder="Email"
          />
          <Button variant={'secondary'} className="w-full rounded-none">
            Subscribe
          </Button>
        </div>
      </MainWrapper>
    </footer>
  );
};

export default Footer;
