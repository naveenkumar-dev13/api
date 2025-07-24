import { useCounterStore } from "../../store/counterAsync";

const CounterAsync = () => {
  const { count, loading, incrementDelay } = useCounterStore();

  return (
    <div className="p-6 max-w-sm mx-auto text-center bg-gray-100 rounded">
      <h2 className="text-2xl font-bold mb-4">Count:{count}</h2>
      <button
        onClick={incrementDelay}
        disabled={loading}
        className={`px-4 py-2 rounded ${
          loading ? "bg-gray-400" : "bg-blue-600"
        } text-white`}
      >
        {loading ? "Loading..." : "Add After 1s"}
      </button>
    </div>
  );
};

export default CounterAsync;
