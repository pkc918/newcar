## Achieve
- objects: Add rotation center for objects.
- objects: Implement rotation center.
- objects: number display on `CoordinateSystem`.
- objects: number display on `NumberAxis`.
- objects: new object `Svg`.
- objects: new object `Tex`.
- animation-builder: Add animation `Division`, `FontSize` and `Radius`.
- utils: Add `Color`.

## Breaking Change
- objects: Rename `AngleCircle` to `CircleAngle`.
- objects: Rename `HTMLPlugin` to `WebView`.
- objects: Rename `ImagePlugin` to `Image`.
- objects: Rename parameter `displayPoint` to `display_point`.
- objects: Deprecated `Pen` and `Polygon`.
- objects: Delete parameters `x_width` and `y_width` of `CoordinateSystem`.
- objects: Change the color input method(use `Color`).

## Bug Fixes
- objects: `Circle` cannot be displayed properly.