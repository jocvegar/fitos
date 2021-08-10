<template>
  <img class="FitoLogo" alt="Fito Logo" src="/fitos.png" />
</template>

<style>
.FitoLogo {
  height: 200px;
  width: 200px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
