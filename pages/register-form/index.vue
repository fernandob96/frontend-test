<template>
        <b-col cols="12" lg="10" xl="8" class="mt-3 mx-auto">
            <div class="w-100 text-center">
                <RegisterForm />
            </div>
        </b-col>
</template>
<script>
import RegisterForm from './../../components/forms/RegisterForm'
import Header from './../../components/modules/Header'

export default {
    components: {
        RegisterForm,
        Header
    }
}
</script>
