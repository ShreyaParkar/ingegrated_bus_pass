import mongoose from 'mongoose';

const busSchema = new mongoose.Schema({
  routeName: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
  availableSeats: { type: Number, required: true }
});

export default mongoose.models.Bus || mongoose.model('Bus', busSchema);
