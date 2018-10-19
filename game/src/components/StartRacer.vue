<template>
  <div class="container">

    <div class="row border" v-for="(y, yindex) in boards" :key="yindex">
      <div class="col-sm border game00" v-for="(x, xindex) in y" :key="xindex">
        {{boards[yindex][xindex]}}
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
          ["00", "01", "02"],
          ["10", "11", "12"],
          ["20", "21", "22"],
          ["30", "31", "32"],
          ["40", "41", "42"],
          ["50", "51", "52"],
          ["60", "61", "62"],
          ["70", "71", "72"],
          ["80", "81", "82"],
          ["90", "91", "92"]
        ],
        player1: [1, 0], //x,y
        yborder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        xborder: [0, 1, 2],
        iconCar: [{
          title: `<i class="fas fa-car fa-6x"></i>`
        }]
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
    },
    methods: {
      isTraps: function () {
        return this.boards[this.player1[1]][this.player1[0]] == "BOOM";
      }
    },
    watch: {
      playerDirection: function (value) {
        value = value.toLowerCase();

        if (value == "a") {
          let nextmove = this.player1[0] - 1;
          let tempcoordinat = this.player1;

          if (this.xborder.indexOf(nextmove) != -1) {
            this.player1[0] = nextmove;

            if (this.isTraps()) {
              this.boards[this.player1[1]][this.player1[0] + 1] =
                `${
              this.player1[1]
            }${this.player1[0]}`;
              this.player1 = [1, 0];
            } else {
              this.boards[this.player1[1]][this.player1[0]] = "x";
              this.boards[tempcoordinat[1]][tempcoordinat[0] + 1] =
                `${[
              tempcoordinat[1]
            ]}${[tempcoordinat[0] + 1]}`;
            }
          }
          this.playerDirection = "";
        } else if (value == "s") {
          let nextmove = this.player1[1] + 1;
          let tempcoordinat = this.player1;
          if (this.yborder.indexOf(nextmove) != -1) {
            this.player1[1] = nextmove;

            if (this.isTraps()) {
              this.boards[this.player1[1] - 1][this.player1[0]] =
                `${
              this.player1[1]
            }${this.player1[0]}`;
              this.player1 = [1, 0];
            } else {
              this.boards[this.player1[1]][this.player1[0]] = "x";
              this.boards[tempcoordinat[1] - 1][tempcoordinat[0]] =
                `${[
              tempcoordinat[1] - 1
            ]}${[tempcoordinat[0]]}`;
            }
          }
          this.playerDirection = "";
        } else if (value == "w") {
          let nextmove = this.player1[1] - 1;
          let tempcoordinat = this.player1;

          if (this.yborder.indexOf(nextmove) != -1) {
            this.player1[1] = nextmove;

            if (this.isTraps()) {
              this.boards[this.player1[1] + 1][this.player1[0]] =
                `${
              this.player1[1]
            }${this.player1[0]}`;
              this.player1 = [1, 0];
            } else {
              this.boards[this.player1[1]][this.player1[0]] = "x";
              this.boards[tempcoordinat[1] + 1][tempcoordinat[0]] =
                `${[
              tempcoordinat[1] + 1
            ]}${[tempcoordinat[0]]}`;
            }
          }
          this.playerDirection = "";
        } else if (value == "d") {
          let nextmove = this.player1[0] + 1;
          let tempcoordinat = this.player1;

          if (this.xborder.indexOf(nextmove) != -1) {
            this.player1[0] = nextmove;

            if (this.isTraps()) {
              this.boards[this.player1[1]][this.player1[0] - 1] =
                `${
              this.player1[1]
            }${this.player1[0]}`;
              this.player1 = [1, 0];
            } else {
              this.boards[this.player1[1]][this.player1[0]] = "x";
              this.boards[tempcoordinat[1]][tempcoordinat[0] - 1] =
                `${[
              tempcoordinat[1]
            ]}${[tempcoordinat[0] - 1]}`;
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

<style>
</style>