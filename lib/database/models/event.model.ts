
import { Document, Schema, model, models } from 'mongoose';

export interface IEvent extends Document {
  title: string;
  description?: string;
  location?: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  updatedAt: Date;
  price?: number;
  isFree: boolean;
  url?: string;
  category: Schema.Types.ObjectId | string;
  organizer: Schema.Types.ObjectId | string;
}

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  imageUrl: { type: String, required: true },
  startDate: { type: Date, required: true, default: Date.now },
  endDate: { type: Date, required: true, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  price: { type: Number },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
  organizer: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Event = models.Event || model('Event', EventSchema);

export default Event;
