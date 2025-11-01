import Link from 'next/link';
import Image from 'next/image';

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map(({id, slug, title, image}) => (
                <li key={id}>
                    <Link href={`/news/${slug}`}>
                        <Image src={`/images/news/${image}`} alt={title} width={100} height={100} />
                        <span>{title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    )
}
