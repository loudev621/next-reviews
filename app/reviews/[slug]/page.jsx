import Heading from '/components/Heading';
import { getReview } from '/lib/reviews';
import { getReviewSlugs, getSlugs } from '/lib/reviews';
// import ShareLinkButton from '/components/ShareLinkButton';
import ShareButtons from '/components/ShareButtons';

export async function generateStaticParams() {
  const slugs = await getReviewSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const review = await getReview(slug);
  return { title: review.title };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;
  const review = await getReview(slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className='flex gap-3 items-baseline'>
        <p className='italic pb-2'>{review.date}</p>
        <ShareButtons />
      </div>
      <img
        src={review.image}
        alt=''
        width='640'
        height='360'
        className='mb-2 rounded'
      />
      <article
        dangerouslySetInnerHTML={{ __html: review.body }}
        className='max-w-screen-sm prose prose-slate'
      />
    </>
  );
}
