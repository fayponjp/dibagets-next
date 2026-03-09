import type { Metadata } from 'next';
import { Poppins, Patua_One } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

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
            <body className='flex min-h-screen relative flex-col items-center font-poppins'>
                <Header />
                <main className='flex w-full max-w-5xl flex-col py-8'>
                    {children}
                </main>
                <footer className='absolute bottom-0 py-4'>
                    <div className='container'>© DiBagets 2025</div>
                </footer>
            </body>
        </html>
    );
}
