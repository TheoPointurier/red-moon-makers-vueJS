<script setup lang="ts">
</script>
<template>
  <section class="band-page-container">
    <h2 class="band-page-container__title">Composition du groupe</h2>
    <div class="band-page-container__members-container">
      <div
        class="band-page-container__members-container_band-member band-page-container__members-container_band-member--microphone">
        <!-- <img src="../assets/img/microphone-rmbg.png" alt="microphone" height="400"
          class="band-page-container__members-container_band-member-img"> -->
        <h3 class="band-page-container__members-container_band-member-title">Valentin</h3>
        <p class="band-page-container__members-container_band-member-description">Valentin, notre chanteur
          charismatique, apporte une énergie vibrante et une passion palpable à chaque
          performance. Sa voix puissante traverse les genres avec une aisance déconcertante. Avec une présence scénique
          magnétique, il transforme chaque chanson en une expérience inoubliable, pleine de groove et d'intensité. Oui,
          il chante vraiment tout.</p>
      </div>
      <div
        class="band-page-container__members-container_band-member band-page-container__members-container_band-member--guitare">
        <!-- <img src="../assets/img/guitare-rmbg.png" alt="microphone" height="400"
          class="band-page-container__members-container_band-member-img"> -->
        <h3 class="band-page-container__members-container_band-member-title">Fabien</h3>
        <p class="band-page-container__members-container_band-member-description">Fabien, le guitariste polyvalent,
          fusionne les styles comme un chef. Son jeu de guitare est un mélange
          envoûtant de tout ce qui peut se jouer sur une guitare. Avec une énergie débordante et une créativité sans
          limites, il sait enflammer la scène et transporter le public dans un voyage musical inoubliable. Il joue même
          des morceaux qu'il n'aime pas.</p>
      </div>
      <div
        class="band-page-container__members-container_band-member band-page-container__members-container_band-member--drums">
        <!-- <img src="../assets/img/drum-rmbg.png" alt="microphone" height="400"
          class="band-page-container__members-container_band-member-img"> -->
        <h3 class="band-page-container__members-container_band-member-title">Phany</h3>
        <p class="band-page-container__members-container_band-member-description">Phany, notre batteur talentueux, est
          le cœur rythmique du groupe. Avec une précision inégalée et une
          créativité débordante, il apporte une dynamique unique à chaque morceau. Son jeu de batterie est à la fois
          puissant et subtil, capable de faire vibrer le public tout en le transportant dans un univers sonore riche et
          captivant. Il frappe tout ce qui bouge.</p>
      </div>
      <div
        class="band-page-container__members-container_band-member band-page-container__members-container_band-member--bass">
        <!-- <img src="../assets/img/bass-rmbg.png" alt="microphone" width="400" height="400"
          class="band-page-container__members-container_band-member-img"> -->
        <h3 class="band-page-container__members-container_band-member-title">Milan</h3>
        <p class="band-page-container__members-container_band-member-description">Milan, le bassiste exceptionnel, est
          le pilier rythmique du groupe. Avec une maîtrise technique
          impressionnante et une sensibilité musicale profonde, il apporte une profondeur et une richesse sonore à
          chaque performance. Son jeu de basse est à la fois groovy et mélodique, capable de faire vibrer le public et
          de donner vie à chaque morceau. Il fait groover même les silences.</p>
      </div>
      <div
        class="band-page-container__members-container_band-member band-page-container__members-container_band-member--saxophone">
        <!-- <img src="../assets/img/saxophone-rmbg.png" alt="microphone" height="400"
          class="band-page-container__members-container_band-member-img"> -->
        <h3 class="band-page-container__members-container_band-member-title">Théo</h3>
        <p class="band-page-container__members-container_band-member-description">Théo, notre saxophoniste virtuose,
          apporte une touche de sophistication et de chaleur au groupe. Avec une
          technique impeccable et une sensibilité musicale exceptionnelle, il sait captiver l'auditoire avec des solos
          envoûtants et des mélodies émouvantes. Son jeu de saxophone est à la fois expressif et dynamique, ajoutant une
          dimension unique et enchanteresse à chaque performance. Il souffle même quand il dort.</p>
      </div>
    </div>
  </section>
</template>
<style scoped lang="scss">
.band-page-container {
  height: 100vh;
  padding: 5rem 1rem 0rem 1rem;
  align-content: center;

  &__title {
    margin-left: 1rem;
    margin-bottom: 2rem;
    font-weight: 400;
    font-size: 2rem;
    display: block;
    padding: 0.5rem;
    transition: opacity 0.8s ease-out;
    opacity: 1;
  }

  &__members-container {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 80%;
    margin: 0 auto;
    box-sizing: border-box;

    &_band-member {
      flex: 1;
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      overflow: hidden;
      transition: flex 0.4s ease-out;

      &:hover {
        flex: 2;
      }

      &--bass {
        background-image: url("../assets/img/bass-rmbg.png");
        background-origin: border-box;
        background-position: center;
        background-repeat: no-repeat;

      }

      &--saxophone {
        background-image: url("../assets/img/saxophone-rmbg.png");
        background-origin: border-box;
        background-position: center;
        background-repeat: no-repeat;
        // grid-column: span 1;

      }

      &--drums {
        background-image: url("../assets/img/drum-rmbg.png");
        background-origin: padding-box;
        background-position: center;
        background-position-y: 60%;
        background-repeat: no-repeat;

      }

      &--guitare {
        background-image: url("../assets/img/guitare-rmbg.png");
        background-origin: border-box;
        background-position: center;
        background-repeat: no-repeat;

      }

      &--microphone {
        background-image: url("../assets/img/microphone-rmbg.png");
        background-origin: border-box;
        background-position: center;
        background-size: 400;
        background-repeat: no-repeat;

      }

      &-title {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 1rem;
      }

      .band-page-container__members-container_band-member-description {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        display: flex; // pour centrer le contenu
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem;
        line-height: 2;
        font-size: 1.2rem;
        font-weight: 400;
        background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9));
        border-radius: 10px;
        transition: opacity 0.8s ease-out;
      }

      // Au survol, on passe l'opacité du titre à 0 et celle de la description à 1
      &:hover {
        .band-page-container__members-container_band-member-title {
          opacity: 0;
        }

        .band-page-container__members-container_band-member-description {
          opacity: 1;
        }
      }
    }
  }
}
</style>