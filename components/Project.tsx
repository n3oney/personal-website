import React from "react";
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

export interface ProjectProps {
  name: string,
  url: string,
  image: StaticImageData,
  description: string,
  repo: string
}

const Project: React.FC<ProjectProps> = ({ name, url, image, description, repo }) => (
  <a
    href={url}
    className="bg-pink-1 text-gray-6 border border-pink-1 text-sm shadow-light justify-between flex flex-col rounded-md">
    <Image layout="responsive" placeholder="blur" height={572} className="rounded-md" objectFit="cover"  src={image} alt="" />
    <div className="p-2 text-black">
      <h1 className="text-xl">{name}</h1>
      <div>{description}</div>
      <div className="flex items-center text-xs mt-2"><FaGithub className="mr-1" /> {repo}</div>
    </div>
  </a>
);

export default Project;