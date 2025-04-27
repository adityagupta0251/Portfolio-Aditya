"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaRocket,
  FaHeart,
  FaDatabase,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaPlay,
  FaPause,
  FaRedo,
  FaFastForward,
  FaTachometerAlt,
  FaClock,
  FaGraduationCap,
  FaLanguage,
  FaUsers,
  FaBrain,
  FaAward,
  FaGamepad,
  FaStar,
  FaLaptopCode,
} from "react-icons/fa";

// DigitalClock component with real-time functionality
function DigitalClock() {
  const [time, setTime] = useState(new Date());
  const [is24Hour, setIs24Hour] = useState(true);
  const [isRunning, setIsRunning] = useState(true);
  const timerRef = useRef(null);
  const clockRef = useRef(null);

  // Animation reference
  const animationRef = useRef(null);

  useEffect(() => {
    // Function to update clock display
    const updateClock = () => {
      if (!clockRef.current) return;

      // Get time digits
      const now = new Date();
      const hours = is24Hour
        ? String(now.getHours()).padStart(2, "0")
        : String(now.getHours() % 12 || 12).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      // Update clock display
      const digits = clockRef.current.querySelectorAll(".digit");

      // Hours
      digits[0].textContent = hours[0];
      digits[1].textContent = hours[1];

      // Minutes
      digits[2].textContent = minutes[0];
      digits[3].textContent = minutes[1];

      // Seconds
      digits[4].textContent = seconds[0];
      digits[5].textContent = seconds[1];

      // AM/PM indicator if in 12-hour mode
      if (!is24Hour) {
        const amPm = now.getHours() >= 12 ? "PM" : "AM";
        const amPmElement = clockRef.current.querySelector(".am-pm");
        if (amPmElement) {
          amPmElement.textContent = amPm;
        }
      }

      // Apply pulse animation to the ":" separators
      const separators = clockRef.current.querySelectorAll(".separator");
      separators.forEach((sep) => {
        sep.classList.toggle("opacity-100");
        sep.classList.toggle("opacity-30");
      });
    };

    // Initialize clock display
    updateClock();

    // Create timer if clock is running
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(new Date());
        updateClock();
      }, 1000);
    }

    // Cleanup timer on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, is24Hour]);

  // Handle play/pause
  const toggleClock = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
    } else {
      setTime(new Date());
      timerRef.current = setInterval(() => {
        setTime(new Date());
      }, 1000);
    }
    setIsRunning(!isRunning);
  };

  // Handle time format toggle
  const toggleTimeFormat = () => {
    setIs24Hour(!is24Hour);
  };

  // Create digit elements for clock display
  const renderClockDigits = () => {
    const now = new Date();
    const hours = is24Hour
      ? String(now.getHours()).padStart(2, "0")
      : String(now.getHours() % 12 || 12).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    return (
      <div className="flex items-center justify-center">
        {/* Hours */}
        <div className="flex">
          <div className="digit-container">
            <div className="digit bg-gradient-to-br from-purple-600 to-purple-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {hours[0]}
            </div>
          </div>
          <div className="digit-container ml-1">
            <div className="digit bg-gradient-to-br from-purple-600 to-purple-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {hours[1]}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="separator mx-1 text-3xl font-bold text-blue-400 animate-pulse">
          :
        </div>

        {/* Minutes */}
        <div className="flex">
          <div className="digit-container">
            <div className="digit bg-gradient-to-br from-blue-600 to-blue-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {minutes[0]}
            </div>
          </div>
          <div className="digit-container ml-1">
            <div className="digit bg-gradient-to-br from-blue-600 to-blue-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {minutes[1]}
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="separator mx-1 text-3xl font-bold text-blue-400 animate-pulse">
          :
        </div>

        {/* Seconds */}
        <div className="flex">
          <div className="digit-container">
            <div className="digit bg-gradient-to-br from-indigo-600 to-indigo-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {seconds[0]}
            </div>
          </div>
          <div className="digit-container ml-1">
            <div className="digit bg-gradient-to-br from-indigo-600 to-indigo-900 w-14 h-20 rounded-lg flex items-center justify-center text-3xl font-bold text-white shadow-lg">
              {seconds[1]}
            </div>
          </div>
        </div>

        {/* AM/PM indicator for 12-hour format */}
        {!is24Hour && (
          <div className="am-pm ml-2 bg-gradient-to-br from-pink-500 to-purple-700 px-2 py-1 rounded text-white font-bold">
            {now.getHours() >= 12 ? "PM" : "AM"}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-br from-zinc-900 to-purple-900 rounded-xl shadow-2xl overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-900/30 backdrop-blur-sm" />

      {/* Digital Clock Display */}
      <div ref={clockRef} className="z-10 mb-6">
        {renderClockDigits()}
      </div>

      {/* Control Buttons */}
      <div className="mt-6 flex space-x-4 z-10">
        <button
          onClick={toggleClock}
          className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 text-white transition-colors"
        >
          {isRunning ? <FaPause /> : <FaPlay />}
        </button>
        <button
          onClick={() => setTime(new Date())}
          className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 text-white transition-colors"
        >
          <FaRedo />
        </button>
        <button
          onClick={toggleTimeFormat}
          className="p-3 bg-zinc-800 rounded-full hover:bg-zinc-700 text-white transition-colors"
        >
          <FaClock />
          <span className="sr-only">
            {is24Hour ? "Switch to 12-hour" : "Switch to 24-hour"}
          </span>
        </button>
      </div>

      {/* Current Date Display */}
      <div className="mt-4 text-white font-medium z-10">
        {time.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
    </div>
  );
}

// Animated TeamCollaboration component (replaces Lottie animation)
function TeamCollaboration() {
  return (
    <div className="h-64 w-full relative overflow-hidden">
      {/* Central hub */}
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-600 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
        <FaUsers className="text-white text-2xl" />
      </div>

      {/* Orbiting elements */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`absolute top-1/2 left-1/2 w-12 h-12 rounded-full bg-gradient-to-br ${getGradient(
            i
          )} transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex items-center justify-center`}
          style={{
            animation: `orbit ${5 + i}s linear infinite`,
            animationDelay: `${i * 0.5}s`,
            transform: `translate(-50%, -50%) rotate(${i * 72
              }deg) translateX(100px)`,
          }}
        >
          {getIcon(i)}
        </div>
      ))}

      {/* Connection lines */}
      <div
        className="absolute top-1/2 left-1/2 w-[200px] h-[200px] rounded-full border-2 border-dashed border-blue-400/30 transform -translate-x-1/2 -translate-y-1/2 animate-spin"
        style={{ animationDuration: "15s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[160px] h-[160px] rounded-full border-2 border-dashed border-purple-400/40 transform -translate-x-1/2 -translate-y-1/2 animate-spin"
        style={{ animationDuration: "10s", animationDirection: "reverse" }}
      />

      <style jsx>{`
        @keyframes orbit {
          0% {
            transform: translate(-50%, -50%) rotate(0deg) translateX(100px)
              rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg) translateX(100px)
              rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );

  // Helper functions
  function getGradient(index) {
    const gradients = [
      "from-blue-500 to-blue-700",
      "from-purple-500 to-purple-700",
      "from-green-500 to-green-700",
      "from-red-500 to-red-700",
      "from-yellow-500 to-yellow-700",
    ];
    return gradients[index % gradients.length];
  }

  function getIcon(index) {
    const icons = [
      <FaCode key="code" className="text-white" />,
      <FaBrain key="brain" className="text-white" />,
      <FaDatabase key="database" className="text-white" />,
      <FaShieldAlt key="shield" className="text-white" />,
      <FaChartLine key="chart" className="text-white" />,
    ];
    return icons[index % icons.length];
  }
}

// Animated FundingVisual component (replaces Lottie animation)
function FundingVisual() {
  return (
    <div className="h-64 w-full relative">
      {/* Growing bars chart */}
      <div className="absolute inset-0 flex items-end justify-center gap-4 pb-8">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="relative w-12 flex flex-col items-center">
            <div
              className={`w-full bg-gradient-to-t ${getBarGradient(
                i
              )} rounded-t-lg shadow-lg`}
              style={{
                height: `${getBarHeight(i)}px`,
                animation: `growBar 4s ${i * 0.3
                  }s infinite alternate ease-in-out`,
              }}
            />
            <div className="mt-2 text-xs font-semibold text-white opacity-80">
              {getBarLabel(i)}
            </div>
          </div>
        ))}
      </div>

      {/* Coin animation */}
      <div className="absolute top-1/4 right-1/4">
        <div
          className="w-10 h-10 bg-yellow-400 rounded-full shadow-lg flex items-center justify-center border-2 border-yellow-300"
          style={{ animation: "coinFlip 3s infinite" }}
        >
          <FaStar className="text-yellow-600" />
        </div>
      </div>

      <style jsx>{`
        @keyframes growBar {
          0% {
            height: 20px;
          }
          100% {
            height: 150px;
          }
        }

        @keyframes coinFlip {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-50px) rotate(180deg);
          }
          100% {
            transform: translateY(0) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );

  // Helper functions
  function getBarGradient(index) {
    const gradients = [
      "from-green-500 to-green-700",
      "from-green-600 to-green-800",
      "from-green-700 to-green-900",
      "from-green-500 to-green-800",
      "from-emerald-500 to-green-700",
    ];
    return gradients[index % gradients.length];
  }

  function getBarHeight(index) {
    const heights = [80, 120, 60, 100, 90];
    return heights[index % heights.length];
  }

  function getBarLabel(index) {
    const labels = ["Q1", "Q2", "Q3", "Q4", "Proj"];
    return labels[index % labels.length];
  }
}

// Card component for reuse
function Card({ title, children, className = "", icon = null }) {
  return (
    <div
      className={`bg-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-lg transition ${className}`}
    >
      {title && (
        <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
          {icon && <span className="text-blue-400">{icon}</span>}
          {title}
        </h3>
      )}
      {children}
    </div>
  );
}

// Main About component
export default function About() {
  // Custom pulse animation for elements
  const pulseVariants = {
    initial: { opacity: 0.8, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-16 pb-16"
    >
      {/* Animated Clock */}
      <section className="container mx-auto px-4 pt-8">
        <DigitalClock />
      </section>

      {/* Profile Cards Section */}
      <section className="container mx-auto grid md:grid-cols-3 gap-6 px-4">
        <Card title="Summary" icon={<FaRocket />}>
          <ul className="text-gray-200 space-y-2">
            <li>
              <strong>16 y/o self-taught developer</strong> building
              production-ready systems
            </li>
            <li>
              <strong>Database Expert</strong>: Firebase (Realtime/Firestore),
              SQL, NoSQL
            </li>
            <li>
              <strong>Cybersecurity Focus</strong>: Ethical hacking & system
              security enthusiast
            </li>
            <li>
              Contributor to{" "}
              <em>AIIMS Kalyani's AI-assisted medical simulations</em>
            </li>
            <li>AISSEE All India Rank Holder</li>
            <li>Exploring distributed systems & cloud architecture</li>
          </ul>
        </Card>
        <Card title="Experience" icon={<FaLaptopCode />}>
          <ul className="text-gray-200 space-y-4">
            <li>
              <p>
                <strong>AIIMS Kalyani</strong> | Remote
              </p>
              <p className="italic">Contributor | 01/2024 - 04/2024</p>
              <p>Medical simulation development for nursing students.</p>
            </li>
            <li>
              <p>
                <strong>Adaptive Warzone Multiplayer Game</strong> | Remote
              </p>
              <p className="italic">Contributor | 04/2025 - Present</p>
              <p>Real-time strategy simulator with adaptive AI.</p>
            </li>
          </ul>
        </Card>
        <Card title="Adaptive Warzone Overview" icon={<FaGamepad />}>
          <ul className="text-gray-200 list-disc list-inside space-y-2">
            <li>
              Multiplayer strategy & battle simulator with human & AI opponents.
            </li>
            <li>
              Dynamic AI: Reinforcement learning via TensorFlow/PyTorch/Keras.
            </li>
            <li>
              Real-Time Action: WebSockets & Firebase for seamless gameplay.
            </li>
            <li>
              Immersive Simulation: Phaser frontend & Python pygame backend.
            </li>
          </ul>
        </Card>
        <Card title="Education" icon={<FaGraduationCap />}>
          <ul className="text-gray-200 space-y-2">
            <li>
              <strong>Rajkiya Krit +2 High School</strong> | Pakur, Jharkhand
              <br />
              Secondary | 04/2025 (AISSEE District Rank 6)
            </li>
            <li>
              <strong>Saraswati Shishu Mandir</strong> | Pakuria
              <br />
              Primary Education (3× 1st Rank)
            </li>
            <li>
              <strong>Netarhat Vidhyalaya</strong> | P.T Qualifier
            </li>
          </ul>
        </Card>
        <Card title="Skills" icon={<FaCode />}>
          <p className="text-gray-200">
            Communications, Web & App Development, Node.js, JavaScript, Java,
            Python, Django, Express.js, AI, GitHub
          </p>
        </Card>
        <Card title="Languages" icon={<FaLanguage />}>
          <p className="text-gray-200">English, Hindi, Bengali</p>
        </Card>
        <Card title="Certificates" icon={<FaAward />}>
          <ul className="text-gray-200 list-disc list-inside space-y-1">
            <li>AISSEE Qualifier</li>
            <li>Ethical Hacking Basics</li>
            <li>Firebase & Cloud Certifications</li>
          </ul>
        </Card>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto space-y-10 px-4">
        <h2 className="text-4xl font-bold text-center text-white flex justify-center items-center gap-3">
          <FaChartLine className="text-blue-400" /> How It Works
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-white/10 p-6 backdrop-blur-md">
            <TeamCollaboration />
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mt-4">
              <FaCode className="text-purple-400" /> Collaborative Ecosystem
            </h3>
            <p className="text-gray-300 mt-2">
              Engage directly with creators through transparent communication
              and shared goals.
            </p>
          </Card>
          <Card className="bg-white/10 p-6 backdrop-blur-md">
            <FundingVisual />
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mt-4">
              <FaHeart className="text-red-400" /> Support System
            </h3>
            <p className="text-gray-300 mt-2">
              Fuel innovation by contributing and earning exclusive rewards and
              recognition.
            </p>
          </Card>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12 bg-gradient-to-br from-purple-900 to-blue-900 rounded-xl mx-4">
        <h2 className="text-4xl font-bold text-white mb-8">
          Start Your Creative Journey
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <Link href="/signup">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-purple-600 to-blue-500 px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 hover:shadow-lg transition-all"
            >
              <FaRocket /> Launch Your Project
            </motion.button>
          </Link>
          <Link href="https://razorpay.me/@nextgendev">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <FaHeart /> Support Creators
            </motion.button>
          </Link>
          <Link href="https://rzp.io/rzp/FHzbOGHM">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border border-white/30 px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-white/10 transition-all"
            >
              <FaHeart /> Buy A Discord complete workflows management with 1000
              Rs
            </motion.button>
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
