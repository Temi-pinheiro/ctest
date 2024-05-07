import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Group } from '../../components';
import { motion } from 'framer-motion';
import { fadeIn } from '../../constants/framer';
import { useAuth } from '../../providers';
import { useEffect } from 'react';
export const SettingsLayout = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    } else {
      return;
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className='w-full flex min-h-[70vh] flex-col pt-20'>
      <div className='mt-12 flex items-start gap-x-[100px] max-w-[1050px] w-full mx-auto'>
        {' '}
        <Group key='left'>
          <div className='w-[174px] flex flex-col gap-y-[10px] shrink-0'>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? '#000000' : undefined,
                background: isActive ? '#F9ECE7' : undefined,
                fontWeight: isActive ? 600 : 400,
              })}
              className='flex items-center gap-x-[10px] py-[10px] px-5 rounded-xl text-black/70'
              to='/my-account'
            >
              <span>My account</span>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#000000' : undefined,
                background: isActive ? '#F9ECE7' : undefined,
                fontWeight: isActive ? 600 : 400,
              })}
              className='flex items-center gap-x-[10px] py-[10px] px-5 rounded-xl text-black/70'
              to='/my-account/profile'
            >
              <span>Profile</span>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#000000' : undefined,
                background: isActive ? '#F9ECE7' : undefined,
                fontWeight: isActive ? 600 : 400,
              })}
              className='flex items-center gap-x-[10px] py-[10px] px-5 rounded-xl text-black/70'
              to='/my-account/orders'
            >
              <span>Orders</span>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#000000' : undefined,
                background: isActive ? '#F9ECE7' : undefined,
                fontWeight: isActive ? 600 : 400,
              })}
              className='flex items-center gap-x-[10px] py-[10px] px-5 rounded-xl text-black/70'
              to='/my-account/returns'
            >
              <span>Returns</span>
            </NavLink>
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? '#000000' : undefined,
                background: isActive ? '#F9ECE7' : undefined,
                fontWeight: isActive ? 600 : 400,
              })}
              className='flex items-center gap-x-[10px] py-[10px] px-5 rounded-xl text-black/70'
              to='/my-account/wallet'
            >
              <span>Wallet</span>
            </NavLink>
          </div>
        </Group>
        <motion.div
          variants={fadeIn}
          animate='animate'
          initial='initial'
          key={pathname}
          exit='exit'
          className='w-full h-full'
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
};
