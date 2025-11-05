import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';

export default function ImagePage({ params }) {
    const { slug } = params;

    const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

    if (!newsItem) {
        notFound();
    }

    return (
        <>
        <h1>intercepted</h1>
        <div className="fulscreen-image">
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
        </>
    );
}
