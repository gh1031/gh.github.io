<template>
  <div id="root">
    {{ message }}
    <router-view />
  </div>
</template>

<script>
console.log(process.env.NODE_ENV, '>>>');
export default {
  data() {
    return {
      message: 'this is message'
    }
  }
}
</script>
