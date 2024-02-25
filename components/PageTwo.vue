<template>
  <div>
    <div
      class="center-flex"
      style="flex-direction: column; z-index: 2; position: relative; top: -10vh; margin: 0 1rem;"
    >
      <div
        data-aos="fade-down"
        style="text-align: center; margin-bottom: 10vh; text-transform: uppercase; font-size: x-large; font-weight: 300;"
      >
        <div>
          wedding
        </div>
        <div>
          save the date
        </div>
      </div>

      <div
        style="text-align: center;"
        data-aos="fade-down"
      >
        <div
          class="font-playfair name"
        >
          IVAN PRIYAMBUDI
        </div>
        <div style="font-size: medium">
          Putra kedua Bpk. Timbul & Ibu Yuni Rusmiyati
        </div>
      </div>

      <div
        class="contents"
        style="margin-bottom: 4vh; margin-top: 4vh;"
        data-aos="zoom-in"
      >
        <div
          class="and-line font-allura"
          style="font-size: xxx-large;"
        >
          And
        </div>
      </div>

      <div
        style="text-align: center;"
        data-aos="fade-up"
      >
        <div
          class="font-playfair name"
        >
          KARINA ALFI NURIL LAYLI
        </div>
        <div style="font-size: medium">
          Putra kedua Bpk. Karman & Ibu Nurul Istilah
        </div>
      </div>
    </div>

    <div
      data-aos="fade-up"
      data-aos-offset="-120"
      style="position: relative; display: flex; align-items: center; width: 100%; justify-content: center;"
    >
      <img
        class="bg-img-1"
        src="/bg-1.png"
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-img-1 {
  position: absolute;
  bottom: -30vh;
}

.and-line {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: auto;
    height: 2px;
    background: #23352F;
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: auto;
    height: 2px;
    background: #23352F;
    margin-left: 1rem;
  }
}

.name {
  font-size: xx-large
}

@media only screen and (max-width: 768px) {
  .name {
    font-size: x-large
  }

  .bg-img-1 {
    position: absolute;
    bottom: -20vh;
  }
}
</style>