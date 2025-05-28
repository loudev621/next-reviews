import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link
            href='/'
            className='font-bold font-orbitron text-orange-700 hover:underline'
          >
            Indie Gamer
          </Link>
        </li>
        <li className='ml-auto'>
          <Link
            href='/reviews'
            className='font-orbitron text-orange-700 hover:underline'
          >
            Reviews
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='font-orbitron text-orange-700 hover:underline'
            prefetch={false}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
