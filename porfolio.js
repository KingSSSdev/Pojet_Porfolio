
    //==Chargement de mon text dans le header== //

    const texte = "Hello, I am Sibli, an engineering student at the Félix Houphouët-Boigny National Polytechnic Institute (INPHB). I am currently pursuing my studies in information and communication science and technology (STIC). Passionate about new technologies, data science, artificial intelligence (AI), and web development, I put my skills into practice through various innovative projects. In my portfolio, you will discover my achievements and the extent of my skills in these fascinating fields. Welcome!";
    const typedText = document.getElementById("typedText");

    let index = 0;
    
    window.addEventListener("load", typeText =()=>{
        if (index < texte.length){
            typedText.textContent += texte[index];
            index++;

            setTimeout(typeText,30);
        }
    })

//=== Burger menu ===//
        const burger = document.getElementById("burger");
        const menu = document.getElementById("menu");

        burger.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
        });

        //== Animation au scroll ==//
    window.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".scroll-left, .scroll-right, .scroll-up");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const position = el.getBoundingClientRect();

        if (position.top < windowHeight - 100) {
            el.classList.add("active");
        } else {
            el.classList.remove("active");
        }
    });
});
//==DOwnload bar pour les certificats ==//
let progress = 0;
const progressCircle = document.querySelector('.circle-progress');
const percentageText = document.querySelector('.percentage');
const statusText = document.querySelector('.status');

percentageText.textContent = "0%";

const interval = setInterval(() => {
    progress = (progress + 1) % 100;

    const offset = 339.292 - (339.292 * progress) / 100;
    progressCircle.style.strokeDashoffset = offset;

    statusText.textContent = 'Downloading...';
}, 60);

//== action des boutons de la section portfolio ==//
function changerContenu(section, element) {
    const projectsGrid = document.querySelector('.projects-grid');
    const certificateGrid = document.getElementById('certificates');
    const techstackGrid = document.getElementById('techstack');
    const seeMore = document.getElementsByClassName('SeeMore')

    projectsGrid.style.display = 'none';
    certificateGrid.style.display = 'none';
    techstackGrid.style.display = 'none';

    if (section === 'pro') {
        projectsGrid.style.display = 'grid';
    } else if (section === 'certi') {
        certificateGrid.style.display = 'flex';
    } else if (section === 'tech') {
        techstackGrid.style.display = 'grid';
    }

    const miniCadres = document.querySelectorAll('.mini-Cadre');
    miniCadres.forEach(cadre => {
        cadre.style.backgroundColor = 'rgba(0, 30, 62, 0.5)';
    });
    element.style.backgroundColor = '#cc325c';
}
//Reception du message 
(function(){
    emailjs.init("8WauUhvS-r5p8qTnh");
  })();

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_365fkfi', 'template_06r544h', '#contact-form')
      .then(() => {
        alert("Message envoyé !");
        document.getElementById("contact-form").reset(); 
    })
      .catch(err => alert("Erreur : " + err));
  }

    // About Me: collapse on mobile with Read more / Read less
    (function(){
        const aboutText = document.getElementById('about-text');
        const aboutToggle = document.getElementById('about-toggle');

        function updateAboutButton(){
            if(!aboutText || !aboutToggle) return;
            if(window.innerWidth <= 768){
                aboutToggle.style.display = 'inline-flex';
                if(!aboutText.classList.contains('expanded')) aboutText.classList.add('limited');
                const expanded = aboutText.classList.contains('expanded');
                aboutToggle.textContent = expanded ? '▴' : '▾';
                aboutToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            } else {
                aboutToggle.style.display = 'none';
                aboutText.classList.remove('limited','expanded');
            }
        }

        if(aboutToggle){
            aboutToggle.addEventListener('click', function(){
                if(!aboutText) return;
                const expanded = aboutText.classList.toggle('expanded');
                if(expanded){
                    aboutText.classList.remove('limited');
                    aboutToggle.textContent = '▴';
                    aboutToggle.setAttribute('aria-expanded','true');
                } else {
                    aboutText.classList.add('limited');
                    aboutToggle.textContent = '▾';
                    aboutToggle.setAttribute('aria-expanded','false');
                    // scroll back to paragraph top on collapse
                    const rect = aboutText.getBoundingClientRect();
                    window.scrollTo({ top: window.pageYOffset + rect.top - 80, behavior: 'smooth' });
                }
            });
        }

        window.addEventListener('resize', updateAboutButton);
        window.addEventListener('load', updateAboutButton);
        // initial call
        updateAboutButton();
    })();