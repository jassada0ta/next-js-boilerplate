import Link from 'next/link';
// import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { PageHamburgerMenu } from '@/components/PageHamburgerMenu';

function PageHeader() {
  return (
    <header className="bg-white py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Left Logo */}
        <div className="text-xl font-bold text-gray-800">
          <a href="/">Pantip</a>
        </div>

        {/* Center Search Bar (hidden on mobile, shown on medium and above) */}
        <div className="hidden max-w-lg grow items-center space-x-4 rounded-full bg-gray-100 px-4 py-2 shadow-sm md:flex">
          <input
            type="text"
            placeholder="ค้นหาบน Pantip"
            className="flex-1 bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
          />
          <button className="rounded-full bg-red-500 p-2 text-white">
            Search
          </button>
        </div>

        <PageHamburgerMenu />
      </div>
    </header>
  );
}

function PageFooter() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <p className="text-gray-700">© 2024 Internet Marketing co., ltd</p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-600 hover:underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:underline"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:underline"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('RootLayout');
  return (
    <>
      <PageHeader />
      {props.children}
      <PageFooter />
    </>
  );
}
