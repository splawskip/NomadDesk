import type { Metadata } from 'next'
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NomadDesk -> Remote first Job Board',
  description: 'NomadDesk -> Remote first Job Board',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
	// Get theme cookie.
  const theme = cookies().get('theme')?.value ?? 'light';
	// Build root layout.
  return (
	<html lang="en" data-color-theme={theme} className="scroll-smooth overflow-x-hidden min-h-screen">
		<body className={clsx(inter.className, 'min-h-screen bg-white-100 dark:bg-gray-900 flex flex-col')}>
			<Header theme={theme}/>
				{children}
			<Footer/>
		</body>
	</html>
  )
}
