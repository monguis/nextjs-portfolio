import { ReactNode } from "react";

export class ParallaxLayer {
  public scale: number = 1;
  constructor(public translateZ: number, public children:ReactNode) {
      this.scale = translateZ/100 + 1
  }

  static calculateScale = () => {};
}
