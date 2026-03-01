---
sidebar_position: 1
---

# Archive Structure

```bash

Attributico_v3.5.0/
    │── PHP7.2-7.4/
    │     └── attributico.3.x.ocmod.zip
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
    │
    │
    ├── News3.5.0/
    └── README.md

```

## Folder and File Purpose

- `upload/` folders with the module files for OpenCart version 3.x;
- `attributico.3.x.ocmod.zip` the installation archive for OpenCart version 3.x;
- `News/` folders with descriptions of changes, fixes and supporting materials;
- `README.md` brief instructions on installing and using the module;

## Version Differences

The provided archive structure corresponds to module version \> 3.5.0. The folder name `PHP7.2-7.4/` corresponds to the PHP version. The difference lies in the ioncube-encoding of certain module files for different PHP versions. Inside these folders is `attributico.3.x.ocmod.zip` - the installation archive for OpenCart version 3.x.
