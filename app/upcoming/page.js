'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaRocket, FaDatabase, FaStar, FaCodeBranch } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

export default function Upcoming() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/adityagupta0251/repos?sort=created&direction=desc'
        );
        const data = await response.json();
        if (response.ok) {
          setRepos(data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const upcomingRepos = repos.filter((repo) => repo.topics?.includes('upcoming'));
  const pastRepos = repos.filter((repo) => !repo.topics?.includes('upcoming'));

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
            Development Portfolio
          </h1>
          <p className="text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Exploring the intersection of innovation and implementation through
            open-source contributions and cutting-edge project development.
          </p>
        </motion.div>

        {/* Loading and Error States */}
        {loading && (
          <div className="text-center text-xl text-gray-400">
            Loading repositories...
          </div>
        )}

        {error && (
          <div className="text-center text-red-400">
            Error fetching repositories: {error}
          </div>
        )}

        {/* Projects Display */}
        {!loading && !error && (
          <>
            {/* Upcoming Projects */}
            <div className="my-20">
              <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <FaRocket /> Upcoming Projects
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>

            {/* Past Projects */}
            <div className="my-20">
              <h2 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3">
                <FaDatabase /> Past Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastRepos.map((repo) => (
                  <RepoCard key={repo.id} repo={repo} />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

function RepoCard({ repo }) {
  const [readme, setReadme] = useState('');
  const [loadingReadme, setLoadingReadme] = useState(true);

  useEffect(() => {
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${repo.full_name}/readme`
        );
        const data = await response.json();
        if (response.ok) {
          const content = atob(data.content);
          setReadme(content);
        } else {
          setReadme('');
        }
      } catch (err) {
        setReadme('');
      } finally {
        setLoadingReadme(false);
      }
    };
    fetchReadme();
  }, [repo.full_name]);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-6 bg-white/10 rounded-xl space-y-4 h-full flex flex-col"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-semibold">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              {repo.name}
            </a>
          </h3>
          <p className="text-gray-300 text-sm mt-1">{repo.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">{repo.language}</span>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm">{repo.stargazers_count}</span>
          </div>
        </div>
      </div>

      <div className="flex-1 bg-black/20 p-4 rounded-lg overflow-y-auto">
        {loadingReadme ? (
          <div className="text-gray-400">Loading README...</div>
        ) : readme ? (
          <div className="prose prose-invert max-w-none text-sm">
            <ReactMarkdown>
              {readme.slice(0, 500) + (readme.length > 500 ? '...' : '')}
            </ReactMarkdown>
          </div>
        ) : (
          <div className="text-gray-400">No README available</div>
        )}
      </div>

      <div className="flex items-center justify-between text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <span>
          Updated: {new Date(repo.updated_at).toLocaleDateString()}
        </span>
      </div>
    </motion.div>
  );
}