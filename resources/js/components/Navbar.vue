<template>
  <b-navbar toggleable="md" class="navbar navbar-expand-md navbar-dark bg-dark">
    <router-link :to="{ name: 'top', params: {} }" class="navbar-brand">GetzMo</router-link>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">
      <!-- left nav items -->

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <router-link :to="{ name: 'top', params: {} }" class="nav-link">Home</router-link>
        <router-link :to="{ name: 'profile', params: {} }" class="nav-link">Profile</router-link>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">FAQs</a>
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            Trade
          </template>
          <b-dropdown-item href="#">Sell</b-dropdown-item>
          <b-dropdown-item href="#">Buy</b-dropdown-item>
          <b-dropdown-item href="#">Swap</b-dropdown-item>
        </b-nav-item-dropdown>
        <router-link :to="{ name: 'login', params: {} }" class="nav-link">Login</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
}
</script>

<style scoped>
</style>
