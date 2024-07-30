import Link from 'next/link';
import MainWrapper from './MainWrapper';

import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <div className="shadow-xl z-50">
      <MainWrapper className="py-3 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-widest">ANTIFRADUISM</h1>
        <nav className="flex justify-between items-center w-[550px] text-sm">
          <Link href={'/'} className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link href={'/about'} className="hover:underline underline-offset-4">
            About
          </Link>
          <Link
            href={'/discussion'}
            className="hover:underline underline-offset-4"
          >
            Discussion
          </Link>
          <Link href={'/blog'} className="hover:underline underline-offset-4">
            Blog
          </Link>
          <Link
            href={'/contact'}
            className="hover:underline underline-offset-4"
          >
            Contact
          </Link>
          <div className="space-x-3">
            <Button>Login</Button>
            <Button variant={'outline'} className="hover:bg-sky-100">
              Sign up
            </Button>
          </div>
        </nav>
      </MainWrapper>
    </div>
  );
};

export default Navbar;
