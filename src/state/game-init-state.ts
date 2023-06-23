import {State} from '@leukus-core/services/state/state';
import {Log} from 'enhance-log';

export class GameInitState extends State {
  public enter(): void {
    Log.w(`[GameInitState] enter`);
  }

  public exit(): void {
    Log.w(`[GameInitState] exit`);
  }

  public update(): void {
    Log.w(`[GameInitState] update`);
  }
}
