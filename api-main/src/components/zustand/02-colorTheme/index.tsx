
import useToggleStore from "../store/themeColor";

const ThemeToggle = () => {
    // const [Toggle,setToggle] = useState<boolean>(false)

    const {Toggle, setToggle} = useToggleStore()
  return (
    <div className={`p-4 ${Toggle ? "bg-gray-800 text-white" : "bg-white text-black"} `}>
      <h2 className="text-xl font-semibold">Dark Mode is {Toggle ? "ON" : "OFF"} </h2>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded" onClick={setToggle}>
        Toggle Dark Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
