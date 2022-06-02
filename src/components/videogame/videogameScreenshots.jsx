import React  from 'react';

export default function Screenshots({ data }) {

  const getClips = () => {
    try {
      let clip, poster;
      data.clip
        ? (clip = data.clip.clips[640]) &&
          (poster = data.clip['preview'].replace('media/stories-previews', 'media/crop/600/400/stories-previews'))
        : (clip = null) && (poster = null);
      return { clip, poster };
    } catch (e) {
      console.error(e);
    }
  };

  function Screen({ data }) {
    const screenElement = data;
    return (
      <div className='col-md-3 my-3'>
        {screenElement.image ? (
          <img
            className='img-style'
            src={
              screenElement.image.match(/media\/screenshots/)
                ? screenElement.image.replace('media/screenshots', 'media/crop/600/400/screenshots')
                : screenElement.image.replace('media/games', 'media/crop/600/400/games')
            }
            alt='screenshot of the game'
          />
        ) : null}
      </div>
    );
  }

  return (
    <section id='imageGallery' className='col-auto'>
      <header id='imageGalleryTop' className='row mt-3 px-3'>
        <h4>Imágenes:</h4>
      </header>
      <section id='media' className='row mb-2'>
        {getClips().clip ? (
          <div className='col-md-3 my-3'>
            <video
              className='img-style vid-style'
              src={getClips().clip}
              poster={getClips().poster}
              playsInline
              controls
              muted
              loop></video>
          </div>
        ) : null}
        {data.screenshots.map(screenElement => (
          <Screen key={screenElement.id} data={screenElement} />
        ))}
      </section>
    </section>
  );
}