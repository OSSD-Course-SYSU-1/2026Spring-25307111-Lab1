import ConfigurationConstant from "@ohos:app.ability.ConfigurationConstant";
import UIAbility from "@ohos:app.ability.UIAbility";
import hilog from "@ohos:hilog";
import type window from "@ohos:window";
import type { BusinessError } from "@ohos:base";
const DOMAIN = 0x0000;
const TAG = 'EntryAbility';
export default class EntryAbility extends UIAbility {
    onCreate(): void {
        try {
            this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
        }
        catch (error) {
            let err = error as BusinessError;
            hilog.error(DOMAIN, TAG, `getApplicationContext Failed,code:${err.code};message:${err.message}`);
        }
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onCreate');
    }
    onDestroy(): void {
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onDestroy');
    }
    onWindowStageCreate(windowStage: window.WindowStage): void {
        // Main window is created, set main page for this ability
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageCreate');
        windowStage.loadContent('pages/Index', (err) => {
            if (err.code) {
                hilog.error(DOMAIN, TAG, `loadContent Failed,code:${err.code};message:${err.message}`);
                return;
            }
            hilog.info(DOMAIN, TAG, 'Succeeded in loading the content.');
        });
    }
    onWindowStageDestroy(): void {
        // Main window is destroyed, release UI related resources
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onWindowStageDestroy');
    }
    onForeground(): void {
        // Ability has brought to foreground
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onForeground');
    }
    onBackground(): void {
        // Ability has back to background
        hilog.info(DOMAIN, TAG, '%{public}s', 'Ability onBackground');
    }
}
