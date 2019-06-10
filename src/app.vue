<template>
  <div id="root">
    {{ message }}
    process
    <router-view />
  </div>
</template>

<script>

export default {
  data() {
    return {
      message: 'this is message'
    }
  }
}
</script>
