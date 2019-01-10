<template>
    <div>
      <appnavbar/>
      <main role="main">
        <appview/>
      </main>
    </div>
</template>

<script>
import appnavbar from '../components/Navbar'
import appview from '../components/Appview'

export default {
  components: {
    appnavbar,
    appview
  }
}
</script>

<style scoped>
</style>
