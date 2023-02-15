const assesmentCheck = (value) => {
	if (value <= 0 || value > 100) {
		return 'invalid';
	}

	if (value >= 80 && value <= 100) {
		return 'A';
	} else if (value >= 65 && value <= 79) {
		return 'B';
	} else if (value >= 50 && value <= 64) {
		return 'C';
	} else if (value >= 35 && value <= 49) {
		return 'D';
	} else if (value >= 1 && value <= 34) {
		return 'E';
	}
};

const buttonCheck = document.querySelector('#check-grade__button');
const buttonCheckName = document.querySelector('#check-name__button');
const container = document.querySelector('#root');

buttonCheck.addEventListener('click', () => {
	const name = prompt('Enter your name');
	const grade = prompt('Enter a grade');

	container.innerHTML = `
  name = ${name} <br>
  nilai = ${grade > 100 ? '' : grade} <br>
  output = ${
		assesmentCheck(grade) === 'invalid'
			? 'Nilai Invalid'
			: `Nilai ${name} mendapatkan nilai ${assesmentCheck(grade)}`
	}
  `;
});

buttonCheckName.addEventListener('click', () => {
	const name = prompt('Enter your name');
	const firstLetter = name.toLowerCase().charAt(0);

	if (firstLetter >= 'a' && firstLetter <= 'd') {
		container.innerHTML = `${name}  in a first group`;
	} else if (firstLetter >= 'e' && firstLetter <= 'i') {
		container.innerHTML = `${name}  in a second group`;
	} else {
		container.innerHTML = `${name}  in a last group`;
	}
});
