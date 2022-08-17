import { ReactNode } from "react";

export class ParallaxLayer {
  public scale: number = 1;
  constructor(public translateZ: number, public children:ReactNode) {
      this.scale = translateZ/5 + 1
  }

  static calculateScale = () => {};
}
