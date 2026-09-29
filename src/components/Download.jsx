function Download() {
	function handleDownload() {
		window.print();
	}

	return (
		<div className="download">
			<button type="button" onClick={handleDownload}>
				⬇️ Descargar CV en PDF
			</button>
		</div>
	);
}

export default Download;
