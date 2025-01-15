<template>
  <aside class="sidebar">
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </aside>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  background-color: #333;
  color: #fff;
  height: 100vh;
  padding: 1rem;
  width: 250px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
}
.sidebar li {
  margin: 1rem 0;
}
.sidebar a {
  color: white;
  text-decoration: none;
}
</style>
