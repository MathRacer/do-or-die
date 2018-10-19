<template>
  <div class="waiting">
    <div class="container boxCreateRoom">
    <div class="row">
      <div class="col-sm" v-for="(player, index) in players" :key="index">
        <div class="card" style="width: 19rem;">
          <img class="card-img-top" :src="player.avatar" alt="avatar mana nih">
          <div class="card-body">
            <p class="card-text" style="text-align:center; text-transform: uppercase; color: #F56162; font-weight: bold;">
              {{ player.username }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <button @click="btnWaitingRoom" style="width:640px; margin-top: 20px; background: #f55052; border: 1px #ffffff;" type="button" class="btn btn-primary btn-lg btn-block">START RACE</button>
  </div>
  </div>
</template>

<script>

  import db from "../../config/config.js"

  export default {
    name: 'waitingroom',
    components: {},
    data: function () {
      return {
        players: [],
        statusGame: false
      }
    },
    created() {
      this.documentReady()
    },
    methods: {
      documentReady: function () {
        let self = this
        var starCountRef = db.ref(
          "room/" + localStorage.getItem("room") + "/users"
        );

        starCountRef.on("value", function(snapshot) {
          self.userId = localStorage.getItem("id")
          self.players = []
          let keys = []
          let values = []

          keys = Object.keys(snapshot.val())
          values = Object.values(snapshot.val())
          
          if (keys.length == 2) {
            self.statusGame = true
          } 

          keys.forEach((key, index) => {
            self.players.push({
              id: key,
              username: values[index].username,
              avatar: values[index].avatar
            })
          })

        })

      },
      btnWaitingRoom: function () {
        
        if(this.statusGame == true){
          this.$router.push("game")
        } else {
          alert("PEMAIN KURANG SATU LAGI BOSSS !!!")
        }

        
      }
    }
  }
</script>

<style scoped>
  .waiting {
    background-image: url('../assets/waitinglist.jpg');
    position: fixed;
    top: 0;
    left: 0;
    background-size: cover;
    min-width: 100%;
    min-height: 100%;
  }

  .boxCreateRoom {
    width: 670px;
    /* height: 400px; */
    opacity: 0.9;
    top: 50%;
    left: 50%;
    position: absolute;
    margin-top: -250px;
    margin-left: -350px;
  }
</style>