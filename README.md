# Temporal UI RU

## Сборка image на Windows
```sh
cd D:\Projects\temporal-ui-ru
corepack enable
corepack prepare pnpm@8.15.7 --activate
pnpm install
git submodule update --init

pnpm build:server
cd server
go mod tidy
go build -o ui-server ./cmd/server/main.go
docker build -t temporal-ui-custom .
```
## Внесенные изменения
1. Небольшие конфигурационные настройки под сборку на Windows
2. Оригинальный язык EN заменен на RU, причем прямо в temporal-ui-ru\src\lib\i18n\locales\en т.к. переключателя языка в UI нет.