// ===============================
// CẤU HÌNH GOOGLE FORM - CỔNG TOẠI
// ===============================
const GOOGLE_FORM_VIEW_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdK0EWcjnfC3TfkItl8h7hiB7nYwpe2oI3YdKBsSX-lThzu9w/viewform?usp=sharing&ouid=114111156209302716540";
const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSdK0EWcjnfC3TfkItl8h7hiB7nYwpe2oI3YdKBsSX-lThzu9w/formResponse";

const GOOGLE_FORM_ENTRIES = {
  fullName: "entry.42376990",
  phone: "entry.900389994",
  amount: "entry.942649490",
  history: "entry.1114453400",
  note: "entry.998931217"
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

function formatMoney(value) {
  const digits = onlyDigits(value);
  if (!digits) return "";
  return new Intl.NumberFormat("vi-VN").format(Number(digits));
}

function setStatus(type, message) {
  const statusBox = $("#formStatus");
  if (!statusBox) return;

  statusBox.className = `form-status ${type || ""}`.trim();
  statusBox.textContent = message || "";
}

function setFieldError(field, hasError) {
  field?.closest(".field")?.classList.toggle("is-error", Boolean(hasError));
}

function initMobileMenu() {
  const navToggle = $(".nav-toggle");
  const mainNav = $(".main-nav");

  if (!navToggle || !mainNav) return;

  const closeMenu = () => {
    navToggle.classList.remove("is-open");
    mainNav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.classList.toggle("is-open");
    mainNav.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  $$("#main-nav a").forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
}

function initRevealAnimation() {
  const revealEls = $$(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
}


function initFormFormatting() {
  const phoneInput = $("#phone");
  const amountInput = $("#amount");

  phoneInput?.addEventListener("input", () => {
    phoneInput.value = onlyDigits(phoneInput.value).slice(0, 10);
    setFieldError(phoneInput, false);
  });

  amountInput?.addEventListener("input", () => {
    amountInput.value = formatMoney(amountInput.value);
    setFieldError(amountInput, false);
  });

  ["#fullName", "#history", "#note"].forEach((selector) => {
    const input = $(selector);
    input?.addEventListener("input", () => setFieldError(input, false));
    input?.addEventListener("change", () => setFieldError(input, false));
  });
}

function validateForm() {
  const fullNameInput = $("#fullName");
  const phoneInput = $("#phone");
  const amountInput = $("#amount");
  const historyInput = $("#history");

  let isValid = true;

  [fullNameInput, phoneInput, amountInput, historyInput].forEach((field) => setFieldError(field, false));

  if (!fullNameInput?.value.trim()) {
    setFieldError(fullNameInput, true);
    isValid = false;
  }

  const phone = onlyDigits(phoneInput?.value);
  if (!/^0\d{9}$/.test(phone)) {
    setFieldError(phoneInput, true);
    isValid = false;
  }

  if (!onlyDigits(amountInput?.value)) {
    setFieldError(amountInput, true);
    isValid = false;
  }

  if (!historyInput?.value) {
    setFieldError(historyInput, true);
    isValid = false;
  }

  return isValid;
}

function buildGoogleFormData() {
  const fullNameInput = $("#fullName");
  const phoneInput = $("#phone");
  const amountInput = $("#amount");
  const historyInput = $("#history");
  const noteInput = $("#note");

  const formData = new FormData();
  formData.append(GOOGLE_FORM_ENTRIES.fullName, fullNameInput?.value.trim() || "");
  formData.append(GOOGLE_FORM_ENTRIES.phone, onlyDigits(phoneInput?.value));
  formData.append(GOOGLE_FORM_ENTRIES.amount, onlyDigits(amountInput?.value));
  formData.append(GOOGLE_FORM_ENTRIES.history, historyInput?.value || "");
  formData.append(GOOGLE_FORM_ENTRIES.note, noteInput?.value.trim() || "");

  return formData;
}

async function submitToGoogleForm() {
  await fetch(GOOGLE_FORM_ACTION, {
    method: "POST",
    mode: "no-cors",
    body: buildGoogleFormData()
  });
}

function initLeadForm() {
  const leadForm = $("#leadForm");
  if (!leadForm) return;

  leadForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const honeypot = $("#website");
    if (honeypot?.value) return;

    if (!validateForm()) {
      setStatus("error", "Vui lòng kiểm tra lại thông tin bắt buộc.");
      return;
    }

    const submitBtn = leadForm.querySelector('button[type="submit"]');
    const oldText = submitBtn?.textContent || "Gửi đăng ký";

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = "Đang gửi...";
    }

    setStatus("", "");

    try {
      await submitToGoogleForm();
      setStatus("success", "Đã gửi thông tin. Chuyên viên tài chính Công Toại sẽ liên hệ tư vấn sớm nhất.");
      leadForm.reset();
    } catch (error) {
      console.error(error);
      setStatus("error", "Chưa gửi được thông tin. Vui lòng gọi trực tiếp 0836.974.486 hoặc mở form gốc để đăng ký.");
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = oldText;
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initRevealAnimation();
  initFormFormatting();
  initLeadForm();
});
