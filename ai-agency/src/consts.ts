export const SITE = {
  name: 'VocalBeam',
  site: import.meta.env.SITE_URL || 'https://marketing.simonbalfe.com',
  logo: '/logo.svg',
  description: 'Never lose another lead. AI agents that answer calls, book appointments, and close deals while you sleep.',
};

export const GOOGLE_SITE_VERIFICATION_ID = '';

export const METADATA: {
  title: { default: string; template: string };
  description: string;
  robots: { index: boolean; follow: boolean };
  openGraph: { site_name: string; images: { url: string; width: number; height: number }[]; type: string };
  twitter: { handle: string; site: string; cardType: string };
} = {
  title: {
    default: SITE.name,
    template: `%s — ${SITE.name}`
  },
  description: SITE.description,
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    site_name: SITE.name,
    images: [{ url: `${SITE.site}/og-image.png`, width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    handle: '@simonbalfe',
    site: '@simonbalfe',
    cardType: 'summary_large_image'
  }
};

export const I18N = { language: 'en', textDirection: 'ltr' };

export const NAVIGATION = {
  links: [
    { label: 'Features', href: '/#features' },
    { label: 'How it Works', href: '/#workflows' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Blog', href: '/blog' },
  ],
  cta: { label: 'Get Started', href: '' },
  loginLabel: 'Log in',
};

export const HERO = {
  badge: '50+ businesses stopped losing leads',
  headline: 'Never Lose Another Lead. Your AI Works While You Sleep.',
  subheadline: 'Every missed call is money walking out the door. Our AI agents answer instantly, book appointments, and close deals around the clock.',
  primaryCta: { label: 'See It In Action', href: '/demo' },
  secondaryCta: { label: 'Talk to a Human', href: '#workflows' },
  showAvatars: true,
};

export const PRICING = {
  title: 'Simple Pricing',
  subtitle: 'Choose the plan that works for you',
  tiers: [
    {
      name: 'Free',
      price: 0,
      period: 'mo',
      description: 'Perfect for getting started',
      features: ['Feature one', 'Feature two', 'Basic support'],
      cta: { label: 'Start Free', href: '' },
      highlighted: false,
    },
    {
      name: 'Pro',
      price: 29,
      originalPrice: 49,
      period: 'mo',
      description: 'For growing teams',
      badge: 'Popular',
      features: ['Everything in Free', 'Advanced features', 'Priority support', 'API access'],
      cta: { label: 'Get Started', href: '' },
      highlighted: true,
    },
  ],
};

export const CTA = {
  title: 'Stop Leaving Money on the Table',
  subtitle: 'Every hour you wait, another lead goes cold.',
  button: { label: 'See It In Action', href: '/demo' },
  note: 'Free demo, no strings attached',
};

export const APPS = {
  blog: {
    isEnabled: true,
    postsPerPage: 6,
    post: { isEnabled: true, permalink: '/blog/%slug%', robots: { index: true } },
    list: { isEnabled: true, pathname: 'blog', robots: { index: true } },
    tag: { isEnabled: true, pathname: 'blog/tag', robots: { index: false } },
    isRelatedPostsEnabled: true,
    relatedPostsCount: 4
  }
};

export const UI = { theme: 'light:only' };

export const SITE_TITLE = SITE.name;
export const SITE_DESCRIPTION = SITE.description;
