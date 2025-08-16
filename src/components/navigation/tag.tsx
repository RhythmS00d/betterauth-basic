import Link from "next/link";

export default function Tag({ name, to }: { name: string, to: string }) {
  return (
    <span>
      <Link
        href={`${to}`}
        className="relative px-3 py-1 rounded-md transition-colors duration-300
              before:absolute before:inset-0 before:rounded-md
              before:bg-gradient-to-r before:from-white/20 before:to-white/10
              before:scale-x-0 before:origin-left before:transition-transform before:duration-300
              hover:before:scale-x-100 cursor-pointer"
      >
        {name}
      </Link>
    </span>
  );
}
