export default function CallToAction() {
    return (
      <div className="bg-[#8932EB]">
        <div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to dive in?</span>
            <span className="block text-[#F6F5F4]">Start your learning journey today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <button className="rounded-md inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-[#8932EB] hover:bg-[#8932EB]/90">
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }