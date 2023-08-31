برای دریافت کد های بک اند پروژه هم می تونید به این لینک سر بزنید https://github.com/salararjmandpour/getfreejson 


با درخواست به این API شما می توانید لیست تمام استان ها و مرکزاستان را دریافت کنید

```sh
https://getfreejson.iran.liara.run/api/v1/states

```

>Response => 
{
  name: خوزستان
  center: اهواز
  latitude: 31.190
  longitude: 48.410
  id: 12
},
{}, ...

<br>

_______
با درخواست به این API شما می توانید لیست تمام شهرهای استان مورد نظر را دریافت کنید

```sh
https://getfreejson.iran.liara.run/api/v1/cities?state=خوزستان

```
>Response => 
cities:{ name: آبادان  latitude: 30.2024 longitude: 48.1814 id: 1  } , {} ,...

<br>

___________
با درخواست به این API شما می توانید کد تلفن استان مورد نظر را دریافت کنید

```sh

https://getfreejson.iran.liara.run/api/v1/phoneCode?state=کرمان

```

>Response => 
phone:{ code: 34 ,id: 21 } , {} ,...

<br>

________
با درخواست به این API شما می توانید ساعت محلی و پایتخت و کد تلفن کشور مورد نظر را دریافت کنید


```sh

https://getfreejson.iran.liara.run/api/v1/timeZones?country=iran

```

>response=> { TimeZone:۱۴۰۲/۶/۸،‏ ۹:۲۹:۵۹ Capital:Tehran,  DialCode:+98},

>بعضی از کشور ها چند ایالتی هستن و زمان های محلی چندگانه دارند ! بهتره موقع درخواست لاگ بگیرین تا اطلاعات دقیق تری ببینید

| Query | Api |
| ------ | ------ |
| Brazil | https://getfreejson.iran.liara.run/api/v1/timeZones?country=Brazil |

>response =>
{
     Capital:Brasilia,  DialCode:+55, 
     TimeZone:{ 
        AmericaLa_Paz: 8/30/2023, 2:03:05 AM, 
        AmericaNoronha: 8/30/2023, 4:03:05 AM, 
        AmericaBelem":8/30/2023, 3:03:05 AM, 
        AmericaFortaleza: 8/30/2023, 3:03:05 AM, 
        AmericaRecife: 8/30/2023, 3:03:05 AM,
        AmericaAraguaina: 8/30/2023, 3:03:05 AM,
        AmericaMaceio: 8/30/2023, 3:03:05 AM 
              }
    }

<br>
<br>
<br>

با درخواست به این API شما می توانیدنام دانشگاه های کشور و شهر و سال تاسیسدانشگاه موردنظر را دریافت کنید

```sh

https://getfreejson.iran.liara.run/api/v1/getalluni

```

> response =>
{ 
    name:دانشگاه تحصیلات تکمیلی صنعتی کرمان 
    city:کرمان ,
    establishedYear:1386 ,
    ,id:15 
    }

    _______
با درخواست به API شما می توانید بهدما شهر یا کشور و آیکونمربوطه دسترسی داشته باشیدد

```sh
https://getfreejson.iran.liara.run/api/v1/getweather?city=tehran

```
>Response => {
    > weatherIconsURL: https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png
>  weatherMessage: 28℃

}

<br>

___________

