<template>
  <div class="container">

    <b-row>
        <b-col cols="12">
            <h1 v-if="error.statusCode === 404" class="title-error">404 - Page not found</h1>
            <h1 v-else class="title-error">An error occurred</h1>
        </b-col>

        <b-col cols="12" class="mt-5">
            <b-button href="/" variant="outline-secondary">Home page</b-button>
        </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'error'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title-error{
  color: #526488;
}
</style>