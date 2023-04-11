
var slides = document.querySelectorAll('.slide');
for (var i = 0; i < slides.length; i++) {
	slides[i].addEventListener('click', function() {
		document.querySelector('.slide-ativo').classList.remove('ativo');
		this.classList.add('ativo');
	});
}
