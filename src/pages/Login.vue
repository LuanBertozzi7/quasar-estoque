<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <div class="col-12 text-h5 text-center col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="form.email" outlined />
        <q-input label="Password" v-model="form.password" outlined />

        <div class="full-width q-pt-md">
          <q-btn
            label="Login"
            color="primary"
            class="full-width"
            outline
            rounded
            size="lg"
            type="submit"
          />
        </div>
        <div class="full-width">
          <q-btn color="primary" label="Register" class="full-width" flat to="/register" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import useAuthUser from 'src/composables/useAuthUser'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageLogin',

  setup() {
    const router = useRouter()
    const { login } = useAuthUser()
    const form = ref({
      email: '',
      password: '',
    })

    const handleLogin = async () => {
      try {
        await login(form.value)
        router.push({ name: 'me' }) // redirecting user for url.com/me
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleLogin,
    }
  },
})
</script>
