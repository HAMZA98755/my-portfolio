import { ReactNode } from "react";
import HeaderClient from './HeaderClient'
export default function Header({ lang }: { lang: 'ar' | 'en' }) {
  return (
    <HeaderClient lang= {lang} ></HeaderClient>
  );
}
