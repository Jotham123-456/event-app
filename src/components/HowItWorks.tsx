// const HowItWorks = () => {
//   const steps = [
//     {
//       title: "Discover Events",
//       description:
//         "Browse concerts, meetups, and experiences tailored to your interests.",
//     },
//     {
//       title: "Book Instantly",
//       description:
//         "Secure your spot in seconds with a smooth and simple checkout.",
//     },
//     {
//       title: "Enjoy the Experience",
//       description:
//         "Attend your event and connect with people who share your vibe.",
//     },
//   ];

//   return (
//     <section id='how-it-works' className="w-full bg-white py-24">
//       <div className="max-w-7xl mx-auto px-6 text-center">
//         {/* Header */}
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
//           How Eventify Works
//         </h2>

//         <p className="mt-3 text-gray-500 text-sm md:text-base max-w-xl mx-auto">
//           A simple, fast way to go from discovery to experience in just three
//           steps.
//         </p>

//         {/* Steps */}
//         <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-10">
//           {steps.map((step, index) => (
//             <div
//               key={index}
//               className="p-6 rounded-2xl border border-gray-100 hover:shadow-sm transition"
//             >
//               <div className="text-sm font-medium text-gray-400 mb-3">
//                 0{index + 1}
//               </div>

//               <h3 className="text-lg font-semibold text-gray-900">
//                 {step.title}
//               </h3>

//               <p className="mt-2 text-sm text-gray-500 leading-relaxed">
//                 {step.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

// const HowItWorks = () => {
//   const steps = [
//     {
//       title: "Discover Events",
//       description:
//         "Browse concerts, meetups, and experiences tailored to your interests.",
//     },
//     {
//       title: "Book Instantly",
//       description:
//         "Secure your spot in seconds with a smooth and simple checkout.",
//     },
//     {
//       title: "Enjoy the Experience",
//       description:
//         "Attend your event and connect with people who share your vibe.",
//     },
//   ];

//   return (
//     <section className="w-full bg-white dark:bg-black py-24">
//       <div className="max-w-5xl mx-auto px-6">

//         {/* Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
//             How Eventify Works
//           </h2>
//           <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm md:text-base">
//             A simple journey from discovery to experience.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div className="relative">

//           {/* Vertical Line */}
//           <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gray-200 dark:bg-gray-800" />

//           <div className="space-y-12">
//             {steps.map((step, index) => (
//               <div
//                 key={index}
//                 className={`relative flex flex-col md:flex-row items-center ${
//                   index % 2 === 0 ? "md:justify-start" : "md:justify-end"
//                 }`}
//               >
//                 {/* Content Card */}
//                 <div className="w-full md:w-1/2 px-4">
//                   <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 hover:shadow-sm transition">

//                     <div className="text-xs text-gray-400 mb-2">
//                       Step 0{index + 1}
//                     </div>

//                     <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                       {step.title}
//                     </h3>

//                     <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Timeline Dot */}
//                 <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-black dark:bg-white rounded-full border-4 border-white dark:border-black" />

//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default HowItWorks;

import { useEffect, useRef } from "react";

const steps = [
  {
    title: "Discover Events",
    description:
      "Browse concerts, meetups, and experiences tailored to your interests.",
  },
  {
    title: "Book Instantly",
    description:
      "Secure your spot in seconds with a smooth and simple checkout.",
  },
  {
    title: "Enjoy the Experience",
    description:
      "Attend your event and connect with people who share your vibe.",
  },
];

const HowItWorks = () => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 },
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full bg-white dark:bg-black py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            How Eventify Works
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-sm md:text-base">
            From discovery to experience in a seamless flow.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-gray-200 dark:bg-gray-800 -translate-x-1/2" />

          <div className="flex flex-col gap-16">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => {
                  refs.current[index] = el;
                }}
                className={`relative flex items-center justify-between transition-all duration-700 opacity-0 translate-y-10 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="w-[45%]">
                  <div className="p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-zinc-900 hover:shadow-sm transition">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium z-10">
                  0{index + 1}
                </div>

                {/* Spacer */}
                <div className="w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
