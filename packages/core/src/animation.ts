import type { Canvas, CanvasKit } from 'canvaskit-wasm'
import type { Widget } from './widget'

/**
 * The Animation that have not get instanted
 */
export interface Animation<T> {
  /**
   * The action of this animation when it's in his lifecycle.
   * @param widget The widget's self.
   * @param elapsed The elapsed frame.
   * @param process The process of this animation, value is duration [0, 1]
   * @param params The other parameters of this animation
   * @returns
   */
  act: (widget: T, elapsed: number, process: number, duration: number, ck: CanvasKit, params?: any) => void

  /**
   * @see act
   */
  init?: (widget: T, startAt: number, duration: number, ck: CanvasKit, params?: any) => void

  /**
   *
   */
  after?: (widget: T, elapsed: number, ck: CanvasKit, params?: any) => void
}

/**
 * Define a animation.
 * @param animation The Animation object implemented by Interface Animation
 * @returns The custom Animation object
 */
export function defineAnimation<T extends Widget>(
  animation: Animation<T> & Record<string, any>,
): Animation<T> {
  return animation
}

/**
 * The Animation that have get instanted.
 */
export interface AnimationInstance<T extends Widget> {
  /**
   * The animation's started time.
   */
  startAt: number | null

  /**
   * The duration of this animation.
   */
  duration: number

  /**
   * The object Animation.
   */
  animation: Animation<T>

  /**
   * The other parameters.
   */
  params?: Record<string, any>

  /**
   * The playing mode of this animation
   */
  mode: 'positive' | 'reverse'
}
