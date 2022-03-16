mouvement = 0;
dirInverse = false;

document.getElementById("vert").addEventListener("mouseover", function (e) {
	if (mouvement == 0) {
		dirInverse = false;
		document.getElementById("vert").style.marginLeft = "320px";
		mouvement++;
	} else if (mouvement == 1) {
		if (dirInverse) {
			mouvement--;
			document.getElementById("vert").style.marginLeft = "100px";
		} else {
			mouvement++;
			document.getElementById("vert").style.marginLeft = "540px";
		}
	} else if (mouvement == 2) {
		if (dirInverse) {
			mouvement--;
			document.getElementById("vert").style.marginLeft = "320px";
		} else {
			mouvement++;
			document.getElementById("vert").style.marginLeft = "760px";
		}
	} else if (mouvement == 3) {
		if (dirInverse) {
			mouvement--;
			document.getElementById("vert").style.marginLeft = "540px";
		} else {
			mouvement++;
			document.getElementById("vert").style.marginLeft = "980px";
		}
	} else if (mouvement == 4) {
		if (dirInverse) {
			mouvement--;
			document.getElementById("vert").style.marginLeft = "760px";
		} else {
			mouvement++;
			document.getElementById("vert").style.marginLeft = "1300px";
		}
	} else if (mouvement == 5) {
		dirInverse = true;
		mouvement--;
		document.getElementById("vert").style.marginLeft = "980px";
	}
});
