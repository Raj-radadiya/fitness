import React from 'react';

const ContactSection = () => {
    return (
        <section className="py-20 bg-gray-950 text-white">
            <div className="text-center mb-12 px-4">
                <h2 className="text-4xl font-extrabold mb-4">📍 Contact Us</h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    Let’s connect! Reach out for queries, feedback, or just to say hi.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {/* Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h4 className="text-xl font-bold mb-1">Address</h4>
                        <p className="text-gray-300">123 Fitness Lane, Mumbai, India</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">Phone</h4>
                        <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold mb-1">Email</h4>
                        <p className="text-gray-300">info@gympower.com</p>
                    </div>
                </div>

                {/* Google Map */}
                <div>
                    <iframe
                        title="Gym Location"
                        className="w-full h-72 rounded-xl border-2 border-indigo-500"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160989268!2d72.74109977869434!3d19.082197839334186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63f189b7a6d%3A0x6b4a437f1579f8c0!2sGym!5e0!3m2!1sen!2sin!4v1710000000000"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;