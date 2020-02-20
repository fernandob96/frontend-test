<template>
  <b-container class="p-5">
      <div class="w-100">
        <h1 class="title my-5" v-if="$route.params.candidates>=1">
          {{$route.params.candidates}} candidates
        </h1>

        <h1 class="title my-5" v-if="$route.params.candidates<=0">
          The number of candidates must be greater than 0
        </h1>

        <b-row v-if="$route.params.candidates>=1">
          <b-col cols="12" md="6">
            <p class="candidate-title mb-3"> Candidates (Original array) </p>
            <b-row v-for="(candidate, index) in candidates" :key="index" class="cont-candidate">
                <b-col cols="12" md="6">
                  <p class="candidate-title m-0"> {{ candidate.firstname }} - {{ candidate.lastname }} </p>
                  <p class="candidate-subtitle m-0">Age: {{candidate.age}}</p>
                  <p class="candidate-subtitle m-0">Current votes: {{candidate.votes}}</p>
                </b-col>

                <b-col cols="12" md="6" >   
                  <p class="my-1 candidate-subtitle">Vote (Between 0-20)</p>           
                  <b-button variant="primary" class="w-100 my-2 font-weight-bold"
                    @click="candidate.votes = candidate.votes+1"
                    :disabled="candidate.votes>=max_votes"
                  >+</b-button>

                  <b-button variant="danger" class="w-100 my-2 font-weight-bold"
                    @click="candidate.votes = candidate.votes-1"
                    :disabled="candidate.votes<=min_votes"
                  >-</b-button>
                </b-col>
            </b-row> 
          </b-col>


          <b-col cols="12" md="6" class="px-5">
            
            <!-- Sorted by votes -->
            <div class="w-100">
              <p class="candidate-title mb-0"> Voting results </p>
              <p class="candidate-subtitle mb-3">(Sorted by votes)</p>
              <hr class="my-3" />
              <b-row v-for="(candidate, index) in list_Candidates" :key="index" class="mb-2 candidate-subtitle">
                <b-col cols="12" md="6">
                  {{ candidate.firstname }} - {{ candidate.lastname }}
                </b-col>
                <b-col cols="12" md="6" class="font-weight-bold">
                  {{candidate.votes}} Votes
                </b-col>
              </b-row>

              <hr class="my-3" />
              <b-row>
                <b-col cols="12" md="12">
                  <p class="candidate-subtitle font-weight-bold">Total votes: {{total_votes}}</p>
                </b-col>
              </b-row>
            </div>

            <!-- Sorted by age -->
            <div class="w-100 mt-5">
              <p class="candidate-title mb-0"> Candidates </p>
              <p class="candidate-subtitle mb-3">(Sorted by age)</p>
              <hr class="my-3" />
              <b-row v-for="(candidate, index) in sorted_age" :key="index" class="mb-2 candidate-subtitle">
                <b-col cols="12" md="6">
                  {{ candidate.firstname }} - {{ candidate.lastname }}
                </b-col>
                <b-col cols="12" md="6">
                  {{candidate.age}} Years old
                </b-col>
              </b-row>
            </div>

          </b-col>


        </b-row>

      </div>
  </b-container>
</template>

<script>


export default {
  data(){
    return{

      quantity_candidates:'',
      min_votes:0,
      max_votes:20,
      total_votes: 0,

      candidates:[
          {
            firstname: '',
            lastname: '',
            age: '',
            slogan:'',
            votes:''
          }
      ],

      list_Candidates: [],
      sorted_age:[],

      names:["Billy", "Caleb", "Clayton", "Shane", "Melissa", "Danielle", "Priscilla", "Rosemary", "Alfred", "Stacey", "Ana", "Kaylee", "Norman", "Bobby"],
      lastnames:["Lewis", "Lawrence", "Ramirez", "Johnson", "Torres", "Martinez", "Garcia", "Sanchez", "Hernandez", "Bennett", "Morales", "Holland", "Lee", "Collins"]
      
    }
  },
  watch: {
    //Sort votes by changing the value
    candidates: {
      handler(val){
        this.orderVotes()
        this.totalVotes()
      },
      deep: true
    }
  },
  methods:{
    generateData(){

      //first position
      this.candidates.forEach(candidate => {
              candidate.firstname= this.names[Math.floor(Math.random() * this.names.length)],
              candidate.lastname= this.lastnames[Math.floor(Math.random() * this.lastnames.length)],
              candidate.age= this.randomNumber(18,65),
              candidate.votes= this.randomNumber(0,10)
      })

      //
      for (var i = 1; i < this.quantity_candidates; i++) {
        this.candidates.push({
              firstname: this.names[Math.floor(Math.random() * this.names.length)],
              lastname: this.lastnames[Math.floor(Math.random() * this.lastnames.length)],
              age: this.randomNumber(18,65),
              votes: this.randomNumber(0,10)
          })
      }

      //order by votes / age
      this.list_Candidates = this.candidates.slice()
      this.sorted_age = this.candidates.slice()
      this.orderVotes()
      this.orderAge()
    },
    randomNumber(min, max) {
      //age between min - max
      return Math.round(Math.random() * (max - min) + min)
    },
    orderVotes(){
      //Order list by votes
      this.list_Candidates.sort(function (a, b){
          return (b.votes - a.votes)
      })
    },
    orderAge(){
      //Order list by age
      this.sorted_age.sort(function (a, b){
          return (b.age - a.age)
      })
    },
    totalVotes(){
      let votes = 0
      this.candidates.forEach(candidate => {
        votes += candidate.votes
      })
      this.total_votes = votes
    }
  },
  mounted() {
    this.quantity_candidates = this.$route.params.candidates
    this.generateData()
    this.totalVotes()
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  text-align: center;
}

.cont-candidate{
  border: 1px solid #80808026;
  border-radius: 10px 10px 0px 0px;
  margin-bottom: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}
.candidate-title{
  font-size: 1.3rem;
  color: #526488;
}
.candidate-subtitle{
  color: #526488;
}
</style>
