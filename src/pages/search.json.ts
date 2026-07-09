import { getCollection } from 'astro:content';

export async function GET() {
    const posts = await getCollection('blog');
    const essays = await getCollection('essays');

    const searchList = [
        ...posts.map(post => ({
            title: post.data.title,
            description: post.data.description,
            url: `/blog/${post.id}/`,
            body: post.body,
        })),
        ...essays.map(essay => ({
            title: essay.data.title,
            description: essay.data.description,
            url: `/essays/${essay.id}/`,
            body: essay.body,
        })),
    ];

    return new Response(JSON.stringify(searchList), {
        headers: {
            'content-type': 'application/json',
        },
    });
}
