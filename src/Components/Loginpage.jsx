import React from 'react';
import { Mail, ArrowRight, CornerRightDown } from 'lucide-react'; // Example icons

// You would typically install the lucide-react library: npm install lucide-react

const Loginpage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 ">
      <div className="w-full max-w-[500px] bg-white p-6 rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-primary">
            Register / Sign In
          </h1>
          <p className="text-xs flex items-center justify-center mt-1 text-black ">
            <span className="h-2 w-2 bg-green-500 rounded-full mr-1.5 animate-pulse"></span>
            Your Information in protection
          </p>
        </div>

        {/* Email Input Section */}
        <form className="space-y-4">
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-tex rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Email address"
            />
            {/* Optional: Add an icon to the email input */}
            {/* <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" /> */}
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-[#DEDEDE] text-white font-medium rounded-lg hover:bg-gray-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            Continue
          </button>
        </form>

        {/* Trouble signing in link */}
        <div className="text-center mt-2 pb-7">
          <a href="#" className="text-sm text-tex hover:text-purple-600 underline underline-offset-4 decoration-1">
  Trouble signing in?
</a>

        </div>

        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-tex"></div>
          <span className="flex-shrink mx-4 text-tex text-sm">
            Or continue with
          </span>
          <div className="flex-grow border-t border-tex"></div>
        </div>

        {/* Google Sign In Button */}
        <button
          type="button"
          className="w-full flex items-center justify-center py-3 px-4 bg-white border border-tex text-black font-medium rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {/* Google Logo (replace with an actual SVG or image) */}
          <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.675 12.193c0-.783-.069-1.543-.197-2.28H12v4.303h6.059c-.266 1.488-1.144 2.766-2.43 3.633v2.809h3.61c2.115-1.948 3.326-4.72 3.326-8.465z" fill="#4285F4"/>
            <path d="M12 23c3.085 0 5.672-1.018 7.563-2.768l-3.61-2.809c-.998.66-2.26 1.054-3.953 1.054-3.058 0-5.656-2.05-6.58-4.809H1.83v2.909C3.763 20.916 7.425 23 12 23z" fill="#34A853"/>
            <path d="M5.42 14.39c-.21-.66-.33-1.353-.33-2.11s.12-1.45.33-2.11V7.27H1.83c-.636 1.258-.98 2.658-.98 4.12 0 1.46.344 2.86.98 4.119L5.42 14.39z" fill="#FBBC05"/>
            <path d="M12 4.418c1.678 0 3.208.577 4.402 1.696l3.206-3.17c-1.96-1.815-4.595-2.944-7.608-2.944C7.425 0 3.763 2.084 1.83 5.483L5.42 8.39C6.344 5.64 8.942 3.59 12 3.59z" fill="#EA4335"/>
          </svg>
          <span className="text-base font-semibold">Gmail Account</span>
        </button>

        {/* Terms and Privacy Policy */}
        <div className="mt-6 text-xs text-tex text-center leading-relaxed">
          By continuing, you confirm that you are an adult and<br></br> have read and accepted our{' '}
          <a href="#" className="text-tex hover:underline  underline underline-offset-4 decoration-1">
            Blossoms Free Membership Agreement
          </a>{' '}
          and{' '}
          <a href="#" className="text-tex hover:underline  underline underline-offset-4 decoration-1">
            Privacy Policy
          </a>
          . Your information may be used for marketing purposes,<br></br>but you can opt out at any time.
        </div>
      </div>
    </div>
  );
};

export default Loginpage;