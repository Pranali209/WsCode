import React from 'react';
import Sq from "../../assets/Edit-Square.png"
const CareerOptions = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-4">Top career options in Digital Marketing</h1>
      <p className="text-center text-gray-600 mb-12">Lorem ipsum dolor sit amet consectetur Imperdiet tellus ut ornare pharetra.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Content Marketer', imgAlt: 'Content Marketing Icon' },
          { title: 'SEO Specialist', imgAlt: 'SEO Specialist Icon' },
          { title: 'Social Media Manager', imgAlt: 'Social Media Manager Icon' },
          { title: 'Marketing Analyst', imgAlt: 'Marketing Analyst Icon' },
        ].map((career, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-center mb-4">
              <img src={Sq} alt={career.imgAlt} className="w-12 h-12" />
            </div>
            <h2 className="text-xl font-bold mb-2">{career.title}</h2>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur. Imperdiet tellus ut ornare pharetra leo vestibulum at orci.</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerOptions;
