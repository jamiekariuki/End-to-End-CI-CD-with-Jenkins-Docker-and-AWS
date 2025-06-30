document.querySelector("h1").addEventListener("click", () => {
	const greetings = [
		"Welcome guys we did it",
		
	];
	const h1 = document.querySelector("h1");
	const randomGreeting =
		greetings[Math.floor(Math.random() * greetings.length)];
	h1.textContent = randomGreeting;
});
