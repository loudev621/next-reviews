import { orbitron } from '/app/fonts';

export default function Heading({ children }) {
  return (
    <>
      <h1 className='text-2xl font-orbitron pb-3 font-bold'>{children}</h1>
    </>
  );
}
