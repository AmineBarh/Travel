import { Star, MapPin, Calendar } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { useState } from "react";
import { Link } from "react-router-dom";

const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
    rating: 4.8,
    pricePerNight: 299,
    amenities: ["Spa", "Pool", "Restaurant", "Beach Access"],
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    rating: 4.9,
    pricePerNight: 399,
    amenities: ["Ski Access", "Fireplace", "Restaurant", "Spa"],
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
    rating: 4.7,
    pricePerNight: 259,
    amenities: ["City View", "Restaurant", "Bar", "Fitness Center"],
  },
];

const HotelCard = ({ hotel }) => (
  <div className="overflow-hidden group bg-white rounded-lg shadow">
    <div className="relative h-48 overflow-hidden">
      <img
        src={hotel.image}
        alt={`${hotel.name}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />

      <div className="absolute top-4 right-4 bg-white/90 px-2 py-1 rounded-full flex items-center">
        <Star className="w-4 h-4 text-yellow-400 mr-1" />
        <span className="text-sm font-medium">{hotel.rating}</span>
      </div>
    </div>

    <div className="p-6">
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-lg font-bold text-primary">
          TND{hotel.pricePerNight}
          <span className="text-sm text-muted-foreground">/night</span>
        </p>
      </div>

      <div className="flex items-center text-muted-foreground mb-4">
        <MapPin className="w-4 h-4 mr-1" />
        <span className="text-sm">{hotel.location}</span>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {hotel.amenities.map((amenity) => (
          <span
            key={amenity}
            className="text-xs px-2 py-1 bg-secondary rounded-full"
          >
            {amenity}
          </span>
        ))}
      </div>
      
      <Link to={`/fill-info?hotelId=${hotel.id}&pricePerNight=${hotel.pricePerNight}`}>
        <button className="w-full bg-[#a6c52a] hover:bg-emerald-700 text-white font-semibold py-2 rounded-md">
          Book Now
        </button>
      </Link>
    </div>
  </div>
);

const HotelsPage = () => {
  const today = new Date();
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);

  return (
    <div className="min-h-full py-20 bg-gradient-to-b from-[#141B34] to-[#112F38] opacity-95">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">Available Hotels</h1>
          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded-md"
              onClick={toggleCalendar}
            >
              <Calendar className="w-4 h-4" />
              Check Dates
            </button>
            <button className="flex items-center gap-2 bg-white/10 text-white hover:bg-white/20 px-4 py-2 rounded-md">
              <MapPin className="w-4 h-4" />
              Change Location
            </button>
          </div>
        </div>

        {isCalendarOpen && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
            onClick={toggleCalendar}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold mb-4">Select a Date</h2>
              <DayPicker
                disabled={{
                  before: today,
                }}
                mode="single"
                classNames={{
                  selected: `bg-a5dhr border-amber-500 text-azra9 rounded-full`,
                }}
                selected={selectedDate}
                onSelect={setSelectedDate}
              />
              <div className="mt-4 flex justify-end">
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md mr-2"
                  onClick={toggleCalendar}
                >
                  Close
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    toggleCalendar();
                    console.log("Selected Date:", selectedDate);
                  }}
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
