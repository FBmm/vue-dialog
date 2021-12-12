<template>
  <div class="modal"></div>
  <div class="dialog__wrapper">
      这是个弹窗这是个弹窗这是个弹窗
    <button @click="onClose">关闭</button>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import {useDialog} from "vue-dialog-test";

export default defineComponent({
  setup() {
    const dialog = useDialog()
    return {
      onClose() {
        dialog.close()
      }
    }
  },
})
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: .5;
  background: #000;
  z-index: 2000;
}
.dialog__wrapper {
  position: absolute;
  margin: 0 auto;
  background: #fff;
  border-radius: 4px;
  box-sizing: border-box;
  width: 500px;
  height: 300px;
  z-index: 2001;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
