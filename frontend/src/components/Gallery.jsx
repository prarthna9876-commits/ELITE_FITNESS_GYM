import React from 'react'

const Gallery = () => {
    const images = [
        "/gym1.jpg",
        "/gym2.avif",
        "/image3.jpg"
    ];

    return (
        <section className="gallery">
            <h1>BETTER BEAT BEST</h1>
            <div className="images">
              <div>
                {images.slice(0, 3).map((element, index) => (
                    <img key={index} src={element} alt="galleryImage" />
                ))}
              </div>
            </div>
        </section>
    );
}

export default Gallery;