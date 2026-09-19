export const metadata = {
  alternates: {
    canonical: '/search',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({ children }) {
  return children;
}
