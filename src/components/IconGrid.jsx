/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const IconGrid = ({ skills }) => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
      {skills.map((skill, index) => {
        const SkillIcon = skill.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 flex flex-col items-center transition-transform transform hover:scale-110"
          >
            <SkillIcon className="text-4xl text-blue-500 mb-2 transition-colors duration-300 group-hover:text-blue-700" />
            <span className="text-sm text-gray-600 dark:text-gray-200">
              {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default IconGrid;
