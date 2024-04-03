import { CarEngine, Scene, Widget, App, changeProperty } from '@newcar/core'
import {
  Arc,
  Arrow,
  ImageWidget,
  Line,
  Rect,
  Text,
  Circle,
  move,
  fadeIn
} from '@newcar/basic'
import { Color, preload } from 'newcar'

let circle: any
let app: App

await new CarEngine()
  .init('../node_modules/canvaskit-wasm/bin/canvaskit.wasm')
  .then((engine) => {
    app = engine.createApp(document.querySelector('#canvas'))
    const root = new Widget()
      .add(
        new Rect([0, 0], [100, 100], {
          y: 100,
          style: {
            transparency: 0.5
          }
        }).animate(fadeIn, 0, 300)
      )
      .add(
        new Text(
          'Hello world!',
          'https://storage.googleapis.com/skia-cdn/misc/Roboto-Regular.ttf',
          {
            y: 100
          }
        ).animate(fadeIn, 0, 100)
      )
      .add(new ImageWidget('./brand.png').animate(fadeIn, 0, 300))
      .add(new Circle(200).animate(changeProperty('radius', 0, 400), 0, 100))
      // .add(new ImageWidget('./brand.png'))
    const scene = new Scene(root)
    app.checkout(scene)
    // root
    //   .add()
    app.play()
  })