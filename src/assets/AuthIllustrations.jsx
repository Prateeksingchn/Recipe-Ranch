import { motion } from 'framer-motion';

export const CookingAnimation = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Floating Kitchen Elements */}
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 8, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-[6%] right-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1830/1830839.png"
        alt="Chef Hat"
        className="w-16 h-16 opacity-90 drop-shadow-lg"
      />
    </motion.div>

    {/* Steam Animation */}
    <motion.div
      animate={{
        y: [-20, -40],
        opacity: [0.8, 0]
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className="absolute top-1/3 left-1/3"
    >
      <div className="w-8 h-8 bg-white/20 rounded-full blur-md" />
    </motion.div>

    {/* Cooking Pot with Steam */}
    <motion.div
      animate={{
        y: [0, 8, 0],
        rotate: [0, -3, 0]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5
      }}
      className="absolute top-1/3 left-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2515/2515263.png"
        alt="Cooking Pot"
        className="w-24 h-24 opacity-90 drop-shadow-xl"
      />
    </motion.div>

    {/* Floating Ingredients */}
    <motion.div
      animate={{
        y: [0, -10, 0],
        x: [0, 5, 0],
        rotate: [0, 15, 0]
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute top-1/4 right-1/3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/5990/5990507.png"
        alt="Tomato"
        className="w-12 h-12 opacity-90"
      />
    </motion.div>

    {/* Utensils */}
    <motion.div
      animate={{
        y: [0, -12, 0],
        rotate: [0, 15, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5
      }}
      className="absolute bottom-1/3 right-1/3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
        alt="Spoon and Fork"
        className="w-16 h-16 opacity-90 drop-shadow-lg"
      />
    </motion.div>

    {/* Recipe Book */}
    <motion.div
      animate={{
        rotate: [0, 3, 0],
        scale: [1, 1.05, 1]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute bottom-1/4 left-1/3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/3565/3565418.png"
        alt="Recipe Book"
        className="w-20 h-20 opacity-90 drop-shadow-xl"
      />
    </motion.div>

    {/* Floating Herbs */}
    <motion.div
      animate={{
        y: [0, -8, 0],
        x: [0, 5, 0],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }}
      className="absolute top-1/3 right-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1412/1412511.png"
        alt="Herbs"
        className="w-12 h-12 opacity-80"
      />
    </motion.div>

    {/* Background Elements */}
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.3, 0.5, 0.3]
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 left-1/3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/4478/4478891.png"
        alt="Plate"
        className="w-16 h-16 opacity-40 blur-[1px]"
      />
    </motion.div>

    {/* Timer */}
    <motion.div
      animate={{
        rotate: [0, 360]
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-1/4 right-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/5672/5672182.png"
        alt="Timer"
        className="w-14 h-14 opacity-80"
      />
    </motion.div>

    {/* Decorative Circles */}
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.1, 0.2, 0.1]
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-64 h-64 rounded-full border-4 border-orange-200/20 blur-sm" />
    </motion.div>
  </div>
); 