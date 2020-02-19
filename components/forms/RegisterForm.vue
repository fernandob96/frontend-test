<template>
    <b-container>
        <div class="w-100">
            <h1 class="my-5 main-title">Register form</h1>
                <b-form   @submit.prevent="registerUser">
                    <b-row>
                        <b-col cols="12" offset-md="3" md="6">
                            
                            <!-- User - Username  -->
                            <b-form-group
                                label="Username*"
                                label-for="username"
                                label-class="text-center register_form_label"
                            >
                                <b-form-input
                                    id="username"
                                    v-model="$v.user.username.$model"
                                    type="text"
                                    placeholder="Username: (4-20 characters - Alphanumeric - Lowercase only)"
                                    :class="{'is-invalid' : $v.user.username.$error}"
                                    class="text-center"
                                />
                                <p class="text-danger" v-if="$v.user.username.$error">The field must be between 4 and 20 characters (Lowercase only)</p>              
                            </b-form-group>

                            <!-- User - email  -->
                            <b-form-group
                                label="Email*"
                                label-for="email"
                                label-class="text-center register_form_label"
                            >
                                <b-form-input
                                    id="email"
                                    v-model="$v.user.email.$model"
                                    type="text"
                                    placeholder="Write a valid email - test@info.com"
                                    :class="{'is-invalid' : $v.user.email.$error}"
                                    class="text-center"
                                />
                                <p class="text-danger" v-if="$v.user.email.$error">The mail is not correct</p>              
                            </b-form-group>

                            <!-- User - Phone  -->
                            <b-form-group
                                label="Phone number*"
                                label-for="user_phone"
                                label-class="text-center register_form_label"
                            >
                                <b-form-input
                                    id="user_phone"
                                    v-model="$v.user.phone.$model"
                                    type="text"
                                    placeholder="(312) 123 12 12"
                                    :class="{'is-invalid' : $v.user.phone.$error}"
                                    class="text-center"
                                    v-mask="'(###) ### ####'"
                                />
                                <p class="text-danger" v-if="$v.user.phone.$error">The phone number must start between 300 and 320 and 10 numbers</p>              
                            </b-form-group>
                            

                            <div class="text-center my-5">
                                <b-button type="submit" variant="primary">Register!</b-button>
                            </div>

                        </b-col>
                    </b-row>
                </b-form>
        </div>
    </b-container>
</template>
<script>
import { mapActions } from "vuex"
import { required, minLength, maxLength, email } from 'vuelidate/lib/validators'
import { spacesValidator, phoneNumberValidator, cleanPhone } from '../../plugins/vuelidate'

export default {

    data() {
        return {
            user:{
                username:'',
                email:'',
                phone:''
            }
        }
    },
    validations:{

        user:{
            username:{
                required,
                minLength: minLength(4),
                maxLength: maxLength(20),
                spacesValidator
            },
            email:{
                required,
                email
            },
            phone:{
                required,
                phoneNumberValidator,
                minLength: minLength(14),
                maxLength: maxLength(14)
            }
        }

    },
    watch: {
        user: {
        handler(val){
            this.user.username = this.user.username.toLowerCase()
        },
        deep: true
        }
    },
    methods: {
        ...mapActions({registerForm: "registerForm"
         }),

        registerUser(){

            this.$v.$touch()

            if (this.$v.$invalid) {

                this.loading = false

                //Form error
                this.toast('b-toaster-bottom-right', true, 'danger', 'Form Error', 'It is necessary to review the form fields')

            //Success form validations
            }else{
                
                //Send data
                this.toast('b-toaster-bottom-right', true, 'secondary', 'Sending data', 'The data is being sent')

                //Data to send (Axios)
                let dataToSend = {
                    username: this.$v.user.username.$model,
                    email: this.$v.user.email.$model,
                    phone_number: cleanPhone(this.$v.user.phone.$model)
                }

                //Resp API
                this.registerForm(dataToSend).then((res) => {

                    //OK API
                    if(res.status != null){
                        // API ok message
                        if(res.status == true){
                            setTimeout(() => {

                                //Notify (Success API)
                                this.toast('b-toaster-bottom-right', true, 'success', 'Sent succesfully', 'The data was sent correctly')

                            }, 2000)
                        }else{
    
                            setTimeout(() => {
                                this.toast('b-toaster-bottom-right', true, 'danger', 'Error', res.error)
                            }, 2000)
                        
                        }
                    }
                    //ERROR API
                    else{
                        setTimeout(() => {        
                            this.toast('b-toaster-bottom-right', true, 'danger', 'Error', 'We are having some troubles with our service, please try again later.')
                        }, 2000)
                    }
                })
            }
            
        },

        toast(toaster, append = false, variant, title, subtitle) {
            this.counter++
            this.$bvToast.toast(subtitle, {
            title: title,
            toaster: toaster,
            solid: true,
            variant: variant,
            appendToast: append
            })
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
.register_form_label{
    color: #526488;
}
</style>