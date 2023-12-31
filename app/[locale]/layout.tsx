"use client";
import { ThemeProvider } from "next-themes";
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import clsx from 'clsx';

// import "../../styles/index.css";

type Props = {
  children: ReactNode;
  params: {locale: string};
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'es', 'pt'].map((locale) => ({locale}));
}

// export async function generateMetadata({params: {locale}}: Props) {
//   const messages = await getMessages(locale);

//   const t = createTranslator({locale, messages});

//   return {
//     title: 'Hello'
//   };
// }
export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
 
  const messages = await getMessages(locale);
  //const pathname = usePathname();
    return (
      <html suppressHydrationWarning lang={locale}>
        <body className={clsx('flex h-full flex-col dark:bg-black')}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light"> 
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    );
}

