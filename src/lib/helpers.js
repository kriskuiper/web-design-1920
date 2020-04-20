const WORD_TIMEOUT = 200;

export function createMessageBlock(alignment, content) {
	const $messageBlock = document.createElement("p");

  const words = content.split(' ');

  $messageBlock.classList.add("message-block");
  $messageBlock.classList.add(`message-block--${alignment}`);

  for (const wordIndex in words) {
    const $wordBlock = document.createElement("span");

    $wordBlock.classList.add("word-block");
    $wordBlock.textContent = words[wordIndex];

    $messageBlock.appendChild($wordBlock);

    setTimeout(() => {
      $wordBlock.classList.add("is-visible");
    }, WORD_TIMEOUT * wordIndex);
	}

	return $messageBlock;
}

export function showMessage($container, transcript, index, state) {
	const { content, alignment } = transcript[index];
	const words = content.split(' ');
	const timeout = words.length * WORD_TIMEOUT;

	const $messageBlock = createMessageBlock(alignment, content);
	$messageBlock.classList.add('is-visible');
	$container.appendChild($messageBlock);

	$messageBlock.scrollIntoView();

	index++;

	if (index !== transcript.length && state !== 'paused') {
		return setTimeout(() => {
			showMessage($container, transcript, index);
		}, timeout + 500);
	}
}

