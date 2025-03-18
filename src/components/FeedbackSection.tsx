import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const feedbacks = [
  {
    name: "Rajesh Kumar",
    location: "Punjab, India",
    image: "https://images.unsplash.com/photo-1594498653385-d5172c532c00?auto=format&fit=crop&q=80",
    feedback: "Bhoomi has transformed how I manage my farm. The crop recommendations are spot-on!",
    rating: 5,
    cropType: "Wheat",
    yearsOfExperience: 15
  },
  {
    name: "Lakshmi Devi",
    location: "Karnataka, India",
    image: "https://images.unsplash.com/photo-1595456982104-14cc660c4d22?auto=format&fit=crop&q=80",
    feedback: "The disease detection feature saved my tomato crop. Thank you, Bhoomi!",
    rating: 5,
    cropType: "Tomatoes",
    yearsOfExperience: 8
  },
  {
    name: "Mohan Singh",
    location: "Haryana, India",
    image: "https://images.unsplash.com/photo-1593787764577-f49129a2b30c?auto=format&fit=crop&q=80",
    feedback: "The weather predictions are accurate and help me plan better.",
    rating: 4,
    cropType: "Rice",
    yearsOfExperience: 20
  }
];

export const FeedbackSection = () => (
  <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-4">Farmer Success Stories</h2>
      <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
        Real experiences from farmers who have transformed their agricultural practices with Bhoomi
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {feedbacks.map((feedback, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <div className="relative h-48">
              <img
                src={feedback.image}
                alt={feedback.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-bold text-xl">{feedback.name}</h3>
                <p className="text-sm opacity-90">{feedback.location}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {feedback.yearsOfExperience} years experience
                </div>
              </div>
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-green-500/20" />
                <p className="text-gray-600 dark:text-gray-300 italic pl-6">{feedback.feedback}</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Primary Crop: <span className="font-semibold text-green-600 dark:text-green-400">{feedback.cropType}</span>
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-500 text-white px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all"
        >
          Share Your Story
        </motion.button>
      </div>
    </div>
  </section>
);
