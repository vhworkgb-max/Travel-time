document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('myMap').setView([49.5, 25.2], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

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
        { name: "Шацькі озера (Озеро Світязь)", coords: [51.4989, 23.8461], url: "https://uk.wikipedia.org/wiki/Світязь" },
        { name: "Дендропарк 'Софіївка'", coords: [48.7633, 30.2233], url: "https://uk.wikipedia.org/wiki/Софіївка_(дендропарк)" },
        { name: "Києво-Печерська лавра", coords: [50.4344, 30.5564], url: "https://uk.wikipedia.org/wiki/Києво-Печерська_лавра" },
        { name: "Софійський собор", coords: [50.4528, 30.5144], url: "https://uk.wikipedia.org/wiki/Софійський_собор_(Київ)" },
        { name: "Андріївський узвіз", coords: [50.4594, 30.5167], url: "https://uk.wikipedia.org/wiki/Андріївський_узвіз" },
        { name: "Золоті ворота", coords: [50.4483, 30.5133], url: "https://uk.wikipedia.org/wiki/Золоті_ворота_(Київ)" },
        { name: "Музей у Пирогові", coords: [50.3347, 30.5142], url: "https://uk.wikipedia.org/wiki/Національний_музей_народної_архітектури_та_побуту_України" },
        { name: "Резиденція 'Межигір'я'", coords: [50.6144, 30.4731], url: "https://uk.wikipedia.org/wiki/Межигір%27я_(резиденція)" },
        { name: "Дендропарк 'Олександрія'", coords: [49.8131, 30.0633], url: "https://uk.wikipedia.org/wiki/Олександрія_(дендропарк)" },
        { name: "Буцький каньйон", coords: [49.0944, 30.3972], url: "https://uk.wikipedia.org/wiki/Буцький_каньйон" },
        { name: "Аккерманська фортеця", coords: [46.2014, 30.3508], url: "https://uk.wikipedia.org/wiki/Аккерманська_фортеця" },
        { name: "Одеський оперний театр", coords: [46.4853, 30.7411], url: "https://uk.wikipedia.org/wiki/Одеський_національний_академічний_театр_опери_та_балету" },
        { name: "Потьомкінські сходи", coords: [46.4883, 30.7419], url: "https://uk.wikipedia.org/wiki/Потьомкінські_сходи" },
        { name: "Вилкове (Українська Венеція)", coords: [45.4000, 29.5833], url: "https://uk.wikipedia.org/wiki/Вилкове" },
        { name: "Заповідник 'Асканія-Нова'", coords: [46.4542, 33.8719], url: "https://uk.wikipedia.org/wiki/Асканія-Нова_(заповідник)" },
        { name: "Олешківські піски", coords: [46.5833, 33.0500], url: "https://uk.wikipedia.org/wiki/Олешківські_піски" },
        { name: "Острів Джарилгач", coords: [46.0333, 32.9333], url: "https://uk.wikipedia.org/wiki/Джарилгач" },
        { name: "Станіславські скелі", coords: [46.5742, 32.1461], url: "https://uk.wikipedia.org/wiki/Станіславський_заказник" },
        { name: "Острів Хортиця", coords: [47.8167, 35.0833], url: "https://uk.wikipedia.org/wiki/Хортиця" },
        { name: "Кам'яна Могила", coords: [46.9497, 35.4700], url: "https://uk.wikipedia.org/wiki/Кам%27яна_Могила" },
        { name: "Святогірська лавра", coords: [49.0286, 37.5678], url: "https://uk.wikipedia.org/wiki/Святогірська_лавра" },
        { name: "Шарівський палац", coords: [50.0450, 35.4331], url: "https://uk.wikipedia.org/wiki/Палац_у_Шарівці" },
        { name: "Садиба 'Круглий двір'", coords: [50.4750, 34.9639], url: "https://uk.wikipedia.org/wiki/Круглий_двір" },
        { name: "Палац Голіцина (Тростянець)", coords: [50.4789, 34.9658], url: "https://uk.wikipedia.org/wiki/Садиба_Л._Є._Кеніга_(Тростянець)" },
        { name: "Заповідник 'Качанівка'", coords: [50.8358, 32.6558], url: "https://uk.wikipedia.org/wiki/Качанівка_(національний_історико-культурний_заповідник)" },
        { name: "Батуринська фортеця (Цитадель)", coords: [51.3400, 32.8833], url: "https://uk.wikipedia.org/wiki/Цитадель_Батуринської_фортеці" },
        { name: "Чернігівський дитинець", coords: [51.4883, 31.3069], url: "https://uk.wikipedia.org/wiki/Чернігівський_дитинець" },
        { name: "Держпром (Харків)", coords: [50.0064, 36.2281], url: "https://uk.wikipedia.org/wiki/Держпром" },
        { name: "Музей гончарства (Опішня)", coords: [49.9631, 34.6158], url: "https://uk.wikipedia.org/wiki/Національний_музей-заповідник_українського_гончарства_в_Опішному" },
        { name: "Миколаївська церква (Диканька)", coords: [49.8167, 34.5333], url: "https://uk.wikipedia.org/wiki/Миколаївська_церква_(Диканька)" },
        { name: "Резиденція Богдана Хмельницького", coords: [49.0764, 32.6569], url: "https://uk.wikipedia.org/wiki/Національний_історико-культурний_заповідник_«Чигирин»" },
        { name: "Іллінська церква (Суботів)", coords: [49.0933, 32.5519], url: "https://uk.wikipedia.org/wiki/Іллінська_церква_(Суботів)" },
        { name: "Тарасова гора (Канів)", coords: [49.7369, 31.5161], url: "https://uk.wikipedia.org/wiki/Тарасова_гора" },
        { name: "Корсунь-Шевченківський палац", coords: [49.4122, 31.2636], url: "https://uk.wikipedia.org/wiki/Палац_Лопухіних_(Корсунь-Шевченківський)" },
        { name: "Замок Радомисль", coords: [50.4858, 29.2131], url: "https://uk.wikipedia.org/wiki/Замок_Радомисль" },
        { name: "Камінне село", coords: [51.3125, 27.9733], url: "https://uk.wikipedia.org/wiki/Камінне_Село" },
        { name: "Лемурійське озеро (Рожеве)", coords: [46.2417, 33.8214], url: "https://uk.wikipedia.org/wiki/Лемурійське_озеро" },
        { name: "Мигійські пороги (Бузький Гард)", coords: [48.0333, 30.9500], url: "https://uk.wikipedia.org/wiki/Бузький_Гард" },
        { name: "Актовський каньйон", coords: [47.7119, 31.4644], url: "https://uk.wikipedia.org/wiki/Актовський_каньйон" },
        { name: "Кінбурнська коса", coords: [46.5250, 31.7458], url: "https://uk.wikipedia.org/wiki/Кінбурнська_коса" },
        { name: "Палац Потоцьких (Тульчин)", coords: [48.6750, 28.8583], url: "https://uk.wikipedia.org/wiki/Палац_Потоцьких_(Тульчин)" },
        { name: "Ставка 'Вервольф'", coords: [49.3081, 28.4950], url: "https://uk.wikipedia.org/wiki/Вервольф_(ставка_Гітлера)" },
        { name: "Музей-садиба Пирогова", coords: [49.2158, 28.4069], url: "https://uk.wikipedia.org/wiki/Національний_музей-садиба_М._І._Пирогова" },
        { name: "Фонтан Roshen (Вінниця)", coords: [49.2325, 28.4839], url: "https://uk.wikipedia.org/wiki/Фонтан_Roshen" },
        { name: "Меджибізький замок", coords: [49.4361, 27.4067], url: "https://uk.wikipedia.org/wiki/Меджибізький_замок" },
        { name: "Замок Острозьких (Старокостянтинів)", coords: [49.7578, 27.2272], url: "https://uk.wikipedia.org/wiki/Замок_Острозьких_(Старокостянтинів)" },
        { name: "Гора Говерла", coords: [48.1603, 24.5000], url: "https://uk.wikipedia.org/wiki/Говерла" },
        { name: "Гора Піп Іван (Обсерваторія Білий Слон)", coords: [48.0469, 24.3275], url: "https://uk.wikipedia.org/wiki/Піп_Іван_(Чорногора)" },
        { name: "Озеро Несамовите", coords: [48.1256, 24.5367], url: "https://uk.wikipedia.org/wiki/Несамовите" },
        { name: "Скелі Довбуша (Бубнище)", coords: [49.0433, 23.6828], url: "https://uk.wikipedia.org/wiki/Скелі_Довбуша" },
        { name: "Карпатський трамвай", coords: [48.9292, 23.9069], url: "https://uk.wikipedia.org/wiki/Карпатський_трамвай" },
        { name: "Манявський скит", coords: [48.6531, 24.3211], url: "https://uk.wikipedia.org/wiki/Манявський_скит" },
        { name: "Галицький замок", coords: [49.1217, 24.7211], url: "https://uk.wikipedia.org/wiki/Галицький_замок" },
        { name: "Збаразький замок", coords: [49.6644, 25.7831], url: "https://uk.wikipedia.org/wiki/Збаразький_замок" },
        { name: "Вишнівецький палац", coords: [49.9008, 25.7428], url: "https://uk.wikipedia.org/wiki/Вишнівецький_палац" },
        { name: "Дубенський замок", coords: [50.4194, 25.7478], url: "https://uk.wikipedia.org/wiki/Дубенський_замок" },
        { name: "Острозький замок", coords: [50.3278, 26.5217], url: "https://uk.wikipedia.org/wiki/Острозький_замок" },
        { name: "Базальтові стовпи", coords: [50.9167, 26.2333], url: "https://uk.wikipedia.org/wiki/Базальтові_стовпи" },
        { name: "Клеванський замок", coords: [50.7444, 25.9678], url: "https://uk.wikipedia.org/wiki/Клеванський_замок" },
        { name: "Будинок Голованя (Луцьк)", coords: [50.7381, 25.3150], url: "https://uk.wikipedia.org/wiki/Будинок_архітектора_Голованя" },
        { name: "Музей космонавтики ім. С. Корольова", coords: [50.2525, 28.6758], url: "https://uk.wikipedia.org/wiki/Національний_музей_космонавтики_імені_Сергія_Корольова" },
        { name: "Монастир босих кармелітів (Бердичів)", coords: [49.8972, 28.5750], url: "https://uk.wikipedia.org/wiki/Монастир_босих_кармелітів_(Бердичів)" },
        { name: "Садиба Попова (Василівка)", coords: [47.4453, 35.2758], url: "https://uk.wikipedia.org/wiki/Садиба_Попова" },
        { name: "Почаївська лавра", coords: [50.0050, 25.2458], url: "https://uk.wikipedia.org/wiki/Почаївська_лавра" },
        { name: "Костел святого Миколая (Київ)", coords: [50.4269, 30.5175], url: "https://uk.wikipedia.org/wiki/Костел_святого_Миколая_(Київ)" },
        { name: "Палац Даховських (Леськове)", coords: [48.9958, 29.8731], url: "https://uk.wikipedia.org/wiki/Палац_Даховських" },
        { name: "Озеро Бребенескул", coords: [48.1069, 24.5622], url: "https://uk.wikipedia.org/wiki/Бребенескул_(озеро)" },
        { name: "Чортківський замок", coords: [49.0142, 25.8033], url: "https://uk.wikipedia.org/wiki/Чортківський_замок" },
        { name: "Печера Млинки", coords: [48.9567, 25.8642], url: "https://uk.wikipedia.org/wiki/Млинки_(печера)" },
        { name: "Водоспад Гук (Женецький)", coords: [48.3908, 24.4983], url: "https://uk.wikipedia.org/wiki/Женецький_Гук" },
        { name: "Біла альтанка (Полтава)", coords: [49.5819, 34.5619], url: "https://uk.wikipedia.org/wiki/Біла_альтанка" },
        { name: "Кругла площа (Полтава)", coords: [49.5892, 34.5511], url: "https://uk.wikipedia.org/wiki/Кругла_площа_(Полтава)" },
        { name: "Палац Грохольських (Вороновиця)", coords: [49.1158, 28.6836], url: "https://uk.wikipedia.org/wiki/Палац_Грохольських_(Вороновиця)" },
        { name: "Центр реабілітації бурих ведмедів", coords: [48.5572, 23.6542], url: "https://uk.wikipedia.org/wiki/Реабілітаційний_центр_бурих_ведмедів" },
        { name: "Успенський собор (Володимир)", coords: [50.8483, 24.3167], url: "https://uk.wikipedia.org/wiki/Успенський_собор_(Володимир)" }
    ];
    places.forEach(function (place) {
        var marker = L.marker(place.coords).addTo(map);
        marker.bindTooltip(place.name);
        marker.on('click', function () {
            window.open(place.url, '_blank');
        });
    });
});


window.addEventListener('load', () => {
    // Перевіряємо, чи браузер підтримує геолокацію
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeather, handleGeoError);
    } else {
        console.log("Геолокація не підтримується браузером.");
        setDefaultWeather();
    }
});

// Функція, яка спрацьовує при успішному отриманні координат
function getWeather(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    // Використовуємо безкоштовне API Open-Meteo (current=temperature_2m,weather_code)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code`;

    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error("Помилка мережі");
            return response.json();
        })
        .then(data => {
            const temperature = Math.round(data.current.temperature_2m);
            const weatherCode = data.current.weather_code;

            // Оновлюємо температуру на сайті
            document.getElementById('weather-temp').innerText = `${temperature}°`;

            // Міняємо іконку залежно від погодного коду WMO
            updateWeatherIcon(weatherCode);
        })
        .catch(err => {
            console.error("Не вдалося завантажити погоду:", err);
            setDefaultWeather();
        });
}

// Якщо користувач заборонив доступ до локації
function handleGeoError(error) {
    console.warn(`Помилка геолокації (${error.code}): ${error.message}`);
    setDefaultWeather();
}

function setDefaultWeather() {
    const kyivLat = 50.45;
    const kyivLon = 30.52;
    getWeather({ coords: { latitude: kyivLat, longitude: kyivLon } });
}

// Функція підбору іконок
function updateWeatherIcon(code) {
    const iconImg = document.getElementById('weather-icon');
    
    // Спрощена логіка для кодів: 0 - ясно, 1-3 - мінлива хмарність, 45-48 - туман, 51-67 - дощ, 71-86 - сніг, 95-99 - гроза
    if (code === 0) {
        iconImg.src = 'https://img.icons8.com/fluency/48/000000/sun.png'; // Сонце
    } else if (code >= 1 && code <= 3) {
        iconImg.src = 'https://img.icons8.com/fluency/48/000000/partly-cloudy-day.png'; // Хмарно з проясненнями
    } else if (code >= 51 && code <= 67) {
        iconImg.src = 'https://img.icons8.com/fluency/48/000000/rain.png'; // Дощ
    } else if (code >= 95) {
        iconImg.src = 'https://img.icons8.com/fluency/48/000000/storm.png'; // Гроза
    } else {
        iconImg.src = 'https://img.icons8.com/fluency/48/000000/cloud.png'; // Звичайна хмаринка для всього іншого
    }
    iconImg.alt = "Weather status";
}

// --- Логіка перемикання блоків "Поради" та "Про нас" ---
window.addEventListener('DOMContentLoaded', () => {
    const btnShowAbout = document.getElementById('btn-show-about');
    const btnShowTips = document.getElementById('btn-show-tips');
    const tipsView = document.getElementById('tips-view');
    const aboutView = document.getElementById('about-view');

    if (btnShowAbout && btnShowTips && tipsView && aboutView) {
        btnShowAbout.addEventListener('click', () => {
            tipsView.classList.add('hidden');
            aboutView.classList.remove('hidden');
        });

        btnShowTips.addEventListener('click', () => {
            aboutView.classList.add('hidden');
            tipsView.classList.remove('hidden');
        });
    }
});
