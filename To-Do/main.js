window.addEventListener('load', () => {
	const form = document.querySelector("#task-form");
	const input = document.querySelector("#task-input");
	const description = document.querySelector("#task-desc");
	const list_element = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = document.createTextNode(input.value);
		const desc = document.createTextNode(description.value);

		const task_element = document.createElement('div');
		task_element.classList.add('task');

		const task_content_element = document.createElement('div');
		task_content_element.classList.add('content');

		task_element.appendChild(task_content_element);

		const task_input_element = document.createElement('p');
		const desc_input_element = document.createElement('p');

		task_input_element.appendChild(task);
		desc_input_element.appendChild(desc);

		task_content_element.appendChild(task_input_element);
		task_content_element.appendChild(desc_input_element);

		const task_delete_element = document.createElement('button');
		task_delete_element.classList.add('delete');
		task_delete_element.innerText = 'X';

		task_content_element.appendChild(task_delete_element);

		list_element.appendChild(task_element);

		input.value = '';
		description.value = '';

		task_delete_element.addEventListener('click', (e) => {
			list_element.removeChild(task_element);
		});
	});
});