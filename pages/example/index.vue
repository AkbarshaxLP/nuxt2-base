<template>
  <div class="px-6 py-4">
    <img src="@/assets/svg/home.svg" @click="$router.push('/')" >

    <nuxt-link
      v-for="locale in availableLocales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)"
    >
      {{ locale.title }}
    </nuxt-link>

    <p>{{ $t('pages.index.title') }}</p>

    <hr class="my-4">

    <ExampleForm />
  
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('device', ['xl']),
    availableLocales () {
      return this.$i18n.locales;
    }
  }
}
</script>