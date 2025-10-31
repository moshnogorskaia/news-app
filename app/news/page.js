import Link from 'next/link';

export default function NewsPage() {
    return (
        <div>
            <h1>News Page</h1>
            <p>This is the news page</p>
            <Link href="/news/1">News 1</Link>
            <Link href="/news/2">News 2</Link>
            <Link href="/news/3">News 3</Link>
        </div>
    )
}