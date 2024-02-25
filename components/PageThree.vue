<template>
  <div>
    <div
      class="center-flex"
      style="flex-direction: column; z-index: 2; position: relative;"
    >
      <div
        class="contents long"
        style="text-align: center;"
      >
        <div style="font-size: xxx-large;">
          <div class="font-allura">
            Akad Nikah
          </div>
        </div>
        <div style="font-size: medium">
          Kamis, 29 Februari 2024 <br> Jam 08.00 WITA
        </div>
      </div>

      <div style="height: 20vh; width: 2px; background-color: #23352F; margin-top: 1rem; margin-bottom: 1rem;" />

      <div
        class="contents long"
        style="text-align: center; margin-bottom: 10vh;"
      >
        <div style="font-size: xxx-large;">
          <div class="font-allura">
            Resepsi
          </div>
        </div>
        <div style="font-size: medium">
          Kamis, 29 Februari 2024 <br> Jam 11.00 WITA - selesai
        </div>
      </div>

      <div
        class="contents long"
        style="text-align: center;"
      >
        <div style="font-size: medium;">
          Bertempat di Rumah Mempelai Wanita <br> BTN Citra Garden Blok B/9 Kec Rumbia, Kab Bombana
        </div>
      </div>
    </div>

    <img
      class="bg-img-2"
      src="/bg-2.png"
    >
  </div>
</template>

<style lang="scss" scoped>
.bg-img-2 {
  position: absolute;
  top: 2vh;
  right: -15vw;
  transform: rotate(5deg);
  width: 100vmin;
}

@media only screen and (max-width: 768px) {
  .bg-img-2 {
    right: -25vw;
  transform: rotate(26deg);
  }
}
</style>