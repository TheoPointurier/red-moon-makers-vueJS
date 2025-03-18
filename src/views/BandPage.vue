<script setup lang="ts">
</script>
<template>
  <section class="band-page-container">
    <h2 class="band-page-title">Composition du groupe</h2>
    <div class="band-members-container">
      <div class="band-member">
        <img src="../assets/img/microphone-rmbg.png" alt="microphone" height="400">
        <h3>Valentin</h3>
        <p>Valentin, notre chanteur charismatique, apporte une énergie vibrante et une passion palpable à chaque
          performance. Sa voix puissante traverse les genres avec une aisance déconcertante. Avec une présence scénique
          magnétique, il transforme chaque chanson en une expérience inoubliable, pleine de groove et d'intensité. Oui,
          il chante vraiment tout.</p>
      </div>
      <div class="band-member">
        <img src="../assets/img/guitare-rmbg.png" alt="microphone" height="400">
        <h3>Fabien</h3>
        <p>Fabien, le guitariste polyvalent, fusionne les styles comme un chef. Son jeu de guitare est un mélange
          envoûtant de tout ce qui peut se jouer sur une guitare. Avec une énergie débordante et une créativité sans
          limites, il sait enflammer la scène et transporter le public dans un voyage musical inoubliable. Il joue même
          des morceaux qu'il n'aime pas.</p>
      </div>
      <div class="band-member">
        <img src="../assets/img/drum-rmbg.png" alt="microphone" height="400">
        <h3>Phany</h3>
        <p>Phany, notre batteur talentueux, est le cœur rythmique du groupe. Avec une précision inégalée et une
          créativité débordante, il apporte une dynamique unique à chaque morceau. Son jeu de batterie est à la fois
          puissant et subtil, capable de faire vibrer le public tout en le transportant dans un univers sonore riche et
          captivant. Il frappe tout ce qui bouge.</p>
      </div>
      <div class="band-member">
        <img src="../assets/img/bass-rmbg.png" alt="microphone" height="400">
        <h3>Milan</h3>
        <p>Milan, le bassiste exceptionnel, est le pilier rythmique du groupe. Avec une maîtrise technique
          impressionnante et une sensibilité musicale profonde, il apporte une profondeur et une richesse sonore à
          chaque performance. Son jeu de basse est à la fois groovy et mélodique, capable de faire vibrer le public et
          de donner vie à chaque morceau. Il fait groover même les silences.</p>
      </div>
      <div class="band-member">
        <img src="../assets/img/saxophone-rmbg.png" alt="microphone" height="400">
        <h3>Théo</h3>
        <p>Théo, notre saxophoniste virtuose, apporte une touche de sophistication et de chaleur au groupe. Avec une
          technique impeccable et une sensibilité musicale exceptionnelle, il sait captiver l'auditoire avec des solos
          envoûtants et des mélodies émouvantes. Son jeu de saxophone est à la fois expressif et dynamique, ajoutant une
          dimension unique et enchanteresse à chaque performance. Il souffle même quand il dort.</p>
      </div>
    </div>
  </section>
</template>
<style scoped>
.band-page-container {
  height: 100vh;
  padding-top: 5rem;
}

.band-page-title {
  margin-left: 1rem;
  font-weight: 400;
  display: block;
  padding: 0.5rem;
}

.band-members-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18%, 1fr));
  gap: 1rem;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
}

.band-member {
  display: flex;
  flex-direction: column;
  height: 40rem;
  justify-content: center;
  align-items: center;
}
</style>