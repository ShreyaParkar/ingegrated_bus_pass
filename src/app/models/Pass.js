import mongoose from 'mongoose';

const passSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  route: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

export default mongoose.models.Pass || mongoose.model('Pass', passSchema);
