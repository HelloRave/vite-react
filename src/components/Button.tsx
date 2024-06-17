import { ReactNode } from 'react';

type TButton = Readonly<{
  children: ReactNode;
  isDisabled?: boolean;
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
}>;

export default function Button({
  children,
  isDisabled = false,
  type = 'button',
  onClick,
}: TButton) {
  return (
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className="w-full rounded-xl bg-blue px-3 py-2 font-inter-bold text-sm text-white
                    hover:bg-blue-dark disabled:bg-slate-300"
    >
      {children}
    </button>
  );
}
