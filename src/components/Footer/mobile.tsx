'use client';
import { useState } from 'react';
import { IconContainer } from '.';
import { Group } from '..';
import styles from './styles.module.css';
import { FooterAccordion } from './footerAccordion';
import { Link } from 'react-router-dom';

export const MobileFooter = () => {
  const [activeTab, setActiveTab] = useState('');
  return (
    <div className='  min-[1060px]:hidden px-4 py-[100px] bg-[#12213C] flex flex-col items-center gap-y-10 relative z-[12]'>
      <Group key='links'>
        <div className='flex flex-col gap-y-6 w-full'>
          <FooterAccordion
            key='legal'
            title='Legal'
            isOpen={activeTab == 'Legal'}
            setIsOpen={setActiveTab}
          >
            <li>
              <Link to='/terms'>Terms of Use</Link>
            </li>
            <li>
              <Link to='/privacy-policy'>Privacy Policy</Link>
            </li>
            <li>
              <Link to='/lender-agreement'>Lender Agreement</Link>
            </li>
            <li>
              <Link to='/borrower-agreement'>Borrower Agreement</Link>
            </li>
            <li>
              <Link to='/guarantor-agreement'>Guarantor’s Agreement</Link>
            </li>
          </FooterAccordion>
          <FooterAccordion
            key='comapany'
            title='Company'
            isOpen={activeTab == 'Company'}
            setIsOpen={setActiveTab}
          >
            <li>
              <Link to='/about-us'>Who we are</Link>
            </li>
            {/* <li>
              <Link to='/'>Careers</Link>
            </li> */}
            <li>
              <Link to='/'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            <li>
              <Link to='/business'>P2vest for Business</Link>
            </li>
          </FooterAccordion>
          <FooterAccordion
            key='Personal'
            title='Personal'
            isOpen={activeTab == 'Personal'}
            setIsOpen={setActiveTab}
          >
            <li>
              <Link to='/lend'>Lend</Link>
            </li>
            <li>
              <Link to='/borrow'>Borrow</Link>
            </li>
            <li>
              <Link to='/bnpl'>BNPL</Link>
            </li>
            <li>
              <Link to='/parasol-insurance'>Parasol</Link>
            </li>
            <li>
              <Link to='/bail-me'>Bail Me</Link>
            </li>
          </FooterAccordion>
          <FooterAccordion
            key='Contact Us'
            title='Contact Us'
            isOpen={activeTab == 'Contact Us'}
            setIsOpen={setActiveTab}
          >
            <li>
              <a
                href='https://maps.app.goo.gl/DVyTqwdmDXfhY6HX6'
                target='_blank'
              >
                9 Dauda Fasanya, Bexley Court, Ikate-Lekki, Lagos, Nigeria.
              </a>
            </li>
            <li>
              <a href='mailto:hello@p2vest.com'>hello@p2vest.com</a>
            </li>
            <li>
              <a href='tel:+2347025003549'>+234 702 500 3549 </a>
              <a href='tel:+2349139366498'>+234 913 936 6498</a>
            </li>
          </FooterAccordion>
        </div>
      </Group>
      <Group key='social'>
        <div className={styles.social}>
          <Group key='icons'>
            <div className='flex items-center justify-around'>
              <IconContainer
                to='https://instagram.com/p2vestapp'
                key='instagram'
              >
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_889_203)'>
                    <path
                      d='M17.5034 0H6.49657C2.9143 0 0 2.9143 0 6.49657V17.5036C0 21.0857 2.9143 24 6.49657 24H17.5036C21.0857 24 24 21.0857 24 17.5036V6.49657C24 2.9143 21.0857 0 17.5034 0V0ZM12 18.5623C8.38145 18.5623 5.43767 15.6185 5.43767 12C5.43767 8.38145 8.38145 5.43767 12 5.43767C15.6185 5.43767 18.5623 8.38145 18.5623 12C18.5623 15.6185 15.6185 18.5623 12 18.5623ZM18.7192 6.98528C17.6499 6.98528 16.7801 6.11553 16.7801 5.04619C16.7801 3.97686 17.6499 3.10693 18.7192 3.10693C19.7885 3.10693 20.6585 3.97686 20.6585 5.04619C20.6585 6.11553 19.7885 6.98528 18.7192 6.98528Z'
                      fill='white'
                    />
                    <path
                      d='M12.0001 6.84473C9.15753 6.84473 6.84473 9.15734 6.84473 12.0001C6.84473 14.8426 9.15753 17.1554 12.0001 17.1554C14.8428 17.1554 17.1554 14.8426 17.1554 12.0001C17.1554 9.15734 14.8428 6.84473 12.0001 6.84473Z'
                      fill='white'
                    />
                    <path
                      d='M18.7191 4.51416C18.4258 4.51416 18.187 4.75293 18.187 5.04626C18.187 5.3396 18.4258 5.57837 18.7191 5.57837C19.0126 5.57837 19.2514 5.33978 19.2514 5.04626C19.2514 4.75275 19.0126 4.51416 18.7191 4.51416Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_889_203'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
              </IconContainer>
              <IconContainer to='https://twitter.com/P2Vest' key='Twitter'>
                <span>
                  <svg
                    width='26'
                    height='24'
                    viewBox='0 0 26 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.967 5.97835C22.9768 6.23815 22.9815 6.49925 22.9815 6.76149C22.9815 14.7675 17.874 23.9994 8.53359 24H8.53391H8.53359C5.66582 24 2.99726 22.997 0.75 21.2783C1.14732 21.3343 1.55174 21.3622 1.96123 21.3622C4.34048 21.3622 6.53002 20.3938 8.26827 18.7686C6.04526 18.7196 4.17101 16.9678 3.52422 14.5605C3.83379 14.6313 4.15211 14.6699 4.47856 14.6699C4.94205 14.6699 5.39103 14.5955 5.81773 14.4565C3.49418 13.9015 1.74384 11.4513 1.74384 8.51748C1.74384 8.49017 1.74384 8.46568 1.7445 8.44024C2.42878 8.89408 3.21128 9.16724 4.04444 9.19776C2.68094 8.11226 1.78467 6.2568 1.78467 4.15466C1.78467 3.0446 2.03617 2.00463 2.47232 1.10924C4.97649 4.77529 8.71896 7.18632 12.9393 7.4397C12.8523 6.99585 12.8072 6.53354 12.8072 6.05823C12.8072 2.7135 15.0815 0 17.8859 0C19.3465 0 20.6658 0.736683 21.5925 1.91441C22.7494 1.64213 23.8357 1.13784 24.817 0.443867C24.4373 1.85802 23.6325 3.0446 22.584 3.79498C23.6111 3.64836 24.5901 3.32333 25.5 2.84078C24.8203 4.05598 23.9586 5.12325 22.967 5.97835Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </IconContainer>
              <IconContainer
                to='https://facebook.com/ptwovest.vest.1'
                key='Facebook'
              >
                <span>
                  <svg
                    width='15'
                    height='24'
                    viewBox='0 0 15 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.4907 11.9769H9.47585V24H3.39302V11.9769H0.5V7.75149H3.39302V5.01717C3.39302 3.06184 4.52929 0 9.53 0L14.0358 0.0154092V4.11688H10.7665C10.2303 4.11688 9.47626 4.33589 9.47626 5.26864V7.75542H14.0221L13.4907 11.9769Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </IconContainer>
              <IconContainer
                to='https://www.youtube.com/@p2vest748'
                key='Youtube'
              >
                <svg
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_889_215)'>
                    <path
                      d='M23.3145 5.0046C22.4482 3.97476 20.8487 3.55469 17.7941 3.55469H6.70569C3.58112 3.55469 1.95454 4.00186 1.09147 5.09827C0.25 6.16728 0.25 7.74238 0.25 9.92235V14.0774C0.25 18.3007 1.2484 20.445 6.70569 20.445H17.7942C20.4431 20.445 21.911 20.0743 22.8606 19.1654C23.8345 18.2335 24.25 16.7118 24.25 14.0774V9.92235C24.25 7.62338 24.1849 6.039 23.3145 5.0046ZM15.6581 12.5735L10.6229 15.2051C10.5103 15.2639 10.3872 15.2931 10.2643 15.2931C10.1251 15.2931 9.98618 15.2556 9.86316 15.1811C9.63152 15.0408 9.49008 14.7897 9.49008 14.5189V9.27265C9.49008 9.0023 9.63113 8.75146 9.86231 8.61102C10.0936 8.47058 10.3812 8.46098 10.6211 8.58563L15.6563 11.2002C15.9125 11.3332 16.0734 11.5977 16.0737 11.8862C16.0741 12.175 15.9139 12.4399 15.6581 12.5735Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_889_215'>
                      <rect
                        width='24'
                        height='24'
                        fill='white'
                        transform='translate(0.25)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              </IconContainer>
              <IconContainer
                to='https://www.linkedin.com/company/p2vest/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B%2FAqfIqXWTjy7sddOyG5ZfQ%3D%3D'
                key='Linkedin'
              >
                <span>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M23.9942 24.0001V23.9992H24.0002V15.1972C24.0002 10.8913 23.0732 7.57422 18.0392 7.57422C15.6191 7.57422 13.9952 8.90232 13.3322 10.1611H13.2623V7.97622H8.48926V23.9992H13.4594V16.0651C13.4594 13.9762 13.8554 11.956 16.4423 11.956C18.9914 11.956 19.0292 14.3401 19.0292 16.1989V24.0001H23.9942Z'
                      fill='white'
                    />
                    <path
                      d='M0.395996 7.97656H5.3721V23.9996H0.395996V7.97656Z'
                      fill='white'
                    />
                    <path
                      d='M2.8821 0C1.2909 0 0 1.2909 0 2.8821C0 4.4733 1.2909 5.7912 2.8821 5.7912C4.4733 5.7912 5.7642 4.4733 5.7642 2.8821C5.763 1.2909 4.4721 0 2.8821 0Z'
                      fill='white'
                    />
                  </svg>
                </span>
              </IconContainer>
            </div>
          </Group>
        </div>
      </Group>
    </div>
  );
};
