<template>
  <form class="form" action="/" @submit.prevent="submitGroups">
    <div class="form__container">
      <section class="form__section">
        <h2 class="form__title reset-default-margin">Информация о сборе</h2>
        <app-input
          label="Название сбора"
          type="text"
          name="fundraising-name"
          :gray="true"
        />
      </section>

      <app-categories class="form__section">
        <template #default>
          <div class="form__content-wrap">
            <h2 class="form__title reset-default-margin">Целевые группы</h2>
            <p class="form__text reset-default-margin">Укажите, кому помогает ваша организация</p>
          </div>
        </template>
      </app-categories>

      <footer class="form__footer">
        <app-btn
          type="submit"
          :disabled="!checkedIds.length"
          text="Сохранить и продолжить"
          :loading="sendLoading"
          class="form__send-btn"
        />
      </footer>
    </div>
  </form>
</template>

<script>
import AppInput from '@/components/AppInput'
import AppCategories from '@/components/AppCategories'
import AppBtn from '@/components/AppBtn'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'FundraisingForm',

  setup () {
    const store = useStore()

    const checkedIds = computed(() => {
      store.commit('checked/setIds')
      return store.getters['checked/ids']
    })

    function submitGroups () {
      if (checkedIds.value.length) {
        store.dispatch('categories/sendCheckedCategories', Array.from(checkedIds.value))
      }
    }

    return {
      submitGroups,
      checkedIds,
      sendLoading: computed(() => store.getters['categories/sendLoading'])
    }
  },

  components: {
    AppBtn, AppInput, AppCategories
  }
}
</script>

<style lang="scss" scoped>
  @import "@/scss/variables";

  .form {
    padding: 42px 65px 65px;
    border-radius: 10px;
    border: 1px solid $gray;

    &__container {
      max-width: 960px;
    }

    &__section {
      &:not(:last-child) {
        margin-bottom: 50px;
      }
    }

    &__content-wrap {
      margin-bottom: 54px;
    }

    &__title {
      margin-bottom: 33px;
      font-size: 30px;
      line-height: 35px;
      font-weight: 400;
    }

    &__text {
      &:not(:last-child) {
        margin-bottom: 30px;
      }
    }

    &__footer {
      padding-top: 82px;
      border-top: 1px solid $gray;
    }

    &__send-btn {
      max-width: 288px;
      width: 100%;
    }

    @media (max-width: $tablet-small) {
      padding: 25px 35px 35px;

      &__section {
        &:not(:last-child) {
          margin-bottom: 30px;
        }
      }

      &__title {
        font-size: 28px;
      }
    }

    @media (max-width: $mobile) {
      &__title {
        margin-bottom: 20px;
        font-size: 20px;
      }

      &__footer {
        padding-top: 25px;
      }
    }
  }
</style>
