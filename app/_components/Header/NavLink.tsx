import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../../_contexts/ThemeContext";
import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  onClick?: () => void;
};

export default function NavLink({ href, children, onClick }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const { colors, toggleTheme } = useTheme();
  

  return (
    <Link
      style={{ color: colors.text }}
      onClick={onClick}
      href={href}
      className={`text-gray-900 text-xl pb-2 pl-0 pr-0 block w-fit font-bold p-1 hover:text-accent-300 transition font-semibo ld ${
        isActive ? "border-blue-600 border-b-2" : ""
      }`}
    >
      {children}
    </Link>
  );
}
