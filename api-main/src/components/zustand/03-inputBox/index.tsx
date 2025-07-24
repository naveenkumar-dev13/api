import { useInput } from "../store/useInput";

const InputField = () => {
  // const [input, setInput] = useState<string>('')
  const { value, setValue, reset } = useInput();

  return (
    <div className="p-4 max-w-md mx-auto space-y-3 bg-gray-100 rounded">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
        className="border p-2 w-full rounded"
      />
      <div className="flex justify-between">
        <p className="text-gray-700">Current value: {value}</p>
        <button
          onClick={reset}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default InputField;
