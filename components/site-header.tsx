'use client';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function SiteHeader() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const underlineClasses = [
    'decoration-4 decoration-underlineRed',
    'decoration-4 decoration-underlineBlue',
    'decoration-4 decoration-underlineGreen',
    'decoration-4 decoration-underlineOrange',
    'decoration-4 decoration-underlinePurple',
  ];

  const getRandomUnderlineClass = () => {
    return underlineClasses[
      Math.floor(Math.random() * underlineClasses.length)
    ];
  };
  return (
    <section className="flex justify-center">
      <nav className="flex items-center space-x-6 text-sm font-medium flex-wrap">
        {[
          '/',
          '/about',
          '/experience',
          '/services',
          '/projects',
          '/skills',
          '/contact',
        ].map(path => (
          <Link
            key={path}
            href={path}
            className={cn(
              `transition-colors hover:${getRandomUnderlineClass()}`,
              isActive(path)
                ? `text-zinc-100 underline font-extrabold ${getRandomUnderlineClass()}`
                : 'text-zinc-100'
            )}
          >
            {path.substring(1) || 'home'}
          </Link>
        ))}
        <Link
          href={`mailto:${siteConfig.email}`}
          className={`text-zinc-100 transition-colors hover:${getRandomUnderlineClass()}`}
        >
          Email
        </Link>
      </nav>
    </section>
  );
}

export default SiteHeader;
