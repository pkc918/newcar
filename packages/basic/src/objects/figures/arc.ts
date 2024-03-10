import type { Canvas, CanvasKit, Paint } from "canvaskit-wasm";

import type { FigureOption } from "./figure";
import { Figure } from "./figure";

/**
 * The arc options.
 * @param start The start angle of the arc,
 * @param end The end angle of the arc.
 * @see FigureOption
 * @see Arc
 */
export interface ArcOption extends FigureOption {
  start?: number;
  end?: number;
}

/**
 * The arc object.
 */
export class Arc extends Figure implements ArcOption {
  radius: number;
  start: number;
  end: number;

  /**
   * @param radius The radius of the arc.
   * @param options The options of the object.
   * @see ArcOption
   */
  constructor(radius: number, options?: ArcOption) {
    super((options ??= {}));
    this.radius = radius;
    this.start = options.start ?? 0;
    this.end = options.end ?? 360;
  }

  draw(
    paint: Paint,
    canvas: Canvas,
    canvaskit: CanvasKit,
    _element: HTMLCanvasElement,
    ..._args: any[]
  ): void {
    paint.setColor(canvaskit.Color(255, 0, 0, 1.0));
    const rect = canvaskit.LTRBRect(
      this.x - this.radius,
      this.y - this.radius,
      this.x + this.radius,
      this.y + this.radius,
    );

    // Fill Arc.
    if (this.fillColor) {
      paint.setStyle(canvaskit.PaintStyle.Fill);
      canvas.drawArc(rect, this.start, this.end, false, paint);
    }

    // Stroke Arc.
    paint.setStyle(canvaskit.PaintStyle.Stroke);
    paint.setStrokeWidth(this.borderWidth);
    canvas.drawArc(rect, this.start, this.end, false, paint);
  }
}
