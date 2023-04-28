import Layout from '@/Components/Layout';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const About = () => {
	return (
		<Layout title='Acerca de la iniciativa'>
			<section
				className={`flex min-h-screen flex-col p-16 items-center ${inter.className}`}>
				<h2 className='text-4xl font-bold dark:text-white/90'>
					Acerca de la iniciativa
				</h2>
				<div className='h-max max-w-lg flex flex-col justify-center items-center'>
					<div className='container  my-5 '>
						<p>
							Cardano Sin Tecnicismos busca facilitar espacios en donde se usa{' '}
							<span className='italic'>tAda</span> del Grifo{' '}
							<span className='italic'>testnet</span> para descubrir diferentes
							posibles usos del ecosistema <span className='italic'>Web3</span>{' '}
							de Cardano. Nuestro contenido está orientado a usuarios con poca
							experiencia/habilidad técnica y a entusiastas de la comunidad
							Cardano en general.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default About;
