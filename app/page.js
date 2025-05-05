import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  return (
    <>
      <Head>
        <title>Aditya Kr | Full Stack Developer</title>
        <meta
          name="description"
          content="Aditya Kr - Full Stack Developer, Indie Hacker, Cybersecurity Enthusiast"
        />
      </Head>

      <main className="max-w-4xl mx-auto p-6">
        {/* Header Section */}
        <section className="text-center mb-12">
          <div className="mx-auto mb-4 w-[128px] h-[128px] relative">
            <Image
              src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif"
              alt="Hi!"
              width={128}
              height={128}
              className="object-contain"
            />
          </div>

          <h1 className="text-4xl font-bold">
            Hi, I'm <strong>Aditya Kr</strong>
          </h1>

          <div className="mt-2 mx-auto w-[150px] h-[30px] relative">
            <Image
              src="https://komarev.com/ghpvc/?username=adityagupta0251&color=blueviolet&label=Profile+Views"
              alt="Profile Views"
              width={150}
              height={30}
              className="object-contain"
            />
          </div>

          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://www.linkedin.com/in/aditya-gupta-42a275359"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.shields.io/badge/-LINKEDIN-0A66C2?logo=linkedin&logoColor=white&style=for-the-badge"
                alt="LinkedIn"
                width={150}
                height={40}
              />
            </a>

            <a
              href="https://x.com/AdiK0251"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="https://img.shields.io/badge/-TWITTER-1DA1F2?logo=twitter&logoColor=white&style=for-the-badge"
                alt="Twitter"
                width={150}
                height={40}
              />
            </a>
          </div>

          <p className="mt-4 text-xl">
            💻 Full Stack Developer | 🛠️ Indie Hacker | 🔐 Cybersecurity
            Enthusiast
          </p>

          <div className="mx-auto mt-4 w-[600px] h-[50px] relative">
            <Image
              src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=26&duration=3000&pause=1000&color=4CAF50&center=true&vCenter=true&width=600&lines=Full+Stack+Developer;Indie+Hacker;Cybersecurity+Enthusiast;AI+Innovator;Open+Source+Contributor"
              alt="Typing Animation"
              width={600}
              height={50}
              className="object-contain"
            />
          </div>
        </section>

        {/* About Me Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🚀 About Me</h2>
          <div className="flex items-center space-x-6">
            <div className="w-[128px] h-[128px] relative rounded-full overflow-hidden">
              <Image
                src="https://avatars.githubusercontent.com/u/166922118?v=4"
                alt="Profile Picture"
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <p className="text-lg">
              🎂 <strong>16 y/o Self-Taught Developer</strong> – Building
              production-grade systems with modern architectures.
              <br />
              🔥 <strong>Database Expert</strong> – Proficient with Firebase
              (RTDB/Firestore), SQL, and NoSQL.
              <br />
              🛡️ <strong>Security Researcher</strong> – Skilled in ethical
              hacking, vulnerability assessment, and system hardening.
            </p>
          </div>
          <ul className="mt-4 list-disc list-inside">
            <li>
              🏥 Contributed to{" "}
              <strong>
                AIIMS Kalyani's AI-powered medical training simulations
              </strong>
            </li>
            <li>
              🏅 Achieved All India Rank in AISSEE (Sainik School Entrance Exam)
            </li>
          </ul>
        </section>

        {/* Technical Arsenal */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🛠 Technical Arsenal</h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                alt: "JavaScript",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
                alt: "Python",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                alt: "React",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
                alt: "Node.js",
              },
              {
                src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
                alt: "Firebase",
              },
              {
                src: "https://www.vectorlogo.zone/logos/wireshark/wireshark-icon.svg",
                alt: "Wireshark",
              },
            ].map((tech) => (
              <div key={tech.alt} className="w-[50px] h-[50px] relative">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Featured Project */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            ⚔️ Featured Project: Adaptive Warzone
          </h2>
          <Link href="#">
            <Image
              src="https://media.indiedb.com/cache/images/games/1/65/64058/thumb_300x150/april1.gif"
              alt="Gameplay Demo"
              width={800}
              height={150}
              className="object-cover rounded-lg"
            />
          </Link>
          <ul className="list-disc list-inside mb-4">
            <li>🤖 ML-powered adaptive AI opponents</li>
            <li>🌐 Real-time multiplayer with WebSocket</li>
            <li>🔥 Firebase backend integration</li>
            <li>🎮 Phaser.js game engine</li>
          </ul>
          <div className="flex space-x-4">
            <Link href="#">
              <Image
                src="https://img.shields.io/badge/-DEMO-FFFFFF?logo=itch.io&logoColor=black"
                alt="Live Demo"
                width={100}
                height={30}
              />
            </Link>
            <Link href="#">
              <Image
                src="https://img.shields.io/badge/-REPO-181717?logo=github"
                alt="GitHub Repo"
                width={100}
                height={30}
              />
            </Link>
          </div>
        </section>

        {/* GitHub Stats */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            📊 Development Analytics
          </h2>
          <div className="space-y-4">
            <Image
              src="https://github-readme-stats.vercel.app/api?username=adityagupta0251&show_icons=true&theme=radical"
              alt="GitHub Stats"
              width={800}
              height={200}
              className="object-contain rounded-lg"
            />
            <Image
              src="https://github-readme-streak-stats.herokuapp.com/?user=adityagupta0251&theme=radical"
              alt="Contribution Streak"
              width={800}
              height={200}
              className="object-contain rounded-lg"
            />
            <Image
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=adityagupta0251&layout=compact&theme=radical"
              alt="Top Languages"
              width={800}
              height={100}
              className="object-contain rounded-lg"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🤝 Let's Connect</h2>
          <div className="flex flex-wrap gap-4">
            {[
              {
                href: "mailto:nooneitsadik0251@gmail.com",
                src: "https://img.shields.io/badge/-EMAIL-D14836?logo=gmail&logoColor=white&style=for-the-badge",
                alt: "Email",
              },
              {
                href: "https://dev.to/adityagupta0251",
                src: "https://img.shields.io/badge/-DEV.TO-0A0A0A?logo=dev.to&logoColor=white&style=for-the-badge",
                alt: "Dev.to",
              },
              {
                href: "https://medium.com/@nooneitsadik0251",
                src: "https://img.shields.io/badge/-MEDIUM-12100E?logo=medium&logoColor=white&style=for-the-badge",
                alt: "Medium",
              },
              {
                href: "https://github.com/adityagupta0251",
                src: "https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white&style=for-the-badge",
                alt: "GitHub",
              },
            ].map((link) => (
              <a
                key={link.alt}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={link.src} alt={link.alt} width={100} height={30} />
              </a>
            ))}
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">🎯 Sponsorship Goals</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>10+ Sponsors / $200+ per month</strong>: Fuel continuous
              learning & innovation.
            </li>
            <li>
              <strong>Invest in Growth</strong>: Upgrade tools and resources to
              master cutting-edge technologies.
            </li>
            <li>
              <strong>Boost Open Source Impact</strong>: Develop projects,
              tutorials, and community resources.
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
