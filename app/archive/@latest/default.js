import { getLatestNews } from '@/lib/news';
import NewsList from '@/components/news-list';

export default function LatestNewsPage() {
    const news = getLatestNews();
    return (
        <>
            <h2>Latest News</h2>
            <NewsList news={news} />
        </>
    )
}