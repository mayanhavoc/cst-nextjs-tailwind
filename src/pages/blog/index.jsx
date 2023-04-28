import Layout from '@/Components/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import { getAllPosts } from '@/api/index';

export default function Modules({ posts }) {
	return (
		<Layout>
			<section
				className={`flex min-h-screen flex-col p-16 items-center mt-6 mx-auto max-w-2xl ${inter.className}`}>
				<h2 className='text-4xl font-bold dark:text-white/90'>Módulos</h2>
				<ul className='w-full'>
					{posts.map((post) => (
						<li key={post.slug} className='mt-4 text-2xl dark:text-white/90'>
							<div className='my-5'>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5 max-w-2xl'>
									<div className='bg-white shadow-md rounded-md overflow-hidden'>
										<div className='p-4'>
											<h3 className='text-lg font-bold mb-2'>{post.title}</h3>
											<button className='rounded-md bg-gray-800 p-3 text-white text-sm'>
												<Link href={`/blog/${post.slug}`}>Leer más</Link>
											</button>
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const posts = await getAllPosts();

	return {
		props: {
			posts,
		},
	};
}
