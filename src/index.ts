import { inject, Ref, App } from "vue";

export interface DialogOptions {
  activeDialogNameRef: Ref;
  appInstall?: (app: App) => void;
}

const InjectKey = Symbol("dialog");

class Dialog {
  private static DialogStack: string[] = [];
  private readonly activeComponentName;
  private readonly appInstall;
  constructor(options: DialogOptions) {
    this.activeComponentName = options.activeDialogNameRef;
    this.appInstall = options.appInstall;
  }
  install(app: App, injectKey: string | symbol) {
    this.appInstall?.(app);
    app.provide(injectKey || InjectKey, this);
    app.config.globalProperties.$dialog = this;
  }
  open(name: string) {
    if (!name)
      throw new Error("name is not undefined!!!");

    const _stack = Dialog.DialogStack;
    if (_stack.includes(name))
      throw new Error("dialog is also opened or existed!!!");

    _stack.push(name);
    this.activeComponentName.value = _stack[_stack.length - 1];
  }
  close(name?: string) {
    const _stack = Dialog.DialogStack;
    if (_stack.length <= 0) return;
    if (name) {
      _stack.splice(_stack.indexOf(name), 1);
    } else {
      _stack.pop();
    }
    this.activeComponentName.value =
      _stack.length > 0 ? _stack[_stack.length - 1] : null;
  }
  closeAll() {
    Dialog.DialogStack = [];
    this.activeComponentName.value = null;
  }
}

export function createDialog(options: DialogOptions): Dialog {
  return new Dialog(options);
}

export const useDialog = (): Dialog | undefined => {
  return inject(InjectKey);
};
