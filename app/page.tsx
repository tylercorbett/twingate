export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="flex h-full">
        {/* Left Side: JSON Textarea */}
        <div className="w-1/2 p-4 h-screen">
          <textarea
            className="w-full h-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your JSON here..."
          ></textarea>
        </div>

        {/* Right Side: Content Area with Border */}
        <div className="w-1/2 p-4 flex items-center justify-center">
          <div className="w-full h-full border-4 border-gray-400 flex items-center justify-center">
            {/* Blank content area */}
          </div>
        </div>
      </div>
    </main>
  );
}
