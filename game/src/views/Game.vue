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

    <!-- <div class="row border">
        <div class="col-sm border game00">
            GAME00
        </div>
        <div class="col-sm border game01">
            GAME01
        </div>
        <div class="col-sm border game02">
            GAME02
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game10">
            GAME10
        </div>
        <div class="col-sm border game11">
            GAME11
        </div>
        <div class="col-sm border game12">
            GAME12
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game20">
            GAME20
        </div>
        <div class="col-sm border game21">
            GAME21
        </div>
        <div class="col-sm border game22">
            GAME22
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game30">
            GAME30
        </div>
        <div class="col-sm border game31">
            GAME31
        </div>
        <div class="col-sm border game32">
            GAME32
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game40">
            GAME40
        </div>
        <div class="col-sm border game41">
            GAME41
        </div>
        <div class="col-sm border game42">
            GAME42
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game50">
            GAME50
        </div>
        <div class="col-sm border game51">
            GAME51
        </div>
        <div class="col-sm border game52">
            GAME52
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game60">
            GAME60
        </div>
        <div class="col-sm border game61">
            GAME61
        </div>
        <div class="col-sm border game62">
            GAME62
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game70">
            GAME70
        </div>
        <div class="col-sm border game71">
            GAME71
        </div>
        <div class="col-sm border game72">
            GAME72
        </div>
    </div>
    <div class="row border">
        <div class="col-sm border game80">
            GAME80
        </div>
        <div class="col-sm border game81">
            GAME81
        </div>
        <div class="col-sm border game82">
            GAME82
        </div>
    </div> -->
</div>
</template>

<script>
export default {
  name: "GAME",
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
      iconCar: [
        {
          title: `<i class="fas fa-car fa-6x"></i>`
        }
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
  },
  methods: {
    isTraps: function() {
      return this.boards[this.player1[1]][this.player1[0]] == "BOOM";
    }
  },
  watch: {
    playerDirection: function(value) {
      value = value.toLowerCase();

      if (value == "a") {
        let nextmove = this.player1[0] - 1;
        let tempcoordinat = this.player1;

        if (this.xborder.indexOf(nextmove) != -1) {
          this.player1[0] = nextmove;

          if (this.isTraps()) {
            this.boards[this.player1[1]][this.player1[0] + 1] = `${
              this.player1[1]
            }${this.player1[0]}`;
            this.player1 = [1, 0];
          } else {
            this.boards[this.player1[1]][this.player1[0]] = "x";
            this.boards[tempcoordinat[1]][tempcoordinat[0] + 1] = `${[
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
            this.boards[this.player1[1] - 1][this.player1[0]] = `${
              this.player1[1]
            }${this.player1[0]}`;
            this.player1 = [1, 0];
          } else {
            this.boards[this.player1[1]][this.player1[0]] = "x";
            this.boards[tempcoordinat[1] - 1][tempcoordinat[0]] = `${[
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
            this.boards[this.player1[1] + 1][this.player1[0]] = `${
              this.player1[1]
            }${this.player1[0]}`;
            this.player1 = [1, 0];
          } else {
            this.boards[this.player1[1]][this.player1[0]] = "x";
            this.boards[tempcoordinat[1] + 1][tempcoordinat[0]] = `${[
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
            this.boards[this.player1[1]][this.player1[0] - 1] = `${
              this.player1[1]
            }${this.player1[0]}`;
            this.player1 = [1, 0];
          } else {
            this.boards[this.player1[1]][this.player1[0]] = "x";
            this.boards[tempcoordinat[1]][tempcoordinat[0] - 1] = `${[
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
