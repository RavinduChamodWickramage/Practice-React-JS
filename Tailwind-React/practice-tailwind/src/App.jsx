function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">Logo</div>
            <div className="space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 hover:font-bold transition duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 hover:font-bold transition duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 hover:font-bold transition duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-blue-800 hover:font-bold transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-extrabold text-white tracking-tight">
              Welcome to Our Platform
            </h1>
            <p className="mt-4 text-xl text-gray-200">
              We provide the best solutions for your business needs.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 hover:text-blue-800 hover:shadow-lg hover:scale-105 transition duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="text-center">
                <div className="bg-blue-100 p-6 rounded-full inline-block">
                  <svg
                    className="w-12 h-12 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Fast Performance
                </h3>
                <p className="mt-2 text-gray-600">
                  Optimized for speed and efficiency.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center">
                <div className="bg-purple-100 p-6 rounded-full inline-block">
                  <svg
                    className="w-12 h-12 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Customizable
                </h3>
                <p className="mt-2 text-gray-600">
                  Tailor-made solutions for your needs.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center">
                <div className="bg-green-100 p-6 rounded-full inline-block">
                  <svg
                    className="w-12 h-12 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">
                  Reliable
                </h3>
                <p className="mt-2 text-gray-600">
                  Trusted by thousands of users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Wicky PVT Ltd. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
