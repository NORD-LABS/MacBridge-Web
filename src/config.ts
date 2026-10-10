// Single source for every outbound link. When the documentation PR
// (NORD-LABS/MacBridge-Project#1) is merged, set DOCS_REF to 'main'.
export const SITE = {
  name: 'MacBridge',
  org: 'NORD LABS',
  url: 'https://macbridge.iso-nord.tech',
  tagline: 'Mac software. iPad hardware.',
  subline: 'Exploring the space between.',
  description:
    'MacBridge is independent systems research by NORD LABS into whether unmodified ARM64 macOS apps could one day run locally on Apple Silicon iPads, through an original userspace compatibility layer.',
  parent: 'https://iso-nord.tech',
};

export const REPO = 'https://github.com/NORD-LABS/MacBridge-Project';
export const DOCS_PR = `${REPO}/pull/1`;
export const DOCS_REF = 'docs/northstar-project-atlas';

/** Link to a file in the public documentation at DOCS_REF. */
export const doc = (path: string) => `${REPO}/blob/${DOCS_REF}/${path}`;

export const NAV = [
  { href: '/research', label: 'Research' },
  { href: '/first-contact', label: 'First Contact' },
  { href: '/roadmap', label: 'Roadmap' },
  { href: '/docs', label: 'Docs' },
];
