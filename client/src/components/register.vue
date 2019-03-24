<template>
  <div>
    <h1>Register</h1>
    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"
    />
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"
    />
    <button
      type="submit"
      @click="register"
    >
      Register
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      console.log('register button was clicked')
    }
  }
}
</script>

<style>
</style>
