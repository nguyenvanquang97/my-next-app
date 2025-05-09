import {createNavigation} from 'next-intl/navigation';
import {routing} from './routing';
import LanguageLink from '@/components/LanguageLink';
 
// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {Link=LanguageLink, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);