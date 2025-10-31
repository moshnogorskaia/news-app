import Link from 'next/link';

export default function MainHeader() {
    return (
        <header>
            <Link href="/">Home</Link>
            <Link href="/news">News</Link>
        </header>
    )
}