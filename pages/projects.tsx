import React from "react";
import Project, { ProjectProps } from "../components/Project";
import PersonalWebsite from '../public/personal-website.png';
import DiscordFormatter from '../public/discord-formatter.png';
import DiscordTemplate from '../public/discord-template.png';

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      name: 'This website',
      url: 'https://github.com/n3oney/personal-website',
      image: PersonalWebsite,
      description: 'I\'ve decided to open-source this version of the website so other people can take a look at my code.',
      repo: 'n3oney/personal-website'
    },
    {
      name: 'Discord Formatter',
      url: 'https://github.com/n3oney/discord-formatter',
      image: DiscordFormatter,
      description: 'An NPM package that lets you easily do Discord message formatting.',
      repo: 'n3oney/discord-formatter'
    },
    {
      name: 'Discord.js TypeScript Template',
      url: 'https://github.com/n3oney/discord.js-ts-template',
      image: DiscordTemplate,
      description: 'A template to quickly set your TypeScript Discord bot up.',
      repo: 'n3oney/discord.js-ts-template'
    }
  ]

  return (
    <div className="m-4 mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
      {projects.map((p, i) => <Project key={i} {...p} />)}
    </div>
  );
}

export default Projects;