import Link from 'next/link';
import PropTypes from "prop-types";

function Header({ siteTitle }) {
  return (
    <nav className="bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-6xl mx-auto p-4 md:p-8">
        <Link href="/" className="flex items-center no-underline text-black">
          <img src="https://ik.imagekit.io/yarobagriy/profile-pic.png?updatedAt=1693973141009" alt="Logo" className="w-8 rounded-full" />
          <span className="pl-4 text-2xl font-Inter font-bold text-black leading-9 tracking-tight">
            {siteTitle}
          </span>
        </Link>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
