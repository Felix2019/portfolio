<template>
  <div>
    <!-- <span>Brands </span> -->

    <div class="main-container1">
      <img
        class="brand-image"
        v-for="brand in images"
        :key="brand.key"
        :src="brand.url"
        width="20%"
        alt="brand-image"
        srcset=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    images: [
      {
        url: "https://www.designtagebuch.de/wp-content/uploads/mediathek//2012/04/wdr-logo.jpg",
      },
      {
        url: "https://www.ndr.de/der_ndr/ardlogo106_v-contentgross.png",
      },
      {
        url: "https://www.wdrmaus.de/codebase/img/update2021/logo.png",
      },
      {
        url: "https://img.ardmediathek.de/standard/00/35/62/13/12/-2114473875/16x9/960?mandant=ard",
      },
    ],
  }),
};
</script>

<style scoped>
.main-container1 {
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  overflow-x: auto;
  /* white-space: nowrap; */
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5vh;
  margin-bottom: 5vh;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.brand-image {
  border-radius: 8px;
  margin: 15px;
}
</style>