---
sidebar_position: 1
---

# Installation

## Step 1: Downloading the Files

Download the module installation files from your available source. You should receive a ZIP archive:

```bash
Attributico_v3.5.0.zip
```

The archive structure is described in [this article](/technical-specifications/archive-content.md).

## Step 2: Extracting and Uploading the Files

Extract the archive. Open the folder corresponding to your [PHP version](/technical-specifications/compatibility.md).

In the admin panel:

- Navigate to _Extensions ⇒ Extension Installer_;
- Upload the `attributico.3.x.ocmod.zip` file for OpenCart 3.x stores from this folder.

## Step 3: Module Activation

In the admin panel:

- Navigate to _Extensions ⇒ Modules_;
- Find the "Attribut&co" module;
- Activate the module.

## Step 4: User Permission Configuration

User permissions are set automatically upon module activation, but if this fails for any reason, configure them manually.

In the admin panel:

- Navigate to _System ⇒ Users ⇒ User Groups_;
- Grant view and modify permissions for:
  - `extension/module/attributico`;

## Step 5: Event Registration Verification

In the admin panel:

- Reload the page.

Once completed, a new menu item _Attribut&co_ will appear under _Catalog ⇒ Attributes_.

:::warning
**Clear the store and browser cache.**
Cache clearing specifics can be found in the [OpenCart 3.x cache clearing guide](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

If the _Attribut&co_ item does not appear, go to _Extensions ⇒ Events_ and verify that all events are registered.
If no events are registered, go to _Extensions ⇒ Modules_ and deactivate then reactivate the "Attribut&co" module.
