import InfoBar from "./InfoBar";

const Account = () => {
  const description = "Profile";
  const user = {
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main St, City, State",
    previousOrders: [
      { id: 1, product: "Product 1", price: "$10.00" },
      { id: 2, product: "Product 2", price: "$15.00" },
      { id: 3, product: "Product 3", price: "$20.00" },
    ],
  };

  return (
    <div className="h-screen myBlue">
      <InfoBar description={description} />
      <div className="container mx-auto py-10">
        <div className="max-w-md mx-auto bg-yellow-500 w-11/12  rounded-3xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-myBlue mb-4">Profile</h2>
          <div className="mb-4">
            <p className="text-gray-800">Name: {user.name}</p>
            <p className="text-gray-800">Username: {user.username}</p>
            <p className="text-gray-800">Email: {user.email}</p>
            <p className="text-gray-800">Phone: {user.phone}</p>
            <p className="text-gray-800">Address: {user.address}</p>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Previous Orders</h3>
          <ul className="space-y-2">
            {user.previousOrders.map((order) => (
              <li key={order.id} className="text-gray-800">
                {order.product} - {order.price}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Account;
