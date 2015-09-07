=== Advanced Custom Fields Repeater & Flexible Content Fields Collapser ===
Contributors: mrwweb
Tags: advanced custom fields, acf, repeater
Requires at least: 3.0.0
Donate link: https://www.networkforgood.org/donation/MakeDonation.aspx?ORGID2=522061398
Tested up to: 4.3
Stable tag: 1.4.2
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easier sorting for large repeated fields in the Advanced Custom Fields plugin.

== Description ==

The Repeater and Flexible Content Field features make ACF really powerful, but if you have more than a few fields with either, they becomes unwieldy to sort. This plugin collapses each instance of the repeated fields—**only for the "Row" layout**—to allow for easy sorting.

*To help identify each repeater field group when collapsed, the first field of each repeated field group is shown. See the [screenshots](http://wordpress.org/plugins/advanced-custom-field-repeater-collapser/screenshots/) for an example.*

**Want support for the table layout? Sponsor an update!** [Contact me](http://mrwweb.com/contact/) about sponsoring this feature if you're interested.

------------------------------------------------

**Requirements:**

* [Advanced Custom Fields](http://wordpress.org/extend/plugins/advanced-custom-fields/) 4.X *AND* one or both of the [Repeater Field](http://www.advancedcustomfields.com/add-ons/repeater-field/) or [Flexible Content Field](http://www.advancedcustomfields.com/add-ons/flexible-content-field/) paid add-ons
* ACF 5.X PRO
* Both ACF 4.X and ACF 5.X: Use the **Row Layout**

------------------------------------------------

Contribute to [this plugin on GitHub](https://github.com/mrwweb/ACF-Repeater-Collapser).

**Sponsors:**

* [Angie Meeker Designs](http://angiemeekerdesigns.com/) — Single Row Collapsing Development

**Other contributors:**

* [brasofilo](http://profiles.wordpress.org/brasofilo/)
* [weskoop](http://profiles.wordpress.org/weskoop/)
* [philiphetue](https://github.com/philiphetue)
* [robneu](https://github.com/robneu)

This plugin began as a [support forum thread](http://support.advancedcustomfields.com/discussion/comment/16239) on the ACF site.

== Frequently Asked Questions ==

= Where is the "Collapse Rows" button? I don't see it. =
The plugin only supports the "Row" layout for repeaters.

= Why don't rows collapse? / Why is the row only grayed out? =
To help identify each repeater field group when collapsed, the first field of each repeated field group is shown. See the screenshots for an example.

When possible, use a short field (like a text field or dropdown) as the first row in a repeatable fieldset.

= Can I collapse individual rows? =
Now you can, as of version 1.3.0.

= What exactly is the "Collapse All Rows" button behavior =
With the addition of the ability to collapse single rows, the button now is always in "Collapse" mode unless all rows are collapsed. Then it's "Expand."

== Installation ==

1. Download the plugin.
1. Upload all files to /wp-content/plugins/
1. Activate the plugin on the Plugins page.

== Screenshots ==

1. Even with a few fields per repeater instance, it becomes unwieldy to sort.
2. This plugin collapses all but the rows first field for easy sorting. (Only "Row Layout" fields are supported.)
3. Once collapsed, easily reorder your rows!
4. The plugin supports nested repeaters.
5. Flexible fields too!
6. New in v1.3.0, you can collapse individual fields! (Thanks to Angie Meeker Designs for sponsoring this feature.)

== Changelog ==
= 1.4.2 (7 Sep 2015) =
* [Fix] Include [compatibility filter](http://www.advancedcustomfields.com/blog/acf-pro-5-2-7-update/) to fix in ACF PRO since v5.2.7.
* [Fix] Prevent fatal error if ACF is not activated.
* [Misc] Code cleanup. Thanks to robneu on GitHub.

= 1.4.1 (19 Nov 2014) =
* [Fix] Pass `event` to collapsing JS functions to prevent Firefox errors.
* [Fix] No margin on table-layout fields (ACF5 only)
* A big thanks to [@tmconnect](https://github.com/tmconnect) for the pull requests that made up this release.

= 1.4.0 (15 Aug 2014) =
* [New] **ACF5 Support**
* [Fix] aria-controls attribute fix
* Note: The plugin supports both ACF4 and ACF5; however, all future feature improvements will only be made for ACF 5.X.
* Did this plugin save you some time or help build a site for a client? [Buy me a beverage!](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=HH4FKZHK75MTN&lc=US&item_name=MRW%20Web%20Design%20%2f%20Mark%20Root%2dWiley&item_number=Buy%20Me%20a%20Beverage%21%20%2d%20ACF%20Repeater%20Collapser&currency_code=USD&bn=PP%2dDonationsBF%3abtn_donateCC_LG%2egif%3aNonHosted).

= 1.3.0 (18 Jul 2014) =
* [New] **Ability to collapse single fields**
* [New] Added aria-expanded / aria-controls attributes on rows for improved accessibility
* [Tweak] Clarified button text and added icons to buttons for improved UI
* [Fix] Fixed errant closing tag on <button> element
* Thank you to [Angie Meeker Designs](http://angiemeekerdesigns.com/) for sponsoring this update's new individual row collapsing feature!
* Thank you to @61pixels and @lagdonkey for bug reports during development.

= 1.2.0 (22 Apr 2014) =
* [New] Support for nested repeater and flexible field content. (Thanks to @philiphetue)
* Use <button> element in admin for cleaner markup
* Update "Tested up To" to 3.9

= 1.1.0 (11 Apr 2013) =
* [New] Support for "Flexible Content Fields" add-on thanks to @weskoop.

= 1.0.2 (9 Apr 2013)  =
* Fixed missing semicolon. Presumably source of update issue.

= 1.0.1 (9 Apr 2013)  =
* Fixed mismatched filenames.

= 1.0 (8 Apr 2013) =
* Initial commit. Submitted to plugin repository.

== Upgrade Notice ==
= 1.4.2 =
ACF5 Compability Fix. Code cleanup.

= 1.4.0 =
ACF5 support is here!

= 1.3.0 =
New support for collapsing individual rows!

= 1.1.0 =
Support for "Flexible Content Fields" add-on thanks to @weskoop.

= 1.0.2 =
Major plugin fix & resolving update error

= 1.0.1 =
The previous version probably didn't work. Sorry! Use this one.