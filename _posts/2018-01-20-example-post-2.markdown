---
layout: post
title:  Echo park drinking vinegar letterpress locavore waistcoat kale chips
date:   2019-01-20 09:11:03
description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
thumbnail: avocado-toast.jpg
categories: category2
list: <% _.forEach(ingredients, function(name) { %><li><%= name %></li><% }); %>
ingredients:
  - 2 Tbsp. extra-virgin olive oil
  - 1 lb. sweet or hot Italian sausage, casings removed
  - 5 garlic cloves, 3 thinly sliced, 2 finely grated
  - 1/2 tsp. dried oregano
  - 1/4 tsp. crushed red pepper flakes (optional)
---

## Overview (h2)

This is what a post looks like in this theme. There are callout boxes you can put at the top. This theme was inspired by a recipe site, but you can probably think of a way to incorporate these detail boxes into a variety of genres. If it isn't applicable to you, just hide it.

This theme comes prepped with stylings for H2s (above) and H3s (below). Feel free to tweak these styles or add additional header styles based on your needs.

### Typography (h3)

Here's a demo of typography stylings for this theme. There are stylings for `<h2>` and `<h3>`in addition to post titles. The first `<h2>` elements within a post will have a solid black border above it.

* Unordered lists are supported
* They look like This
  - Here's an indented item

By default, the `post` layout includes a templated call out box for ingredients. If you don't plan on using ingredients, or don't have a use for a callout box, either revise the template, hide the element, or create another post layout type.

1. Ordered lists are supported
2. They look like this

All typography styles can be accessed within `/_sass/typography.sass`.

### How to Use and Dependencies (h3)

In addition to Jekyll, you'll need to have Gulp, BrowserSync and SASS installed. I used ShakeyShane's [jekyll-gulp-sass-browser-sync](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync) project as a base for this theme during development.

Also, this theme uses [lunr.js](https://lunrjs.com/) for the search function. Big thanks to them.

You can fork or download this theme from my repo [here](https://github.com/ninapetrop/a-bon-blog).

If you'd like, help me stay caffeinated and keep me going by [buying me a coffee](https://paypal.me/NinaPetropoulos?locale.x=en_US).
