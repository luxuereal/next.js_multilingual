"use client";
import { ThemeProvider } from "next-themes";
import {notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {ReactNode} from 'react';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../../styles/index.css";

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
  return ['en', 'de'].map((locale) => ({locale}));
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

  return (
    <html lang={locale}>
      <body className='flex h-full flex-col dark:bg-black'>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark"> 
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



