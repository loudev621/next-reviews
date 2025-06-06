'use client';
import { useState } from 'react';
import { LinkIcon } from '@heroicons/react/20/solid';

export default function ShareLinkButton() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(window.location.href);
    setClicked(true);
    setTimeout(() => setClicked(false), 1500);
  };

  console.log('[ShareLinkButton] clicked: ', clicked);
  return (
    <button
      onClick={handleClick}
      className='border flex gap-1 items-center rounded px-3 py-1 text-slate-600 text-sm hover:bg-blue-200 hover:text-slate-700'
    >
      <LinkIcon className='h-4 w-4' />
      {clicked ? 'Linkded! Copied!' : 'Share Link'}
    </button>
  );
}
