<template>
  <section>
    <slot/>
    <app-choice :categories="categories"/>
  </section>
</template>

<script>
import { useCategories } from '@/use/categories'
import { useModifiesCategories } from '@/use/modified-categories'
import AppChoice from '@/components/AppChoice'

export default {
  name: 'AppCategories',

  setup () {
    useCategories()

    return {
      categories: useModifiesCategories()
    }
  },

  components: {
    AppChoice

  }
}
</script>
