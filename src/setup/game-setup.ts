import {PreloaderService} from '@leukus-core/services/preloader/preloader-service';
import {Services} from '@leukus-core/services/services';
import {StateMachineService} from '@leukus-core/services/state/state-machine-service';
import {CoreSetup} from '@leukus-core/setup/core-setup';
import {GameInitState} from 'state/game-init-state';
import {GameMenuState} from 'state/game-menu-state';

export class GameSetup extends CoreSetup {
  public registerAssets(): void {
    super.registerAssets();

    Services.get(PreloaderService).addAssetBundle(
      {
        name: 'Game_Preloader',
        assets: [{name: 'github', srcs: './assets/static/github.png'}],
      }
      // {
      //   name: 'Game_Main',
      //   assets: [
      //     { name: 'ls_bg', srcs: './assets/static/ls_bg.png' }
      //   ]
      // },
    );
  }

  public registerStates(): void {
    const stateMachine: StateMachineService = Services.get(StateMachineService);

    stateMachine
      .addState(new GameInitState('game-init-state', true))
      .addState(new GameMenuState('game-menu-state'))

      .mapTransition('game-init-state', 'game-menu-state');
  }
}
