<template>
  <div class="container">

    <div class="row" v-for="(y, yindex) in boards" :key="yindex">
      <div class="col-sm  game00" v-for="(x, xindex) in y" :key="xindex">
        {{boards[yindex][xindex]}}
        <img class= "icon" v-if="playerBoard[yindex][xindex]" src="http://icons.iconarchive.com/icons/icons-land/transporter/256/Car-Front-Red-icon.png">
      </div>
    </div>

    <form action="">
      <input v-model="playerDirection" autofocus>
      <input v-model="playerDirection">
    </form>
  </div>
</template>

<script>
  export default {
    name: "StartRacer",
    data() {
      return {
        length: 10,
        width: 3,
        playerDirection: "",
        boards: [
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""],
          ["", "", ""]
        ],
        playerWithId: {
          location: [1,0],
          id: localStorage.getItem('playerId')
        },
        yborder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        xborder: [0, 1, 2],
        iconCar: [{
          title: `<i class="fas fa-car fa-6x"></i>`
        }],
        playerBoard: [
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
          [false, false, false],
         [false, false, false],
        ]
      };
    },
    created() {
      for (let i = 1; i < this.boards.length; i++) {
        let trapcoordinate1 = Math.round(Math.random() * 2);
        let trapcoordinate2 = Math.round(Math.random() * 2);
        if (i % 2 == 0) {
          this.boards[i][trapcoordinate1] = "BOOM";
          this.boards[i][trapcoordinate2] = "BOOM";
        }
      }
      this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0]] = true;
    },
    methods: {
      isTraps: function () {
        return this.boards[this.playerWithId.location[1]][this.playerWithId.location[0]] == "BOOM";
      }
    },
    watch: {
      playerDirection: function (value) {
        value = value.toLowerCase();
        if (value == "a") {
          let nextmove = this.playerWithId.location[0] - 1;
          let tempcoordinat = this.playerWithId.location;

          if (this.xborder.indexOf(nextmove) != -1) {
            this.playerWithId.location[0] = nextmove;

            if (this.isTraps()) {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0] + 1] = false
              
              this.playerWithId.location = [1, 0];
            } else {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0]] = true;
              this.playerBoard[tempcoordinat[1]][tempcoordinat[0] + 1] = false;
                
            }
          }
          this.playerDirection = "";
        } else if (value == "s") {
          let nextmove = this.playerWithId.location[1] + 1;
          let tempcoordinat = this.playerWithId.location;
          if (this.yborder.indexOf(nextmove) != -1) {
            this.playerWithId.location[1] = nextmove;

            if (this.isTraps()) {
              this.playerBoard[this.playerWithId.location[1] - 1][this.playerWithId.location[0]] = false
                
              this.playerWithId.location = [1, 0];
            } else {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0]] = true;
              this.playerBoard[tempcoordinat[1] - 1][tempcoordinat[0]] = false
              
            }
          }
          this.playerDirection = "";
        } else if (value == "w") {
          let nextmove = this.playerWithId.location[1] - 1;
          let tempcoordinat = this.playerWithId.location;

          if (this.yborder.indexOf(nextmove) != -1) {
            this.playerWithId.location[1] = nextmove;

            if (this.isTraps()) {
              this.playerBoard[this.playerWithId.location[1] + 1][this.playerWithId.location[0]] = false
              
              this.playerWithId.location = [1, 0];
            } else {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0]] = true;
              this.playerBoard[tempcoordinat[1] + 1][tempcoordinat[0]] = false
              
            }
          }
          this.playerDirection = "";
        } else if (value == "d") {
          let nextmove = this.playerWithId.location[0] + 1;
          let tempcoordinat = this.playerWithId.location;

          if (this.xborder.indexOf(nextmove) != -1) {
            this.playerWithId.location[0] = nextmove;

            if (this.isTraps()) {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0] - 1] = false
             
              this.playerWithId.location = [1, 0];
            } else {
              this.playerBoard[this.playerWithId.location[1]][this.playerWithId.location[0]] = true;
              this.playerBoard[tempcoordinat[1]][tempcoordinat[0] - 1] = false
            }
          }
          this.playerDirection = "";
        } else {
          this.playerDirection = "";
        }
      }
    }
  };
</script>

<style scoped>

  .game00 {
    background-color: grey;
    width: 30px;
    height: 60px;
    border-left: solid;
    border-right: solid;
    text-align: center;
  }

  .icon {
    width: 100px;
    z-index: 1000 ;
    position: relative;
    bottom: 30px;
  }

</style>