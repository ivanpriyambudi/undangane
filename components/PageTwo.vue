<template>
  <div>
    <div
      class="center-flex"
      style="flex-direction: column; z-index: 2; position: relative; top: -10vh;"
    >
      <div style="text-align: center; margin-bottom: 4vh; text-transform: uppercase; font-size: large;">
        <div>wedding</div>
        <div>save the date</div>
      </div>

      <div style="text-align: center;">
        <div style="font-size: x-large">
          IVAN PRIYAMBUDI
        </div>
        <div style="font-size: medium">
          Putra kedua Bpk. Timbul & Ibu Yuni Rusmiyati
        </div>
      </div>

      <div
        class="contents"
        style="margin-bottom: 4vh; margin-top: 4vh;"
      >
        <div class="and-line">
          And
        </div>
      </div>

      <div style="text-align: center;">
        <div style="font-size: x-large">
          KARINA ALFI NURIL LAYLI
        </div>
        <div style="font-size: medium">
          Putra kedua Bpk. Karman & Ibu Nurul Istilah
        </div>
      </div>
    </div>

    <div style="position: relative; display: flex; align-items: center; width: 100%; justify-content: center;">
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
  bottom: -20vh;
}

.and-line {
  display: flex;
  align-items: center;

  &::before {
    content: '';
    flex: auto;
    height: 2px;
    background: #000;
    margin-right: 1rem;
  }

  &::after {
    content: '';
    flex: auto;
    height: 2px;
    background: #000;
    margin-left: 1rem;
  }
}
</style>