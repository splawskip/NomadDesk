import type { Metadata } from 'next'
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import QueryProvider from '@/lib/react-query/QueryProvider';
import Footer from '@/components/Footer';

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
	<QueryProvider>
		<html lang="en" data-color-theme={theme}>
		<body className={`${inter.className} flex flex-col min-h-screen`}>
		<Header theme={theme}/>
			{children}
		<Footer/>
		</body>
		</html>
	</QueryProvider>
  )
}
