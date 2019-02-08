<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <router-link :to="{ name: 'top', params: {} }" class="navbar-brand">GetzMo</router-link>
    <!-- <a class="navbar-brand" href="#">GetzMo</a> -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'top', params: {} }" class="nav-link">Home</router-link>
          <!-- <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> -->
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'profile', params: {} }" class="nav-link">Profile</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Trade
          </a>
          <div class="dropdown-menu dropdown-right" aria-labelledby="navbarDropdownMenuLink">
            <router-link :to="{ name: 'trade_sell', params: {} }" class="dropdown-item">Sell</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'login', params: {} }" class="nav-link">Login</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <!-- <b-navbar toggleable="md" class="navbar navbar-expand-md navbar-dark bg-dark">
    <router-link :to="{ name: 'top', params: {} }" class="navbar-brand">GetzMo</router-link>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse"> -->
      <!-- left nav items -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <router-link :to="{ name: 'top', params: {} }" class="nav-link">Home</router-link>
        <router-link :to="{ name: 'profile', params: {} }" class="nav-link">Profile</router-link>
        <a href="#" class="nav-link">About Us</a>
        <a href="#" class="nav-link">FAQs</a>
        <b-nav-item-dropdown right> -->
          <!-- Using button-content slot -->
          <!-- <template slot="button-content">
            Trade
          </template>
          <b-dropdown-item><router-link :to="{ name: 'trade_sell', params: {} }">Sell</router-link></b-dropdown-item>
          <b-dropdown-item href="#">Buy</b-dropdown-item>
          <b-dropdown-item href="#">Swap</b-dropdown-item>
        </b-nav-item-dropdown>
        <router-link :to="{ name: 'login', params: {} }" class="nav-link">Login</router-link>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
</template>

<script>
export default {
}
</script>

<style scoped>
.dropdown-right{
  left: auto;
  right: 0;
}
</style>
