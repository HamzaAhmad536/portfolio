import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Avatar(props) {
  const group = useRef()
  
  // Rotate the avatar
  useFrame((state) => {
    group.current.rotation.y += 0.005
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={new THREE.BoxGeometry(1, 2, 1)}
        material={new THREE.MeshStandardMaterial({ color: '#915eff' })}
      >
        {/* This is a placeholder box - you'll want to replace this with your actual 3D model */}
      </mesh>
    </group>
  )
}