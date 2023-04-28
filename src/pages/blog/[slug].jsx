import Layout from '../../Components/Layout';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import Link from 'next/link';
import { getPostBySlug, getAllPosts } from '../../api/index';

export default function Post({ post, ...props }) {
	return (
		<Layout>
			<main
				className={`flex min-h-screen flex-col p-16 items-center px-5 prose prose-xl prose-slate dark:prose-invert mx-auto ${inter.className}`}>
				<h1 className='text-3xl mt-4 mb-0'>{post.title}</h1>
				<p className='mt-0'>{post.date}</p>
				<article>
					<section dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
					<Link href='/blog'>Regresar</Link>
				</article>
			</main>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const post = await getPostBySlug(context.params.slug);
	return {
		props: {
			post,
		},
	};
}

export async function getStaticPaths() {
	const allPosts = await getAllPosts();
	const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));
	return { paths, fallback: false };
}
