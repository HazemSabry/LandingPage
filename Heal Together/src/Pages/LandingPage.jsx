import React from 'react';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-800 bg-pink-50 min-h-screen">

            {/* Navigation Bar */}
            <nav className="flex justify-between items-center p-6 bg-white shadow-sm">
                <div className="text-2xl font-bold text-pink-600 tracking-wide">
                    HEAL TOGETHER
                </div>
                <div className="hidden md:flex space-x-6">
                    <a href="#home" className="hover:text-pink-500">Home</a>
                    <a href="#dashboard" className="hover:text-pink-500">Dashboard</a>
                    <a href="#therapists" className="hover:text-pink-500">Therapists</a>
                    <a href="#community" className="hover:text-pink-500">Community Chat</a>
                    <a href="#about" className="hover:text-pink-500">About Us</a>
                </div>
                <div className="flex space-x-4">
                    <button className="px-4 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-50">
                        Login / Sign Up
                    </button>
                    <button className="px-4 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 shadow-md">
                        SOS
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center text-center py-20 px-4">
                <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6">
                    You Are Not Alone.
                </h1>
                <p className="text-lg md:text-xl max-w-2xl text-gray-600 mb-10 line-height-relaxed">
                    A women-focused healing community providing a safe and empowering space for survivors of harassment, abuse, and trauma.
                    Are you struggling to heal from past experiences? At Heal Together, we offer a warm and welcoming space for women to reconnect with themselves.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <button className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-600 transition">
                        Join Our Anonymous Community
                    </button>
                    <button className="px-8 py-4 bg-red-100 text-red-700 font-semibold rounded-lg hover:bg-red-200 transition">
                        Get Immediate Help (SOS)
                    </button>
                </div>
            </section>

            {/* The Reality / Problem Section */}
            <section className="py-16 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Why We Built Heal Together</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 bg-pink-50 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 text-pink-600">The Reality</h3>
                            <p>99% of women in Egypt experience some form of harassment. You are not the only one facing this.</p>
                        </div>
                        <div className="p-6 bg-pink-50 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 text-pink-600">The Struggle</h3>
                            <p>Many do not report incidents due to disbelief or fear of judgment, leaving them to struggle with trauma alone.</p>
                        </div>
                        <div className="p-6 bg-pink-50 rounded-lg">
                            <h3 className="font-bold text-xl mb-3 text-pink-600">The Gap</h3>
                            <p>Traditional therapy is often costly, and relying on social media doesn't always provide safe or professional guidance.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Core Services Section */}
            <section className="py-20 px-6 bg-pink-100">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What We Offer</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🔒</div>
                            <h3 className="text-xl font-bold mb-2">Safe & Anonymous Community</h3>
                            <p className="text-gray-600">A private, peer-led space where survivors can connect, share experiences, and support each other without fear of judgment.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🩺</div>
                            <h3 className="text-xl font-bold mb-2">24/7 Professional Support</h3>
                            <p className="text-gray-600">Instant access to licensed therapists, trauma counselors, and legal advisors for confidential guidance.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🚨</div>
                            <h3 className="text-xl font-bold mb-2">Emergency SOS Button</h3>
                            <p className="text-gray-600">A one-tap distress signal that can instantly alert trusted contacts, crisis hotlines, or emergency responders in critical situations.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-3xl mb-4">🌸</div>
                            <h3 className="text-xl font-bold mb-2">Workshops & Healing Activities</h3>
                            <p className="text-gray-600">Self-care events and therapy-based programs designed for personal growth and regaining self-worth.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action Section */}
            <section className="py-20 px-6 text-center bg-white">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Heal Together.</h2>
                <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                    Whether you want a safe space to be heard without judgment, or are looking for professional trauma recovery resources, we are here for you.
                </p>
                <button className="px-8 py-4 bg-pink-500 text-white font-bold rounded-lg shadow-lg hover:bg-pink-600 transition text-lg">
                    Create Your Free Account
                </button>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-8 text-center">
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-white">Instagram</a>
                    <a href="#" className="hover:text-white">TikTok</a>
                    <a href="#" className="hover:text-white">Contact Us</a>
                    <a href="#" className="hover:text-white">About Us</a>
                </div>
                <p>© 2026 Heal Together. All rights reserved.</p>
            </footer>

        </div>
    );
};

export default LandingPage;