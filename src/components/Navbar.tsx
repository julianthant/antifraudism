import Link from 'next/link';
import MainWrapper from './MainWrapper';

import { buttonVariants } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="shadow-xl z-50 bg-slate-950 text-white">
      <MainWrapper className="py-3 flex items-center justify-between">
        <h1 className="text-2xl font-semibold tracking-widest">ANTIFRADUISM</h1>
        <nav className="flex justify-between items-center w-[600px] text-sm">
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

          <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

          {user ? (
            <div className="space-x-3 flex items-center">
              <Link
                href="/api/auth/logout"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'outline',
                  className: 'bg-transparent',
                })}
              >
                Sign out
              </Link>

              <Link
                href="/configure/upload"
                className={buttonVariants({
                  size: 'sm',
                  className:
                    'hidden sm:flex items-center gap-1 bg-white text-black hover:bg-gray-200',
                })}
              >
                Dashboard
                <ArrowRightIcon className="ml-1.5 h-5 w-5" />
              </Link>
            </div>
          ) : (
            <div className="space-x-3">
              <Link
                href="/api/auth/login"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'secondary',
                })}
              >
                Login
              </Link>

              <Link
                href="/api/auth/register"
                className={buttonVariants({
                  size: 'sm',
                  variant: 'outline',
                  className: 'bg-transparent',
                })}
              >
                Sign up
              </Link>
            </div>
          )}
        </nav>
      </MainWrapper>
    </div>
  );
};

export default Navbar;
