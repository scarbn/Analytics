import Link from 'next/link';
import './styles.css'; // Import your CSS

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Site</h1>
      <p>This is a sleek and minimalistic website.</p>
      <Link href="/documents" className="button">View Documents</Link>
    </div>
  );
}
