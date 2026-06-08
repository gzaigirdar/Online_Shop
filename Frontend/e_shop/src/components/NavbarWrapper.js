'use client'
import { usePathname } from 'next/navigation';
import Navbar from '@/components/navbar/Navbar';

export default function NavbarWrapper() {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith('/DashBoard');
  
  if (isDashboard) return null;
  
  return <Navbar />;
}