# Пропатченная версия DevExtreme (by TilliWilli)

## Руководство по патчингу
0. Вызвать ```npm install``` в проекте, чтобы установились все тулзы необходимые для билдинга

1. Внести изменения в коде в файлах находящихся в папке ```/js```

2. Все изменения в коде отмечать специальным регионом

```javascript
//#region VIS-PATCHED
function applyDashboardZoomCorrection(value) {
    var zoom = window.visApi().getSheetZoom();
    var invertedScale = 100 / zoom;
    return Math.floor(value * invertedScale);
}
//#endregion VIS-PATCHED
```

если это одна строчка то отметить однострочным комментом

```javascript
return applyDashboardZoomCorrection(width); //VIS-PATCHED
```

3. Запустить команду ```npm run build```

4. Необходимо поднять версию npm package'a для этого измените свойство version в json файле

```/artifacts/npm/package.json```
```17.2.5-dev```->```17.2.5-vis-patch{YOUR_NEW_VERSION}```

5. залогиниться в npm с помощью команды npm login

login: congresspolymedia
password: стандарный наш
email: congresspolymedia@gmail.com

6. после удачного логина выполнить команду ```npm publish --access=public``` в папке ```/artifacts/npm```

7. Пакет залился на npm - можно закачивать в проект и проверять

```https://www.npmjs.com/~congresspolymedia```

8. чтобы закачать в проект удалите во Вьювере папку /node_modules/@congresspolymedia и вызовите команду

```npm i "@congresspolymedia/devextreme@{YOUR_NEW_VERSION}"```

9. закомитьте и залейте все изменения на github