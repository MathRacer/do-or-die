<template>
  <div class="waiting">
    <div class="container boxCreateRoom">
    <div class="row">
      <div class="col-sm">
        <div class="card" style="width: 19rem;">
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div class="card-body">
            <p class="card-text">
              HARLES BAYU
            </p>
          </div>
        </div>
      </div>

      <div class="col-sm">
        <div class="card" style="width: 19rem;">
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div class="card-body">
            <p class="card-text">
              HARLES BAYU
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
  export default {
    name: 'waitingroom',
    components: {},
    methods: {
      btnWaitingRoom: function () {
        // console.log('masuk')
        this.$router.push("game")
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
    margin-top: -180px;
    margin-left: -350px;
  }
</style>