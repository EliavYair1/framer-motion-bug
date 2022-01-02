import { motion } from "framer-motion"

export default function Accordian({ active, onClick }) {
  const Hvariants = {
    initial: {
      height: false,
      opacity: 0
    },
    animate: {
      height: active ? "auto" : "0px",
      opacity: 1
    }
  };
	return (
		<div className="relative block" onClick={onClick}>
			<div className="my-5">Accordian</div>

			<motion.div
				 variants={Hvariants}
        initial="initial"
animate="animate"
				className="relative overflow-hidden"
				
				transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
			>
				<div className="mb-4 h-[70vh] w-full bg-black"></div>
			</motion.div>
		</div>
	)
}
