'use client';

export function PantipHome() {
  return (
    <>
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
              <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/?city" alt="City" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">City Name</h3>
                <p className="text-gray-600">2-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/?beach" alt="Beach" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Beach Name</h3>
                <p className="text-gray-600">3-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/?mountain" alt="Mountain" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">Mountain Name</h3>
                <p className="text-gray-600">4-hour drive</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
              <img className="h-48 w-full object-cover" src="https://source.unsplash.com/random/?forest" alt="Forest" />
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
