export default function Features() {
  const features = [
    {
      icon: "fas fa-user-graduate",
      title: "Personalized Learning",
      description: "Get matched with tutors who understand your learning style and pace."
    },
    {
      icon: "fas fa-calendar-alt",
      title: "Flexible Scheduling",
      description: "Book sessions at times that work best for your schedule."
    },
    {
      icon: "fas fa-check-circle",
      title: "Verified Expert Tutors",
      description: "Learn from thoroughly vetted tutors with proven expertise."
    },
    {
      icon: "fas fa-laptop",
      title: "Easy Booking System",
      description: "Simple and intuitive platform for scheduling sessions."
    }
  ];

  return (
    <div className="py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#8932EB] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Everything you need to excel</p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">Choose from a wide range of subjects and expert tutors to help you achieve your academic goals.</p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative hover:scale-105 transition-transform duration-300 animate-fade-in">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#8932EB] text-white">
                  <i className={`${feature.icon} text-xl`}></i>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}