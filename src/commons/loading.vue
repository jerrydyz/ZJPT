<template>
  <div class="loading">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "loading",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@-webkit-keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes ball-spin-fade-loader {
  50% {
    opacity: 0.3;
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
.loading{width: 100px;height: 100px;position: relative;left: 50%;top:55px}
.loading div {
  background-color: #279fcf;
  width: 15px;
  height: 15px;
  border-radius: 100%;
  margin: 2px;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  position: absolute;
}
.loading > div:nth-child(1) {
  top: 25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
  animation: ball-spin-fade-loader 1s 0s infinite linear;
}
.loading > div:nth-child(2) {
  top: 17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
  animation: ball-spin-fade-loader 1s 0.12s infinite linear;
}
.loading > div:nth-child(3) {
  top: 0;
  left: 25px;
  -webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
  animation: ball-spin-fade-loader 1s 0.24s infinite linear;
}
.loading > div:nth-child(4) {
  top: -17.04545px;
  left: 17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
  animation: ball-spin-fade-loader 1s 0.36s infinite linear;
}
.loading > div:nth-child(5) {
  top: -25px;
  left: 0;
  -webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
  animation: ball-spin-fade-loader 1s 0.48s infinite linear;
}
.loading > div:nth-child(6) {
  top: -17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
  animation: ball-spin-fade-loader 1s 0.6s infinite linear;
}
.loading > div:nth-child(7) {
  top: 0;
  left: -25px;
  -webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
  animation: ball-spin-fade-loader 1s 0.72s infinite linear;
}
.loading > div:nth-child(8) {
  top: 17.04545px;
  left: -17.04545px;
  -webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
  animation: ball-spin-fade-loader 1s 0.84s infinite linear;
}
</style>
