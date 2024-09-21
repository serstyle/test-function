export function GET(request: Request) {
    const url = new URL(request.url);
    const searchParam = new URLSearchParams(url.search);

    const name = searchParam.get('name') || 'world';

    return new Response(`Hello ${name} from ${process.env.VERCEL_REGION}`);
}
