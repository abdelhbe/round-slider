import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Home from './pages/Home'
import About from './pages/About'
import { AnimatedRoutes, RouteTransition } from './components/AnimatedRoutes/RouteTransition/index.tsx'
import Background from './components/common/Background'
import Logo from './components/common/Logo/index.tsx'
import { useWindowSize } from './utils/hooks/useWindowSize'

/**
 *
 * @description this the root wrapper of the application
 * @returns {HTMLDocument} the entire application with Routes
 */

const animation = width => ({
	initial: {
		initial: {
			opacity: 0, y: -20, x: 0,
		},
		animate: {
			opacity: 1, y: 0, x: 0,
		},
	},
	subPage: {
		initial: {
			opacity: 0, y: 0,
		},
		animate: {
			opacity: 1, y: 0, x: (width / 2) - 200,
		},
	},
})


/**
 *
 * @description return the entire application
 * @returns {HTMLDocument} the ROOT of the HTMLDomNode
 */
function App() {
	const size = useWindowSize()
	return (
		<Router>
			<Route
				render={({ location }) => (
					<>
						<Background />
						<AnimatePresence exitBeforeEnter initial={false}>
							<motion.div
								exit={{ opacity: 0, x: -100 }}
								initial={
									location.pathname === '/' ? animation().initial.initial : animation().subPage.initial
								}
								animate={
									location.pathname === '/' ? animation().initial.animate : animation(size.width).subPage.animate
								}
								transition={{ duration: 1 }}
							>
								<Logo />
							</motion.div>
						</AnimatePresence>
						<AnimatedRoutes
							exitBeforeEnter
							initial={false} // TODO: set this to true
						>
							<RouteTransition exact path="/" slideUp={0}>
								<Home />
							</RouteTransition>
							<RouteTransition exact path="/about" slideUp={0}>
								<About />
							</RouteTransition>
						</AnimatedRoutes>
					</>
				)}
			/>
		</Router>
	)
}

export default App
