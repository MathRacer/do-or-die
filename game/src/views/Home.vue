<template>
  <div class="home">
    <div class="card text-center boxCreateRoom">
      <div class="card-header" style="color: #f55052;">
        MATH RACE
      </div>
      <div class="card-body">
        <h5 class="card-title" style="color: #f55052;">CREATE ROOM</h5>
        <div class="form-group">
          <input type="text" class="form-control" style="color: #f55052;" autofocus>
        </div>
        <a @click="btnCreateRoom" class="btn btn-primary" style="background:#f55052; color: #ffffff; border: 1px #ffffff solid;"> <i class="fas fa-car"></i>
          LETS GO !!!</a>
      </div>
      <div class="card-footer text-muted"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  methods: {
    btnCreateRoom: function () {
      this.$router.push('signin')
    }
  }
}
</script>

<style scoped>

.home {
  background-image: url('../assets/room.jpg');
  position: fixed; 
  top: 0; 
  left: 0; 
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
}

 .boxCreateRoom {
  width: 500px;
  /* height: 400px; */
  opacity: 0.9;
  top: 50%;
  left: 50%;
  position: absolute;
  margin-top: -200px;
  margin-left: -250px;
}

</style>
