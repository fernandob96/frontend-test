<template>
        <b-col cols="12" lg="10" xl="8" class="mt-3 mx-auto">
            <div class="w-100 text-center">
                <RegisterForm />
            </div>
        </b-col>
</template>
<script>
import RegisterForm from './../../components/forms/RegisterForm'

export default {
    components: {
        RegisterForm
    }
}
</script>
