<template>
  <div>
    <div class="center-flex">
      <div style="display: flex; flex-direction: column; align-items: center; position: relative; z-index: 4;">
        <text-ivan :keys="'0'" />
        <text-and2 :keys="'0'" />
        <text-karina :keys="'0'" />

        <div
          class="contents"
          data-aos="fade-up"
          style="text-align: center; margin-top: 2vh;"
        >
          <p style="color: #FFF; font-size: small;">
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
      data-aos="fade-right"
      class="bg-img-3"
      src="/bg-3.png"
    >
  </div>
</template>

<style lang="scss" scoped>
.bg-img-3 {
  position: absolute;
  top: -10vh;
  left: -15vw;
}

@media only screen and (max-width: 768px) {
  .bg-img-3 {
    top: 0;
    left: -100vw;
    width: 200vmin;
    opacity: 0.25 !important;
  }
}
</style>