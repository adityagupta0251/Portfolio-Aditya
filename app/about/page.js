'use client';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import { FaRocket, FaHeart, FaDatabase, FaShieldAlt, FaCode, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

// Lottie animation URLs
const COLLABORATION_LOTTIE = "https://assets5.lottiefiles.com/packages/lf20_hi95bvmx/Teamwork.json";
const FUNDING_LOTTIE = "https://assets9.lottiefiles.com/packages/lf20_ukgj6m3r/Finance.json";

export default function about() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white"
    >
      <div className="container mx-auto pb-32 pt-14 px-5 md:px-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex justify-center flex-col gap-4 items-center text-center mb-20"
        >
          <h1 className="font-bold text-4xl md:text-6xl mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            About Get Me a Chai
          </h1>
          <p className="text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            A revolutionary crowdfunding platform where creators transform their visions into reality 
            through the support of their community. Every chai purchased fuels innovation and creativity.
          </p>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ y: 50 }}
          whileInView={{ y: 0 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-center mb-14 flex items-center justify-center gap-3">
            <FaChartLine className="text-blue-400" /> How It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6 p-6 bg-white/10 rounded-xl">
              <Lottie 
                path={COLLABORATION_LOTTIE}
                className="h-64" 
                loop={true}
              />
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FaCode className="text-purple-400" /> Collaborative Ecosystem
              </h3>
              <p className="text-lg text-gray-300">
                Creators and fans co-create through transparent communication and shared goals.
              </p>
            </div>

            <div className="space-y-6 p-6 bg-white/10 rounded-xl">
              <Lottie 
                path={FUNDING_LOTTIE}
                className="h-64" 
                loop={true}
              />
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <FaHeart className="text-red-400" /> Support System
              </h3>
              <p className="text-lg text-gray-300">
                Fans contribute through chai purchases while earning exclusive rewards and recognition.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Creator Spotlight */}
        <div className="my-20 p-8 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-3xl">
          <h2 className="text-4xl font-bold text-center mb-8">Behind the Code</h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/166922118?v=4"
                  className="w-24 h-24 rounded-full border-4 border-purple-400"
                  alt="Aditya Kumar Gupta"
                />
                <div>
                  <h3 className="text-2xl font-bold">Aditya Kumar Gupta</h3>
                  <p className="text-purple-300">Full Stack Architect</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FaDatabase className="text-blue-400 text-xl" />
                  <span>Database Systems Expert</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaShieldAlt className="text-green-400 text-xl" />
                  <span>Cybersecurity Researcher</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaRocket className="text-red-400 text-xl" />
                  <span>AI/ML Innovator</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-black/30 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Key Contributions:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>AIIMS Kalyani Medical Simulations</li>
                  <li>Adaptive Warzone ML Engine</li>
                  <li>Secure P2P Architecture</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Development Analytics</h3>
                <img 
                  src="https://github-readme-stats.vercel.app/api?username=adityagupta0251&show_icons=true&theme=radical"
                  alt="GitHub Stats"
                  className="rounded-lg w-full"
                />
              </div>

              <div className="bg-black/30 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">Technical Spectrum</h3>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=adityagupta0251&layout=compact&theme=radical"
                  alt="Top Languages"
                  className="rounded-lg w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Value Propositions */}
        <div className="grid md:grid-cols-2 gap-8 my-20">
          <motion.div 
            className="p-8 bg-white/5 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaRocket className="text-purple-400" /> Creator Advantages
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Direct Funding Pipeline</h4>
                  <p className="text-gray-300">Receive support without intermediaries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Enhanced Engagement</h4>
                  <p className="text-gray-300">Build deeper connections with your audience</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Creative Freedom</h4>
                  <p className="text-gray-300">Maintain full control over your projects</p>
                </div>
              </li>
            </ul>
          </motion.div>

          <motion.div 
            className="p-8 bg-white/5 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <FaHeart className="text-red-400" /> Fan Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Exclusive Access</h4>
                  <p className="text-gray-300">Behind-the-scenes content and early access</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Direct Impact</h4>
                  <p className="text-gray-300">See your contributions make a difference</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">▹</span>
                <div>
                  <h4 className="font-semibold">Community Recognition</h4>
                  <p className="text-gray-300">Get featured as a top supporter</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">Start Your Creative Journey</h2>
          <div className="flex justify-center gap-6">
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-purple-600 to-blue-500 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg transition-all"
              >
                <FaRocket /> Launch Your Project
              </motion.button>
            </Link>
            <Link href="/discover">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-white/30 px-8 py-4 rounded-xl font-semibold flex items-center gap-2 hover:bg-white/10 transition-all"
              >
                <FaHeart /> Support Creators
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}