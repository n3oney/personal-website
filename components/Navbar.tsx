import React from "react";
import NeoneySVG from "./NeoneySVG";
import { RiDiscordLine, RiTwitterLine, RiGithubLine } from "react-icons/ri";
import Link from "next/link";

const Navbar: React.FC = () => (
  <div className="absolute top-0 left-0 right-0 flex justify-between items-center z-50">
    <Link href="/">
      <a>
        <NeoneySVG className="text-pink-1 text-6xl" />
      </a>
    </Link>
    <div className="flex items-center text-3xl text-pink-1">
      <a href="https://github.com/n3oney">
        <RiGithubLine className="transition hover:text-github" />
      </a>
      <a href="https://discord.gg/wmRTMRQ6mX" className="mx-2">
        <RiDiscordLine className="transition hover:text-discord" />
      </a>
      <a href="https://twitter.com/n_xn_y" className="mr-3">
        <RiTwitterLine className="transition hover:text-twitter" />
      </a>
    </div>
  </div>
);

export default Navbar;