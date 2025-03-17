export default function Stats() {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-indigo-600">1000+</p>
            <p className="text-gray-600">Active Tutors</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">50K+</p>
            <p className="text-gray-600">Students Helped</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">4.8/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-indigo-600">100+</p>
            <p className="text-gray-600">Universities</p>
          </div>
        </div>
      </section>
    );
  }
  