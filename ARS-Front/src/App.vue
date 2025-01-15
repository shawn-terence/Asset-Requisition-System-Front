<template >
  <div class="page">
    <DefaultLayout>
      <RouterView />
    </DefaultLayout>
  </div>
</template>

<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import { RouterLink, RouterView } from 'vue-router'
export default {
  components: {
    DefaultLayout,
  },
};
</script>
<style scoped>

/* .page{
  height:100vh;
  background-color:aqua;
} */
</style>

