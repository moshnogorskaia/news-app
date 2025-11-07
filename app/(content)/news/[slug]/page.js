import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getNewsItem } from '@/lib/news';

export default async function NewsDetailPage({ params }) {
  const { slug } = params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  const { title, image, date, content } = newsItem;
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slug}/image`}>
          <Image
            src={`/images/news/${image}`}
            alt={title}
            width={100}
            height={100}
          />
        </Link>
        <h1>{title}</h1>
        <time dateTime={date}>{date}</time>
      </header>
      <p>{content}</p>
    </article>
  );
}
