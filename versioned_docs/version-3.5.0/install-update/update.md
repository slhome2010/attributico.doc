---
sidebar_position: 2
---

# Update

In the new version of the **Attributico** module, we have completely abandoned the use of the outdated modification mechanism (OCMOD) in favor of a modern architecture based on built-in **OpenCart Events** and dynamic DOM tree manipulation via JavaScript.

This approach:

- Increases the stability of the module.
- Eliminates potential conflicts with other modules at the `install.xml` modification level.
- Simplifies the installation and update process.

Below is a step-by-step guide for migrating from previous versions to the new one.

## Step 1. Removing the Old Modification (OCMOD)

Since the new version works through the Events interface, we need to remove the old interventions in the store code.

1. Log into the admin panel of your OpenCart store.
2. Navigate to **Extensions** -> **Modifications**.
3. Find the modification named **Attributico** (or `attributico_3`) in the list.
4. Disable it (disable button) or completely delete it (trash can button).
5. **Important:** Click the **Refresh** button (blue button with arrows in the upper right corner) to clear the modification cache.

## Step 2. Uploading New Files

1. Extract the archive containing the new version of the module on your computer.
2. Upload the files from the `upload` folder (or via the built-in extension installer) to your store's server, agreeing to replace existing files.
   _Note: When using the built-in installer in OpenCart 3, simply upload the `.ocmod.zip` archive as usual._

## Step 3. Activating the Events System

For the new version of the module to properly register system events for product form integration, you need to:

1. Navigate to **Extensions** -> **Extensions**.
2. Select the **Modules** type from the dropdown list.
3. Find the **Attributico** module and click the **Uninstall** button (red button with a minus sign). This will remove old database settings.
4. Click the **Install** button (green button with a plus sign). During installation, the module controller will write the necessary Event hooks into the OpenCart database.
5. Click the **Edit** button (pencil icon).
6. Configure the necessary module settings and click the **Save** button (blue floppy disk in the upper right corner).

## Step 4. Checking Functionality

1. Clear your browser cache (using the `Ctrl + F5` shortcut on the product edit page).
2. Clear the template cache (in the OpenCart dashboard, click the "gear" icon in the upper right -> refresh theme cache).
3. Go to any product form in the admin panel and open the **Attributes** tab.
4. Ensure that all Attributico module controls (buttons, search, synchronization) are displayed correctly.

---

🎉 **Done! Your module has been successfully updated to the new version without OCMOD.**

## Additional: Disabling Product Form Modification

If you use third-party solutions (e.g., the _Attributipro_ module) to manage attributes inside the product form and do not want _Attributico_ to intervene with the appearance of the standard OpenCart product form, you can easily disable these changes.

Since the module now runs on Events, you simply need to disable two specific events:

1. Navigate to **Extensions** -> **Events**.
2. Find the event with the code `attributico_add_script` in the list. Click the **Edit** button, change the status to **Disabled**, and then save.
   _(This event is responsible for injecting the module's JavaScript file into the product page)._
3. Find the event with the code `attributico_product_form_before` in the list. Also change its status to **Disabled** and save.
   _(This event is responsible for injecting additional fields, such as Group and Sort Order, into the product form data)._

After disabling these two events, _Attributico_ will stop outputting its scripts and controls in the "Attributes" tab of the product form, however, all other functions and mass editing via the module's own panel will continue to operate normally.
