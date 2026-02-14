import { getCollection } from 'astro:content';

export async function GET() {
    const posts = await getCollection('blog');
    const searchList = posts.map(post => ({
        title: post.data.title,
        description: post.data.description,
        slug: post.slug,
        body: post.body,
    }));

    return new Response(JSON.stringify(searchList), {
        headers: {
            'content-type': 'application/json',
        },
    });
}
