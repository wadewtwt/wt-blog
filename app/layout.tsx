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
    title: "WT Blog",
    description: "Exploring the boundary between logical systems and artistic chaos.",
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
