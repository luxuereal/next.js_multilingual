'use client'
import {ReactNode} from 'react';
import '../styles/index.css';
import { usePathname } from 'next/navigation';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  const pathname = usePathname();
    return  children;
}