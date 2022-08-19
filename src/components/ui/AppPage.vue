<template>
  <main class="page">
    <h1 class="page__title">{{ route.meta.pageTitle }}</h1>
    <router-view/>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'AppPage',

  setup () {
    const route = useRoute()
    document.title = `${route.meta.title} | Нужна Помощь`

    return {
      route
    }
  }
}
</script>
