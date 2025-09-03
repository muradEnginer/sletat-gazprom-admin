'use client'
import { clsx } from 'clsx'

interface SvgSpriteProps {
  name: string
  width: number
  height: number
  customPath?: string
  customClass?: string
}

export const SvgSprite = ({
  name,
  width,
  height,
  customPath = '',
  customClass = '',
}: SvgSpriteProps) => (
  <svg
    width={width}
    height={height}
    className={clsx(customClass)}
    aria-hidden="true"
  >
    <use
      xlinkHref={(customPath || '/sprites/sprite.svg') + `#${name}`}
      href={(customPath || '/sprites/sprite.svg') + `#${name}`}
    />
  </svg>
)

export default SvgSprite
