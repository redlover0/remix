import React from 'react';
import {Box,Text} from 'theme-ui'
import ChallengeCard from '../componets/ChallengeCard';

const Home = () => {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f857a6] to-[#ff5858]">
            {/* Hack Club Flag */}
            <a href="http://hackclub.com" className="absolute top-0 left-4 z-40">
                <img
                    src="/flag.svg"
                    alt="Hack Club"
                    className="transition-transform duration-300 ease-in-out hover:-rotate-12"
                />
            </a>

            {/* Hero Section */}
            <section className="flex flex-col items-center justify-center w-full h-full pt-16">
                <img src="/logo.svg" alt="Strudel Logo" className="w-60 md:w-80 mb-4" />
                <h2 className="text-2xl md:text-3xl text-center text-white font-semibold mb-6">
                    Remix, code, and showcase your beats in 30 days <br />
                    Complete creative coding tasks and get featured in our official album!
                </h2>
                <div className="flex gap-4 mb-8">
                    <a
                        href="#Start now"
                        className="bg-white text-pink-600 font-bold px-6 py-3 rounded shadow hover:bg-pink-50 transition"
                    >
                        Get started.
                    </a>
                    <a
                        href="https://hackclub.slack.com/archives/C095614E9B3"
                        className="bg-white text-pink-600 font-bold px-6 py-3 rounded shadow hover:bg-pink-50 transition"
                    >
                        Join Slack.
                    </a>
        </div>
            </section>
        </main>
    );
};

export default Home;
