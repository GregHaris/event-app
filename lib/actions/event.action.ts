'use server';

import { Query } from 'mongoose';

import { CreateEventParams } from '@/types';
import { connectToDatabase } from '../database';
import { handleError } from '../utils';
import Category from '../database/models/category.model';
import Event, { IEvent } from '../database/models/event.model';
import User from '../database/models/user.model';

const populateEvent = async (query: Query<IEvent | null, IEvent>) => {
  return query
    .populate({
      path: 'organizer',
      model: User,
      select: '_id firstName lastName',
    })
    .populate({ path: 'category', model: Category, select: '_id name' });
};

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

export const getEventById = async (eventId: string) => {
  try {
    await connectToDatabase();

    const event = await populateEvent(Event.findById(eventId));

    if (!event) {
      throw new Error('Event not found');
    }

    return JSON.parse(JSON.stringify(event));
  } catch (error) {
    handleError(error);
  }
};
