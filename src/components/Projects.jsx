import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index, name, subtext, description, tags, image, source_code_link, source_code_image,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 10,
          scale: 2,
          speed: 100,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[550px] w-full flex flex-col h-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-contain rounded-2xl"
          />
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <a href={source_code_link}
               target="_blank"
               rel="noopener noreferrer"
               className="bg-white opacity-80 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >

              {source_code_image && (
              <img
                src={source_code_image}
                alt="source code image"
                className="w-1/2 h-1/2 object-contain"
              />)}
              </a>
          </div>
          )}
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <h4 className="text-white font-bold text-[16px]">{subtext}</h4>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2 mt-auto pt-1">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className={`${styles.sectionDescriptionText}`}
        >
          The following projects are the projects that I have worked on during my time as a student and as a post-grad. If there is a symbol on the top right of the card, you can view the project live!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${project.name}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");