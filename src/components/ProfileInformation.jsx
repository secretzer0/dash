import React from 'react'
import '../styles/ProfileInformation.css'

const ProfileInformation = () => {
  return (
    <div className="profile-information">
      <div className="profile-information-background"></div>

      <div className="profile-info-header">
        <div className="profile-info-title">About Randy Thomas</div>
        <div className="profile-info-description">
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallsdesk.com%2Fwp-content%2Fuploads%2F2016%2F11%2FSylvester-Stallone-Images.jpg&f=1&nofb=1&ipt=323097066259a2116497547e5d27e63438b1cf6007f4c55393aad40d494d0fa3" alt="Sylvester Stallone" className="inline-image" />
          Hi, I'm Randy Thomas! Just picked up my brand new Range Rover and I'm absolutely loving it. The luxury, performance, and advanced technology make every drive an incredible experience. Can't wait to take it on some weekend adventures.
        </div>
        <svg className="profile-divider" width="405" height="2" viewBox="0 0 405 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1H405" stroke="url(#paint0_linear_divider)"/>
          <defs>
            <linearGradient id="paint0_linear_divider" x1="0" y1="1" x2="382.5" y2="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="#E0E1E2" stopOpacity="0"/>
              <stop offset="0.5" stopColor="#E0E1E2"/>
              <stop offset="1" stopColor="#E0E1E2" stopOpacity="0.15625"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="profile-details">
        <div className="detail-item">
          <span className="detail-label">Full Name:</span>
          <span className="detail-value">Randy Thomas</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Mobile:</span>
          <span className="detail-value">+1 (281) 989-2064</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Email:</span>
          <span className="detail-value">rthomas@oversiteai.io</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Location:</span>
          <span className="detail-value">United States</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Social Media:</span>
          <div className="social-media-icons">
            <svg className="social-icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_facebook)">
                <path d="M11 6.5C11 3.74 8.76 1.5 6 1.5C3.24 1.5 1 3.74 1 6.5C1 8.92 2.72 10.935 5 11.4V8H4V6.5H5V5.25C5 4.285 5.785 3.5 6.75 3.5H8V5H7C6.725 5 6.5 5.225 6.5 5.5V6.5H8V8H6.5V11.475C9.025 11.225 11 9.095 11 6.5Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_facebook">
                  <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <svg className="social-icon" width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_twitter)">
                <path d="M11.625 3.06665C11.203 3.25002 10.7565 3.37082 10.2996 3.42525C10.7798 3.14409 11.1409 2.69741 11.3152 2.169C10.8612 2.43445 10.3654 2.6207 9.8489 2.71978C9.63142 2.49186 9.36987 2.31054 9.08014 2.18684C8.7904 2.06315 8.47854 1.99967 8.16351 2.00025C6.88804 2.00025 5.85586 3.01743 5.85586 4.27134C5.85495 4.44575 5.87494 4.61965 5.91539 4.78931C5.00078 4.74643 4.1052 4.51312 3.28593 4.10429C2.46666 3.69546 1.74175 3.12013 1.15758 2.41509C0.952634 2.76059 0.844249 3.15479 0.84375 3.5565C0.84375 4.344 1.25461 5.04009 1.875 5.4479C1.50744 5.43918 1.1474 5.34189 0.825469 5.16431V5.19243C0.825469 6.29399 1.62234 7.2104 2.67703 7.41899C2.4787 7.47186 2.27432 7.49865 2.06906 7.49868C1.92342 7.49894 1.7781 7.4848 1.63523 7.45649C1.92844 8.35884 2.7818 9.01509 3.79265 9.03384C2.97126 9.66687 1.9628 10.009 0.925781 10.0065C0.741707 10.0062 0.557804 9.99526 0.375 9.97368C1.42996 10.6473 2.65628 11.0036 3.90797 11.0002C8.15859 11.0002 10.4808 7.53853 10.4808 4.53618C10.4808 4.43775 10.4782 4.33931 10.4735 4.24322C10.9242 3.9226 11.3142 3.52418 11.625 3.06665Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_twitter">
                  <rect width="12" height="12" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
            <svg className="social-icon" width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_instagram)">
                <path d="M6.82285 1.85398C7.30591 1.85542 7.76877 2.04796 8.11034 2.38953C8.45192 2.73111 8.64445 3.19397 8.6459 3.67703V7.32273C8.64445 7.80578 8.45192 8.26865 8.11034 8.61022C7.76877 8.9518 7.30591 9.14433 6.82285 9.14577H3.17715C2.69409 9.14433 2.23123 8.9518 1.88965 8.61022C1.54808 8.26865 1.35554 7.80578 1.3541 7.32273V3.67703C1.35554 3.19397 1.54808 2.73111 1.88965 2.38953C2.23123 2.04796 2.69409 1.85542 3.17715 1.85398H6.82285ZM6.82285 1.12488H3.17715C1.77344 1.12488 0.625 2.27331 0.625 3.67703V7.32273C0.625 8.72644 1.77344 9.87487 3.17715 9.87487H6.82285C8.22656 9.87487 9.375 8.72644 9.375 7.32273V3.67703C9.375 2.27331 8.22656 1.12488 6.82285 1.12488Z" fill="white"/>
                <path d="M7.36914 3.677C7.26098 3.677 7.15525 3.64493 7.06531 3.58484C6.97538 3.52475 6.90529 3.43933 6.86389 3.33941C6.8225 3.23948 6.81167 3.12952 6.83277 3.02344C6.85388 2.91735 6.90596 2.81991 6.98244 2.74343C7.05892 2.66695 7.15637 2.61486 7.26245 2.59376C7.36853 2.57266 7.47849 2.58349 7.57842 2.62488C7.67835 2.66627 7.76376 2.73637 7.82385 2.8263C7.88394 2.91623 7.91602 3.02197 7.91602 3.13013C7.91617 3.20199 7.90213 3.27317 7.8747 3.33959C7.84727 3.40601 7.807 3.46636 7.75618 3.51717C7.70537 3.56798 7.64502 3.60826 7.5786 3.63569C7.51218 3.66312 7.441 3.67716 7.36914 3.677Z" fill="white"/>
                <path d="M5 4.04124C5.28844 4.04124 5.57041 4.12677 5.81024 4.28702C6.05007 4.44727 6.237 4.67504 6.34738 4.94153C6.45777 5.20802 6.48665 5.50125 6.43038 5.78415C6.3741 6.06705 6.2352 6.32692 6.03124 6.53088C5.82728 6.73484 5.56742 6.87374 5.28452 6.93001C5.00162 6.98628 4.70838 6.9574 4.4419 6.84702C4.17541 6.73663 3.94764 6.54971 3.78739 6.30988C3.62714 6.07004 3.5416 5.78808 3.5416 5.49963C3.54202 5.11297 3.6958 4.74226 3.96921 4.46885C4.24263 4.19543 4.61334 4.04165 5 4.04124ZM5 3.31213C4.56735 3.31213 4.14442 3.44043 3.78469 3.68079C3.42496 3.92116 3.14458 4.2628 2.97901 4.66251C2.81345 5.06223 2.77013 5.50206 2.85453 5.92639C2.93894 6.35073 3.14728 6.7405 3.4532 7.04643C3.75913 7.35236 4.14891 7.5607 4.57324 7.6451C4.99757 7.72951 5.43741 7.68619 5.83712 7.52062C6.23683 7.35505 6.57847 7.07467 6.81884 6.71494C7.0592 6.35521 7.1875 5.93228 7.1875 5.49963C7.1875 4.91947 6.95703 4.36307 6.5468 3.95284C6.13656 3.5426 5.58016 3.31213 5 3.31213Z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_instagram">
                  <rect width="10" height="10" fill="white" transform="translate(0 0.5)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInformation
