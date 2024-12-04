export default function TicketHistory({ tickets }) {
    return (
      <div>
        <h2>Ticket History</h2>
        <ul>
          {tickets.map(ticket => (
            <li key={ticket._id}>
              Route: {ticket.route} on {new Date(ticket.date).toLocaleDateString()}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  