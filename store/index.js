import qs from 'qs'
import axios from 'axios'

export const state = () => ({

})

export const mutations = {

}

const additionalInfo = {
    headers: {"Tranqui-FrontendDeveloper": "FernandoBenavidesRodriguez",
                "content-type": "application/x-www-form-urlencoded"} 
}

export const actions = {

  async registerForm({app}, data) {
    return axios
      .post("http://sgaviria.com/api/1/front-dev/",   qs.stringify({
        username: data.username,
        email: data.email,
        phone_number: data.phone_number
      }), additionalInfo)
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error
      })
    }
}

