import { motion } from "framer-motion"

export default function Accordian({ active, onClick }) {
	return (
		<div className="relative block" onClick={onClick}>
			<div className="my-5">Accordian</div>

			<motion.div
				initial={false}
				className="relative overflow-hidden"
				animate={{
					height: active ? "auto" : "0px",
					opacity: active ? 1 : 0
				}}
				transition={{ duration: 0.5, ease: [0.7, 0, 0.3, 1] }}
			>
				<div className="mb-4 h-[50vh] md:h-[70vh] w-full bg-black"></div>
			</motion.div>
		</div>
	)
}
