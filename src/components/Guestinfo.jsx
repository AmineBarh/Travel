import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // to access URL params
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { CalendarDays, Users, Bed, Calendar } from "lucide-react";

const hotels = [
  {
    id: 1,
    name: "Luxury Resort & Spa",
    location: "Bali, Indonesia",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=800",
    pricePerNight: 299,
  },
  {
    id: 2,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    pricePerNight: 399,
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=800",
    pricePerNight: 259,
  },
];

const Guestinfo = () => {
  const location = useLocation(); // Get location object to access the URL
  const params = new URLSearchParams(location.search); // Parse query params
  const hotelId = parseInt(params.get("hotelId"), 10); // Get the hotelId from query params
  const pricePerNight = parseFloat(params.get("pricePerNight")); // Get the pricePerNight from query params

  // Find the selected hotel
  const hotel = hotels.find((hotel) => hotel.id === hotelId);

  // Initialize state
  const [selectedDate, setSelectedDate] = useState(null);
  const [nights, setNights] = useState(1);
  const [guests, setGuests] = useState(1);
  const [roomType, setRoomType] = useState("Deluxe Room"); // Set a default room type

  // Calculate total price
  const totalPrice = hotel ? pricePerNight * nights * guests : 0;

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="flex flex-col bg-gradient-to-b from-[#023047] to-[#219ebc] pb-40 pt-24 px-60">
      <h1 className="text-4xl font-bold text-white mb-8">
        Complete Your Reservation
      </h1>
      <div className="grid grid-cols-5 grid-rows-7 gap-4">
        <div className="col-span-3 row-span-5 px-16 bg-white rounded-xl shadow-lg space-y-4 mx-8 py-6">
          <h2 className="text-3xl font-bold text-gray-700">Booking Details</h2>

          <div className="flex space-x-8">
            <div className="space-y-2 mb-4">
              <div className="flex gap-2">
                <p className="text-lg font-semibold mb-2">Check-in Date</p>
                <Calendar />
              </div>
              <DayPicker
                className="p-2"
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                footer={
                  selectedDate
                    ? `Selected: ${selectedDate.toLocaleDateString()}`
                    : "Pick a day."
                }
              />
            </div>

            <div className="flex flex-col space-y-4">
              <div className="nights">
                <p className="text-lg font-semibold mb-2 w-[250px]">
                  Select Number of Nights
                </p>
                <select
                  name="nights"
                  value={nights}
                  onChange={(e) => setNights(Number(e.target.value))}
                  className="w-[250px] py-2 ps-4 rounded-lg border border-solid border-gray-300"
                >
                  {[1, 2, 3, 4].map((night) => (
                    <option key={night} value={night}>
                      {night} Night{night > 1 ? "s" : ""}
                    </option>
                  ))}
                </select>
              </div>
              <div className="n-guests">
                <p className="text-lg font-semibold mb-2 text-gray-700">
                  Number of Guests
                </p>
                <div className="flex items-center space-x-2">
                  <button
                    className="border border-solid border-gray-300 rounded-lg px-3 py-2"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{guests}</span>
                  <button
                    className="border border-solid border-gray-300 rounded-lg px-3 py-2"
                    onClick={() => setGuests(Math.min(7, guests + 1))}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="room-type">
                <p className="text-lg font-semibold mb-2 text-gray-700">
                  Select Room Type
                </p>
                <select
                  name="room-type"
                  value={roomType}
                  onChange={(e) => setRoomType(e.target.value)}
                  className="border border-solid border-gray-300 px-2 py-1 rounded-lg"
                >
                  <option>Deluxe Room</option>
                  <option>Superior Room</option>
                  <option>Suite</option>
                </select>
              </div>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            <p className="font-semibold text-gray-800 text-xl">
              Special Requests
            </p>
            <textarea
              className="w-full min-h-[100px] p-3 rounded-md border border-gray-300"
              placeholder="Any special requirements or preferences..."
            />
          </div>
        </div>

        <div className="col-span-2 row-span-3 col-start-4 bg-white rounded-2xl p-8">
          <div className="space-y-2 mt-4">
            <h3 className="text-xl font-bold text-gray-700">Booking Summary</h3>
            <p className="text-lg text-gray-600">
              <span className="flex items-center space-x-2">
                <Bed className="w-5 h-5 text-muted-foreground" />
                <span>
                  {nights} Night{nights > 1 ? "s" : ""}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-muted-foreground" />
                <span>
                  {guests} Guest{guests > 1 ? "s" : ""}
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-muted-foreground" />
                <span>{roomType}</span>
              </span>
            </p>
          </div>
          <div className="space-y-4 mt-4">
            <p className="text-3xl font-bold text-gray-700">Total Payment</p>
            <p className="text-2xl font-semibold text-gray-700">
              ${totalPrice.toFixed(3)} TND
            </p>
          </div>

          <p className="text-3xl font-bold text-gray-700 py-2">
            Payment Information
          </p>
          <div className="mt-4 space-y-4">
            <p className="text-gray-600 text-sm">
              Please enter your payment information below
            </p>
            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="Card Number"
                className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-full"
              />
            </div>

            <div className="flex space-x-4">
              <input
                type="number"
                placeholder="Expiry Date"
                className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-1/2"
              />
              <input
                type="number"
                placeholder="CVV"
                className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-1/2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-blue-600 w-full font-semibold"
          >
            Pay Now
          </button>
        </div>

        <div className="col-span-3 row-span-2 row-start-6 bg-white rounded-2xl p-8 mx-8 pb-20">
          <p className="text-2xl font-semibold text-gray-700">
            Guest Information
          </p>
          <form>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="first-name">
                <label className="text-gray-700 font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-full"
                />
              </div>
              <div className="last-name">
                <label className="text-gray-700 font-semibold">Last Name</label>
                <input
                  type="text"
                  id="last-name"
                  className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-full"
                />
              </div>
              <div className="email">
                <label className="text-gray-700 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  id="email"
                  className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-full"
                />
              </div>
              <div className="phone">
                <label className="text-gray-700 font-semibold">Phone</label>
                <input
                  type="number"
                  placeholder="98 765 432"
                  id="phone"
                  className="border border-solid border-gray-300 px-2 py-1 rounded-lg w-full"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Guestinfo;
