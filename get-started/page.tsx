import Link from "next/link";


export default function GetStarted() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started</h2>
        <p className="text-gray-600 mb-4">Choose your role to continue:</p>

        {/* Student Registration Button */}
        <Link href="/sign-up/page">
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition mb-4">
            Register as Student
          </button>
        </Link>

        {/* Tutor Registration Button */}
        <Link href="/sign-up/tutor">
          <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition">
            Register as Tutor
          </button>
        </Link>
      </div>
    </div>
  );
}
