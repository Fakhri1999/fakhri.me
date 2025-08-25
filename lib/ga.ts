// Extend window interface to include gtag
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: any) => void;
  }
}

// log the pageview with their URL
export const pageview = (url: string) => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS!, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }: { action: string; params: any }) => {
  window.gtag('event', action, params);
};

export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;