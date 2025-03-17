export default function HowItWorks() {
    const steps = [
      {
        icon: "fas fa-user-plus",
        title: "Register & Create Profile",
        description: "Sign up and tell us about your learning goals"
      },
      {
        icon: "fas fa-search",
        title: "Browse & Select Tutor",
        description: "Find the perfect tutor for your needs"
      },
      {
        icon: "fas fa-calendar-check",
        title: "Book Your Session",
        description: "Schedule a time that works for you"
      },
      {
        icon: "fas fa-star",
        title: "Learn & Give Feedback",
        description: "Rate your experience and track progress"
      }
    ];
  
    return (
      <div className="py-16 overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-[#8932EB] font-semibold tracking-wide uppercase">How It Works</h2>
            <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">Start learning in minutes</p>
          </div>
          <div className="relative">
            <div className="relative md:grid md:grid-cols-4 md:gap-8">
              {steps.map((step, index) => (
                <div key={index} className="md:col-span-1 text-center mt-10 md:mt-0 hover:scale-105 transition-transform duration-300 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#8932EB] inline-flex items-center justify-center text-white text-xl mb-4 mx-auto">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }