import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex flex-col wrapper flex-between flex-center gap-4 p-5 text-center sm:flex-row">
        <Link href={'/'}>
          <Image
            src={'/assets/images/logo.svg'}
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p className="text-sm"> {currentYear} Evently. All Right Reserved</p>
      </div>
    </footer>
  );
};
