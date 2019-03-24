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
      v-email="password"
      placeholder="password"
    />
    <button
      type="submit"
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
  watch: {
    email (value) {
      console.log('Email was changed', value)
    }
  }
}
</script>

<style>
</style>
