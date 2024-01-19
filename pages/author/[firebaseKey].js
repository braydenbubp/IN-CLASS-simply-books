import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { viewAuthorDetails } from '../../api/mergedData';

export default function ViewAuthor() {
  const [authorDetails, setAuthorDetails] = useState({});
  const router = useRouter;

  const { firebaseKey } = router.query;

  useEffect(() => {
    viewAuthorDetails(firebaseKey).then(setAuthorDetails);
  }, [firebaseKey]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <div className="text-white ms-5 details">
        <h5>
          {authorDetails.first_name} {authorDetails.last_name} {
        authorDetails.favorite ? '<3' : ''
      }
        </h5>
        <a href={`mailto:${authorDetails.email}`}> {authorDetails.email}
        </a>
        <p>{authorDetails.description || ''}</p>
      </div>
    </div>
  );
}
