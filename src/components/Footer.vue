<template>
  <footer class="footer">
    <div class="footer-content">
      <!-- Left: Logo + Brand -->
      <div class="footer-left">
        <img src="@/assets/logo-white.png" alt="Logo" class="logo" />
        <span class="brand-name">Твой нормальный бухгалтер</span>
      </div>

      <!-- Right: Contacts + Icons -->
      <div class="footer-right">
        <p>
          Телефон:
          <a href="tel:+87074766187">+7 707 476 61 87</a>
        </p>
        <p>
          Email:
          <a href="mailto:salimbaevajbek5@gmail.com">salimbaevajbek5@gmail.com</a>
        </p>
        <div class="social-icons">
          <a href="https://wa.me/77074766187" target="_blank" aria-label="WhatsApp">
            <img src="@/assets/whatsapp.png" alt="WhatsApp" class="icon" />
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" aria-label="Instagram">
            <img src="@/assets/instagram.png" alt="Instagram" class="icon" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #403528;
  color: white;
  padding: 2rem 4rem;
  border-top: 1px solid #ddd;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  width: 40px;
  height: 40px;
}

.brand-name {
  font-weight: 700;
  font-size: 1.4rem;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
  text-align: right;
}

.footer-right a {
  color: inherit;
  text-decoration: none;
  font-weight: 500;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.icon {
  width: 28px;
  height: 28px;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.icon:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left,
  .footer-right {
    align-items: center;
    text-align: center;
  }

  .footer-right {
    align-items: center;
  }
}

@media (max-width: 400px) {
  .footer {
    padding: 1.5rem 1.2rem;
  }

  .brand-name {
    font-size: 1.1rem;
  }

  .footer-right p,
  .footer-right a {
    font-size: 0.9rem;
  }

  .icon {
    width: 24px;
    height: 24px;
  }
}
</style>
