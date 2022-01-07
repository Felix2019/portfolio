<template>
  <div class="container">
    <img class="profile-image" src="https://picsum.photos/200" />

    <span class="font-style">Felix Günthner</span>
    <span class="font-style-body"
      >Computer Science student // video producer // founder of turtlelab</span
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
}
.profile-image {
  display: flex;
  /* width: auto; */
  width: 50vw;
  border-radius: 50%;
  border: 5px solid #f2f0e4;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.font-style {
  font-family: "DM Sans", sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin-top: 10vh;
}

.font-style-body {
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  margin: 20px;
  text-align: center;
}
</style>