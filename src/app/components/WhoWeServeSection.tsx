// components/WhoWeServeSection.tsx
import React from 'react';


interface ClientItem {
  title: string;
  description: string;
}


interface WhoWeServeSectionProps {
  heading: string;
  description: string;
  clients: ClientItem[]; // An array of ClientItem objects
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({ heading, description, clients }) => {
  return (
    <section className="px-4 py-12 mx-auto max-w-7xl">
      <div className="mb-10 text-center">
        <h2 className="text-[#03577A] text-3xl xl:text-[40px] font-bold lg:text-4xl mb-4">
          {heading}
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {clients.map((client, index) => (
          <div key={index} className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-[#03577A] mb-2">{client.title}</h3>
            <p className="text-gray-600">{client.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};