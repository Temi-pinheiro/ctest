export const OrdersPage = () => {
  return (
    <div className='w-full flex flex-col text-[#2C2844]'>
      <h1 className='text-2xl font-semibold pb-6'>Orders</h1>
      <div className='w-full h-full flex flex-col items-center justify-center gap-y-5'>
        <img src='/emptyorders.svg' />
        <h2>No orders</h2>
        <span>No previous order history</span>
      </div>
    </div>
  );
};
