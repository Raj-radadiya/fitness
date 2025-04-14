import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import gymImg from "../../../assets/Images/gymImg.jpg";
export default function Herobanner() {
    const slides = [
        {
            image: 'https://media.istockphoto.com/id/1183038884/photo/view-of-a-row-of-treadmills-in-a-gym-with-people.jpg?s=612x612&w=0&k=20&c=VnTSyKHKl-YFOmpFqW_hNyIlis0sFksfcR9Ei3-r29s=',
            title: 'Train Like a Pro',
            subtitle: 'Elevate your fitness journey with us.'
        },
        {
            image: 'https://media.istockphoto.com/id/2075354173/photo/fitness-couple-is-doing-kettlebell-twist-in-a-gym-togehter.jpg?s=612x612&w=0&k=20&c=lfs1V1d0YB33tn72myi6FElJnylPJYYM9lW5ZhlnYqY=',
            title: 'Push Beyond Limits',
            subtitle: 'Join our community and transform.'
        },
        {
            image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1470&q=80',
            title: 'Stronger Every Day',
            subtitle: 'Achieve your goals with expert guidance.'
        },
    ];
    return (
        <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="h-screen"
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div
                        className="relative h-full bg-cover bg-center flex items-center justify-center text-white"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                        <div className="relative z-10 text-center px-6">
                            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">{slide.title}</h2>
                            <p className="text-lg md:text-xl mb-6">{slide.subtitle}</p>
                            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded transition duration-300">
                                Join Now
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}