import { destinations } from "@/data/destinations";





export default function DestinationDetailPage({ params }: { params: { id: string } }) {
  const destination = destinations.find((dest) => dest.id === parseInt(params.id)) as any;

  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-96 bg-[#F8F8F8] rounded-2xl overflow-hidden">
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#14183E]">{destination.name}</h1>
            <p className="text-gray-600">{destination.days}</p>
            <p className="text-2xl font-semibold">{destination.price}</p>
            <button className="bg-[#F1A501] text-white px-6 py-3 rounded-lg hover:bg-[#d89401] transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}