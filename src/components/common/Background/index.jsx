import React, { useEffect, useState, useCallback, useRef } from 'react'
import styled from 'styled-components'

import styles from './Background.module.scss'
import useMousePosition from '../../../utils/hooks/useMousePosition'
import { useWindowSize } from '../../../utils/hooks/useWindowSize'

/**
 * @author zilahir
 * @function Background
 * */

const Dots = styled.div`
  &:before {
    transform: ${props => props.translate};
  }
`
const FRICTION = 1 / 60

const Background = () => {
	const { x, y } = useMousePosition()
	const windowSize = useWindowSize()
	const [translation, setTranslation] = useState(undefined)
	const translateRef = useRef({
		translateX: 0,
		translateY: 0,
	})

	const followMouse = useCallback(() => {
		if (typeof x === 'number' && typeof y === 'number') {
			const lMouseX = Math.max(-100, Math.min(100, windowSize.width / 2 - x))
			const lMouseY = Math.max(-100, Math.min(100, windowSize.height / 2 - y))
			const lFollowX = (20 * lMouseX) / 100
			const lFollowY = (10 * lMouseY) / 100
			translateRef.current.translateX = (lFollowX - x) * FRICTION
			translateRef.current.translateY = (lFollowY - y) * FRICTION
			setTranslation(
				`translate(${translateRef.current.translateX}px, ${
					translateRef.current.translateY
				}px) scale(1.1)`,
			)
		}
	}, [x, y])

	useEffect(() => {
		window.addEventListener('mousemove', followMouse)
		return () => {
			window.removeEventListener('mousemove', followMouse)
		}
	})

	return (
		<>
			<Dots translate={translation} className={styles.dots} />
		</>
	)
}

export default Background
