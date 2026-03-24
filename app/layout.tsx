import type { Metadata } from 'next';
import { Poppins, Patua_One } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';

const poppins = Poppins({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--font-poppins',
});

const patua_one = Patua_One({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-patua_one',
});

export const metadata: Metadata = {
    title: 'Dibagets?',
    description: 'Pinoy slang dictionary',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='en'
            className={`${poppins.variable} ${patua_one.variable} antialiased`}
        >
            <body className=' min-h-screen relative grid grid-rows-[auto_1fr_auto] font-poppins '>
                <Header />
                <main className='flex w-full max-w-6xl mx-auto flex-col py-8 '>
                    {children}
                </main>
                <footer className=' bottom-0 py-4 bg-red-950/80 w-full'>
                    <div className='container text-white max-w-6xl mx-auto'>© DiBagets 2025</div>
                </footer>
            </body>
        </html>
    );
}
