'use client';

import { useEffect, useState } from "react";
import MobileMenu from '@/components/dashboard/MobileMenu';
import DesktopMenu from '@/components/dashboard/DesktopMenu';

export default function DashboardMenu() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 767);
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    
    return(
        <>
          {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </>
    );
}