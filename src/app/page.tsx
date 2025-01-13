import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gray-900 h-screen flex items-center justify-center">
      <div className="text-center p-6 bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-white mb-4">
          Hi, I&apos;m Mobin!
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Welcome to my personal website. I’m currently working on something
          exciting—stay tuned for updates!
        </p>
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-400"></div>
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Thank you for visiting! Check back soon.
        </p>

        {/* Social Media Links */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            href="https://facebook.com/rayhanuddinmobin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22.675 0h-21.35C.599 0 0 .6 0 1.325v21.351C0 23.4.599 24 1.325 24h11.495v-9.294H9.743v-3.622h3.077V8.413c0-3.066 1.867-4.736 4.596-4.736 1.31 0 2.438.097 2.762.14v3.205h-1.894c-1.488 0-1.777.708-1.777 1.746v2.29h3.554l-.464 3.622h-3.09V24h6.057c.725 0 1.324-.6 1.324-1.324V1.325C24 .6 23.4 0 22.675 0z" />
            </svg>
          </Link>
          <Link
            href="https://github.com/mobinrayhan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-100"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.755-1.333-1.755-1.087-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.809 1.305 3.494.997.108-.774.418-1.305.762-1.605-2.665-.305-5.466-1.333-5.466-5.93 0-1.31.47-2.38 1.236-3.221-.124-.303-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.48 11.48 0 013.003-.403c1.02.005 2.047.138 3.003.404 2.29-1.553 3.297-1.23 3.297-1.23.655 1.65.243 2.873.12 3.176.768.841 1.234 1.911 1.234 3.221 0 4.61-2.803 5.623-5.474 5.921.43.37.814 1.1.814 2.22v3.293c0 .323.218.694.824.575C20.565 21.797 24 17.303 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </Link>
          <a
            href="https://www.linkedin.com/in/rayhanuddinmobin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-700"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.026-3.037-1.85-3.037-1.851 0-2.134 1.446-2.134 2.94v5.666H9.356V8.354h3.414v1.649h.049c.475-.899 1.636-1.849 3.37-1.849 3.599 0 4.264 2.367 4.264 5.452v6.846zM5.337 7.433c-1.144 0-2.072-.928-2.072-2.072s.928-2.072 2.072-2.072 2.072.928 2.072 2.072-.929 2.072-2.072 2.072zM6.815 20.452H3.861V8.354h2.954v12.098zM22.225 0H1.771C.792 0 0 .775 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.271V1.729C24 .775 23.207 0 22.225 0z" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  );
}
