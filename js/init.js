var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
document.getElementById('invert').onclick = function() {
    parallax.invert(false, false);
};
