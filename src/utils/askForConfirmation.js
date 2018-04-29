import swal from 'sweetalert';

const askForConfirmation = () =>
	swal({
		title: 'Are you sure?',
		text: 'Seriously though, no joke!',
		icon: 'warning',
		buttons: true,
		dangerMode: true
	});

export default askForConfirmation;
