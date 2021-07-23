const elts = {
	menuBtn: document.querySelector('.menu-btn'),
}

//* Menu Button
elts.menuBtn.addEventListener('click', () => {
	elts.menuBtn.classList.toggle('active')
	document.querySelector('.card').classList.toggle('stacked')
	document.querySelector('.stack').classList.toggle('stacked')
})

//* Confetti
var confettiSettings = {
	target: 'confetti',
	max: 60,
	size: 1.75,
	clock: 7,
	props: ['circle'],
}
var confetti = new ConfettiGenerator(confettiSettings)
confetti.render()

//* Copyright year
document.getElementById('year').innerText = new Date().getFullYear()
