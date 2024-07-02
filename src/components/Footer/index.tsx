import { Link } from 'react-router-dom';
import { Group } from '../Group';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div
      id='footer'
      className='w-full bg-[#fff] hidden min-[1060px]:block text-[#2C2844]'
    >
      <footer className='px-10 fr:px-10 xl:px-12 ds:px-20 pt-16 pb-5 w-full flex flex-col md:gap-y-[92px]  max-w-[1100px] mx-auto'>
        <Group key='top'>
          <div className={styles.top}>
            <Group key='logo'>
              {' '}
              <div className='flex flex-col'>
                <img
                  src='/cowas.svg'
                  alt='footer logo'
                  className='max-w-[176px]'
                />
                <Group key='icons'>
                  <div className='flex items-center gap-x-4 mt-4'>
                    <IconContainer key='twitter' to='#'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M21.5859 21.375L14.0885 10.4471L14.1013 10.4574L20.8613 2.625H18.6023L13.0954 9L8.72227 2.625H2.79766L9.79723 12.8276L9.79638 12.8267L2.41406 21.375H4.67309L10.7955 14.2824L15.6613 21.375H21.5859ZM7.82719 4.32954L18.3466 19.6705H16.5564L6.02852 4.32954H7.82719Z'
                          fill='#2C2844'
                        />
                      </svg>
                    </IconContainer>

                    <IconContainer to='#' key='instagram'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_370_607)'>
                          <path
                            d='M16 12C16 11.0747 15.6791 10.1779 15.092 9.46258C14.5049 8.74725 13.688 8.2576 12.7804 8.07706C11.8728 7.89652 10.9307 8.03625 10.1145 8.47244C9.2984 8.90864 8.65875 9.61432 8.30457 10.4692C7.95039 11.3242 7.90359 12.2755 8.17215 13.161C8.4407 14.0466 9.00799 14.8116 9.77737 15.3258C10.5468 15.84 11.4706 16.0716 12.3916 15.981C13.3125 15.8904 14.1736 15.4833 14.828 14.829C15.1994 14.47 15.4947 14.0397 15.6961 13.5639C15.8974 13.0882 16.0008 12.5767 16 12.06L15.999 11.997L16 12ZM18.16 12C18.1552 13.4185 17.659 14.7915 16.7559 15.8853C15.8528 16.9791 14.5986 17.7262 13.2067 17.9994C11.8148 18.2726 10.3712 18.0551 9.12164 17.3838C7.87208 16.7125 6.89373 15.6289 6.35311 14.3175C5.81248 13.0061 5.74298 11.5479 6.15644 10.191C6.56989 8.83418 7.44075 7.6625 8.62081 6.87541C9.80087 6.08833 11.2172 5.73447 12.6288 5.87406C14.0404 6.01365 15.36 6.63807 16.363 7.64105C16.9326 8.19376 17.3853 8.85534 17.6942 9.58647C18.003 10.3176 18.1618 11.1034 18.161 11.897L18.16 12.006V12ZM19.847 5.59405V5.59605C19.8471 5.9292 19.7317 6.25209 19.5204 6.50969C19.3091 6.76729 19.0151 6.94367 18.6884 7.00876C18.3616 7.07385 18.0224 7.02364 17.7286 6.86668C17.4347 6.70971 17.2043 6.45571 17.0768 6.14795C16.9492 5.84019 16.9323 5.49771 17.0289 5.17887C17.1255 4.86003 17.3297 4.58456 17.6067 4.3994C17.8836 4.21424 18.2162 4.13084 18.5478 4.16341C18.8794 4.19599 19.1894 4.34252 19.425 4.57805C19.681 4.82905 19.84 5.17905 19.84 5.56605V5.59505L19.847 5.59405ZM12.007 2.15405L10.812 2.14605C10.088 2.14071 9.53834 2.14071 9.163 2.14605C8.78767 2.15138 8.285 2.16705 7.655 2.19305C7.07 2.21305 6.515 2.27105 5.972 2.36305L6.045 2.35305C5.62 2.42305 5.243 2.52305 4.882 2.65605L4.925 2.64205C4.41501 2.84706 3.95123 3.15212 3.56102 3.53924C3.17081 3.92636 2.86207 4.3877 2.653 4.89605L2.643 4.92305C2.51465 5.27436 2.41956 5.63695 2.359 6.00605L2.354 6.04305C2.26506 6.5685 2.21194 7.09939 2.195 7.63205L2.194 7.65305C2.168 8.28371 2.15234 8.78638 2.147 9.16105C2.14167 9.53571 2.14167 10.0854 2.147 10.81C2.15234 11.5347 2.155 11.933 2.155 12.005C2.155 12.077 2.15234 12.4754 2.147 13.2C2.14167 13.9247 2.14167 14.4744 2.147 14.849C2.15234 15.2237 2.168 15.7264 2.194 16.357C2.214 16.942 2.272 17.497 2.364 18.04L2.354 17.967C2.424 18.392 2.524 18.769 2.657 19.13L2.643 19.087C2.84802 19.597 3.15308 20.0608 3.5402 20.451C3.92732 20.8412 4.38865 21.15 4.897 21.359L4.924 21.369C5.242 21.488 5.619 21.588 6.007 21.653L6.044 21.658C6.513 21.74 7.068 21.798 7.632 21.817L7.653 21.818C8.28367 21.844 8.78634 21.8597 9.161 21.865C9.53567 21.8704 10.0853 21.8704 10.81 21.865L11.998 21.841L13.193 21.849C13.917 21.8544 14.4667 21.8544 14.842 21.849C15.2173 21.8437 15.72 21.828 16.35 21.802C16.935 21.782 17.49 21.724 18.033 21.632L17.96 21.642C18.385 21.572 18.762 21.472 19.123 21.339L19.08 21.353C19.59 21.148 20.0538 20.843 20.444 20.4559C20.8342 20.0687 21.1429 19.6074 21.352 19.099L21.362 19.072C21.481 18.754 21.581 18.377 21.646 17.989L21.651 17.952C21.733 17.483 21.791 16.928 21.81 16.364L21.811 16.343C21.837 15.7124 21.8527 15.2097 21.858 14.835C21.8633 14.4604 21.8633 13.9107 21.858 13.186C21.8527 12.4614 21.85 12.063 21.85 11.991C21.85 11.919 21.8527 11.5207 21.858 10.796C21.8633 10.0714 21.8633 9.52171 21.858 9.14705C21.8527 8.77238 21.837 8.26971 21.811 7.63905C21.791 7.05405 21.733 6.49905 21.641 5.95605L21.651 6.02905C21.5876 5.63255 21.4861 5.24309 21.348 4.86605L21.362 4.90905C21.157 4.39905 20.8519 3.93527 20.4648 3.54506C20.0777 3.15485 19.6164 2.84611 19.108 2.63705L19.081 2.62705C18.7297 2.49869 18.3671 2.40361 17.998 2.34305L17.961 2.33805C17.4359 2.24915 16.9053 2.19603 16.373 2.17905L16.352 2.17805C15.7213 2.15205 15.2187 2.13638 14.844 2.13105C14.4693 2.12571 13.9197 2.12571 13.195 2.13105L12.007 2.15405ZM24 12C24 14.3854 23.9733 16.0364 23.92 16.953C23.9673 17.882 23.8188 18.8106 23.4843 19.6785C23.1498 20.5465 22.6366 21.3344 21.978 21.9914C21.3195 22.6483 20.5303 23.1596 19.6615 23.492C18.7928 23.8244 17.8639 23.9706 16.935 23.921L16.951 23.922C16.0343 23.9754 14.3833 24.002 11.998 24.002C9.61267 24.002 7.96167 23.9754 7.045 23.922C6.11602 23.9693 5.18747 23.8209 4.31953 23.4863C3.45158 23.1518 2.66361 22.6386 2.00668 21.9801C1.34974 21.3216 0.838494 20.5323 0.506073 19.6636C0.173651 18.7948 0.0274701 17.8659 0.0770022 16.937L0.0760022 16.953C0.0226689 16.0364 -0.0039978 14.3854 -0.0039978 12C-0.0039978 9.61471 0.0226689 7.96371 0.0760022 7.04705C0.0287336 6.11806 0.177178 5.18952 0.511715 4.32157C0.846253 3.45363 1.35942 2.66566 2.01796 2.00872C2.6765 1.35178 3.46572 0.840539 4.33447 0.508117C5.20323 0.175696 6.13214 0.0295148 7.061 0.0790469L7.045 0.0780469C7.96167 0.0247135 9.61267 -0.00195312 11.998 -0.00195312C14.3833 -0.00195312 16.0343 0.0247135 16.951 0.0780469C17.88 0.0307783 18.8085 0.179222 19.6765 0.51376C20.5444 0.848297 21.3324 1.36146 21.9893 2.02C22.6463 2.67854 23.1575 3.46776 23.4899 4.33652C23.8224 5.20528 23.9685 6.13418 23.919 7.06305L23.92 7.04705C23.9733 7.96305 24 9.61405 24 12Z'
                            fill='#2C2844'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_370_607'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    </IconContainer>
                    <IconContainer to='#' key='Twitter'>
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M15.725 22V14.255H18.325L18.714 11.237H15.724V9.31C15.724 8.436 15.967 7.84 17.221 7.84H18.819V5.14C18.0451 5.05764 17.2673 5.01758 16.489 5.02C14.185 5.02 12.608 6.427 12.608 9.01V11.237H10V14.255H12.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2H20.896C21.506 2 22 2.494 22 3.104V20.896C22 21.506 21.506 22 20.896 22H15.725Z'
                          fill='#2C2844'
                        />
                      </svg>
                    </IconContainer>
                  </div>
                </Group>
              </div>
            </Group>
            <Group key='Links'>
              <div className={styles.links}>
                <Group key='company'>
                  <div className='max-w-[211px]'>
                    <h4>Company</h4>
                    <ul>
                      <li>
                        <Link to='/bookkeeping'>About Us</Link>
                      </li>
                      <li>
                        <Link to='/#'>Career</Link>
                      </li>
                      <li>
                        <Link to='/#'>Newsletter</Link>
                      </li>
                    </ul>
                  </div>
                </Group>
                <Group key='resoiurces'>
                  {' '}
                  <div className='max-w-[111px]'>
                    <h4>Resources</h4>
                    <ul>
                      {/* <li>
                        <Link to='#'>Blog</Link>
                      </li> */}
                      <li>
                        <Link to='/faqs'>FAQ</Link>
                      </li>

                      <li>
                        <Link to='/terms'>Terms of Use</Link>
                      </li>
                      <li>
                        <Link to='/returns'>Returns Policy</Link>
                      </li>
                      <li>
                        <Link to='/privacy-policy'>Privacy Policy</Link>
                      </li>
                    </ul>
                  </div>
                </Group>
                <Group key='company'>
                  <div className='max-w-[211px]'>
                    <h4>Get in Touch</h4>
                    <ul>
                      <li className='flex items-center gap-x-3'>
                        <svg
                          width='18'
                          height='19'
                          viewBox='0 0 18 19'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M16.23 12.7598L13.69 12.4698C13.3913 12.4347 13.0886 12.4678 12.8046 12.5665C12.5205 12.6652 12.2625 12.827 12.05 13.0398L10.21 14.8798C7.3712 13.436 5.06379 11.1286 3.62001 8.28977L5.47001 6.43977C5.90001 6.00977 6.11001 5.40977 6.04001 4.79977L5.75001 2.27977C5.69332 1.79194 5.4592 1.342 5.09225 1.01561C4.72529 0.689226 4.25112 0.509183 3.76001 0.509767H2.03001C0.90001 0.509767 -0.0399899 1.44977 0.0300101 2.57977C0.56001 11.1198 7.39001 17.9398 15.92 18.4698C17.05 18.5398 17.99 17.5998 17.99 16.4698V14.7398C18 13.7298 17.24 12.8798 16.23 12.7598Z'
                            fill='black'
                          />
                        </svg>

                        <a href='tel:+2349064732245'>+234 9064732245</a>
                      </li>
                      <li className='flex items-center gap-x-3'>
                        <svg
                          width='22'
                          height='15'
                          viewBox='0 0 22 15'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M20 0H2C1.60218 0 1.22064 0.158035 0.93934 0.43934C0.658035 0.720644 0.5 1.10218 0.5 1.5V13.5C0.5 13.8978 0.658035 14.2794 0.93934 14.5607C1.22064 14.842 1.60218 15 2 15H20C20.3978 15 20.7794 14.842 21.0607 14.5607C21.342 14.2794 21.5 13.8978 21.5 13.5V1.5C21.5 1.10218 21.342 0.720644 21.0607 0.43934C20.7794 0.158035 20.3978 0 20 0ZM18.35 1.5L11 6.585L3.65 1.5H18.35ZM2 13.5V2.1825L10.5725 8.115C10.698 8.2021 10.8472 8.24877 11 8.24877C11.1528 8.24877 11.302 8.2021 11.4275 8.115L20 2.1825V13.5H2Z'
                            fill='black'
                          />
                        </svg>

                        <a href='mailto:info@cowascare.com'>
                          info@cowascare.com
                        </a>
                      </li>
                      <li className='flex items-center gap-x-3'>
                        <svg
                          width='18'
                          height='23'
                          viewBox='0 0 18 23'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                          <path
                            d='M9 1.5C6.87827 1.5 4.84344 2.34285 3.34315 3.84315C1.84285 5.34344 1 7.37827 1 9.5C1 11.392 1.402 12.63 2.5 14L9 21.5L15.5 14C16.598 12.63 17 11.392 17 9.5C17 7.37827 16.1571 5.34344 14.6569 3.84315C13.1566 2.34285 11.1217 1.5 9 1.5Z'
                            stroke='black'
                            strokeWidth='2'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>

                        <a href='#'>African Address</a>
                      </li>
                    </ul>
                  </div>
                </Group>
              </div>
            </Group>
          </div>
        </Group>
        <Group key='bottom'>
          <div className='flex mx-auto w-fit text-black/50 font-medium items-center gap-x-3'>
            <svg
              width='18'
              height='19'
              viewBox='0 0 18 19'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.27185 8.49728C7.31685 8.20028 7.41585 7.93929 7.54185 7.72329C7.81184 7.2193 8.27083 6.95831 8.89182 6.94931C9.29681 6.94931 9.6658 7.1293 9.9268 7.3903C10.1788 7.66929 10.3498 8.05628 10.3498 8.44328H11.9698C11.9518 8.02029 11.8708 7.63329 11.6998 7.2733C11.5648 6.93131 11.3578 6.62531 11.0878 6.37332C9.7828 5.16734 7.36185 5.33834 6.25487 6.70631C5.0939 8.20928 5.0669 10.8372 6.24587 12.3402C7.33485 13.6812 9.7198 13.8702 11.0158 12.6732C11.2948 12.4482 11.5198 12.1692 11.6998 11.8452C11.8438 11.5212 11.9428 11.1792 11.9518 10.8102H10.3498C10.3498 10.9992 10.2868 11.1702 10.2058 11.3232C10.1248 11.4942 10.0168 11.6292 9.8998 11.7462C9.6028 11.9802 9.25181 12.1062 8.87382 12.1062C8.54983 12.0972 8.27983 12.0342 8.07284 11.8992C7.83952 11.768 7.65367 11.5664 7.54185 11.3232C7.09186 10.5132 7.16385 9.38826 7.27185 8.49728ZM8.99982 0.523438C4.04992 0.523438 0 4.57336 0 9.52325C0.47699 21.466 17.5496 21.457 17.9996 9.52325C17.9996 4.57336 13.9497 0.523438 8.99982 0.523438ZM8.99982 16.7231C5.0309 16.7231 1.79996 13.4922 1.79996 9.52325C2.19596 -0.025551 15.8037 -0.025551 16.1997 9.52325C16.1997 13.4922 12.9687 16.7231 8.99982 16.7231Z'
                fill='black'
                fillOpacity='0.5'
              />
            </svg>

            <span>Copyright 2024 CowasCare All Rights Reserved</span>
          </div>
        </Group>
      </footer>
    </div>
  );
};

export const IconContainer = ({
  children,
  to,
}: {
  children: React.ReactNode;
  to?: string;
}) => (
  <a href={to} target='_blank'>
    {children}
  </a>
);
