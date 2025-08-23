import React from "react";

const FeatureCard = ({
  logoImage,
  title,
  hoverColor ,
  onCredentialsClick,
}) => {
  return (
    <div className="relative flex flex-col items-start p-7 w-[70%] m-6 md:w-1/4 rounded-[20px] bg-black shadow-lg transition-all duration-1000 overflow-hidden group hover-card">
      {/* CSS for complex hover effects that can't be done with Tailwind alone */}
      <style jsx>{`
        .hover-card::after {
          content: "";
          position: absolute;
          bottom: -30%;
          right: -30%;
          width: 120px;
          height: 120px;
          background: ${hoverColor};
          filter: blur(60px);
          border-radius: 50%;
          transition: width 1.5s, height 1.5s;
        }
        .hover-card::before {
          content: "";
          position: absolute;
          bottom: -160%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 0;
          height: 0;
          background: ${hoverColor};
          filter: blur(70px);
          border-radius: 50%;
          transition: width 1s, height 1s;
        }
        .hover-card:hover::before {
          bottom: -230%;
          width: 800px;
          height: 800px;
          filter: blur(1px);
        }
        .hover-card:hover .icon {
          background: ${hoverColor} !important;
        }
      `}</style>

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="flex justify-center items-center w-14 h-14 rounded-sm transition-all duration-1000 icon"
          style={{
            backgroundColor: `${hoverColor}20`,
          }}
        >
          <img
            src={logoImage}
            alt={title}
            className="w-14 h-14 object-cover rounded "
          />
        </div>

        {/* Title */}
        <h3 className="text-white text-[20px] font-medium transition-all duration-1000 my-4 group-hover:text-white">
          {title}
        </h3>


        {/* Learn More Link */}
        <button
          onClick={onCredentialsClick}
          className="flex justify-start items-center gap-3 text-white text-sm font-semibold leading-[22px] transition-all duration-1000 mt-4 cursor-pointer bg-transparent border-none p-0"
        >
          See credentials
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 18 19"
            height="19"
            width="18"
            className=" transition-all duration-1000"
          >
            <path
              stroke="white"
              fill="white"
              d="M3 9.09985C3 9.23792 2.88807 9.34985 2.75 9.34985C2.61193 9.34985 2.5 9.23792 2.5 9.09985C2.5 8.96178 2.61193 8.84985 2.75 8.84985C2.88807 8.84985 3 8.96178 3 9.09985Z"
            />
            <path
              stroke="white"
              fill="white"
              d="M9.25 2.84985C9.25 2.98792 9.13807 3.09985 9 3.09985C8.86193 3.09985 8.75 2.98792 8.75 2.84985C8.75 2.71178 8.86193 2.59985 9 2.59985C9.13807 2.59985 9.25 2.71178 9.25 2.84985Z"
            />
            <path
              fill="white"
              d="M2.75 3.59985C3.16421 3.59985 3.5 3.26407 3.5 2.84985C3.5 2.43564 3.16421 2.09985 2.75 2.09985C2.33579 2.09985 2 2.43564 2 2.84985C2 3.26407 2.33579 3.59985 2.75 3.59985Z"
            />
            <path
              fill="white"
              d="M2.75 6.72485C3.16421 6.72485 3.5 6.38907 3.5 5.97485C3.5 5.56064 3.16421 5.22485 2.75 5.22485C2.33579 5.22485 2 5.56064 2 5.97485C2 6.38907 2.33579 6.72485 2.75 6.72485Z"
            />
            <path
              fill="white"
              d="M2.75 12.9749C3.16421 12.9749 3.5 12.6391 3.5 12.2249C3.5 11.8106 3.16421 11.4749 2.75 11.4749C2.33579 11.4749 2 11.8106 2 12.2249C2 12.6391 2.33579 12.9749 2.75 12.9749Z"
            />
            <path
              fill="white"
              d="M2.75 16.0999C3.16421 16.0999 3.5 15.7641 3.5 15.3499C3.5 14.9356 3.16421 14.5999 2.75 14.5999C2.33579 14.5999 2 14.9356 2 15.3499C2 15.7641 2.33579 16.0999 2.75 16.0999Z"
            />
            <path
              fill="white"
              d="M15.25 3.59985C15.6642 3.59985 16 3.26407 16 2.84985C16 2.43564 15.6642 2.09985 15.25 2.09985C14.8358 2.09985 14.5 2.43564 14.5 2.84985C14.5 3.26407 14.8358 3.59985 15.25 3.59985Z"
            />
            <path
              fill="white"
              d="M15.25 6.72485C15.6642 6.72485 16 6.38907 16 5.97485C16 5.56064 15.6642 5.22485 15.25 5.22485C14.8358 5.22485 14.5 5.56064 14.5 5.97485C14.5 6.38907 14.8358 6.72485 15.25 6.72485Z"
            />
            <path
              fill="white"
              d="M12.125 3.59985C12.5392 3.59985 12.875 3.26407 12.875 2.84985C12.875 2.43564 12.5392 2.09985 12.125 2.09985C11.7108 2.09985 11.375 2.43564 11.375 2.84985C11.375 3.26407 11.7108 3.59985 12.125 3.59985Z"
            />
            <path
              fill="white"
              d="M5.875 3.59985C6.28921 3.59985 6.625 3.26407 6.625 2.84985C6.625 2.43564 6.28921 2.09985 5.875 2.09985C5.46079 2.09985 5.125 2.43564 5.125 2.84985C5.125 3.26407 5.46079 3.59985 5.875 3.59985Z"
            />
            <path
              fill="white"
              d="M5.875 16.0999C6.28921 16.0999 6.625 15.7641 6.625 15.3499C6.625 14.9356 6.28921 14.5999 5.875 14.5999C5.46079 14.5999 5.125 14.9356 5.125 15.3499C5.125 15.7641 5.46079 16.0999 5.875 16.0999Z"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="white"
              d="M9.25 15.3499V9.34985H15.25"
            />
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              stroke="white"
              d="M9.25 9.34985L15.25 15.3499"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Example usage:
// <FeatureCard
//   logoImage="https://example.com/logo.png"
//   title="Easy For Everyone"
//   subtitle="Every year, we award travelers' favorite destinations, hotels, restaurants, and things to"
//   hoverColor="#23c55e"
//   onCredentialsClick={() => window.open('https://credentials-link.com', '_blank')}
// />

export default FeatureCard;
