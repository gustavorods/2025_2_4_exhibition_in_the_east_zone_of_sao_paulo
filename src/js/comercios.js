// Dados dos slides para o carrossel
        const carouselData = {
            carousel1: [
                { src: '../img/comercio/fachada.png', alt: 'Foto 1', caption: '"Fachada em Sobrevivência " - Vinicius Bonfim,11/06/2025 - São Miguel ' },
                { src: '../img/comercio/devocao.png', alt: 'Foto 2', caption: '"Devoção à Mostra" - Vinicius Bonfim,11/06/2025 - São Miguel' },
                { src: '../img/comercio/esquina.png', alt: 'Foto 3', caption: '"Esquina em Espera" - Vinicius Bonfim,11/06/2025 - São Miguel ' },
                { src: '../img/comercio/central.png', alt: 'Foto 4', caption: '"Central da Rotina" - Murillo Castro, 14/06/2025 – Cohab I ' },
                { src: '../img/comercio/oferta.png', alt: 'Foto 5', caption: '"Oferta Maluca, Realidade Crua" - Murillo Castro, 14/06/2025 – Cohab I ' },
                { src: '../img/comercio/balas.png', alt: 'Foto 6', caption: '"Entre Balas e Grades" - Murillo Castro, 14/06/2025 – Cohab I' },
                { src: '../img/comercio/cores.png', alt: 'Foto 7', caption: '"Cores à Porta " - Bernardo Vieira, 12/06/2025 – Jardim Helena ' },
                { src: '../img/comercio/armazem.png', alt: 'Foto 8', caption: '"O Armazém da Saúde " - Bernardo Vieira, 12/06/2025 – Jardim Helena ' },
                { src: '../img/comercio/sabor.png', alt: 'Foto 9', caption: '"O Sabor na Esquina " - Bernardo Vieira, 12/06/2025 – Jardim Helena ' },
                { src: '../img/comercio/mercadinho2.png', alt: 'Foto 10', caption: '"Mercadinho da Esquina" - Gabriel Anjos de Almeida, 10/06/2025 – Jardim dos Ipês ' },
            ]
        };

        // Classe Carousel aprimorada para renderizar slides dinamicamente
        class Carousel {
            constructor(carouselId, slidesData) {
                this.carousel = document.getElementById(carouselId);
                this.container = this.carousel.querySelector('.carousel-container');
                this.indicatorsContainer = this.carousel.querySelector('.carousel-indicators');
                this.prevBtn = this.carousel.querySelector(`#prev${carouselId.slice(-1)}`);
                this.nextBtn = this.carousel.querySelector(`#next${carouselId.slice(-1)}`);
                this.slidesData = slidesData;
                this.currentSlide = 0;
                this.renderSlides();
                this.init();
            }
            
            renderSlides() {
                this.slidesData.forEach((slide, index) => {
                    const slideElement = document.createElement('div');
                    slideElement.className = 'carousel-slide';
                    slideElement.innerHTML = `
                        <img src="${slide.src}" alt="${slide.alt}" data-src="${slide.src}">
                        <p class="caption">${slide.caption}</p>
                    `;
                    this.container.appendChild(slideElement);
                    
                    const indicator = document.createElement('div');
                    indicator.className = 'indicator';
                    indicator.addEventListener('click', () => this.goToSlide(index));
                    this.indicatorsContainer.appendChild(indicator);
                });
                this.slides = this.carousel.querySelectorAll('.carousel-slide');
                                this.slides = this.carousel.querySelectorAll('.carousel-slide');
                this.indicators = this.carousel.querySelectorAll('.indicator');
                
                // Adicionar event listeners para abrir modal nas imagens
                this.slides.forEach(slide => {
                    const img = slide.querySelector('img');
                    img.addEventListener('click', () => openModal(img.src));
                });
            }
            
            init() {
                this.showSlide(this.currentSlide);
                this.prevBtn.addEventListener('click', () => this.prevSlide());
                this.nextBtn.addEventListener('click', () => this.nextSlide());
                
                // Auto-play opcional (desabilitado por padrão)
                // setInterval(() => this.nextSlide(), 5000);
            }
            
            showSlide(index) {
                this.container.style.transform = `translateX(-${index * 100}%)`;
                this.indicators.forEach((ind, i) => {
                    ind.classList.toggle('active', i === index);
                });
            }
            
            nextSlide() {
                this.currentSlide = (this.currentSlide + 1) % this.slides.length;
                this.showSlide(this.currentSlide);
            }
            
            prevSlide() {
                this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
                this.showSlide(this.currentSlide);
            }
            
            goToSlide(index) {
                this.currentSlide = index;
                this.showSlide(this.currentSlide);
            }
        }
        
        // Funções do Modal
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const closeBtn = document.querySelector('.close');

        function openModal(src) {
            modal.style.display = 'flex';
            modalImg.src = src;
        }

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Inicializar carrossel
        new Carousel('carousel1', carouselData.carousel1);
        
        // Toggle Hamburger Menu
        const hamburger = document.getElementById('hamburger');
        const menuOverlay = document.getElementById('menuOverlay');
        const setoresMobile = document.getElementById('setoresMobile');
        const submenuMobile = document.getElementById('submenuMobile');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });
        
        setoresMobile.addEventListener('click', () => {
            submenuMobile.classList.toggle('active');
        });
        
        // Fechar menu ao clicar em link
        menuOverlay.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                hamburger.classList.remove('active');
                menuOverlay.classList.remove('active');
                submenuMobile.classList.remove('active');
            }
        });