import {Core} from '@leukus-core/core';
import {ICanvasConfig} from '@leukus-core/global/interface/canvas-config';
import {Size} from '@leukus-core/global/size';
import {GameSetup} from 'setup/game-setup';

export class Game {
  public init() {
    const canvasOptions: ICanvasConfig = {
      size: new Size(1920, 1080),
      canvasColor: 0x000000,
      centered: true,
      canvasTargetId: 'canvas-layer-container',
      htmlTargetId: 'html-layer-container',
    };

    new Core().init(new GameSetup(canvasOptions));
  }
}

new Game().init();
