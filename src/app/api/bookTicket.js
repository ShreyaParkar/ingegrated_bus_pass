import dbConnect from '../../utils/dbConnect';
import Ticket from '../../models/Ticket';

export default async function handler(req, res) {
  await dbConnect();

  const { userId, busId, validUntil } = req.body;

  const newTicket = new Ticket({
    userId,
    busId,
    validUntil: new Date(validUntil)
  });

  await newTicket.save();

  res.status(201).json({ message: 'Ticket booked successfully' });
}
