/**
 *
 * @author Tarcísio Augusto
 */

let xhr = new XMLHttpRequest();
let url = "catalogo.json"
xhr.open('GET', url, true);
xhr.onload = function () {
  if (this.status == 200) {
    var videos = JSON.parse(this.responseText);
    var output = '';
    for (var i in videos) {
      output +=
        '<div class="col-lg-3 col-md-6 mb-1 filter ' + videos[i].categoria + '">' +
        '<div class="card border-light mb-4">' +
        '<a class="video-play-trigger" data-fancybox href="https://youtu.be/' + videos[i].id + '">' +
        '<img class="card-img-top" src="https://img.youtube.com/vi/' + videos[i].id + '/maxresdefault.jpg"></a>' +
        /* '<div class="card-body"><h5>' + videos[i].titulo + '</h5></div>' + */
        '</div>' +
        '</div>';
    }
    document.getElementById('videos').innerHTML = output;
  }
}
xhr.send();

/* Filtro */
$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr('data-filter');
    if (value == "all") {
      $('.filter').show('1000');
    }
    else {
      $(".filter").not('.' + value).hide('3000');
      $('.filter').filter('.' + value).show('3000');
    }
  });
  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});