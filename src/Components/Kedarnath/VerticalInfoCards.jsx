import React from 'react';

export default function VerticalInfoCards() {
    return (
        <section className="flex flex-col md:flex-row justify-center items-stretch w-full mx-auto gap-8 my-12 px-4">
            <div className="flex-1 max-w-[45%] bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl border border-yellow-200 border-opacity-50 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-yellow-400 p-8 min-w-[290px]"
                 style={{ minHeight: '410px' }}>
                <h2 className="text-2xl font-serif font-semibold text-yellow-500 mb-6 flex items-center select-none">
                    <span role="img" aria-label="location" className="mr-2">📍</span>
                    Basic Information
                </h2>
                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800">
                    <dt className="font-semibold">Temple Name</dt>
                    <dd>Kedarnath Jyotirlinga Temple</dd>
                    <dt className="font-semibold">Location</dt>
                    <dd>Kedarnath, Rudraprayag district, Uttarakhand</dd>
                    <dt className="font-semibold">Deity</dt>
                    <dd>Lord Shiva as Kedarnath (Lord of the Kedar Hills)</dd>
                    <dt className="font-semibold">Significance</dt>
                    <dd>One of 12 Jyotirlingas + Part of Char Dham</dd>
                    <dt className="font-semibold">Temple Type</dt>
                    <dd>Jyotirlinga + Himalayan Pilgrimage</dd>
                    <dt className="font-semibold">Altitude</dt>
                    <dd>3,583 meters (11,755 ft)</dd>
                    <dt className="font-semibold">Best Time to Visit</dt>
                    <dd>May – October (temple closed in winter)</dd>
                </dl>
            </div>
            <div className="flex-1 max-w-[45%] bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl shadow-xl border border-blue-300 border-opacity-50 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-blue-400 p-8 min-w-[290px] flex flex-col justify-between"
                 style={{ minHeight: '410px' }}>
                <div>
                    <h2 className="text-2xl font-serif font-semibold text-blue-500 mb-6 flex items-center select-none">
                        <span role="img" aria-label="prayer" className="mr-2">🛐</span>
                        Rituals and Aarti
                    </h2>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-gray-800 mb-4">
                        <dt className="font-semibold">Opening Aarti</dt>
                        <dd>4:00 AM</dd>
                        <dt className="font-semibold">Abhishek Puja</dt>
                        <dd>4:30–6:30 AM</dd>
                        <dt className="font-semibold">Bhog Aarti</dt>
                        <dd>11:30 AM</dd>
                        <dt className="font-semibold">Evening Aarti</dt>
                        <dd>6:00–7:30 PM</dd>
                    </dl>
                    <p className="text-sm italic text-gray-600">
                        You can book Rudrabhishek or Shringar Puja online via the official Kedarnath website or the GMVN portal.<br />
                        <span className="block mt-2 text-blue-500 font-serif not-italic">
              “Aarti at Kedarnath is not just ritual — it’s an experience of the divine, as hymns echo through the mountains and hearts open to Lord Shiva.”<br />
              <span className="text-[1.1em] text-yellow-600">— Sacred Pilgrim Thought</span>
            </span>
                        <span className="block mt-3 text-gray-800">Devotees are encouraged to participate with reverence and maintain silence during rituals for a truly spiritual atmosphere. The fragrance of incense and rhythmic chanting create an otherworldly serenity in the temple precincts.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
