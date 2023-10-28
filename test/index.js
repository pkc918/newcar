import { translate } from "../packages/basic/dist/newcar-basic-animations.mjs";
import { MathFunction } from "../packages/basic/dist/newcar-basic-objects.mjs";
import { createCar, createScene } from "../packages/newcar/dist/newcar.mjs";

const car = createCar(document.querySelector("#test"));

const scene = createScene();

const f = new MathFunction(Math.sin, 0, 100);

scene.use(f);

scene.setUpdate((frame) => {
  switch (frame) {
    case 0: {
      f.animate(translate, 100, {
        x: 100,
        y: 300,
      });
    }
  }
});

car.checkout(scene);

car.play();