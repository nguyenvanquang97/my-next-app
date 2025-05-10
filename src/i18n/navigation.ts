import {createNavigation} from 'next-intl/navigation';

import LanguageLink from '@/components/LanguageLink';
import { routing } from './routing';
 
// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const {Link=LanguageLink, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);