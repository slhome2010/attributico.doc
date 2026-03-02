---
sidebar_position: 6
---

# Category Attribute Support

Integration with the product page allows partial automation of the process of adding **Category Attributes** to a product.

Adding **Category Attributes** occurs at the moment the product is "linked" to a specific category or when its visibility in the category is set.
Physically, this happens when a checkbox next to a category is selected, or when the Main Category is changed on the **Links** tab (Ocstore), or when a category is selected from the list (OpenCart).

| ![Category link](/img/tutorial/en/v350/category_link_en.png) |
| :----------------------------------------------------------: |
|                       _Category link_                        |

Removing **Category Attributes** occurs when the product is "unlinked" from a category. The removal must be confirmed in a pop-up window.

Adding **Category Attribute Values** to a product follows the **`Method`** set in the settings of [Adding Attribute Values to a Product](/settings/product.md) or the [**`Overridden Method`**](/opencart-integration/method-inserting.md).

To add all **Attributes** from all categories to which a product is linked, use the `Category Attributes` button.
![Green button](/img/tutorial/en/v350/green_button_en.png)

The button's function is independent of the setting [Add category attributes to products](/settings/category.md).

:::info
Everything described above regarding the addition of **Category Attributes** and their **Values** applies to a single, specific, editable product.

If you need to add **Category Attributes** to all products in a certain category, use the module's [Category Attributes](/module-features/category-attributes.md) feature or the [Category Attributes Tool](/tools/category-attributes.md).
:::
