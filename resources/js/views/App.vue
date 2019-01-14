<template>
    <div>
      <header></header>
      <appnavbar/>
      <main role="main">
        <router-view/>
      </main>
      <footer class="footer-custom">
        <div class="container-fluid">
          <span class="text-muted">
            Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
            is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </span>
        </div>
      </footer>
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

<style>
html{
  position: relative;
  min-height: 100%;
}
body{
  margin-bottom: 45px;
}
.footer-custom{
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 45px;
    line-height: 45px;
    background-color: #f5f5f5;
}
</style>
