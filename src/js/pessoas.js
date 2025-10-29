// Dados dos slides para o carrossel
        const carouselData = {
            carousel1: [
                { src: '../img/pessoas/catedral.png', alt: 'Foto 1', caption: '"Catedral da Sé" - Gabrielly Nascimento, 10/06/2025, Catedral da sé' },
                { src: '../img/pessoas/homens_no_bar.png', alt: 'Foto 2', caption: '"Homens no bar" - Homens conversando, bebendo e cantando no bar.' },
                { src: '../img/pessoas/centro.png', alt: 'Foto 3', caption: '"Centro de são paulo" - Maria Monteiro, 23/02/2025, Anhangabaú' },
                { src: '../img/pessoas/adoracao.png', alt: 'Foto 4', caption: '"Adoração" - Ester Rodrigues, 05/06/2025, Itaquera' },
                { src: '../img/pessoas/quermesse.png', alt: 'Foto 5', caption: '"Quermesse" - Jovana Oliveira, 14/06/2025, PRAÇA SÍLVIO ROMERO tatuapé' },
                { src: '../img/pessoas/espetaculo.png', alt: 'Foto 6', caption: '"Espetáculo de dança" - jovana oliveira, 17/01/2025, Anhangabaú ' },
                { src: '../img/pessoas/parque.png', alt: 'Foto 7', caption: '"Parque de diversões" - karinne angelo, 12/01/2025, shopping aricanduva' },
                { src: '../img/pessoas/escada.png', alt: 'Foto 8', caption: '"Escada Rolante" - gabrielly nascimento, 14/06/2025, metrô artur alvim' },
                { src: '../img/pessoas/feira.png', alt: 'Foto 9', caption: '"Feira" - maria monteiro, 15/06/2025, jardim helena' },
                { src: '../img/pessoas/mercadinho.png', alt: 'Foto 10', caption: '"Mercadinho" - leticia guanaes, 15/06/2025, jardim helena' },
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