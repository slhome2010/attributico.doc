---
sidebar_position: 2
---

# Installation

1\. Download the module installation files from your available resource. You should receive two zip archives: `Attributico_v3.2.8.zip` and `License.zip`. The archive structure is described in [this](/technical-specifications/archive-content.md) article.

2\. Extract the archive. Open the folder corresponding to [your PHP version](/technical-specifications/compatibility.md). Copy the contents of the `upload.../` folder, corresponding to your OpenCart version, over the site's folder structure.

3\. In the admin panel, go to *Extensions ⇒ Modules*. The "Attribut&co" module should appear. Install (activate) it.

4\. In the admin panel, navigate to *System ⇒ Users ⇒ User Groups* and set permissions for viewing and editing `module/attributico` or `extension/module/attributico` (for OpenCart versions >2.2).

5\. Extract the `License.zip` archive. Copy the contents of the folder corresponding to your PHP version over the site's folder structure.

6\. In the admin panel, go to *Extensions ⇒ Extension Installer* and upload the files `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` (for OpenCart 2.x) or `attributico.3.x.ocmod.zip` (for OpenCart 3.x) from the `ocmod` folder.

If you are using the OCTEMPLATE theme, do not perform this step. See the installation instructions for modifications below.

7\. In the admin panel, go to *Extensions ⇒ Modifications* and refresh the modifications.

After completing these steps, the *Catalog ⇒ Attributes ⇒ Attribut&co* menu item should appear.

:::caution
Clear the store and browser cache. The specifics of cache clearing for OpenCart 3.x are described, for example, [here](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/).
:::

:::warning
If you have previously used an older version of the module and installed modifications directly into the `system` folder, you must remove them.

This means that the files `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` should not be present in your site's `system` folder.
:::

:::info
In some translated versions, the term `Extensions` may appear as `Add-ons`, and `Modifications` may be referred to as `Modifications Manager`.  
The word `Attributes` is often translated as `Characteristics`.
:::

:::tip
For OCTEMPLATE users!

OCTEMPLATE uses a large number of modifications, so OpenCart's ocmod system may not have enough resources to install the module's modification.

To resolve this issue, follow these steps:

Do not perform step 5 of the installation instructions.  
For OpenCart versions below 3.0.x, copy the files `attribut&co.2.x.ocmod.xml` and `autocomplete.ocmod.xml` directly into the `system` folder of your site.  
For OpenCart 3.0.x, extract the `install.xml` file from the `attributico.3.x.ocmod.zip` archive, rename it to `attributico.3.ocmod.xml`, and then copy it into the `system` folder.
:::

:::note
Possible issues with OpenCart 1.5.x **(outdated)**  

This module uses `jQuery UI - v1.11.4+`, while OpenCart 1.5.x uses `jQuery UI - v1.8`.  
During installation, the older version will be replaced, as Attribut&co will not work otherwise.  
As a result, some third-party modules may temporarily malfunction.
:::

## Update

1\. After downloading the new version, extract the archive and copy the contents of the `upload.../` folder corresponding to your OpenCart version over the site's folder structure.

2\. For OpenCart 2.x and 3.x, you must reinstall the modifications (`...ocmod.xml` or `...ocmod.zip`) as described above. Then, in the admin panel, go to *Extensions ⇒ Modifications* and refresh them.

3\. When upgrading to a new version, you may need to deactivate (uninstall) the module and immediately activate it again in *Extensions ⇒ Modules*.  
This operation will create additional database tables and new event handlers if they have been added.

4\. Clear the [store cache](https://shopiweb.ru/opencart-3/kesh-opencart-3-ochistka-kesha/) and browser cache.

5\. Edit and save the module settings again.

## Uninstallation

1\. In the admin panel, go to *Extensions ⇒ Modules*, find the "Attribut&co" module, and click "Uninstall".

2\. For OpenCart 2.x, delete the files `attribut&co.2.x.ocmod.xml, autocomplete.ocmod.xml` from the `/system` folder.  
For OpenCart 3.x, delete the files `attribut&co.2.x.ocmod.xml` from the `/system` folder if you copied them there.  
Alternatively, in the *Extensions ⇒ Modifications* menu, remove everything related to "Attribut&co".

### Database

During module installation, the database will create a **category_attribute** table with fields  
`` `category_id` INTEGER(11) NOT NULL`` and `` `attribute_id` INTEGER(11) NOT NULL.``

Starting from version 2.0.1, an additional field `` `duty` TEXT NOT NULL`` is added to OpenCart's standard **attribute_description** table to store [Duty Templates](general-info/duty.md).

Additionally, extra tables will be created for compatibility with future enhanced versions of the module.  
The table structure can be viewed in the [diagram](technical-specifications/database.md).

:::tip
During the module removal process, no tables or fields are deleted. If this is critical for you, remove them manually, for example, using PhpMyAdmin.
:::
