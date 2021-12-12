import {createDialog} from "vue-dialog-test"
import {ref, Ref} from "vue"
import MyDialog from "./MyDialog.vue"

export const activeDialogName: Ref<string | null> = ref(null)

export default createDialog({
  activeDialogNameRef: activeDialogName,
  appInstall(app) {
    app.component('my-dialog', MyDialog)
  }
})