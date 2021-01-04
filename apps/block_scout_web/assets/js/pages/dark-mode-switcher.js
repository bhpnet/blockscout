import $ from 'jquery'

$('.dark-mode-changer').click(function () {
  if (localStorage.getItem('current-color-mode') === 'dark') {
    localStorage.setItem('current-color-mode', 'light')
  } else {
    localStorage.setItem('current-color-mode', 'dark')
  }
  // reload each theme switch
  document.location.reload(true)
})


$('.language-en-mode-changer').click(function () {
  if (localStorage.getItem('locale') !== 'en') {

  }
  localStorage.setItem('locale', 'en')
  document.cookie="locale=en";
  // reload each theme switch
  document.location.reload(true)
})

$('.language-zh-mode-changer').click(function () {
  if (localStorage.getItem('locale') !== 'zh') {

  }
    localStorage.setItem('locale', 'zh')
    document.cookie="locale=zh";
    // reload each theme switch
    document.location.reload(true)
})