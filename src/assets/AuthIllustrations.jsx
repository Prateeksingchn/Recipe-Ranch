import { motion } from 'framer-motion';

export const CookingAnimation = () => (
  <div className="relative w-full h-full">
    {/* Floating elements */}
    <motion.div
      animate={{
        y: [0, -10, 0],
        rotate: [0, 5, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/4 right-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1830/1830839.png"
        alt="Chef Hat"
        className="w-16 h-16 opacity-80"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, 10, 0],
        rotate: [0, -5, 0]
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
        className="w-20 h-20 opacity-80"
      />
    </motion.div>

    <motion.div
      animate={{
        y: [0, -15, 0],
        rotate: [0, 10, 0]
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute bottom-1/3 right-1/3"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
        alt="Spoon and Fork"
        className="w-16 h-16 opacity-80"
      />
    </motion.div>

    {/* Center illustration */}
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
        rotate: [0, 2, 0]
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/1830/1830917.png"
        alt="Chef Cooking"
        className="w-48 h-48"
      />
    </motion.div>

    {/* Background decorative elements */}
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
        className="w-12 h-12 opacity-30"
      />
    </motion.div>

    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        opacity: [0.2, 0.4, 0.2]
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1
      }}
      className="absolute bottom-1/4 right-1/4"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2515/2515020.png"
        alt="Rolling Pin"
        className="w-14 h-14 opacity-30"
      />
    </motion.div>
  </div>
); 