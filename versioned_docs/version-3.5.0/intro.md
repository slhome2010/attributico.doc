---
sidebar_position: 1
---

# Introduction

The **Attribut&co** module is an extension for managing product attributes (referred to as "characteristics" in Russian-language versions) in online stores running on the OpenCart platform.

## Module Mission

To simplify working with attributes and their values. To display the structure of attributes more clearly. To apply more modern editing technologies. To replace routine manual labor with automated operations and move to batch processing of changes.

## Main Idea

Creating a set of attributes that are the same for a certain product category and linking this set to the category. It is assumed that products of the same category have, roughly, the same set of attributes. The structure of categories and subcategories in Opencart is quite well developed, so the link to the category was chosen, not to the manufacturer, for example. Bringing the structure of attributes and their values to the form:

```bash

Product Category
    └── Attribute
          └── Value (list of values) of the attribute

```

Representing the structure of attributes and values in the form of trees.

## Key Capabilities

🚀 **Absolute Clarity & Control**
Your entire structure of attributes and values is displayed logically in a convenient tree format. Create new groups and attributes on the fly within a single window. Instantly find what you need with fast in-tree filtering and search.

✨ **Intuitive Visual Management**
Forget tedious manual input with full Drag-and-Drop and Copy-Paste support:

- **Drag and Drop** attributes between groups or categories effortlessly.
- **Sort** lists with a simple movement of your mouse.
- **Merge** attributes seamlessly without losing existing values or product links.
- Assign entire batches of attributes to categories with a single drag action.

⚡ **Batch Processing & Automation**
Eliminate repetitive tasks when managing product data:

- Set up a "Default Template" and the module will automatically insert the correct value upon adding an attribute to a product.
- Add attributes to all products within a specific category in just a few clicks.
- Manage template insertion methods flexibly at the product level.
- Instantly view products filtered by a specific attribute or value.
- Automatically generate attributes for selected categories.

🧹 **Powerful Database Cleaning Tools**
Maintain a pristine and optimized database with a unique set of maintenance tools:

- Smart search and removal of database "junk": empty values, unused attributes, and broken links.
- One-click merging of duplicate attributes.
- Batch case conversion (e.g., Capitalizing the first letter of hundreds of values at once).
- Easy batch replacement of attribute value separators.
- Attribute defragmentation to perfectly prepare your data for parsing and importing.

🌍 **Effortless Multilingual Support**

- Add any number of languages: all new groups and attributes will automatically **synchronize** across their respective language trees.

- Work with multiple languages simultaneously and smoothly.
- **Clone** structures (groups, attributes, or values) from one language to another instantly, drastically speeding up the localization of your store.

:::tip
If you want something more, you should check out the professional module [**Attribut&pro**](https://slhome2010.github.io/attributipro.doc/)!

You can also view the [module comparison chart](/compare-modules.md).
:::
