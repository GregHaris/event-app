import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs';
import { Button } from '@ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between ">
        <Link href={'/'} className="w-36">
          {' '}
          <Image
            src="/assets/images/logo.svg"
            alt="logo image"
            width={128}
            height={38}
          />
        </Link>

        <div className="flex w-32 justify-end gap-3 mr-4">
          <SignedOut>
            <Button asChild className="rounded-full" size={'lg'}>
              <SignInButton />
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
