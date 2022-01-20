import { useEffect, useState, useRef } from 'react'
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min'

const AnimationContainer = () => {
  const [vantaEffect, setVantaEffect] = useState(0)
  const containerRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      ;(async () => {
        const [THREE, GLOBE] = await Promise.all([
          import('three'),
          import('vanta/dist/vanta.globe.min'),
        ])
        setVantaEffect(
          GLOBE.default({
            el: containerRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            THREE,
          })
        )
      })()
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className="absolute inset-0" ref={containerRef}></div>
}
export default AnimationContainer
