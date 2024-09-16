'use client';

import React, { useRef } from 'react';

type Topic = {
  id: number;
  name: string;
};

const topics: Topic[] = [
  { id: 1, name: 'Amazing Pools' },
  { id: 2, name: 'National Parks' },
  { id: 3, name: 'Cabins' },
  { id: 4, name: 'Beachfront' },
  { id: 5, name: 'Farms' },
  { id: 6, name: 'Luxe' },
  { id: 7, name: 'Tiny Homes' },
  { id: 8, name: 'Treehouses' },
  { id: 9, name: 'Camping' },
  { id: 10, name: 'Historical Homes' },
  { id: 11, name: 'Caves' },
  { id: 12, name: 'Castles' },
  { id: 13, name: 'Arctic' },
  { id: 14, name: 'Vineyards' },
  { id: 15, name: 'Boats' },
  { id: 16, name: 'Barns' },
  { id: 17, name: 'Islands' },
  { id: 18, name: 'Lakeside' },
  { id: 19, name: 'Design' },
  { id: 20, name: 'Domes' },
  { id: 21, name: 'Towers' },
  { id: 22, name: 'Skiing' },
  { id: 23, name: 'Desert' },
  { id: 24, name: 'A-Frames' },
  { id: 25, name: 'Off-the-grid' },
  { id: 26, name: 'Shepherd\'s Huts' },
  { id: 27, name: 'Countryside' },
  { id: 28, name: 'Tropical' },
  { id: 29, name: 'Mediterranean' },
  { id: 30, name: 'Urban Lofts' },
];

const Carousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: -200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        top: 0,
        left: 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Left Button */}
      <button
        type="button"
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        ◀
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="scrollbar-hide flex snap-x gap-4 overflow-x-scroll p-4"
      >
        {topics.map(topic => (
          <div
            key={topic.id}
            className="min-w-max shrink-0 snap-center rounded-lg bg-gray-100 p-4 shadow-md"
          >
            {topic.name}
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        type="button"
        onClick={scrollRight}
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
      >
        ▶
      </button>
    </div>
  );
};

export function PantipHome() {
  return (
    <>
      <Carousel />
      {/* Hero Section */}
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: 'url(\'https://source.unsplash.com/featured/?vacation\')' }}
      >
        <div className="flex h-full items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">Find your next getaway</h1>
            <p className="mt-4 text-lg text-white">Explore the world's most beautiful places</p>
          </div>
        </div>
      </section>

      {/* Explore Nearby Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Example Cards */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://source.unsplash.com/random/?city"
                alt="City"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">City Name</h3>
                <p className="text-gray-600">2-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://source.unsplash.com/random/?beach"
                alt="Beach"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Beach Name</h3>
                <p className="text-gray-600">3-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://source.unsplash.com/random/?mountain"
                alt="Mountain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Mountain Name</h3>
                <p className="text-gray-600">4-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img
                className="h-48 w-full object-cover"
                src="https://source.unsplash.com/random/?forest"
                alt="Forest"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Forest Name</h3>
                <p className="text-gray-600">5-hour drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
