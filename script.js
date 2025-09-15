const projectsData = [
    {
        id: 1,
        title: "Современная квартира",
        category: "apartment",
        area: "85 м²",
        time: "3 месяца",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
        description: "Современная квартира в стиле минимализм с использованием натуральных материалов. Проект включал в себя полную перепланировку, разработку дизайна интерьера и авторский надзор."
    },
    {
        id: 2,
        title: "Загородный дом",
        category: "house",
        area: "150 м²",
        time: "6 месяцев",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description: "Проект загородного дома в современном стиле. Особое внимание уделялось созданию уютной атмосферы и функциональному зонированию пространства. Большие панорамные окна открывают прекрасный вид на природу."
    },
    {
        id: 3,
        title: "Офисное пространство",
        category: "commercial",
        area: "200 м²",
        time: "4 месяца",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
        description: "Дизайн офисного пространства для IT-компании. Мы создали современное и функциональное рабочее environment с зонами для collaboration и concentration. Яркие акценты и комфортная мебель способствуют продуктивной работе."
    },
    {
        id: 4,
        title: "Лофт квартира",
        category: "apartment",
        area: "65 м²",
        time: "2.5 месяца",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description: "Стильная лофт-квартира с индустриальными элементами. Открытое пространство, кирпичные стены, металлические конструкции и современная мебель создают уникальную атмосферу urban living."
    },
    {
        id: 5,
        title: "Декорирование гостиной",
        category: "decor",
        area: "30 м²",
        time: "3 недели",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1758&q=80",
        description: "Декорирование гостиной в скандинавском стиле. Подбор мебели, текстиля, освещения и аксессуаров для создания уютной и гармоничной атмосферы. Светлые тона, натуральные материалы и функциональность — ключевые элементы этого проекта."
    },
    {
        id: 6,
        title: "Семейный дом",
        category: "house",
        area: "180 м²",
        time: "8 месяцев",
        price: "По запросу",
        image: "https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        description: "Проект семейного дома с учетом потребностей всех членов семьи. Просторная гостиная, функциональная кухня, уютные спальни и детская комната. Отдельное внимание уделено системам хранения и организации пространства."
    }
];

const testimonialsData = [
    {
        text: "Обратились в BM Studio для разработки дизайна нашей новой квартиры. Результат превзошел все ожидания! Учли все наши пожелания, предложили интересные решения. Теперь живем в красивом и функциональном пространстве.",
        author: "Мария и Алексей Ивановы",
        role: "Квартира 85 кв.м."
    },
    {
        text: "Заказывали дизайн загородного дома в BM Studio. Очень профессиональный подход, внимательное отношение к деталям. Авторский надзор обеспечил точное соответствие проекта реализации. Рекомендуем!",
        author: "Сергей Петров",
        role: "Загородный дом 150 кв.м."
    },
    {
        text: "Нужно было создать уникальный интерьер для нашего ресторана. Студия предложила несколько интересных концепций, помогла с выбором материалов и контролировала реализацию. Гости отмечают особую атмосферу заведения.",
        author: "Ольга Семенова",
        role: "Ресторан 'La Piazza'"
    },
    {
        text: "BM Studio сделала невероятный дизайн для нашего офиса. Теперь сотрудники с удовольствием приходят на работу, а клиенты отмечают стильное и современное пространство. Благодарим за креативный подход!",
        author: "Дмитрий Козлов",
        role: "IT-компания 'ТехноСофт'"
    },
    {
        text: "Заказала дизайн небольшой квартиры-студии и получила именно то, что хотела! Пространство стало визуально больше, появилось много функциональных зон. Очень довольна результатом!",
        author: "Анна Смирнова",
        role: "Квартира-студия 40 кв.м."
    }
];

function renderProjects() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    projectsData.forEach(project => {
        let categoryText = '';
        switch(project.category) {
            case 'apartment':
                categoryText = 'Квартира';
                break;
            case 'house':
                categoryText = 'Дом';
                break;
            case 'commercial':
                categoryText = 'Коммерческие';
                break;
            case 'decor':
                categoryText = 'Декорирование';
                break;
            default:
                categoryText = project.category;
        }
        
        const projectElement = document.createElement('div');
        projectElement.className = 'portfolio-item';
        projectElement.setAttribute('data-category', project.category);
        projectElement.setAttribute('data-project', project.id);
        projectElement.setAttribute('tabindex', '0');
        projectElement.innerHTML = `
            <img src="${project.image}" alt="${project.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-category">${categoryText}</p>
                <button class="btn btn-outline view-project" data-project="${project.id}">Подробнее</button>
            </div>
        `;
        
        portfolioGrid.appendChild(projectElement);
    });
    
    // Добавляем обработчики событий для карточек проектов
    attachProjectViewHandlers();
}
// Функция для привязки обработчиков к карточкам проектов
function attachProjectViewHandlers() {
    const projectItems = document.querySelectorAll('.portfolio-item');
    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.modal-close');
    
    // Обработчик для клика по всей карточке
    projectItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Предотвращаем срабатывание при клике на саму кнопку
            if (e.target.classList.contains('view-project')) return;
            
            const projectId = parseInt(this.getAttribute('data-project'));
            openProjectModal(projectId);
        });
        
        // Для сенсорных устройств добавляем обработчик касания
        item.addEventListener('touchstart', function() {
            this.classList.add('touch-active');
        }, {passive: true});
        
        item.addEventListener('touchend', function() {
            this.classList.remove('touch-active');
        }, {passive: true});
        
        // Для клавиатурной навигации
        item.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const projectId = parseInt(this.getAttribute('data-project'));
                openProjectModal(projectId);
            }
        });
    });
    
    // Обработчик для кнопки "Подробнее" (на всякий случай)
    document.querySelectorAll('.view-project').forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Останавливаем всплытие события
            const projectId = parseInt(this.getAttribute('data-project'));
            openProjectModal(projectId);
        });
    });
    
    // Функция открытия модального окна
    function openProjectModal(projectId) {
        const project = projectsData.find(p => p.id === projectId);
        
        if (project) {
            // Определяем текстовое название категории для отображения
            let categoryText = '';
            switch(project.category) {
                case 'apartment':
                    categoryText = 'Квартира';
                    break;
                case 'house':
                    categoryText = 'Дом';
                    break;
                case 'commercial':
                    categoryText = 'Коммерческие';
                    break;
                case 'decor':
                    categoryText = 'Декорирование';
                    break;
                default:
                    categoryText = project.category;
            }
            
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalCategory').textContent = categoryText;
            document.getElementById('modalArea').textContent = project.area;
            document.getElementById('modalTime').textContent = project.time;
            document.getElementById('modalPrice').textContent = project.price;
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalImage').alt = project.title;
            document.getElementById('modalDescription').textContent = project.description;
            
            modal.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Закрытие модального окна
    closeModal.addEventListener('click', function() {
        modal.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
    
    // Закрытие модального окна при клике вне его
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Закрытие модального окна по клавише Esc
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            modal.classList.remove('open');
            document.body.style.overflow = 'auto';
        }
    });
}
// Функция для инициализации слайдера отзывов
function initTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-slider');
    const dotsContainer = document.querySelector('.testimonial-dots');
    if (!testimonialsContainer || !dotsContainer) return;
    
    let currentTestimonial = 0;
    
    // Очищаем контейнер отзывов
    const testimonialElements = testimonialsContainer.querySelectorAll('.testimonial');
    testimonialElements.forEach(el => el.remove());
    
    // Создаем отзывы на основе данных
    testimonialsData.forEach((testimonial, index) => {
        const testimonialEl = document.createElement('div');
        testimonialEl.className = 'testimonial';
        testimonialEl.innerHTML = `
            <p class="testimonial-text">${testimonial.text}</p>
            <h4 class="testimonial-author">${testimonial.author}</h4>
            <p class="testimonial-role">${testimonial.role}</p>
        `;
        
        testimonialsContainer.insertBefore(testimonialEl, dotsContainer);
        
        // Создаем точки для навигации
        const dot = document.createElement('div');
        dot.className = 'testimonial-dot';
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    
    // Показываем первый отзыв
    showTestimonial(0);
    
    // Обработчики для кнопок навигации
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            currentTestimonial--;
            if (currentTestimonial < 0) {
                currentTestimonial = testimonialsData.length - 1;
            }
            showTestimonial(currentTestimonial);
        });
        
        nextBtn.addEventListener('click', () => {
            currentTestimonial++;
            if (currentTestimonial >= testimonialsData.length) {
                currentTestimonial = 0;
            }
            showTestimonial(currentTestimonial);
        });
    }
}

// Функция для показа определенного отзыва
function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.testimonial-dot');
    
    // Скрываем все отзывы
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    // Убираем активный класс со всех точек
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Показываем выбранный отзыв
    if (testimonials[index]) testimonials[index].classList.add('active');
    if (dots[index]) dots[index].classList.add('active');
}
document.addEventListener('DOMContentLoaded', function() {
    // Рендерим проекты при загрузке страницы
    renderProjects();
    
    // Инициализация слайдера отзывов
    initTestimonials();
    
    // Мобильное меню
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('nav');
    
    if (navToggle && nav) {
        navToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            
            if (nav.classList.contains('open')) {
                navToggle.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                navToggle.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    }
    
    // Фиксированная шапка при прокрутке
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Анимация появления секций при скролле
        document.querySelectorAll('.section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY > sectionTop - window.innerHeight + sectionHeight / 2) {
                section.classList.add('visible');
            }
        });
    });
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Закрываем мобильное меню после клика
                if (nav && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                    navToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    });
    
    // Фильтрация портфолио с анимацией
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    // Показываем элемент с анимацией
                    setTimeout(() => {
                        item.classList.remove('hidden');
                    }, 10);
                } else {
                    // Скрываем элемент с анимацией
                    item.classList.add('hidden');
                }
            });
        });
    });
    
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const messageTextarea = contactForm.querySelector('textarea');

            if (!messageTextarea.value.trim()) {
                return;
            }

            const message = encodeURIComponent(messageTextarea.value);
            const phoneNumber = '79123456789';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
            window.location.href = whatsappURL;
        });
    }

    // Переключение темы
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector('i');
        const favicon = document.getElementById('favicon');
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
                if (favicon) favicon.href = 'resources/images/logo/logo_dark.png';
                localStorage.setItem('theme', 'dark');
            } else {
                themeIcon.classList.remove('fa-sun');
                themeIcon.classList.add('fa-moon');
                if (favicon) favicon.href = 'resources/images/logo/logo_light.png';
                localStorage.setItem('theme', 'light');
            }
        });
        // Проверяем сохраненную тему при загрузке страницы
        if (localStorage.getItem('theme') === 'dark') {
            document.body.classList.add('dark-mode');
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            if (favicon) favicon.href = 'resources/images/logo/logo_dark.png';
        } else {
            // Устанавливаем светлую иконку, если тема не сохранена или светлая
            if (favicon) favicon.href = 'resources/images/logo/logo_light.png';
        }
    }
    
    // Анимация появления секций при загрузке
    document.querySelectorAll('.section').forEach((section, index) => {
        setTimeout(() => {
            if (window.scrollY > section.offsetTop - window.innerHeight + 100) {
                section.classList.add('visible');
            }
        }, index * 100);
    });
    
    // Анимация для кнопки скролла вниз
    const scrollDownBtn = document.querySelector('.scroll-down');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                window.scrollTo({
                    top: aboutSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    }
});