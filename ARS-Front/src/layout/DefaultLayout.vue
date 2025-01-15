<template>
    <div class="layout">
      <div :class="['maincont', isSidebar ? 'sidebar-layout' : 'navbar-layout']">
        <component :is="isSidebar ? 'Sidebar' : 'Navbar'" />
        <main class="content">
          <slot />
        </main>
      </div>
      <footer class="footer">
        <p>Hrify 2024</p>
      </footer>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/Navbar.vue";
  import Sidebar from "@/components/Sidebar.vue";
  
  export default {
    components: {
      Navbar,
      Sidebar,
    },
    data() {
      return {
        isSidebar: window.innerWidth >= 1024,
      };
    },
    methods: {
      handleResize() {
        this.isSidebar = window.innerWidth >= 1024;
      },
    },
    mounted() {
      this.handleResize(); // Ensure correct layout on mount
      window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.handleResize);
    },
  };
  </script>
  
  <style scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  
  .maincont {
    display: flex;
    flex-grow: 1;
  }
  
  .sidebar-layout {
    flex-direction: row; /* Sidebar layout */
  }
  
  .navbar-layout {
    flex-direction: column; /* Navbar layout */
  }
  
  .content {
    flex-grow: 1;
    margin: 1rem;
    padding: 1rem;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .footer {
    text-align: center;
    padding: 1rem;
    background: #333;
    color: #fff;
  }
  </style>
  