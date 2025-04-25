import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center flex-1 p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Example Content */}
      <h1 className="text-4xl font-bold text-center mb-8">Welcome to the Home Page</h1>
      <p className="text-lg text-center max-w-xl mb-8">
        This is your homepage. Add your content here and it will push the footer to the bottom when needed.
      </p>
      
      {/* Add some extra content to demonstrate scrolling */}
      {Array(20).fill(0).map((_, i) => (
        <div key={i} className="w-full max-w-xl bg-gray-100 rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold">Section {i + 1}</h2>
          <p>This is some example content to demonstrate scrolling behavior.</p>
        </div>
      ))}
    </main>
  );
}