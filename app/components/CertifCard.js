"use client";

import React from 'react';
import styled from 'styled-components';

const CertifCard = () => {
  return (
    <StyledWrapper>
      <div className="card sweeperCard o-hidden">
        <div className="containers">
          <div className="icon">
            <svg width={28} height={29} viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.7222 9.04435V6.71102C23.7222 5.42235 22.6775 4.37769 21.3888 4.37769L6.61106 4.37769C5.32239 4.37769 4.27773 5.42235 4.27773 6.71102V9.04435C4.27773 10.333 5.32239 11.3777 6.61106 11.3777H21.3888C22.6775 11.3777 23.7222 10.333 23.7222 9.04435Z" stroke="#23C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M23.7222 21.4888V19.1555C23.7222 17.8668 22.6775 16.8221 21.3888 16.8221H15.9444C14.6557 16.8221 13.6111 17.8668 13.6111 19.1555V21.4888C13.6111 22.7775 14.6557 23.8221 15.9444 23.8221H21.3888C22.6775 23.8221 23.7222 22.7775 23.7222 21.4888Z" stroke="#23C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="title my-3">Easy For Everyone</div>
          <div className="subtitle">
            Every year, we award travelers’ favorite destinations, hotels,
            restaurants, and things to
          </div>
          <div className="linkMore mt-3">
            See credentials
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 19" height={19} width={18}>
              <path stroke="#072713" fill="#072713" d="M3 9.09985C3 9.23792 2.88807 9.34985 2.75 9.34985C2.61193 9.34985 2.5 9.23792 2.5 9.09985C2.5 8.96178 2.61193 8.84985 2.75 8.84985C2.88807 8.84985 3 8.96178 3 9.09985Z" />
              <path stroke="#072713" fill="#072713" d="M9.25 2.84985C9.25 2.98792 9.13807 3.09985 9 3.09985C8.86193 3.09985 8.75 2.98792 8.75 2.84985C8.75 2.71178 8.86193 2.59985 9 2.59985C9.13807 2.59985 9.25 2.71178 9.25 2.84985Z" />
              <path fill="#072713" d="M2.75 3.59985C3.16421 3.59985 3.5 3.26407 3.5 2.84985C3.5 2.43564 3.16421 2.09985 2.75 2.09985C2.33579 2.09985 2 2.43564 2 2.84985C2 3.26407 2.33579 3.59985 2.75 3.59985Z" />
              <path fill="#072713" d="M2.75 6.72485C3.16421 6.72485 3.5 6.38907 3.5 5.97485C3.5 5.56064 3.16421 5.22485 2.75 5.22485C2.33579 5.22485 2 5.56064 2 5.97485C2 6.38907 2.33579 6.72485 2.75 6.72485Z" />
              <path fill="#072713" d="M2.75 12.9749C3.16421 12.9749 3.5 12.6391 3.5 12.2249C3.5 11.8106 3.16421 11.4749 2.75 11.4749C2.33579 11.4749 2 11.8106 2 12.2249C2 12.6391 2.33579 12.9749 2.75 12.9749Z" />
              <path fill="#072713" d="M2.75 16.0999C3.16421 16.0999 3.5 15.7641 3.5 15.3499C3.5 14.9356 3.16421 14.5999 2.75 14.5999C2.33579 14.5999 2 14.9356 2 15.3499C2 15.7641 2.33579 16.0999 2.75 16.0999Z" />
              <path fill="#072713" d="M15.25 3.59985C15.6642 3.59985 16 3.26407 16 2.84985C16 2.43564 15.6642 2.09985 15.25 2.09985C14.8358 2.09985 14.5 2.43564 14.5 2.84985C14.5 3.26407 14.8358 3.59985 15.25 3.59985Z" />
              <path fill="#072713" d="M15.25 6.72485C15.6642 6.72485 16 6.38907 16 5.97485C16 5.56064 15.6642 5.22485 15.25 5.22485C14.8358 5.22485 14.5 5.56064 14.5 5.97485C14.5 6.38907 14.8358 6.72485 15.25 6.72485Z" />
              <path fill="#072713" d="M12.125 3.59985C12.5392 3.59985 12.875 3.26407 12.875 2.84985C12.875 2.43564 12.5392 2.09985 12.125 2.09985C11.7108 2.09985 11.375 2.43564 11.375 2.84985C11.375 3.26407 11.7108 3.59985 12.125 3.59985Z" />
              <path fill="#072713" d="M5.875 3.59985C6.28921 3.59985 6.625 3.26407 6.625 2.84985C6.625 2.43564 6.28921 2.09985 5.875 2.09985C5.46079 2.09985 5.125 2.43564 5.125 2.84985C5.125 3.26407 5.46079 3.59985 5.875 3.59985Z" />
              <path fill="#072713" d="M5.875 16.0999C6.28921 16.0999 6.625 15.7641 6.625 15.3499C6.625 14.9356 6.28921 14.5999 5.875 14.5999C5.46079 14.5999 5.125 14.9356 5.125 15.3499C5.125 15.7641 5.46079 16.0999 5.875 16.0999Z" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#072713" d="M9.25 15.3499V9.34985H15.25" />
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#072713" d="M9.25 9.34985L15.25 15.3499" />
            </svg>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 28px;
    max-width: 340px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0px 0px 14px 0px rgba(192, 192, 192, 0.2);
    transition: 1s all;
    overflow: hidden;
  }
  .card::after {
    content: "";
    position: absolute;
    bottom: -30%;
    right: -30%;
    width: 120px;
    height: 120px;
    background: #23c55e;
    filter: blur(70px);
    border-radius: 50%;
    transition: width 1s, height 1s;
  }
  .card::before {
    content: "";
    position: absolute;
    bottom: -160%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    background: #23c55e;
    filter: blur(70px);
    border-radius: 50%;
    transition: width 1s, height 1s;
  }
  .card:hover::before {
    bottom: -230%;
    width: 1000px;
    height: 1000px;
    filter: blur(1px);
  }
  .containers {
    position: relative;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    border-radius: 6px;
    background: #e5f6eb;
  }
  .card:hover .icon {
    background: #23c55e;
    transition: 1s all;
  }
  .card:hover .icon svg,
  .card:hover .linkMore svg {
    filter: brightness(0) invert(1);
    transition: 1s all;
  }
  .title {
    color: #171d29;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    white-space: nowrap;
    transition: 1s all;
    margin: 1rem 0;
  }
  .subtitle {
    color: #7e8882;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    transition: 1s all;
  }
  .linkMore {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 0.8rem;
    color: #072713;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    text-decoration: none;
    transition: 1s all;
    margin-top: 1rem;
  }
  .card:hover .title,
  .card:hover .subtitle,
  .card:hover .linkMore {
    color: #fff;
    transition: 1s all;
  }`;

export default CertifCard;
