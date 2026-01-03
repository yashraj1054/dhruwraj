// export default function Reviews() {
//   return (
//     <section className="bg-[#f6fbfb] py-12 sm:py-16 md:py-20">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

//         {/* Heading */}
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10">
//           What Our Patients Say
//         </h2>

//         {/* Reviews */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          
//           {/* Review 1 */}
//           <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-left">
//             <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
//             <p className="text-gray-700 text-sm sm:text-base">
//               I was suffering from joint pain for years. After taking
//               Ayurvedic treatment here, I feel much better and active.
//             </p>
//             <p className="mt-4 font-semibold text-sm text-gray-800">
//               — Rajesh Verma, Kanpur
//             </p>
//           </div>

//           {/* Review 2 */}
//           <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-left">
//             <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
//             <p className="text-gray-700 text-sm sm:text-base">
//               The doctor listens patiently and explains everything clearly.
//               My PCOD symptoms have improved naturally.
//             </p>
//             <p className="mt-4 font-semibold text-sm text-gray-800">
//               — Neha Sharma, Lucknow
//             </p>
//           </div>

//           {/* Review 3 */}
//           <div className="bg-white p-5 sm:p-6 rounded-xl shadow text-left">
//             <div className="text-yellow-500 mb-2">⭐⭐⭐⭐⭐</div>
//             <p className="text-gray-700 text-sm sm:text-base">
//               Excellent Panchkarma therapy. Clean clinic, caring staff,
//               and very effective treatment results.
//             </p>
//             <p className="mt-4 font-semibold text-sm text-gray-800">
//               — Amit Mishra, Unnao
//             </p>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";

export default function Reviews() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  const reviews = [
    {
      name: "Harsh Singh",
      image:"/src/assets/harsh.png",
      place: "Kanpur",
      time: "11 months ago",
      text: "He is a very friendly doctor & one of the finest doctors I have seen.Best Ayurveda Doctor and helpful staffs 😊",
    },
    {
      name: "Shiv Prakash Shukla",
      image:"/src/assets/shivprakashshukla.png",
      place: "Kanpur",
      time: "9 months ago",
      text: "Best panchkarma center and ayurveda hospital. Ever seen. I have personally visited this hospital for my treatment and found very good results.",
    },
    {
      name: "Shailendra Kumar",
      image:"/src/assets/shailendrakumar.png",
      place: "Rura",
      time: "9 months ago",
      text: "Best ayurveda and panchkarma center, main rura se aaya tha Kanpur appointment lene or mera bhut acha treatment hua or ab mai bilkul theek hu",
    },
    ,
    {
      name: "Akhilesh Sahu",
      image:"/src/assets/akhileshsahu.png",
      place: "Kanpur",
      time: "2 years ago",
      text: "Best ayurvedic doctor in /kanpur. Very polite and humble behaviour with patients. I highly recommend Dr. R.K Pal for ayurvedic treatment.",
    },
  ];

  return (
    <section className="bg-[#f6fbfb] py-12 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-10 text-center">
          What Our Patients Say
        </h2>

        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 items-center justify-center z-10"
        >
          ←
        </button>

        {/* Reviews */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[320px] sm:min-w-[360px] bg-white p-6 rounded-xl shadow"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {/* User Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-semibold text-gray-700">
                    {/* {review.name.charAt(0)} */}
                    <img
    src={review.image}
    alt={review.name}
    className="w-full h-full object-cover"
  />
                  </div>

                  <div>
                    <p className="font-semibold text-sm">
                      {review.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {review.time}
                    </p>
                  </div>
                </div>

                {/* Google Logo */}
                <img
                  src="/src/assets/google.png"
                  alt="Google"
                  className="w-5 h-5"
                />
              </div>

              {/* Stars + Verified */}
              <div className="flex items-center gap-2 mb-3">
                <div className="text-yellow-500 text-sm">
                  ⭐⭐⭐⭐⭐
                </div>
                <span className="text-xs text-blue-600 font-medium flex items-center gap-1">
                  ✔ Verified Review
                </span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-6">
                {review.text}
              </p>

              {/* Location */}
              <p className="mt-3 text-xs text-gray-500">
                {review.place}, India
              </p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow rounded-full w-10 h-10 items-center justify-center z-10"
        >
          →
        </button>
      </div>
    </section>
  );
}
