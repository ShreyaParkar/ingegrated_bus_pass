import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  busId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bus', required: true },
  route: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

export default mongoose.models.Ticket || mongoose.model
