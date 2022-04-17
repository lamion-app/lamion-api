
# Lamion
Это приложение для сохранения аналитики приложений написанных на desktop/web для анализа.
## Быстрый старт
Сначала, нужно скачать архив с Docker-образами по ссылке:
```
https://drive.google.com/file/d/1nlF8_jkX5d-A-GnBHmGK58RWE6JhrUq9/view?usp=sharing
```

После завершения скачивания, распакуйте архив и зайдите в папку Docker:
``` console
cd Docker
```
Затем нужно импортировать Docker-изображения:
```
docker load --input postgres.tar
```
```
docker load --input spring-boot.tar
```
Теперь, можно запускать проект:
```
docker-compose up
```
Готово, теперь проект запущен на вашей локальной машине на порту **8080**.
## Схема работы приложения
Для заполнения статистики на сервере создан API.
Чтобы обработать событие запрос должен быть отправлен на:
```
http://127.0.0.1:8080/api/request
```
> **Внимание**, если вы используете другой протокол/доменное имя/порт, то не забудьте изменить его на свой.

После этого, в личном кабинете обновится статистика приложения.
## Использованные языки и технологии
Основной код написан на Java. Использованная база данных - [PostgreSQL](https://www.postgresql.org/)
В проекте также используются:
- [Spring](https://spring.io/) - Для запуска сервера и доступа к базе данных.
- [VueJs](https://vuejs.org/) - Для создания адаптивного и удобного дизайна.
- [ChartJS](https://www.chartjs.org/) - Для отрисовки диаграмм.

Приложение основанно на приципе взаимедействия frontend и backend через API.
