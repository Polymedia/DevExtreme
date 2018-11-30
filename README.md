# Пропатченная версия DevExtreme (by TilliWilli)

## Руководство по патчингу
0. Вызвать ```npm install``` в проекте, чтобы установились все тулзы необходимые для билдинга

1. Внести изменения в коде в файлах находящихся в папке ```/js```

2. Запустить команду ```npm run build```

3. Необходимо поднять версию npm package'a для этого измените свойство version в json файле

```/artifacts/npm/package.json```
```17.2.5-dev```->```17.2.5-vis-patch{YOUR_NEW_VERSION}```

4. залогиниться в npm с помощью команды npm login

login: congresspolymedia
password: стандарный наш
email: congresspolymedia@gmail.com

5. перейти в папку ```artifacts/npm``` и выполнить команду ```npm publish --access=public```

6. Пакет залился на npm - можно закачивать в проект и проверять

```https://www.npmjs.com/~congresspolymedia```

7. чтобы закачать в проект удалите во Вьювере папку /node_modules/@congresspolymedia и вызовите команду

```npm i "@congresspolymedia/devextreme@{YOUR_NEW_VERSION}"```

8. закомитьте и залейте все изменения на github