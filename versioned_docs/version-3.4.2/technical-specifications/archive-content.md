---
sidebar_position: 1
---

# Archive Structure

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

## Folder and File Purpose

- `upload/` folders with the module files for different OpenCart versions;
- `attributico.3.x.ocmod.zip` the installation archive for the OpenCart versions 3.x;
- `News/` folders with descriptions of changes, fixes and supporting materials;
- `README.md` brief instructions on installing and using the module;

## Version Differences

The provided archive structure corresponds to the module version > 3.3.2. The folder name like `PHP7.1/`, ..., `PHP7.2-7.4/` corresponds to the PHP version. The difference is in the ioncube-encoding of some module files for different PHP versions. Inside these folders is `attributico.3.x.ocmod.zip` - the installation archive for the OpenCart versions 3.x.
