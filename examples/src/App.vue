<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div><button @click="onOpen">打开弹窗</button></div>
  <HelloWorld></HelloWorld>
  <component :is="activeDialogName"></component>
</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from "./HelloWorld.vue";
import {activeDialogName} from "./dialogs";
import {useDialog} from "vue-dialog-test";

export default defineComponent({
  name: 'App',
  components: {HelloWorld},
  setup() {
    const dialog = useDialog()
    return {
      activeDialogName,
      onOpen() {
        dialog.open('my-dialog', {
          msg: '这是弹窗1这是弹窗1这是弹窗1'
        })
      }
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
