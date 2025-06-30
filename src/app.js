document.querySelector("h1").addEventListener("click", () => {
	const greetings = [
		"Welcome to the DevOps end to end project! resatrt update",
		"Automate everything with jenkins🚀",
		"CI/CD makes life easier!",
		"Docker + Jenkins = ❤️",
		"Enjoy your DevOps journey!",
	];
	const h1 = document.querySelector("h1");
	const randomGreeting =
		greetings[Math.floor(Math.random() * greetings.length)];
	h1.textContent = randomGreeting;
});
