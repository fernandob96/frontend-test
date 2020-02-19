<template>
        <div class="w-100">
                <!-- Input file  -->
                <b-form-group
                    label="General Input"
                    label-class="text-center subtitle"
                >
                    <b-form-input
                        ref="inputName"
                        v-model="inputValue"
                        type="text"
                        placeholder="General Input"
                        class="text-center"
                    />           
                </b-form-group>

        </div>
</template>
<script>

export default {
    props:{
        focused: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        focused: {
        handler(val){
            if(val){
                this.$refs.inputName.$el.focus()
            }
        },
        }
    },
    data() {
        return {
            inputValue:''
        }
    },
    mounted(){
        if(this.focused){
            this.$refs.inputName.$el.focus()
        }
    }
}
</script>

<style>
.subtitle{
    color: #526488;
}
</style>