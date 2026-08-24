// import React from 'react';

// const Pricing = () => {
//     const pricing = [
//         {
//             imgUrl: '/price.webp',
//             title: "Quarterly Plan",
//             price: 18000,
//             length: 3
//         },
//         {
//             imgUrl: '/price.webp',
//             title: "Half Yearly Plan",
//             price: 34000,
//             length: 6
//         },
//         {
//             imgUrl: '/price.webp',
//             title: "Yearly Plan",
//             price: 67000,
//             length: 12
//         },
//     ]
//     return (
//         <section className="pricing">
//             <h1>ELITE EDGE FITNESS PLANS</h1>
//             <div className="wrapper">
//                 <h1>{element.title}</h1>
//                 <h1>PACKAGE</h1>
//                 <h3>Rs {element.price}</h3>
//                 <p>For {element.length} Months</p>
//             </div>
//             <div className="description">
//                 <p>
//                     <Check /> Access to all gym equipment and facilities
//                 </p>
//                 <p>
//                     <Check /> All DayFree Training
//                 </p>
//                 <p>
//                     <Check /> Free Restroom
//                 </p>
//                 <p>
//                     <Check /> Free Locker
//                 </p>
//                 <p>
//                     <Check /> 28 Days Freezing Option
//                 </p>
//                 <Link to={"/"}>Join Now</Link>
//             </div>


//         </section>
//     );

// };

// export default Pricing;

// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { Check } from 'lucide-react';

// // const Pricing = () => {
// //     const pricing = [
// //         { imgUrl: '/price.webp', title: "Quarterly Plan", price: 18000, length: 3 },
// //         { imgUrl: '/price.webp', title: "Half Yearly Plan", price: 34000, length: 6 },
// //         { imgUrl: '/price.webp', title: "Yearly Plan", price: 67000, length: 12 },
// //     ]
// //     return (
// //         <section className="pricing">
// //             <h1>ELITE EDGE FITNESS PLANS</h1>
// //             <div className="wrapper">
// //                 {pricing.map((element, index) => (
// //                     <div className="card" key={index}>
// //                         <img src={element.imgUrl} alt={element.title} />
// //                         <div className="title">
// //                             <h1>{element.title}</h1>
// //                             <h3>PACKAGE</h3>
// //                             <p>Rs {element.price}</p>
// //                             <p>For {element.length} Months</p>
// //                         </div>
// //                         <div className="description">
// //                             <p><Check/> Access to all gym equipment and facilities</p>
// //                             <p><Check/> All Day Free Training</p>
// //                             <p><Check/> Free Restroom</p>
// //                             <p><Check/> Free Locker</p>
// //                             <p><Check/> 28 Days Freezing Option</p>
// //                             <Link to={"/"}>Join Now</Link>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
// //         </section>
// //     );
// // };

// // export default Pricing;

import React from 'react'

const Gallery = () => {
    const images = [
        "/gym1.jpg",
        "/gym2.jpg",
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