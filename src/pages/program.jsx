import { Inter } from 'next/font/google';
import Layout from '@/Components/Layout';

import Link from 'next/link';
import Image from 'next/image';
import yt_logo_rgb_light from '../assets/';

const inter = Inter({ subsets: ['latin'] });

const Program = () => {
	return (
		<Layout title='Programa'>
			<section
				className={`flex min-h-screen flex-col items-center p-16 ${inter.className}`}>
				<h2 className='text-center text-3xl font-bold'>
					¿En qué consiste el programa?
				</h2>
				<div className='h-max max-w-lg flex flex-col justify-center items-center'>
					<p className='my-3'>
						El programa consiste en talleres semanales donde aprendemos a usar
						las diferentes herramientas Web3 de el ecosistema Cardano, desde la
						creación de billeteras digitales (e.g., Nami) hasta la delegación
						del <span class='italic'>stake</span> a un{' '}
						<span class='italic'>stake pool</span>.
					</p>
					<h3 className='text-center text-2xl font-bold my-5'>Módulos</h3>
					<table className='table-auto my-5 border-separate border-spacing-2 border'>
						<thead>
							<tr>
								<th className='border border-slate-300'>No.</th>
								<th className='border border-slate-300'>Título</th>
								<th className='border border-slate-300'>Contenido</th>
							</tr>
						</thead>
						<tbody>
							<tr className='my-5'>
								<td className='border border-slate-300 text-center'>1</td>
								<td className='border border-slate-300 text-center'>Web3</td>
								<td className='border border-slate-300'>
									<ul>
										<li>Definición</li>
										<li>
											Decentralización, tecnología blockchain y smart contracts
										</li>
										<li>dApps y otras aplicaciones</li>
									</ul>
								</td>
							</tr>

							<tr className='my-5'>
								<td className='border border-slate-300 text-center'>2</td>
								<td className='text-center border border-slate-300'>
									Billetera Nami, el testnet de Cardano y tAda
								</td>
								<td className='border border-slate-300'>
									<ul>
										<li>Creación y manejo de billeteras digitales</li>
										<li>tAda y los testnets de Cardano</li>
										<li>Envío de tAda a otras billeteras</li>
									</ul>
								</td>
							</tr>

							<tr>
								<td className='border border-slate-300 text-center'>3</td>
								<td className='text-center border border-slate-300'>
									Billetera GameChanger, tokens y NFTs
								</td>
								<td className='border border-slate-300'>
									<ul>
										<li>Diferencias entre tokens y NFTs</li>
										<li>
											Acuñación de tokens y NFTs con la billetera GameChanger
										</li>
									</ul>
								</td>
							</tr>

							<tr>
								<td className='border border-slate-300 text-center'>4</td>
								<td className='text-center border border-slate-300'>
									Billetera Eternl y el modelo eUTxO de Cardano
								</td>
								<td className='border border-slate-300'>
									<ul>
										<li>El modelo UTxO de Bitcoin</li>
										<li>El modelo de cuentas de Ethereum</li>
										<li>El modelo eUTxO de Cardano</li>
									</ul>
								</td>
							</tr>

							<tr>
								<td className='border border-slate-300 text-center'>5</td>
								<td className='text-center border border-slate-300'>
									Billetera Eternl, el stake, staking y staking pools
								</td>
								<td className='border border-slate-300'>
									<ul>
										<li>Que es el proof of stake</li>
										<li>Stake, staking y stake pools</li>
									</ul>
								</td>
							</tr>
						</tbody>
					</table>

					<div className='container my-5'>
						<p className='my-3'>
							El programa consiste en talleres semanales donde aprendemos a usar
							las diferentes herramientas Web3 de el ecosistema Cardano, desde
							la creación de billeteras digitales (e.g., Nami) hasta la
							delegación del <span class='italic'>stake</span> a un{' '}
							<span class='italic'>stake pool</span>.
						</p>
						<p className='my-3'>
							En nuestro canal de{' '}
							<Link
								href='https://www.youtube.com/channel/UCdYflNYOIZbEzLzSFztGZsA'
								target='_blank'>
								<span className='inline-flex'>
									<Image
										src='/yt_logo_rgb_light.png'
										alt='youtube logo red'
										width={50}
										height={50}
										priority
									/>
								</span>
							</Link>{' '}
							puedes encontrar contenido con fines educativos y tutoriales
							cortos con instrucciones sobre como:
						</p>
						<ul>
							<li>Crear una billetera</li>
							<li>Obtener y guardar una frase semilla</li>
							<li>Configurar el testnet</li>
							<li>Acuñar un token</li>
							<li>Otros...</li>
						</ul>
						<p className='my-3'>
							El curso se enfoca en crear contenido sencillo, enfocado en el uso
							práctico de las herramientas sin profundizar en la tecnología
							subyacente más de lo absolutamente necesario como para que el
							usuario pueda hacer un uso responsable de ésta.
						</p>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default Program;
