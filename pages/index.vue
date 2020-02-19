<template>
  <b-container>
      <div>
        <h1 class="title">
          <!-- Fernando Benavides Rodriguez -->
        </h1>
        <h3 class="subtitle">
          <!-- Frontend Test -->
        </h3>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            class="button--grey"
          >
            Voting List
          </a>

          <n-link to="/about" prefetch>About page pre-fetched</n-link>
        </div>
      </div>
  </b-container>
</template>

<script>

export default {

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

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 40px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
