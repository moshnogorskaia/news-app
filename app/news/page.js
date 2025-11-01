import Link from 'next/link';
import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';

export default function NewsPage() {
    return (
        <>
            <h1>News Page</h1>
            <ul className="news-list">
                {DUMMY_NEWS.map(({id, slug, title, image}) => (
                    <li key={id}>
                        <Link href={`/news/${slug}`}>
                            <Image src={`/images/news/${image}`} alt={title} width={100} height={100} />
                            <span>{title}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}