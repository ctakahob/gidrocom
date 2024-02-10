import { NextSeo } from 'next-seo';
import Head from 'next/head';
import HomePage from '@/home';

export default function Home() {
  const pageTitle = 'Гидроизоляция в Ростове и Таганроге | Ростовская область, Россия';
  const pageDescription = 'Компания Гидроком-Юг предлагает профессиональные услуги по гидроизоляции в Ростове, Таганроге и по всей Ростовской области. Мы являемся лидерами в индустрии гидроизоляции в России.';
  const pageKeywords = 'гидроизоляция, Ростов, Таганрог, Ростовская область, Россия, строительство, ремонт, крыши, бассейны, влагозащита';
  const pageUrl = 'https://ip-gerasimov-in.ru/';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
      </Head>
      <NextSeo
        title={pageTitle}
        description={pageDescription}
        canonical={pageUrl}
        openGraph={{
          url: pageUrl,
          title: pageTitle,
          description: pageDescription,
        }}
      />
      <HomePage />
    </>
  );
}
