'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaRocket, FaDatabase, FaStar, FaCodeBranch, FaTag, FaLink } from 'react-icons/fa';

export default function Upcoming() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          'https://api.github.com/users/adityagupta0251/repos?sort=created&direction=desc'
        );
        if (!res.ok) throw new Error((await res.json()).message);
        setRepos(await res.json());
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const upcoming = repos.filter(r => r.topics?.includes('upcoming'));
  const past = repos.filter(r => !r.topics?.includes('upcoming'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white"
    >
      <div className="container mx-auto pb-32 pt-14 px-5 md:px-10">
        <Header />

        {loading && <Status message="Loading repositories..." color="gray" />}
        {error && <Status message={`Error: ${error}`} color="red" />}

        {!loading && !error && (
          <>
            <Section title="Upcoming Projects" icon={<FaRocket />} items={upcoming} />
            <Section title="Past Projects" icon={<FaDatabase />} items={past} />
          </>
        )}
      </div>
    </motion.div>
  );
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="flex flex-col items-center text-center mb-20 gap-4"
    >
      <h1 className="font-bold text-4xl md:text-6xl bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Development Portfolio
      </h1>
      <p className="text-lg max-w-3xl leading-relaxed">
        Exploring open-source contributions and cutting-edge project development.
      </p>
    </motion.div>
  );
}

function Status({ message, color }) {
  return (
    <div className={`text-center text-xl text-${color}-400 mt-10`}>{message}</div>
  );
}

function Section({ title, icon, items }) {
  return (
    <div className="my-20">
      <h2 className="text-4xl font-bold text-center mb-8 flex justify-center items-center gap-3">
        {icon} {title}
      </h2>
      <div className={`grid gap-6 ${items.length > 2 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2'}`}>
        {items.map(repo => <RepoCard key={repo.id} repo={repo} />)}
      </div>
    </div>
  );
}

function RepoCard({ repo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white/10 rounded-xl flex flex-col h-full"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold hover:text-purple-400 transition">
            {repo.name}
          </a>
          <p className="text-gray-300 text-sm mt-1">{repo.description}</p>
        </div>
        <Stats repo={repo} />
      </div>

      <Tags topics={repo.topics} />

      <div className="mt-auto flex justify-between items-center text-sm text-gray-400">
        <div className="flex items-center gap-1">
          <FaLink />
          <a href={repo.html_url} className="hover:underline">View Code</a>
        </div>
        <span>Updated: {new Date(repo.updated_at).toLocaleDateString()}</span>
      </div>
    </motion.div>
  );
}

function Stats({ repo }) {
  return (
    <div className="flex gap-4 items-center text-sm text-gray-400">
      <div className="flex items-center gap-1">
        <FaStar /> {repo.stargazers_count}
      </div>
      <div className="flex items-center gap-1">
        <FaCodeBranch /> {repo.forks_count}
      </div>
    </div>
  );
}

function Tags({ topics = [] }) {
  if (!topics.length) return null;
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {topics.map(topic => (
        <span key={topic} className="flex items-center gap-1 text-xs bg-blue-600/30 px-2 py-1 rounded-full">
          <FaTag /> {topic}
        </span>
      ))}
    </div>
  );
}
