
import React from 'react';
import { Clock, Users } from 'lucide-react';

const ScheduleSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-black"></div>

            {/* Animated Glow Effects */}
            <div className="absolute top-40 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px] animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 relative">
                {/* Header with Gradient */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4">
                        Class Schedule
                    </h2>
                    <p className="text-gray-400 text-lg">Choose your perfect time to train</p>
                </div>

                {/* Days Navigation - Static Tabs */}
                <div className="flex justify-center gap-2 mb-16 overflow-x-auto pb-4">
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map((day) => (
                        <button
                            key={day}
                            className={`px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 
                                ${day === 'Monday'
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white backdrop-blur-sm'}`}
                        >
                            {day}
                        </button>
                    ))}
                </div>

                {/* Classes Grid - Static Cards */}
                <div className="grid gap-8 md:grid-cols-3">
                    {[
                        { time: '6:00 AM', activity: 'Cardio Blast', trainer: 'Sarah Wilson', capacity: '20 spots' },
                        { time: '7:00 AM', activity: 'Strength Training', trainer: 'Mike Johnson', capacity: '15 spots' },
                        { time: '6:00 PM', activity: 'Zumba', trainer: 'Elena Rodriguez', capacity: '25 spots' }
                    ].map((cls, index) => (
                        <div key={index} className="group relative">
                            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-xl 
                                          border border-gray-700/50 p-6 transition-all duration-500 
                                          hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">

                                {/* Time with Icon */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 rounded-lg bg-purple-500/10">
                                        <Clock className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <span className="text-lg text-white font-medium">{cls.time}</span>
                                </div>

                                {/* Activity Name with Gradient */}
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
                                    {cls.activity}
                                </h3>

                                {/* Trainer & Capacity */}
                                <div className="flex items-center justify-between text-gray-400 group-hover:text-gray-300 transition-colors">
                                    <div className="flex items-center gap-2">
                                        <span>{cls.trainer}</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                                        <Users className="w-4 h-4" />
                                        <span>{cls.capacity}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ScheduleSection;
