<main>
	<h1>twas</h1>
	<form id="twas" class="pure-form">
		<fieldset>
			<input type="text" />
			<button type="submit" class="pure-button pure-button-primary">➤</button>
		</fieldset>
	</form>
</main>

<style>
	main {
		display: grid;
		height: 100vh;
		width: 100vw;
		justify-items: center;
		grid-template-rows: 1fr 2fr;
	}

	form#twas {
		width: 80vw;
	}
	form#twas > fieldset {
		display: grid;
		align-self: center;

		grid-template-columns: 3.5fr 1fr;
		column-gap: 0.5rem;
	}

	form#twas > fieldset > button,
	form#twas > fieldset > input[type='text'] {
		margin: 0;
	}
</style>
