const downloadButton = document.getElementById("download");

document.querySelectorAll('button.group').forEach(buttonGroup => buttonGroup.addEventListener('click', function () {
	if (buttonGroup.classList.contains('selected'))
		buttonGroup.classList.remove('selected')
	else {
		Array.from(buttonGroup.parentNode.children).filter(x => x !== buttonGroup).forEach(sib => sib.classList.remove('selected'));
		buttonGroup.classList.add('selected')
	}

	if (Array.from(document.getElementById('region').children).some(elem => elem.classList.contains('selected'))
	 && Array.from(document.getElementById('console').children).some(elem => elem.classList.contains('selected'))
	 && Array.from(document.getElementById('firmware').children).some(elem => elem.classList.contains('selected')))
		downloadButton.classList.add("active")
	else
		downloadButton.classList.remove("active")
}))

downloadButton.addEventListener('click', function () {
	if (!downloadButton.classList.contains('active'))
		return;

	const region = document.getElementById('region').getElementsByClassName('selected')[0].getAttribute('id');
	const system = document.getElementById('console').getElementsByClassName('selected')[0].getAttribute('id');
	const firmver = document.getElementById('firmware').getElementsByClassName('selected')[0].getAttribute('id');

	window.location.href = "https://github.com/nedwill/soundhax/raw/master/" + `soundhax-${region}-${system + (system !== 'n3ds' ? '-' + firmver : '')}.m4a`;
})
