<template>
  <section class="why-section">
    <!-- Section Title -->
    <h2 class="section-title">{{ $t('why.title') }}</h2>

    <!-- Benefits Grid -->
    <div class="benefits">
      <div class="card">
        <div class="circle">1</div>
        <p>{{ $t('why.points.0') }}</p>
      </div>
      <div class="card">
        <div class="circle">2</div>
        <p>{{ $t('why.points.1') }}</p>
      </div>
      <div class="card">
        <div class="circle">3</div>
        <p>{{ $t('why.points.2') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.why-section {
  background-size: cover;
  background-position: center;
  align-items: center;
  padding: 3rem 3rem;
  color: #231f20;
}

/* === TITLE === */
.section-title {
  width: 80%;
  text-align: center;
  font-size: 4rem; /* 🔼 made slightly larger */
  font-weight: 900;
  margin-bottom: 3rem;
  margin-left: auto;
  margin-right: auto;
}

/* === CARD GRID === */
.benefits {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

/* === CARD STYLING === */
.card {
  background-color: #3c2f27;
  color: white;
  border-radius: 12px;
  padding: 3rem 2rem; /* 🔼 increased for more vertical space */
  flex: 1;
  text-align: center;
  min-height: 300px; /* 🔼 increased card height */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* === RED CIRCLE === */
.circle {
  background-color: #e53935;
  width: 100px;
  height: 100px;
  margin: 0 auto 1.5rem auto;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 3rem;
}

/* === CARD TEXT === */
.card p {
  font-size: 2rem;
  line-height: 1.4;
  font-weight: 600;
  margin: 0;
  padding-inline: 1.6rem;
}

.card strong {
  font-weight: 900;
  color: white;
  font-size: 1.5rem; /* 🔼 bolder + larger emphasis */
}

@media (max-width: 768px) {
  .why-section {
    padding: 2rem 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
    width: 100%;
    margin: 1rem auto;
  }

  .benefits {
    flex-direction: column;
    gap: 1.2rem;
  }

  .card {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 2.5rem;
    min-height: auto;
  }

  .circle {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
    flex-shrink: 0;
    margin-bottom: 0.5rem;
    margin: 0.5rem;
  }

  .card p {
    font-size: 1.4rem;
    text-align: left;
    padding-left: 1rem;
    flex: 1;
  }
}

@media (max-width: 400px) {
  .why-section {
    padding: 1.2rem 1rem;
  }

  .section-title {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }

  .card {
    padding: 1.5rem 1rem;
  }

  .circle {
    width: 50px;
    height: 50px;
    font-size: 1.4rem;
  }

  .card p {
    font-size: 1.2rem;
    padding-left: 0.8rem;
    font-weight: 500;
  }
}
</style>
