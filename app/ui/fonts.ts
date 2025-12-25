import { Inter, Cairo, Plus_Jakarta_Sans } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
export const cairo = Cairo({ subsets: ['arabic'], weight: ['400', '700', '800'], variable: '--font-cairo', display: 'swap' });
export const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-jakarta', display: 'swap' });

