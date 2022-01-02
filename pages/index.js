import { useState } from "react"

import Header from "components/header"
import Footer from "components/footer"
import Accordian from "components/accordian"

export default function Home() {
	const [activeIndex, setActiveIndex] = useState()

	return (
		<>
			<Header />

			<div className="p-5">
				<div className="divide-black divide-y border-y border-black">
					{[...Array(5).keys()].map((index) => (
						<Accordian
							key={index}
							active={index == activeIndex}
							onClick={() => setActiveIndex(index != activeIndex ? index : undefined)}
						/>
					))}
				</div>
			</div>

			<Footer />
		</>
	)
}
