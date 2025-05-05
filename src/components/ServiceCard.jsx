/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ Icon, title, description }) => (
  <motion.div
    className="bg-gray-800 shadow-md rounded-xl p-6 text-center transition-transform"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex justify-center">
      <Icon className="text-blue-500 text-4xl mb-4" />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
  </motion.div>
);

export default ServiceCard;
