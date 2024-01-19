// document.querySelector('.scroll-lock').addEventListener('wheel', function(e) {
//   e.preventDefault();
//   const currentScroll = parseInt(window.getComputedStyle(this).getPropertyValue('--scroll'));
//   this.style.setProperty('--scroll', currentScroll + e.deltaY + 'px');
// });

const progressBar = document.getElementById('progress-bar');

function updateProgressBar() {
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPos = window.pageYOffset || (document.documentElement.scrollTop || document.body.scrollTop);
    const perc = Math.round((scrollPos / scrollHeight) * 100);

    progressBar.style.width = perc + '%';
}

window.addEventListener('scroll', updateProgressBar);
updateProgressBar();