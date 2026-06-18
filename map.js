document.addEventListener("DOMContentLoaded", function () {
    // Init map
    var map = L.map('myMap').setView([49.5, 25.2], 7);

    // Tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Places list
    var places = [
        { name: "Олеський замок", coords: [49.9684, 24.9008], url: "https://uk.wikipedia.org/wiki/Олеський_замок" },
        { name: "Підгорецький замок", coords: [49.9431, 24.9835], url: "https://uk.wikipedia.org/wiki/Підгорецький_замок" },
        { name: "Золочівський замок", coords: [49.8021, 24.9061], url: "https://uk.wikipedia.org/wiki/Золочівський_замок" },
        { name: "Свірзький замок", coords: [49.6528, 24.4325], url: "https://uk.wikipedia.org/wiki/Свірзький_замок" },
        { name: "Скельна фортеця Тустань", coords: [49.1914, 23.4093], url: "https://uk.wikipedia.org/wiki/Тустань" },
        { name: "Замок Паланок", coords: [48.4314, 22.6868], url: "https://uk.wikipedia.org/wiki/Замок_Паланок" },
        { name: "Ужгородський замок", coords: [48.6214, 22.3065], url: "https://uk.wikipedia.org/wiki/Ужгородський_замок" },
        { name: "Палац графів Шенборнів", coords: [48.5252, 22.8745], url: "https://uk.wikipedia.org/wiki/Палац_графів_Шенборнів" },
        { name: "Озеро Синевир", coords: [48.6167, 23.6833], url: "https://uk.wikipedia.org/wiki/Синевир" },
        { name: "Водоспад Шипіт", coords: [48.6541, 23.2715], url: "https://uk.wikipedia.org/wiki/Шипіт" },
        { name: "Водоспад Пробій та Стежка Довбуша", coords: [48.4392, 24.5397], url: "https://uk.wikipedia.org/wiki/Пробій" },
        { name: "Манявський водоспад", coords: [48.6161, 24.3014], url: "https://uk.wikipedia.org/wiki/Манявський_водоспад" },
        { name: "Старовинні віадуки у Ворохті", coords: [48.2831, 24.5619], url: "https://uk.wikipedia.org/wiki/Ворохтянські_віадуки" },
        { name: "Музей 'Писанка' в Коломиї", coords: [48.5284, 25.0391], url: "https://uk.wikipedia.org/wiki/Музей_писанкового_розпису" },
        { name: "Заліщики (Панорама міста-півострова)", coords: [48.6322, 25.7364], url: "https://uk.wikipedia.org/wiki/Заліщики" },
        { name: "Джуринський водоспад та Червоногородський замок", coords: [48.8052, 25.5878], url: "https://uk.wikipedia.org/wiki/Джуринський_водоспад" },
        { name: "Печера Оптимістична", coords: [48.7358, 25.9733], url: "https://uk.wikipedia.org/wiki/Оптимістична_печера" },
        { name: "Плебанівський віадук", coords: [49.2817, 25.7042], url: "https://uk.wikipedia.org/wiki/Плебанівський_віадук" },
        { name: "Чернівецький університет", coords: [48.2969, 25.9244], url: "https://uk.wikipedia.org/wiki/Чернівецький_національний_університет_імені_Юрія_Федьковича" },
        { name: "Хотинська фортеця", coords: [48.5217, 26.4983], url: "https://uk.wikipedia.org/wiki/Хотинська_фортеця" },
        { name: "Кам'янець-Подільська фортеця", coords: [48.6736, 26.5628], url: "https://uk.wikipedia.org/wiki/Кам%27янець-Подільська_фортеця" },
        { name: "Бакотська затока", coords: [48.5833, 26.9958], url: "https://uk.wikipedia.org/wiki/Бакотська_затока" },
        { name: "Тунель кохання", coords: [50.7506, 26.0456], url: "https://uk.wikipedia.org/wiki/Тунель_кохання" },
        { name: "Тараканівський форт", coords: [50.3631, 25.7133], url: "https://uk.wikipedia.org/wiki/Тараканівський_форт" },
        { name: "Замок Любарта", coords: [50.7389, 25.3242], url: "https://uk.wikipedia.org/wiki/Замок_Любарта" },
        { name: "Шацькі озера (Озеро Світязь)", coords: [51.4989, 23.8461], url: "https://uk.wikipedia.org/wiki/Світязь" }
    ];

    // Add markers
    places.forEach(function (place) {
        var marker = L.marker(place.coords).addTo(map);
        marker.bindTooltip(place.name);
        marker.on('click', function () {
            window.open(place.url, '_blank');
        });
    });
});