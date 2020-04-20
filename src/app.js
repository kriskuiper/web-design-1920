import { elements } from './lib/constants';
import transcript from './lib/transcript';
import { showMessage } from './lib/helpers';

elements.INTRO_FORM.addEventListener('submit', event => {
	event.preventDefault();

	elements.INTRO_FORM.classList.add('is-closed');
})

elements.INTRO_FORM.addEventListener('transitionend', () => {
	showMessage(elements.MESSAGE_CONTAINER, transcript, 0);
})
