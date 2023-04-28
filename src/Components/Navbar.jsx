import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import logo from '../assets/cst-logo.png';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<Link href='/' className='text-white font-bold text-lg'>
							<Image
								src={logo}
								alt='cst logo'
								width={50}
								height={50}
								priority
							/>
						</Link>
					</div>
					<div className='hidden md:block'>
						<div className='ml-10 flex items-baseline space-x-4'>
							<Link
								href='/about'
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Acerca de
							</Link>
							<Link
								href='/program'
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Programa
							</Link>
							<Link
								href='/blog'
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Módulos
							</Link>
							<Link
								href='/contact'
								className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
								Contacto
							</Link>
						</div>
					</div>
					<div className='-mr-2 flex md:hidden'>
						<button
							onClick={toggleNavbar}
							type='button'
							className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
							aria-controls='mobile-menu'
							aria-expanded='false'>
							<span className='sr-only'>Open main menu</span>
							{!isOpen ? (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M4 6h16M4 12h16M4 18h16'
									/>
								</svg>
							) : (
								<svg
									className='block h-6 w-6'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									aria-hidden='true'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<div
				className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
				id='mobile-menu'>
				<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
					<Link
						href='/'
						className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
						Inicio
					</Link>
					<Link
						href='/about'
						className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
						Acerca de
					</Link>
					<Link
						href='/program'
						className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
						Programa
					</Link>
					<Link
						href='/blog'
						className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
						Módulos
					</Link>
					<Link
						href='/contact'
						className='text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
						Contacto
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
