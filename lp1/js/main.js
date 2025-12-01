// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  /* =========================
   * SPメニュー（ハンバーガー）
   * ========================= */
  const hamburger = document.getElementById("hamburger");
  const spMenu = document.getElementById("spMenu");
  const spMenuLinks = document.querySelectorAll(".sp-menu-link");

  const toggleSpMenu = () => {
    if (!spMenu || !hamburger) return;

    const isMenuOpen = spMenu.classList.contains("is-open");

    if (isMenuOpen) {
      spMenu.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      document.body.style.overflow = "";
    } else {
      spMenu.classList.add("is-open");
      hamburger.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
  };

  if (hamburger && spMenu) {
    hamburger.addEventListener("click", toggleSpMenu);
  }

  spMenuLinks.forEach((link) => {
    link.addEventListener("click", () => toggleSpMenu(false));
  });

  /* =========================
   * スムーススクロール（アンカー / CTA）
   * ========================= */
  const scrollToId = (id) => {
    const target = document.querySelector(id);
    if (!target) return;
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const targetTop =
      target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 10;
    window.scrollTo({
      top: targetTop,
      behavior: "smooth",
    });
  };

  // a[href^="#"] クリック
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href === "#") return;
    a.addEventListener("click", (e) => {
      // 外部リンクなどは除外
      if (href.startsWith("#")) {
        e.preventDefault();
        scrollToId(href);
      }
    });
  });

  const closeSpMenu = () => {
    if (!spMenu || !hamburger) return;
    spMenu.classList.remove("is-open");
    hamburger.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  // .js-scroll-contact クリック → #contact へ
  document.querySelectorAll(".js-scroll-contact").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      closeSpMenu();
      scrollToId("#contact");
    });
  });

  /* =========================
   * 特長モーダル
   * ========================= */
  const closeModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.remove("is-open");
    document.body.style.overflow = "";
  };

  const openModal = (modalElement) => {
    if (!modalElement) return;
    modalElement.classList.add("is-open");
    document.body.style.overflow = "hidden";
  };

  document.querySelectorAll(".js-open-feature-modal").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      const featureId = btn.dataset.feature;

      const targetModalId = `featureModal-${featureId}`;
      const targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        openModal(targetModal);
      } else {
        console.error(`Not found Modal with ID: ${targetModalId}`);
      }
    });
  });

  document.querySelectorAll(".modal-close").forEach(closeBtn => {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const modalBackdrop = closeBtn.closest(".modal-backdrop");
      closeModal(modalBackdrop);
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach(backdrop => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) {
        closeModal(backdrop);
      }
    });
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const openModalElement = document.querySelector(".modal-backdrop.is-open");
      if (openModalElement) {
        closeModal(openModalElement);
      }
    }
  });

  /* =========================
   * 機能タブ切り替え
   * ========================= */
  const functionNavBtns = document.querySelectorAll(".function-nav-btn");
  const functionPanels = document.querySelectorAll(".function-panel");

  functionNavBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;

      functionNavBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      functionPanels.forEach((panel) => {
        panel.classList.toggle(
          "is-active",
          panel.id === targetId
        );
      });
    });
  });

  const navButtons = document.querySelectorAll('.function-nav-btn-sp');
  const panels = document.querySelectorAll('.function-panel-sp');

  const MAX_HEIGHT_LARGE = '1000px';
  const TRANSITION_DURATION = 550; // ms

  function closeSmoothly(panel) {
    if (panel.style.maxHeight === 'none') {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    void panel.offsetHeight;

    panel.style.maxHeight = '0';
    panel.classList.remove('is-active');
  }

  function openSmoothly(panel) {
    panel.classList.add('is-active');
    panel.style.maxHeight = MAX_HEIGHT_LARGE;

    setTimeout(() => {
      if (panel.classList.contains('is-active')) {
        panel.style.maxHeight = 'none';
      }
    }, TRANSITION_DURATION);
  }

  navButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      const isActive = this.classList.contains('is-active');

      if (isActive) {
        this.classList.remove('is-active');
        closeSmoothly(targetPanel);

        // Lệnh quan trọng cho di động: Loại bỏ trạng thái focus/active sau khi đóng
        this.blur();

        this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        return;
      }

      // Mở panel
      this.classList.add('is-active');
      openSmoothly(targetPanel);

      // Lệnh quan trọng cho di động: Loại bỏ trạng thái focus/active sau khi mở
      this.blur();

      this.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  /* =========================
   * FAQ アコーディオン
   * ========================= */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      // 他を閉じたいならここで全部閉じる
      // faqItems.forEach(i => i.classList.remove("is-open"));
      item.classList.toggle("is-open", !isOpen);
    });
  });


  const backToTopButton = document.getElementById("backToTopBtn");

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }

  window.onscroll = scrollFunction;

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  const link = document.getElementById('anchor-link');

  if (link) {
    link.addEventListener('click', function(event) {
      const targetSection = document.getElementById('section-function');
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      const desktopButton = document.querySelector('.function-nav-btn[data-target="func4"]');
      if (desktopButton) {
        desktopButton.click();
      }

      const mobileButton = document.querySelector('.function-nav-btn-sp[data-target="func-sp-4"]');
      if (mobileButton) {
        mobileButton.click();
      }
    });
  }
});

function toggleIcon(buttonElement) {
  const toggleButton = buttonElement.querySelector('.toggle-button');
  if (toggleButton) {
    toggleButton.classList.toggle('active');
  }
}
