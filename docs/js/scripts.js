document.querySelectorAll('button.group').forEach(buttonGroup => addEventListener('click', function () {
	if (this.classList.has('selected'))
		this.classList.remove('selected')
	else {
		Array.from(this.parentNode.children).filter(x => x !== this).forEach(sib => sib.classList.remove('selected'));
		this.classList.add('selected')
	}

	if (Array.from(document.getElementsByClassName('region').children).some(elem => elem.classList.has('selected'))
	 && Array.from(document.getElementsByClassName('console').children).some(elem => elem.classList.has('selected'))
	 && Array.from(document.getElementsByClassName('firmware').children).some(elem => elem.classList.has('selected')))
		document.getElementById("download").classList.add("active")
	else
		document.getElementById("download").classList.remove("active")
}))

document.querySelector('download').addEventListener('click', function () {
	if (!this.classList.has('active'))
		return;

	const region = document.getElementsByClassName('region')[0].getElementsByClassName('selected')[0].getAttribute('id');
	const system = document.getElementsByClassName('console')[0].getElementsByClassName('selected')[0].getAttribute('id');
	const firmver = document.getElementsByClassName('firmware')[0].getElementsByClassName('selected')[0].getAttribute('id');

 	window.location.href = "https://github.com/nedwill/soundhax/raw/master/" + `soundhax-${region}-${system + (system == 'n3ds' ? '-' + firmver : '')}.m4a`;
})
