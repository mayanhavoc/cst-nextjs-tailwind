import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeStringify from 'rehype-stringify';
import footnotes from 'remark-footnotes';

export async function getAllPosts() {
	const postsDirectory = path.join(process.cwd(), 'posts');
	const fileNames = fs.readdirSync(postsDirectory);
	const posts = [];

	for (const fileName of fileNames) {
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, 'utf8');
		const matterResult = matter(fileContents);

		posts.push({
			slug: fileName.replace(/\.md$/, ''),
			title: matterResult.data.title,
			date: matterResult.data.date,
		});
	}

	// Sort the posts array from oldest to newest
	posts.sort((a, b) => {
		return new Date(a.date) - new Date(b.date);
	});

	console.log(posts);
	return posts;
}

export async function getPostBySlug(slug) {
	const fullPath = path.join(process.cwd(), 'posts', `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const matterResult = matter(fileContents);

	const processedContent = await unified()
		.use(remarkParse)
		.use(footnotes)
		.use(remarkRehype)
		.use(rehypeExternalLinks, { target: '_blank', rel: ['noopener'] })
		.use(rehypeStringify)
		.process(matterResult.content);

	const contentHtml = processedContent.toString();

	return {
		title: matterResult.data.title,
		contentHtml,
	};
}
