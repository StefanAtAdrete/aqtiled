# Cookiebot - Cookie consent, Cookie monitoring and Cookie control

This module offers Drupal integration for the third party Cookiebot service.
Cookiebot helps make your use of cookies and online tracking GDPR and ePR
compliant.

Note: Neither Cookiebot or this module will out-of-the box prevent cookies to be
placed on your website or prevent other tracking technologies to run. However,
the JavaScript events or special HTML attributes of Cookiebot can be used by a
developer to achieve exactly that.

For a full description of the module, visit the
[project page](https://www.drupal.org/project/cookiebot).

Submit bug reports and feature suggestions, or track changes in the
[issue queue](https://www.drupal.org/project/issues/cookiebot).


## Table of contents

- Requirements
- Installation
- Configuration
- Cookiebot renew
- Maintainers


## Requirements

First of all, you will need a Cookiebot account with a configured domain.

This module requires the following outside of Drupal core:

- [Cookiebot Domain Group ID (CBID)](https://manage.cookiebot.com)


## Installation

Install the Cookiebot - Cookie consent, Cookie monitoring and Cookie control
module as you would normally install a contributed Drupal module. Visit
https://www.drupal.org/node/1897420 for further information.


## Configuration

1. Navigate to Administration > Extend and enable the module.
2. Navigate to Administration > Configuration > System > Cookiebot
   configuration to configure the Cookiebot integration.
   You can visit /admin/config/cookiebot to reach the configuration.
3. Enter the cookiebot Domain Group ID. You can obtain that at
   https://manage.cookiebot.com in 'Your scripts' tab.
4. Save configuration.

You can optionally display the full cookie declaration on a specific node - page
or place our block via admin/structure/block (Layout Builder supported).


## Cookiebot renew

To allow users to change cookiebot settings, you can add a menu link with -
URL "/cookiebot-renew" or a link anywhere with a class `cookiebot-renew`.


## Maintainers

- Julian Pustkuchen - [Anybody](https://www.drupal.org/user/291091)
- Daniël Smidt - [dmsmidt](https://www.drupal.org/user/198330)
- Alex Milkovskyi - [a.milkovsky](https://www.drupal.org/user/1761220)
- Steven Buteneers - [Steven Buteneers](https://www.drupal.org/user/3301055)
- Mark Conroy - [markconroy](https://www.drupal.org/user/336910)
- Bram Driesen - [BramDriesen](https://www.drupal.org/user/3383264)

Supporting organizations:

- [Synetic](https://www.drupal.org/synetic)
- [Styria Digital Services](https://www.drupal.org/styria-digital-services)
- [CN Group CZ s.r.o.](https://www.drupal.org/cn-group-cz-sro)
