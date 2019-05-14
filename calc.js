function btnClick(){
	const a = parseFloat(document.getElementById("fst").value);
	const b = parseFloat(document.getElementById("scnd").value);

	if (!isNaN(a) && !isNaN(b))
	{
		alert((a+b).toFixed(1));
	}
}
