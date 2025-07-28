import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="bg-white shadow-md p-4 flex gap-4">
      <Link to="/" className="text-blue-600 font-medium">Home</Link>
      <Link to="/about" className="text-green-600 font-medium">About</Link>
    </nav>
  );
}
