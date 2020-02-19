<template>
        <b-col cols="12" lg="10" xl="8" class="mt-3 mx-auto">
            <div class="w-100 text-center">
                <FocusableTextInput />
            </div>
        </b-col>
</template>
<script>
import FocusableTextInput from './../../components/fields/FocusableTextInput'

export default {
    components: {
        FocusableTextInput
    }
}
</script>
