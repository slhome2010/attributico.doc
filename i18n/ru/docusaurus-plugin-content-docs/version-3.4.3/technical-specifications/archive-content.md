---
sidebar_position: 1
---

# Структура архива

```bash

Attributico_v3.4.0/
    │── PHP7.2-7.4/
    │     └── attributico.3.x.ocmod.zip
    │             ├── install.xml
    │             └── upload/
    │                   ├── admin/
    │                   │    ├── controller/
    │                   │    ├── language/
    │                   │    ├── model/
    │                   │    └── view/
    │                   └── system/
    │                         └── library/
    │                               └── attributico/
    │                                     ├── attributico.php
    │                                     ├── interlink.php
    │                                     └── ...
    │── PHP7.1/      
    │     └── attributico.3.x.ocmod.zip 
    │             ├── install.xml
    │             └── upload/
    │                   └── ...
    │
    │
    ├── News3.4.0/
    └── README.md

```

## Назначение папок и файлов
  
- `upload/` папки с файлами собственно модуля для OpenCart версии 3.х;
- `attributico.3.x.ocmod.zip` установочный архив для магазинов версии 3.x;
- `News/` папки с описанием изменений, исправлений и вспомогательными материалами;
- `README.md` краткая инструкция по установке и работе модуля;

## Различие версий

Приведенная структура архива соответствует версии модуля \> 3.4.0. Название папки типа `PHP7.1/`, ..., `PHP7.2-7.4/` соответствует версии PHP. Разница в ioncube-кодировке некоторых файлов модуля для разных версий PHP. Внутри этих папок находится `attributico.3.x.ocmod.zip` - установочный архив для магазинов OpenCart версии 3.x.
