const elts = {
	menuBtn: document.querySelector('.menu-btn'),
	quote: document.getElementById('quote'),
	card: document.querySelector('.card'),
	stack: document.querySelector('.stack'),
	year: document.getElementById('year'),
}

const quotes = [
	'Proof by analogy is fraud.',
	'Deleted code is debugged code.',
	'You must run before you can walk.',
	'Time and JavaScript wait for none.',
	'Showing off is the fool’s idea of glory.',
	'It’s harder to read code than to write it.',
	'If opportunity doesn’t knock, build a door.',
	'Good design adds value faster than it adds cost.',
	'Another man’s success should never make you mad.',
	'One’s crappy software is another’s full-time job.',
]

//* Confetti
var confettiSettings = {
	target: 'confetti',
	max: 40,
	size: 1.5,
	clock: 5,
	props: ['circle'],
}
var confetti = new ConfettiGenerator(confettiSettings)

//* Menu Button
elts.menuBtn.addEventListener('click', () => {
	elts.menuBtn.classList.toggle('active')
	elts.card.classList.toggle('stacked')
	elts.stack.classList.toggle('stacked')
	if (elts.card.classList.contains('stacked')) {
		// Confetti
		confetti.render()
		// Get random quote
		elts.quote.innerText = quotes[~~(quotes.length * Math.random())]
	} else setTimeout(() => confetti.clear(), 350)
})

//* Copyright year
elts.year.innerText = new Date().getFullYear()
