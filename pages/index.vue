<template>
  <b-container>
      <div>
        <h1 class="title">
          Fernando Benavides Rodriguez
        </h1>
        <h3 class="subtitle">
          Frontend Test
        </h3>
        <div class="links">
          <n-link to="/focusable-input" prefetch class="button--grey" >Input components</n-link>
          <n-link to="/voting-list/5" prefetch class="button--grey" >Voting List*</n-link>
          <n-link to="/register-form" prefetch class="button--grey" >Register Form</n-link>
        </div>
        <div class="p-2 my-2">
          <p class="m-0">*The default value of the voting list is 5, change the parameter using the URL.</p>
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

p{
  color: #35495e;
}
</style>
