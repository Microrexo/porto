// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Fade-in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section, .hero, .about, .skills, .data-section').forEach(section => {
    observer.observe(section);
});

// Form validation for contact form
function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const layanan = document.getElementById('layanan').value;
    const pesan = document.getElementById('pesan').value.trim();

    if (!nama) {
        alert('Nama harus diisi.');
        return false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert('Email tidak valid.');
        return false;
    }
    if (!layanan) {
        alert('Jenis Layanan harus dipilih.');
        return false;
    }
    if (!pesan) {
        alert('Pesan harus diisi.');
        return false;
    }
    alert('Form berhasil dikirim!');
    return true;
}

// Attach form validation if form exists
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!validateForm()) {
            e.preventDefault();
        }
    });
}

// Table search functionality for portfolio data
function searchTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toUpperCase();
    const table = document.querySelector('.portfolio-table');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        const td = tr[i].getElementsByTagName('td');
        let found = false;
        for (let j = 0; j < td.length; j++) {
            if (td[j] && td[j].textContent.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }
        tr[i].style.display = found ? '' : 'none';
    }
}

// Add search input to data page if exists
const dataSection = document.querySelector('.data-section');
if (dataSection) {
    const searchDiv = document.createElement('div');
    searchDiv.innerHTML = '<input type="text" id="searchInput" placeholder="Cari proyek..." onkeyup="searchTable()">';
    searchDiv.style.marginBottom = '20px';
    dataSection.insertBefore(searchDiv, dataSection.querySelector('h1').nextSibling);
}

// Enhanced hamburger menu toggle with animation
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Charts for Data.HTML
    if (document.getElementById('yearChart')) {
        const yearCtx = document.getElementById('yearChart').getContext('2d');
        const yearChart = new Chart(yearCtx, {
            type: 'bar',
            data: {
                labels: ['2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Jumlah Proyek',
                    data: [10, 15, 15, 16, 16],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF'
                    ],
                    borderColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                animation: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0,0,0,0.1)'
                        }
                    }
                },
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    }
                }
            }
        });
    }

    if (document.getElementById('yearChart2')) {
        const yearCtx2 = document.getElementById('yearChart2').getContext('2d');
        const yearChart2 = new Chart(yearCtx2, {
            type: 'pie',
            data: {
                labels: ['Web Development', 'Mobile App Development', 'Data Analysis'],
                datasets: [{
                    label: 'Jenis Proyek',
                    data: [60, 10, 5],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    borderColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                animation: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff'
                    }
                }
            }
        });
    }

    if (document.getElementById('techChart')) {
        const techCtx = document.getElementById('techChart').getContext('2d');
        const techChart = new Chart(techCtx, {
            type: 'pie',
            data: {
                labels: ['HTML/CSS/JS', 'React', 'Python', 'PHP', 'Node.js', 'MongoDB', 'PostgreSQL', 'MySQL', 'Socket.io', 'Express.js', 'Django'],
                datasets: [{
                    label: 'Penggunaan Teknologi',
                    data: [25, 20, 15, 10, 8, 6, 5, 4, 3, 2, 1],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#C7C7C7',
                        '#537BFF',
                        '#FF63FF',
                        '#63FF84',
                        '#FF8463'
                    ],
                    borderColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#4BC0C0',
                        '#9966FF',
                        '#FF9F40',
                        '#C7C7C7',
                        '#537BFF',
                        '#FF63FF',
                        '#63FF84',
                        '#FF8463'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                animation: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 14,
                                weight: 'bold'
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0,0,0,0.8)',
                        titleColor: '#fff',
                        bodyColor: '#fff'
                    }
                }
            }
        });
    }
});
