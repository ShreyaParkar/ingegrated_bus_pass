export default function PassCard({ pass }) {
    const isExpired = new Date() > new Date(pass.expiryDate);
  
    return (
      <div style={{
        backgroundColor: isExpired ? '#ccc' : '#00bfff',
        color: '#fff',
        padding: '1rem',
        borderRadius: '8px'
      }}>
        <h3>{pass.route} - {pass.type} Pass</h3>
        <p>Unique ID: {pass.id}</p>
        <p>Expires on: {new Date(pass.expiryDate).toLocaleDateString()}</p>
        {isExpired && <p style={{ color: '#ff0000' }}>Expired - Please renew</p>}
      </div>
    );
  }
  