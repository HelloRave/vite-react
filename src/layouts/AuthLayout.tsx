import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="my-10 flex justify-center">
      <div className="flex w-96 flex-col items-center justify-center gap-6 p-6 shadow-md">
        <Outlet />
      </div>
    </div>
  );
}
