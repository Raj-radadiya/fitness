const MeetTheTeam = () => {
    const team = [
        {
            name: "Ravi Patel",
            role: "Head Coach",
            image: "https://images.unsplash.com/photo-1600180758890-d3f2ec7d13e8?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Anjali Sharma",
            role: "Yoga & Wellness Coach",
            image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=500&q=80",
        },
        {
            name: "Manav Desai",
            role: "CrossFit Trainer",
            image: "https://images.unsplash.com/photo-1600181958456-cb8dfc661b5a?auto=format&fit=crop&w=500&q=80",
        },
    ];

    return (
        <section className="bg-gray-950 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center mb-12">
                <h2 className="text-4xl font-extrabold mb-4">🤝 Meet the Team</h2>
                <p className="text-gray-400 text-lg">Passionate trainers committed to your growth</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {team.map((member, idx) => (
                    <div key={idx} className="bg-black/30 p-6 rounded-xl text-center border border-gray-700">
                        <img src={member.image} alt={member.name} className="w-28 h-28 mx-auto rounded-full mb-4 object-cover" />
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-gray-400">{member.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
export default MeetTheTeam;
