import {State} from '@leukus-core/services/state/state';
import {Log} from 'enhance-log';

export class GameMenuState extends State {
  public enter(): void {
    Log.w(`[GameMenuState] enter`);
  }

  public exit(): void {
    Log.w(`[GameMenuState] exit`);
  }

  public update(): void {
    Log.w(`[GameMenuState] update`);
  }
}
