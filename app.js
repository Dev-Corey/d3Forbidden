// Observer JS

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Nav JS

const navBar = document.querySelector('.navBar');
const navToggle = document.querySelector('.navToggle');

navToggle.addEventListener('click', () => {
	navToggle.classList.toggle('active');
	navBar.classList.toggle('active');
});

document.querySelectorAll('.navLink').forEach((n) =>
	n.addEventListener('click', () => {
		navToggle.classList.remove('active');
		navBar.classList.remove('active');
	})
);

document.onclick = function (e) {
	if (!navBar.contains(e.target) && !navToggle.contains(e.target)) {
		navToggle.classList.remove('active');
		navBar.classList.remove('active');
	}
};
