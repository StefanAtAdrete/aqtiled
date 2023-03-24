# ShareThis Block module

This module provides a simple way of displaying the ShareThis service's share buttons on a Drupal site.

## Install

Install the module as usual (composer method recommended) and enable it.

## Configuration and use

You must sign up for a ShareThis account and configure your buttons as you'd
like them. The easiest way to get started is to visit
[https://sharethis.com/onboarding/](https://sharethis.com/onboarding/) and work
through the steps.

You will need the property id which you can find by clicking on the button
titled 'Get The Code' if you're logged in to ShareThis on their site. An example
of the code snippet looks like this:

```html
<script type='text/javascript'
src='https://platform-api.sharethis.com/js/sharethis.js#property=5ece3dfd9d73fec01243b231&product=inline-share-buttons&cms=unknown'
async='async'></script>
```

The bit you need is after the `property` parameter, in this example the value
would be `5ece3dfd9d73fec01243b231`

Now go to the ShareThis settings form in your Drupal site:
[admin/config/user-interface/sharethis](admin/config/user-interface/sharethis).

Paste that code into the 'Property ID' field in the ShareThis settings form.

Choose whether you want the 'sticky' version of the ShareThis widget or the
'Inline' version. If you want the sticky one you'll also need to specify that in
the config for your widget on the ShareThis site.

If you've chosen the 'Inline' version you can place it where you want in your
Drupal regions by placing the corresponding ShareThis block.

Once you've placed the block you should see it in the front end of your site.

If you want to change anything like the number or type of share buttons, all of
this kind of configuration is done on the ShareThis site.
