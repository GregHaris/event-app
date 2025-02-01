'use client';

import { IEvent } from '@/lib/database/models/event.model';
import { SignedIn, SignedOut, SignInButton, useUser } from '@clerk/nextjs';
import { Button } from '../ui/button';
import Checkout from './Checkout';

const CheckoutButton = ({ event }: { event: IEvent }) => {

  const { user } = useUser();

  const userId = user?.publicMetadata.userId as string;

  const hasEventFinished = new Date(event.endDateTime) < new Date();

  return (
    <div className="flex item-center gap-3">
      {hasEventFinished ? (
        <p className="p-2 text-red-400">
          {' '}
          Sorry, tickets are no longer available.
        </p>
      ) : (
        <>
          <SignedOut>
            <SignInButton>
              <Button
                className="button cursor-pointer rounded-full"
                size={'lg'}
              >
                Get Tickets
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
      )}
    </div>
  );
};

export default CheckoutButton;
