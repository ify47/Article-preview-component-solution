function clicked() {
    options = document.getElementById('sharedoptions');
    icon = document.getElementById('iconbox');
    arrow = document.getElementById('iconshare');

options.classList.toggle('visible');
icon.classList.toggle('sharedbg');
arrow.classList.toggle('imgcolor');
    
}