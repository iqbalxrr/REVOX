import React from "react";

const partners = [
  {
    name: "TechSpark",
    logo: "/logo1.webp",
    description: "Provided cloud infrastructure and scaling support.",
  },
  {
    name: "EduWorks",
    logo: "/logo2.webp",
    description: "Helped design our learning modules and content strategy.",
  },
  {
    name: "Designify",
    logo: "/logo3.webp",
    description: "Contributed to the UI/UX design of the app.",
  },
  {
    name: "SecureNet",
    logo: "/logo4.webp",
    description: "Ensured application-level security and data privacy.",
  },
];

const MeetPartners = () => {
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-5 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-black my-10 mont-font">Meet Our <span className="primary-color">Partners</span></h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold">{partner.name}</h3>
              <p className="text-gray-600 mt-2 text-sm poppins">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetPartners;
