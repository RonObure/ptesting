import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative pt-16 bg-[#F6F5F4]">
      <div className="max-w-8xl mx-auto">
        <div className="relative z-10 pb-4 sm:pb-8 md:pb-12 lg:pb-16 xl:pb-20">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center animate-fade-in">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block animate-slide-in-left">Connect, Learn,</span>
                <span className="block text-[#8932EB] animate-slide-in-right">Succeed</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl lg:mx-auto animate-fade-in-up">
                Experience personalized peer tutoring that adapts to your learning style. Join thousands of students achieving their academic goals with Peersvel.
              </p>
              <div className="mt-5 sm:mt-8 flex justify-center animate-fade-in-up">
                <div className="rounded-md shadow">
                  <button className="rounded-md w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-white bg-[#8932EB] hover:bg-[#8932EB]/90 md:py-4 md:text-lg md:px-10">
                    Find Your Tutor
                  </button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button className="rounded-md w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-[#8932EB] bg-[#8932EB]/10 hover:bg-[#8932EB]/20 md:py-4 md:text-lg md:px-10">
                    Become a Tutor
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sticker-like images section - reduced height and spacing */}
          <div className="relative w-full h-56 sm:h-64 md:h-80 mt-6">
            {/* Background container - matching the F6F5F4 color */}
            <div className="absolute inset-0 bg-[#F6F5F4]"></div>
            
            {/* First sticker image - positioned left, increased size by 10% */}
            <div className="absolute left-4 top-8 w-44 h-44 md:w-72 md:h-72 transform -rotate-6 z-10 animate-fade-in-up">
              <Image 
                className="object-contain drop-shadow-lg" 
                src="/hero1.png" 
                alt="Student studying" 
                fill 
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            
            {/* Second sticker image - positioned center, increased size by 10% */}
            <div className="absolute left-1/2 top-4 w-44 h-44 md:w-72 md:h-72 transform -translate-x-1/2 rotate-3 z-20 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Image 
                className="object-contain drop-shadow-lg" 
                src="/hero2.png" 
                alt="Students collaborating" 
                fill 
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            
            {/* Third sticker image - positioned right, increased size by 10% */}
            <div className="absolute right-4 top-10 w-44 h-44 md:w-72 md:h-72 transform rotate-6 z-10 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Image 
                className="object-contain drop-shadow-lg" 
                src="/hero3.png" 
                alt="Student with laptop" 
                fill 
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}