import { IoIosArrowDown } from "react-icons/io";

export default function Filters() {
  return (
    <ul>
      <li>
        <p>Languages</p>
        <div>
          <input />
          <IoIosArrowDown />
        </div>
      </li>
      <li>
        <p>Level of knowledge</p>
        <div>
          <input />
          <IoIosArrowDown />
        </div>
      </li>
      <li>
        <p>Price</p>
        <div>
          <input />
          <IoIosArrowDown />
        </div>
      </li>
    </ul>
  );
}
