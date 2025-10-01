const slides = document.querySelectorAll(".hero-section .slide");
const prevBtn = document.querySelector(".hero-section .prev");
const nextBtn = document.querySelector(".hero-section .next");
const dotsContainer = document.querySelector(".hero-section .dots");

let currentIndex = 0;
let autoPlay;

slides.forEach((slide, i) => {
  if (slide.classList.contains("active")) {
    currentIndex = i;
  }
});

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  if (i === currentIndex) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentIndex = i;
    showSlide(currentIndex);
    resetAutoPlay();
  });

  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("button");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  const img = slides[index].querySelector("img");
  const title = slides[index].querySelector(".title h1");
  const p = slides[index].querySelector("p");
  const btn = slides[index].querySelector("button");

  [img, title, p, btn].forEach(el => {
    if (!el) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "";
  });
}

function prevSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextBtn.addEventListener("click", () => {
  nextSlide();
  resetAutoPlay();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  resetAutoPlay();
});

function startAutoPlay() {
  autoPlay = setInterval(prevSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlay);
  startAutoPlay();
}

startAutoPlay();

const aboutText = document.querySelector(".about-section .text h2");
const taglines = document.querySelectorAll(".about-section .taglines a");

const observerOptions = {
  threshold: 0.2
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      aboutText.classList.add("visible");
      taglines.forEach((tag, i) => {
        setTimeout(() => {
          tag.classList.add("visible");
        }, i * 200);
      });

    } else {
      aboutText.classList.remove("visible");
      taglines.forEach(tag => tag.classList.remove("visible"));
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(aboutText);




const productText = document.querySelector(".product-section h1");

const productObServerOptions = {
  threshold: 0.2
};

const productObServerCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      productText.classList.add("visible");
    } else {
      productText.classList.remove("visible");
    }
  });
}

const productObServer = new IntersectionObserver(productObServerCallback, productObServerOptions);
productObServer.observe(productText);



const categoryLinks = document.querySelectorAll(".categories a");

const categoryObserverOptions = {
  threshold: 0.2
};

const categoryObserverCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      categoryLinks.forEach((link, i) => {
        setTimeout(() => {
          link.classList.add("visible");
        }, i * 150);
      });
    } else {
      categoryLinks.forEach(link => link.classList.remove("visible"));
    }
  });
}

const categoryObserver = new IntersectionObserver(categoryObserverCallback, categoryObserverOptions);

categoryObserver.observe(categoryLinks[0]);




let countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countdownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

}, 1000);




const testimonialTitle = document.querySelector(".testimonial-section h1");
const testimonialText = document.querySelector(".testimonial-section .title");

const testimonialObServerOptions = {
  threshold: 0.2
};

const testimonialObServerCallback = (entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      testimonialTitle.classList.add("visible");
      testimonialText.classList.add("visible");
    } else {
      testimonialTitle.classList.remove("visible");
      testimonialText.classList.remove("visible");
    }
  });
}

const testimonialObServer = new IntersectionObserver(testimonialObServerCallback, testimonialObServerOptions);
testimonialObServer.observe(testimonialTitle);
testimonialObServer.observe(testimonialText);




window.addEventListener("load", function () {
  let screenHeight = window.innerHeight;

  if (screenHeight > 425) {
    document.querySelector(".second-section").scrollIntoView({
      behavior: "smooth"
    });
  }
});




const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rate');

stars.forEach(star => {
  star.addEventListener('click', () => {
    const value = star.getAttribute('data-value');
    ratingInput.value = value;

    stars.forEach(s => {
      s.classList.toggle('active', s.getAttribute('data-value') <= value);
    });
  });
});