import { useState } from "react";
import { useInput } from "../store/useInput";

const InputField = () => {
  // const [input, setInput] = useState<string>('')
  const { value, setValue, reset } = useInput();

  return (
    <div className="p-4">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Type something..."
      />
      <p className="mt-2 text-sm text-gray-600">You typed: {value}</p>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default InputField;
