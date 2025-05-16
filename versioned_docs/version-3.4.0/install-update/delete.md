---
sidebar_position: 24
---

# Uninstallation

## Step 1: Deactivating the Module

In the admin panel:

- Navigate to *Extensions ⇒ Modules*  
- Click "Uninstall" next to the "Attribut&co" module

## Step 2: Removing Modifications

- For OpenCart 3.x: delete the `attribut&co.3.x.ocmod.xml` file (if it was manually copied to `/system`)  
  Alternatively, remove the modifications under *Extensions ⇒ Modifications*

## Step 3: Deleting Module Files

- Go to *Extensions ⇒ Extension Installer*  
- Delete all `attributico3.x.ocmod.zip` entries from the installation history

:::danger
Never perform these actions if **Attribut&co** and **Attribut&pro** are used together.
:::

---

## Database

During installation, additional [tables](technical-specifications/database.md) are created.

:::tip
Uninstalling the module **does not remove** these database tables and fields. If necessary, delete them manually via PhpMyAdmin.
:::
