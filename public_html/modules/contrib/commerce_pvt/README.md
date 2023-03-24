## INTRODUCTION

This module aims to expose all the product variation in a VIEW table and adding
them to cart.

This kinda is a usefull tool for a wholesaling usage of the commerce where a
person who's buying has to add many variations with different quantities at
once.


## REQUIREMENTS

We only have one dependency here  `Drupal 8.9 || 9 + drupal/commerce:^2.17`


## KNOWN PROBLEMS

This module depends on this patch for commerce: #3017662: Order Item Type
Resolving Mechanism!
But, if you don't have any custom logics or different order types / roles to
manage - fear not installing this patch anyway - it won't change any commerce
logic for you.
The Chain Resolving process of the Order Item Type is transparent for you.
Yet, you still need the patch for this module to work.


## PAY ATTENTION:

If you want your Drupal project to accept the patches from dependencies (like in
this module: we need to patch commerce module to work properly)
we need the `cweagans/composer-patches` and specify this option too:
```
{
  ...
  "require": {
      "cweagans/composer-patches": "^1.5.0"
  },
  "extra": {
      "enable-patching": true
  }
}
```

## INSTALLATION

Since this module relies on a patch for Drupal commerce (for now), the
composer.json includes the patch link so the installation of this module
**MUST** come through the composer:

```
$ composer require cweagans/composer-patches
$ composer config extra.enable-patching true
$ composer require drupal/commerce_pvt
```


## CONFIGURATION

Only the view `commerce_pvt_form` can be configured via adding new fields or so.
