<template>
  <div>
    <div class="center-flex">
      <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 4;">
        <text-ivan :keys="'0'" />
        <text-and2 :keys="'0'" />
        <text-karina :keys="'0'" />

        <div
          class="contents"
          style="text-align: center; margin-top: 2vh;"
        >
          <p style="color: #FFF;">
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan
            pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar kamu
            merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan
            kasih sayang. Sesungguhnya pada yang demikian itu benar-benar
            terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
          <h6 style="color: #FFF;">
            (QS Ar-Rum · Ayat 21)
          </h6>
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
  top: -10vh;
  transform: scaleX(-1);
  left: -10vw;
}

@media only screen and (max-width: 768px) {
  .bg-img-2 {
    top: 0;
    left: -100vw;
  }
}
</style>