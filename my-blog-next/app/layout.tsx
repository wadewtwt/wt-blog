import type { Metadata } from "next";
import { Space_Grotesk, Italiana } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
    subsets: ["latin"],
    variable: "--font-italiana",
    weight: ["400"],
});

export const metadata: Metadata = {
    title: {
        default: "WT Blog | 创意开发者作品集",
        template: "%s | WT Blog",
    },
    description: "WT Blog 专注于探索逻辑系统与艺术混沌的边界，分享前沿 Web 技术与数字艺术。",
    keywords: ["Next.js", "React", "前端开发", "设计", "作品集", "Digital Artisan"],
    authors: [{ name: "WT" }],
    creator: "WT",
    openGraph: {
        type: "website",
        locale: "zh_CN",
        url: "https://your-domain.com",
        title: "WT Blog | 构建会呼吸的数字体验",
        description: "探索逻辑系统与艺术混沌的边界。",
        siteName: "WT Blog",
    },
    twitter: {
        card: "summary_large_image",
        title: "WT Blog | 创意开发者作品集",
        description: "探索逻辑系统与艺术混沌的边界。",
    },
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN" className="scroll-smooth">
            <body className={`${spaceGrotesk.variable} ${italiana.variable} font-sans antialiased`}>
                {children}
            </body>
        </html>
    );
}
