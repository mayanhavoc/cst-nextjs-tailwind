import { Inter } from 'next/font/google';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Navbar />
			<main
				className={`flex min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}>
				<Hero />
			</main>
			<Footer />
		</>
	);
}
