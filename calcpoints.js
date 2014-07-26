/** Logic from http://gnomes22.tripod.com/dailypptarget.html **/

function calcScoreM(){
	a=parseInt(document.md.fa.value,10);
	w=parseInt(document.md.fw.value,10) * 0.45359237;
	h=parseInt(document.md.fh.value,10) * 0.0254
	TEE=864 - (9.72 * a);
	TEE += 1.12*((14.2*w)+(503*h));
	TEE=((TEE*.9)+200)-1000;

	if(TEE<1000)
		TEE=1000;

	TEE=Math.round(TEE/35)-11;

	if(TEE<29)
		TEE=29;

	if(TEE>71)
		TEE=71;

	return TEE;
}
