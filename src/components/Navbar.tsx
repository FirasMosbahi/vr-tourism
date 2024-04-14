import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex top-2 flex-row items-center justify-center text-[20px] gap-x-8 w-full pb-2 pt-8">
      <Link href="/">Home</Link>
      <Link href="/tours">Tours</Link>
      <Link href="#">Our Team</Link>
    </nav>
  );
}
