<template>
  <q-page padding>
    <p class="text-body1">
      thanks for register !
    </p>
    <p class="text-body1">
      please confirm your email to finishing register at <strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageEmailConfirmation',
})
</script>
