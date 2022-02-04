window.onscroll = function () {
  scrollFunction()
}

function scrollFunction () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    header.classList.add('sticky')
  } else {
    header.classList.remove('sticky')
  }
}
