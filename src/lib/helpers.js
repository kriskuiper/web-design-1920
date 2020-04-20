export function createMessageBlock(alignment, content) {
	const $messageBlock = document.createElement("p");

  const words = content.split(" ");

  $messageBlock.classList.add("message-block");
  $messageBlock.classList.add(`message-block--${alignment}`);

  for (const wordIndex in words) {
    const $wordBlock = document.createElement("span");

    $wordBlock.classList.add("word-block");
    $wordBlock.textContent = words[wordIndex];

    $messageBlock.appendChild($wordBlock);

    setTimeout(() => {
      $wordBlock.classList.add("is-visible");
    }, 300 * wordIndex);
	}

	return $messageBlock;
}

export function showMessages($container, messages) {
	for (const messageIndex in messages) {
    const { alignment, content } = messages[messageIndex];

    setTimeout(() => {
			const $messageBlock = createMessageBlock(alignment, content);

			$container.appendChild($messageBlock);
			$messageBlock.classList.add("is-visible");
			$messageBlock.scrollIntoView();

    }, 2000 * messageIndex);
  }
}

