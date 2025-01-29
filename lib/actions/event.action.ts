'use server';

import { connectToDatabase } from '../database';
import { CreateEventParams } from '@/types';
import { handleError } from '../utils';
import Event from '../database/models/event.model';
import User from '../database/models/user.model';

export const CreateEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
    await connectToDatabase();

    const organizer = await User.findById(userId);

    if (!organizer) {
      throw new Error('Organizer not found');
    }

    const newEvent = await Event.create({
      ...event,
      category: event.categoryId,
      organizer: userId,
    });

    // Dummy use case for 'path'
    console.log(`Event created, redirect to: ${path}`);

    return JSON.parse(JSON.stringify(newEvent));
  } catch (error) {
    handleError(error);
  }
};
