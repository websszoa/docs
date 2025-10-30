import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";

export const metadata = {
  title: {
    default: "WebssDocs | 개발자를 위한 문서 허브",
    template: "%s | WebssDocs",
  },
  description:
    "WebssDocs는 개발자에게 필요한 모든 기술 문서와 튜토리얼 정보를 한곳에서 제공합니다. Next.js, React, Node.js, AWS 등 최신 개발 가이드를 찾아보세요.",
  keywords: [
    "개발문서",
    "WebssDevDocs",
    "개발자 튜토리얼",
    "Next.js 문서",
    "React 가이드",
    "Node.js 참고자료",
    "AWS 설정",
    "오픈소스 가이드",
  ],
  authors: [{ name: "webstoryboy", url: "https://webstoryboy.com" }],
  creator: "webstoryboy Studio",
  publisher: "webstoryboy DevDocs",
  openGraph: {
    title: "WebssDocs | 개발자를 위한 문서 허브",
    description:
      "WebssDocs는 개발자에게 필요한 모든 기술 문서와 튜토리얼 정보를 한곳에서 제공합니다.",
    url: "https://webstoryboy.com",
    siteName: "WebssDocs",
    images: [
      {
        url: "https://webstoryboy.com/webssdev.png",
        width: 1200,
        height: 630,
        alt: "DevDocs 오픈그래프 미리보기 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebssDocs | 개발자를 위한 문서 허브",
    description:
      "WebssDocs는 최신 기술 스택과 오픈소스 프로젝트에 대한 깊이 있는 문서를 제공합니다.",
    creator: "@webstoryboy",
    images: ["https://webstoryboy.com/webssdev.png"],
  },
  metadataBase: new URL("https://webstoryboy.com"),
  alternates: {
    canonical: "https://webstoryboy.com",
  },
};

const banner = (
  <Banner storageKey="some-key">WebssDocs 4.0 is released 🎉</Banner>
);
const navbar = (
  <Navbar
    logo={<b>WebssDocs</b>}

    projectLink="https://github.com/websszoa"
  />
);
const footer = <Footer>{new Date().getFullYear()} © WebssDocs.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="ko"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          editLink={null}
          feedback={{content: null}}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
