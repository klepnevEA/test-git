
function ready() {

    $('.slider__list').slick({
        prevArrow: $('.slider__arrow_left'),
        nextArrow: $('.slider__arrow_right')
    });

    $('#fullpage').fullpage({
        menu: '#navigation__list',
    });


    const myForm = document.querySelector('#myForm');
    const sendBtn = document.querySelector('#button-send');
    const popup = document.querySelector('#popup');

    const sendform = (e) => {
        e.preventDefault();
        if(chechVal(myForm)) {
            const data = {
                name: myForm.elements.name.value,
                phone: myForm.elements.phone.value,
                comment: myForm.elements.comment.value,
                to: 'klepnev@yandex.ru'
            }
            const xhr = new XMLHttpRequest();
            
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener('load', () => {
                if(xhr.response.status) {
                    popup.classList.add('active');
                    popup.innerText = 'Все ок'
                    console.log('Все ок');
                } 
            })
        };
        
    }

    const chechVal = (form) => {
        let valid = true;

        if(!chechValFild(form.elements.name)) {
            valid = false;
        }

        if(!chechValFild(form.elements.phone)) {
            valid = false;
        }

        if(!chechValFild(form.elements.street)) {
            valid = false;
        }

        if(!chechValFild(form.elements.house)) {
            valid = false;
        }

        if(!chechValFild(form.elements.float)) {
            valid = false;
        }

        if(!chechValFild(form.elements.appartament)) {
            valid = false;
        }
        return valid;
    }

    const chechValFild = (field) => {
        if(!field.checkValidity()) {
            field.parentNode.nextElementSibling.textContent = field.validationMessage;
            return false
        }
        else {
            field.parentNode.nextElementSibling.textContent = '';
            return true;
        }
        // field.parentNode.nextElementSibling.textContent = field.validationMessage;
        // return field.checkValidity();
    }

    

    sendBtn.addEventListener('click', sendform);






    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [51.529230, 46.035090],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки!!!!',
                balloonContent: 'Это красивая метка!!!'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-30, -42]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([51.599230, 46.135090], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15]
            }),
            myPlacemarkWithContent2 = new ymaps.Placemark([51.699230, 46.235090], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [30, 42],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-24, -24],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15]
            });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2);
    });
};  

document.addEventListener("DOMContentLoaded", ready);

