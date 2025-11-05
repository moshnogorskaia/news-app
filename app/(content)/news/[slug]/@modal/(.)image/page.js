'use client';

import { DUMMY_NEWS } from '@/dummy-news';
import { notFound } from 'next/navigation';
import { useRouter } from 'next/navigation';

export default function ImagePage({ params }) {
  const { slug } = params;
  const router = useRouter();

  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fulscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
}
