/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { getOrders } from '../../queries/accountQueries';
import { Group, Panes } from '../../components';
import Loader from '../../components/Loader';
import { useSearchParams } from 'react-router-dom';
import { usePanes } from '../../hooks';
import { useState } from 'react';
import { OrderAccordion } from './components';

export const OrdersPage = () => {
  const searchParams = useSearchParams()[0];
  const active = searchParams.get('show') || 'all';
  const [activeOrder, setActiveOrder] = useState('');
  const { show, handlePaneSwitch } = usePanes(active);
  const { data: orders, isLoading } = useQuery<{ orders: Order[] }>({
    queryKey: ['orders'],
    queryFn: async () => {
      try {
        const data = await getOrders();
        return data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error?.message);
      }
    },
  });
  const panes = [
    { id: 'pending', label: 'In Progress', show: true },
    { id: 'delivered', label: 'Delivered', show: true },
    { id: 'failed', label: 'Failed', show: true },
    { id: 'cancel_request', label: 'Cancel Request', show: true },
    { id: 'all', label: 'All', show: true },
  ];
  return (
    <div className='w-full flex flex-col text-[#2C2844] '>
      <h1 className='text-2xl font-semibold pb-6'>Orders</h1>
      {isLoading ? (
        <Loader big />
      ) : orders?.orders && orders.orders.length > 0 ? (
        <Group key='full'>
          <div className='w-full h-full flex flex-col items-center gap-y-5'>
            <Panes
              active={show}
              panes={panes}
              handleChange={handlePaneSwitch}
            />
            <div className='mt-10 flex flex-col gap-y-5 w-full'>
              {show == 'all' && (
                <All
                  orders={orders.orders}
                  activeOrder={activeOrder}
                  setActiveOrder={setActiveOrder}
                />
              )}
              {show == 'pending' && (
                <InProgress
                  orders={orders.orders.filter(
                    (order) => order.status.toLowerCase() == 'pending'
                  )}
                  activeOrder={activeOrder}
                  setActiveOrder={setActiveOrder}
                />
              )}
              {show == 'failed' && (
                <Failed
                  orders={orders.orders.filter(
                    (order) => order.status.toLowerCase() == 'failed'
                  )}
                  activeOrder={activeOrder}
                  setActiveOrder={setActiveOrder}
                />
              )}
              {show == 'delivered' && (
                <Delivered
                  orders={orders.orders.filter(
                    (order) => order.status.toLowerCase() == 'delivered'
                  )}
                  activeOrder={activeOrder}
                  setActiveOrder={setActiveOrder}
                />
              )}
              {show == 'cancel_request' && (
                <Cancelled
                  orders={orders.orders.filter(
                    (order) => order.status.toLowerCase() == 'cancel_request'
                  )}
                  activeOrder={activeOrder}
                  setActiveOrder={setActiveOrder}
                />
              )}
            </div>
          </div>
        </Group>
      ) : (
        <Group key='empty'>
          <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
            <img src='/emptyorders.svg' />
            <h2>No orders</h2>
            <span>No previous order history</span>
          </div>
        </Group>
      )}
    </div>
  );
};

const InProgress = ({
  orders,
  activeOrder,
  setActiveOrder,
}: {
  orders: Order[];
  activeOrder: string;
  setActiveOrder: (v: any) => any;
}) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderAccordion
            key={order.id}
            order={order}
            isOpen={activeOrder == order.id.toString()}
            setIsOpen={setActiveOrder}
          />
        ))
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
          <img src='/emptyorders.svg' />
          <h2>No orders</h2>
          <span>No previous order history</span>
        </div>
      )}
    </>
  );
};
const Delivered = ({
  orders,
  activeOrder,
  setActiveOrder,
}: {
  orders: Order[];
  activeOrder: string;
  setActiveOrder: (v: any) => any;
}) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderAccordion
            key={order.id}
            order={order}
            isOpen={activeOrder == order.id.toString()}
            setIsOpen={setActiveOrder}
          />
        ))
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
          <img src='/emptyorders.svg' />
          <h2>No orders</h2>
          <span>No previous order history</span>
        </div>
      )}
    </>
  );
};
const Failed = ({
  orders,
  activeOrder,
  setActiveOrder,
}: {
  orders: Order[];
  activeOrder: string;
  setActiveOrder: (v: any) => any;
}) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderAccordion
            key={order.id}
            order={order}
            isOpen={activeOrder == order.id.toString()}
            setIsOpen={setActiveOrder}
          />
        ))
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
          <img src='/emptyorders.svg' />
          <h2>No orders</h2>
          <span>No previous order history</span>
        </div>
      )}
    </>
  );
};
const Cancelled = ({
  orders,
  activeOrder,
  setActiveOrder,
}: {
  orders: Order[];
  activeOrder: string;
  setActiveOrder: (v: any) => any;
}) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderAccordion
            key={order.id}
            order={order}
            isOpen={activeOrder == order.id.toString()}
            setIsOpen={setActiveOrder}
          />
        ))
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
          <img src='/emptyorders.svg' />
          <h2>No orders</h2>
          <span>No previous order history</span>
        </div>
      )}
    </>
  );
};
const All = ({
  orders,
  activeOrder,
  setActiveOrder,
}: {
  orders: Order[];
  activeOrder: string;
  setActiveOrder: (v: any) => any;
}) => {
  return (
    <>
      {orders.length > 0 ? (
        orders.map((order) => (
          <OrderAccordion
            key={order.id}
            order={order}
            isOpen={activeOrder == order.id.toString()}
            setIsOpen={setActiveOrder}
          />
        ))
      ) : (
        <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
          <img src='/emptyorders.svg' />
          <h2>No orders</h2>
          <span>No previous order history</span>
        </div>
      )}
    </>
  );
};
