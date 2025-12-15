import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} Frontline. All rights reserved.
        </p>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="GitHub"
            className="text-gray-400 hover:text-white transition cursor-pointer"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-400 hover:text-cyan-400 transition cursor-pointer"
          >
            <FiTwitter size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-blue-400 transition cursor-pointer"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;