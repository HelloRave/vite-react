import Logo from '@/assets/logo.svg?react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="sticky top-0 z-1 bg-white">
      <div className="flex items-center justify-between px-10 py-1">
        <Logo width={174} className="cursor-pointer" />
        <div className="flex gap-6">
          <h3 className="font-solway-medium">Community list</h3>
          <Link
            to={'/login'}
            className="cursor-pointer font-solway-medium text-xl"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
