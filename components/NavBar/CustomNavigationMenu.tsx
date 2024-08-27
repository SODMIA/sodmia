"use client"
import * as React from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function CustomNavigationMenu() {
  const pathname = usePathname();

  const isHomePage = pathname === '/';

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link 
            href={isHomePage ? "#services" : "/#services"} 
            legacyBehavior 
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Servicios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/portfolio" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Portfolio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/casos-de-exito" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Casos de éxito
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/contact" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contacto
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileNavigationMenu({ setIsMenuOpen }: { setIsMenuOpen: (isOpen: boolean) => void }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="flex flex-col space-y-4">
      <Link 
        href={isHomePage ? "#services" : "/#services"} 
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="block py-2 px-4 text-sm hover:bg-gray-100">Servicios</span>
      </Link>
      <Link href="/portfolio" onClick={() => setIsMenuOpen(false)}>
        <span className="block py-2 px-4 text-sm hover:bg-gray-100">Portfolio</span>
      </Link>
      <Link href="/casos-de-exito" onClick={() => setIsMenuOpen(false)}>
        <span className="block py-2 px-4 text-sm hover:bg-gray-100">Casos de éxito</span>
      </Link>
      <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
        <span className="block py-2 px-4 text-sm hover:bg-gray-100">Contacto</span>
      </Link>
    </div>
  );
}