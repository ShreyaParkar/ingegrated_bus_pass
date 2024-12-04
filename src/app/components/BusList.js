export default function BusList({ buses }) {
    return (
      <div>
        <h2>Available Buses</h2>
        <ul>
          {buses.map(bus => (
            <li key={bus._id}>
              {bus.route}: {bus.start} - {bus.end} ({bus.availableSeats} seats available)
            </li>
          ))}
        </ul>
      </div>
    );
  }
  