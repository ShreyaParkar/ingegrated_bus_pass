import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem' }}>
        <li><Link href="/home">Home</Link></li>
        <li><Link href="/pass">Pass</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
}
