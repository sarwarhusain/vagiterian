const Tabs = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4  items-center justify-center">
      <div className="card bg-gray-100  w-50 shadow-sm flex items-center justify-center mt-5">
        <figure className="bg-orange-300 rounded-2xl m-5 p-5 shadow-lg w-20 h-15 flex items-center justify-center text-white text-xl font-semibold">
          <i class="fa-duotone fa-solid fa-car-side"></i>
        </figure>
        <div className="text-center">
          <h2 className="text-gray-700 font-semibold">Free Location</h2>
          <p className="text-gray-700">Free on order over $100</p>
        </div>
      </div>
      <div className="card bg-gray-100  w-50 shadow-sm flex items-center justify-center mt-5">
        <figure className="bg-orange-300 rounded-2xl m-5 p-5 shadow-lg w-20 h-15 flex items-center justify-center text-white text-xl font-semibold">
          <i class="fa-solid fa-right-left"></i>
        </figure>
        <div className="text-center">
          <h2 className="text-gray-700 font-semibold">30 Day Return</h2>
          <p className="text-gray-700">30 day money guarantee</p>
        </div>
      </div>
      <div className="card bg-gray-100  w-50 shadow-sm flex items-center justify-center mt-5">
        <figure className="bg-orange-300 rounded-2xl m-5 p-5 shadow-lg w-20 h-15 flex items-center justify-center text-white text-xl font-semibold">
          <i class="fa-solid fa-user-shield"></i>
        </figure>
        <div className="text-center">
          <h2 className="text-gray-700 font-semibold">Security Payment</h2>
          <p className="text-gray-700text-gray-700">100% security payment</p>
        </div>
      </div>
      <div className="card bg-gray-100  w-50 shadow-sm flex items-center justify-center mt-5">
        <figure className="bg-orange-300 rounded-2xl m-5 p-5 shadow-lg w-20 h-15 flex items-center justify-center text-white text-xl font-semibold">
          <i class="fa-solid fa-phone-volume"></i>
        </figure>
        <div className="text-center">
          <h2 className="text-gray-700 font-semibold">24/7 Support</h2>
          <p className="text-gray-700">Support every time fast</p>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
