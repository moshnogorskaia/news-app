import { DUMMY_NEWS } from '@/dummy-news';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export default function NewsDetailPage({ params }) {
    const { slug } = params;
    const news = DUMMY_NEWS.find((news) => news.slug === slug);

    if (!news) {
        notFound();
    }

    const { title, image, date, content } = news;
    return (
        <article className="news-article">
            <header>
                <Link href={`/news/${slug}/image`}>
                    <Image src={`/images/news/${image}`} alt={title} width={100} height={100} />
                </Link>
            <h1>{title}</h1>
            <time dateTime={date}>{date}</time>
            </header>
            <p>{content}</p>
        </article>
    )
}
