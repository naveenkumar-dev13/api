import { useState } from "react";
import { useBankApp } from "../../store/useBankApp";

const BankDashboard = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const { balance, deposit, withdraw, reset, customer, setCustomerName } =
    useBankApp();

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">🏦 My Bank</h2>
      {!customer ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border p-2 w-full rounded"
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded mt-4"
            onClick={() => setCustomerName(name)}
          >
            Set Name
          </button>
        </div>
      ) : (
        <div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Current Balance: ₹{balance}</p>
          </div>
          <div className="mb-4">
            <p className="text-xl font-semibold">Current Name :{customer}</p>
          </div>

          <div className="flex gap-2 mb-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              className="border p-2 flex-1 rounded"
            />
            <button
              className="bg-green-600 text-white px-4 py-2 rounded"
              onClick={() => {
                deposit(Number(amount));
                setAmount("");
              }}
            >
              Deposit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => {
                withdraw(Number(amount));
                setAmount("");
              }}
            >
              Withdraw
            </button>
          </div>
          <div className="flex gap-4">
            <button
              className="bg-gray-500 text-white w-full py-2 rounded"
              onClick={reset}
            >
              Reset Account
            </button>

            <button
              className="bg-gray-500 text-white w-full py-2 rounded"
              onClick={() =>{
                 setCustomerName("");
                 setName("");
              }}
            >
              Reset Name
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BankDashboard;
