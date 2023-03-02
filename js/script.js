let weather = {
    tabriz: {name: 'tabriz', temp: 12, weat: 'sunny', humidity: 23, windspeed: 32},
    paris: {name: 'paris', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    prague: {name: 'prague', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    seoul: {name: 'seoul', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    athens: {name: 'athens', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    isfahan: {name: 'isfahan', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    hongkong: {name: 'hongkong', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    istanbul: {name: 'istanbul', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    holland: {name: 'holland', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    tehran: {name: 'tehran', temp: 12, weat: 'rainy', humidity: 20, windspeed: 25},
    mashad: {name: 'mashad', temp: 10, weat: 'windy', humidity: 13, windspeed: 24}
}
let searchBTN = document.querySelector('.search-btn')
let searchBar = document.querySelector('.search-bar')

let randomBG= Math.floor(Math.random() * 6)
let bg = ['https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4713.jpg',
'https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4735.jpg',
'https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4729.jpg',
'https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4754.jpg',
'https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4800.jpg',
'https://www.fazanama.com/images/post/2019/12/26/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D9%87%E2%80%8C%D8%A7%DB%8C-%D8%AC%D8%AF%DB%8C%D8%AF-%D8%A7%D8%B2-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1-%D9%87%D8%A7%D8%A8%D9%84-%D9%85%D9%86%D8%AA%D8%B4%D8%B1-%D8%B4%D8%AF-%D8%AA%D8%B5%D8%A7%D9%88%DB%8C%D8%B1%D9%87%D8%A7%D8%A8%D9%84-4747.jpg']
document.getElementById('jj').style.backgroundImage = 'url('+bg[randomBG]+')'


searchBTN.addEventListener('click',function() {
    let searchValue = searchBar.value
    let dataCity = weather[searchValue]
    console.log(dataCity)
    if (dataCity) {
        document.querySelector(".city").innerHTML = 'Weather in ' + dataCity.name
        document.querySelector(".temp").innerHTML = dataCity.temp + "°C"
        document.querySelector(".description").innerHTML = dataCity.weat
        document.querySelector(".humidity").innerHTML = 'Humidity: ' + dataCity.humidity+'%'
        document.querySelector(".wind").innerHTML = 'Wind speed: ' +dataCity.windspeed +' km/h'
        document.querySelector(".weather").classList.remove('loading')
        document.querySelector(".card").style.paddingBottom = '2rem'
    } else {
        alert('شهر های موجود  tabriz , tehran , mashad')
    }
})