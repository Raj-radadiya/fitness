import React from 'react';

export default function Herobanner() {

    return (
        <div className="relative w-full h-[600px] overflow-hidden touch-none z-[1]">

            <div className="relative w-full h-full select-none touch-none pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                    alt="Gym One"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none">
                    <div className="text-center text-white">
                        <h1 className="text-4xl font-bold mb-4">Welcome to Our Gym</h1>
                        <p className="text-xl">Start your fitness journey today</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
