<template>
    <b-container>
        <div class="w-100">
            <h1 class="my-5 main-title">Focusable Input</h1>

                <!-- Pass prop focusable -->
                <TextInput  
                    :focused="focusable"
                />

                <!-- Change focusable option  -->
                <div class="text-center my-5">
                    <b-button type="submit" variant="success" @click="focusable = !focusable">Change focusable state</b-button>
                    <p class="my-3 subtitle-1 font-weight-bold">Focusable state: {{focusable}}</p>
                </div>

        </div>
    </b-container>
</template>
<script>
import TextInput from './../../components/fields/TextInput'

export default {
    components: {
        TextInput
    },
    data() {
        return {
            focusable: false
        }
    }
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
.main-title{
  font-size: 2.3rem;
  color: #526488;
}
.subtitle-1{
    color: #526488;
}

</style>