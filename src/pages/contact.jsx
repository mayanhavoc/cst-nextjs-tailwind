import { Inter } from 'next/font/google';
import Layout from '@/Components/Layout';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

const Contact = () => {
	return (
		<Layout title='Contacto'>
			<section
				className={`flex min-h-screen flex-col p-16 items-center ${inter.className}`}>
				<h2 className='text-center text-3xl font-bold'>
					Canales de comunicación
				</h2>
				<div className='my-5'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 max-w-2xl'>
						<div className='bg-white shadow-md rounded-md overflow-hidden'>
							<Link href='mailto:cardanost@gmail.com' target='_blank'>
								<Image
									className='w-full h-48 object-contain p-4'
									src='/gmail-logo.png'
									alt='gmail'
								/>
							</Link>
							<div className='p-4'>
								<h3 className='text-lg font-bold mb-2'>Gmail</h3>
								<p className='text-gray-600 text-sm mb-4'>
									Comunícate con nosotros desde Gmail
								</p>
							</div>
						</div>
						<div className='bg-white shadow-md rounded-md overflow-hidden'>
							<Link
								href='https://linktr.ee/cardanosintecnicismos'
								target='_blank'>
								<Image
									className='w-full h-48 object-contain p-4'
									src='/linktree-logo.png'
									alt='Linktree'
								/>
							</Link>
							<div className='p-4'>
								<h3 className='text-lg font-bold mb-2'>Linktree</h3>
								<p className='text-gray-600 text-sm mb-4'>
									Encuentra todos los vínculos de Cardano Sin Tecnicismos en
									Linktree
								</p>
							</div>
						</div>
						<div className='bg-white shadow-md rounded-md overflow-hidden'>
							<Link href='https://discord.gg/kCWWtsN5' target='_blank'>
								<Image
									className='w-full h-48 object-contain p-4'
									src='/discord-logo.png'
									alt='Discord logo'
								/>
							</Link>
							<div className='p-4'>
								<h3 className='text-lg font-bold mb-2'>Discord</h3>
								<p className='text-gray-600 text-sm mb-4'>
									Ingresa a nuestro servidor en Discord
								</p>
							</div>
						</div>
						<div className='bg-white shadow-md rounded-md overflow-hidden'>
							<Link
								href='https://www.youtube.com/channel/UCdYflNYOIZbEzLzSFztGZsA'
								target='_blank'>
								<Image
									className='w-full h-48 object-contain p-4'
									src='/yt_logo_rgb_light.png'
									alt='Youtube logo'
								/>
							</Link>
							<div className='p-4'>
								<h3 className='text-lg font-bold mb-2'>Discord</h3>
								<p className='text-gray-600 text-sm mb-4'>
									Encuentra tutoriales y videos sobre Cardano Sin Tecnicismos en
									Youtube
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Contact;
