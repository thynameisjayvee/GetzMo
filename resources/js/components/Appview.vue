<template>
  <transition name="page" mode="out-in">
    <slot>
      <router-view/>
    </slot>
  </transition>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
