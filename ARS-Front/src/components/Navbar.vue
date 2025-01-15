<template>
  <nav class="navbar">
    <div class="navbar-header">
      <button @click="toggleMenu" class="menu-toggle">☰</button>
      <h1 class="brand">My App</h1>
    </div>
    <ul v-if="isMenuOpen" class="navbar-menu">
      <li><a href="/">Home</a></li>
      <li><a href="/About">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: #fff;
  padding: 0.5rem;
}
.navbar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
}
.navbar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}
.navbar-menu li {
  margin: 0.5rem 0;
}
.navbar-menu a {
  color: white;
  text-decoration: none;
}
</style>
