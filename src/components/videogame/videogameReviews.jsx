import React, { Fragment, useState } from 'react';
import dompurify from 'dompurify';

export default function Reviews({ data }) {
  const [reviewHeight, setReviewHeight] = useState('133px');

  const unnecessaryReviewReadmore = () => {
    let unnecessaryReviewReadmore;
    if (data.reviews[0]) {
      data.reviews.length <= 1 && data.reviews[0].text.length < 445
        ? (unnecessaryReviewReadmore = true)
        : (unnecessaryReviewReadmore = false);
    }
    return unnecessaryReviewReadmore;
  };

  const setReviewsHeightFn = () => {
    setReviewHeight('auto');
  };

  const setBackReviewsHeightFn = () => {
    setReviewHeight('133px');
  };

  function Review({ data }) {
    const reviewElement = data;
    return (
      <Fragment>
        <div>{'★'.repeat(reviewElement.rating) + '☆'.repeat(5 - reviewElement.rating)}</div>
        <p dangerouslySetInnerHTML={{ __html: dompurify.sanitize(reviewElement.text) }}></p>
        <strong>by {reviewElement.user ? reviewElement.user.username : reviewElement.external_author} </strong>
        <small>{reviewElement.created ? reviewElement.created.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/) : 'n/a'}</small>
        <hr />
      </Fragment>
    );
  }

  return (
    <article id='reviews' className='col'>
      {data.reviews.length > 0 ? (
        <Fragment>
          <h4 className='row mt-3 px-3'>Reviews:</h4>
          <div id='longContent' className='long-content' style={{ height: reviewHeight }}>
            {data.reviews.map(reviewElement => (
              <Review key={reviewElement.id} data={reviewElement} />
            ))}
          </div>
          <div className='row justify-content-center'>
            {reviewHeight !== 'auto' ? (
              <Fragment>
                {!unnecessaryReviewReadmore() ? (
                  <Fragment>
                    <button className='btn btn-outline-dark text-center m-3' onClick={setReviewsHeightFn}>
                      desplegar
                    </button>{' '}
                  </Fragment>
                ) : null}
              </Fragment>
            ) : (
              <button className='btn btn-outline-dark text-center m-3' onClick={setBackReviewsHeightFn}>
                reducir
              </button>
            )}
          </div>
        </Fragment>
      ) : null}
    </article>
  );
}