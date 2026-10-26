import { useEffect } from 'react';

const SITE_NAME = import.meta.env.VITE_SITE_NAME || 'Gurukul School';
const DEFAULT_DESCRIPTION =
  'Gurukul School blends the values of traditional learning with labs, coding and hands-on projects, so students grow curious, kind and ready for the world they will build.';

// Sets the browser tab title and the meta description for the current page.
// Always writes the description, so the previous page's one never lingers.
export default function useDocumentTitle(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
  }, [title, description]);
}
