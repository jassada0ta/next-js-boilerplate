import Link from 'next/link';
// import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

function PageHeader() {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500">Pantip</div>

        {/* Search bar */}
        <div className="flex w-1/3 items-center rounded-full bg-gray-100 p-2">
          <input className="grow bg-transparent px-2 focus:outline-none" type="text" placeholder="ค้นหาบน Pantip" />
          <button className="rounded-full bg-red-500 px-4 py-2 text-white">Search</button>
        </div>

        {/* Profile and Menu */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-gray-700"
          >
            ตั้งกระทู้
          </Link>
          <Link
            href="/"
            className="text-gray-700"
          >
            คอมมูนิตี้
          </Link>
          <div className="flex items-center space-x-2">
            <Link
              href="/"
              className="text-gray-700"
            >
              เข้าสู่ระบบ / สมัครสมาชิก
            </Link>
          </div>
        </div>
      </div>
    </nav>
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
