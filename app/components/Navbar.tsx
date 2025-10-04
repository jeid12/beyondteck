import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white">
      {/* Logo */}
      <div className="font-serif text-2xl font-bold flex items-center select-none">
        <span>BEY</span>
        <span className="mx-0.5 text-[#F6A019]">
          <svg width={22} height={22} viewBox="0 0 22 22" className="inline" fill="none">
            <circle cx="11" cy="11" r="11" fill="#F6A019"/>
            <text x="6" y="16" fontFamily="serif" fontSize="11" fill="white">O</text>
          </svg>
        </span>
        <span>ND</span>
        <span className="text-[#F6A019]">TECH</span>
      </div>

      {/* Nav links */}
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-12">
          {["Home", "About", "Service", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="font-serif text-xl relative transition-colors duration-200 
                hover:text-[#F6A019] hover:underline underline-offset-4 decoration-2">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* CTA Button */}
      <Link href="#contact" className="bg-[#F6A019] hover:bg-orange-500 text-white font-serif text-lg px-8 py-2 rounded transition-colors duration-150 ml-4">
        Work with us
      </Link>
    </header>
  );
}
