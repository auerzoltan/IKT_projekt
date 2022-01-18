<template>
  <Navbar/>
  <router-view/>
  <footer>
    <p>
      Made by Zoltán & Kernel 2022 copyright
    </p>
  </footer>
</template>

<style lang="scss" scoped>
@import url('./scss/global.scss');

footer {
  display: flex;
  height: 100px;
  background-color: white;
  p {
    margin: auto;
  }
}
</style>