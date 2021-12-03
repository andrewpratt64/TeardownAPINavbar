// Andrew Pratt 2021

function main()
{
	let bodyContent = document.body.querySelectorAll(":not(header)");
	let contentContainer = document.createElement("div");
	document.body.append(contentContainer);
	contentContainer.append(...bodyContent);
	contentContainer.classList.add("contentContainer");

	let navbar = document.createElement("div");
	document.body.insertBefore(navbar, contentContainer);
	navbar.classList.add("customTdNavbar");

	let headers = document.querySelectorAll("h2");

	for (let header of headers)
	{
		header.id = header.textContent;
		let item = document.createElement("a");
		item.href = '#' + header.id;
		item.text = header.textContent;
		navbar.append(item);
		navbar.append(document.createElement("br"));
	}
}
main();