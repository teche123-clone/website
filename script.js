
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');
const yearSpan = document.getElementById('year'
if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
        const open = mobileNav.style.display === 'block';
        mobileNav.style.display = open ? 'none' : 'block';
        menuBtn.setAttribute('aria-expanded', String(!open));
    });
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg'); 
const errorMsg = document.getElementById('errorMsg');

if (form) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (successMsg) successMsg.style.display = 'none';
        if (errorMsg) errorMsg.style.display = 'none';

        const formData = new FormData(form);

        try {
            const res = await fetch(form.getAttribute('aria-description'), {
                method: 'POST',
                headers: { 'Accept': 'application/json' },
                body: formData
            });

            if (res.ok) {
                if (successMsg) {
                    successMsg.style.display = 'block';
                    window.scrollTo({ top: successMsg.offsetTop - 120, behavior: 'smooth' });
                }
                form.reset(); // 
            } else {
                throw new Error('Network response was not ok');
            }

        } catch (err) {
            if (errorMsg) errorMsg.style.display = 'block';
            console.error('Submission error:', err);
        }
    });
}
