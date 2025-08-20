<template>
  <q-page class="flex flex-center">
    <div v-if="user">
      <div>Hello {{ user.user_metadata.name }}</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import useAuthUser from 'src/composables/useAuthUser'

export default defineComponent({
  name: 'MePage',
  setup() {
    const { user } = useAuthUser()
    return {
      user,
    }
  },
})
</script>
