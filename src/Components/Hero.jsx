import Image from 'next/image';
import logo from '/images/cst-logo.png';

const Hero = () => {
	return (
		<div className='hero-div'>
			<Image src={logo} alt='logo' width={300} height={300} />
			<h1 className='text-center text-4xl font-bold'>
				Cardano Sin Tecnicismos
			</h1>
			<p className='text-base text-center'>Aprende a usar Cardano jugando</p>
		</div>
	);
};
export default Hero;
