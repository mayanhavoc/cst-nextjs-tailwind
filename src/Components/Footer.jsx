import Image from 'next/image';
import logo from '../assets/cst-logo.png';

const Footer = () => {
	return (
		<footer className='bg-gray-800'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-gray-300 text-sm mt-10 flex justify-center items-center'>
				<Image src={logo} alt='cst logo' width={30} height={30} priority />
				<span>© 2023 CST. All rights reserved</span>
			</div>
		</footer>
	);
};
export default Footer;
