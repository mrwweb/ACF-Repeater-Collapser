=== Advanced Custom Fields Repeater & Flexible Content Fields Collapser ===
Contributors: mrwweb
Tags: advanced custom fields, acf, repeater
Requires at least: 3.0.0
Donate link: https://www.networkforgood.org/donation/MakeDonation.aspx?ORGID2=522061398
Tested up to: 3.9
Stable tag: 1.2.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Easier sorting for large repeated fields in the Advanced Custom Fields plugin.

== Description ==

**This plugin requires both the [Advanced Custom Fields](http://wordpress.org/extend/plugins/advanced-custom-fields/) plugin (version 4.0+ only) *AND* one or both of the [Repeater Field](http://www.advancedcustomfields.com/add-ons/repeater-field/) or [Flexible Content Field](http://www.advancedcustomfields.com/add-ons/flexible-content-field/) paid add-ons (or the PRO plugin for ACF 5.0+).**

Both add-ons make "ACF" much more powerful, but if you have more than few fields in either, it becomes unwieldy to sort. This plugin collapses each instance of the repeated fields—only for the "Row" layout with the Repeater Field—to allow for easy sorting.

*To help identify each repeater field group when collapsed, the first field of each repeated field group is shown. See the screenshots for an example.*

**What individually collapsible repeater fields? Sponsor an update!** [Contact me](http://mrwweb.com/contact/) about sponsoring this feature if you're interested.

Contribute to [this plugin on GitHub](https://github.com/mrwweb/ACF-Repeater-Collapser).

This plugin began as a [support forum thread](http://support.advancedcustomfields.com/discussion/comment/16239) on the ACF site.

Other contributors:

* [brasofilo](http://profiles.wordpress.org/brasofilo/)
* [weskoop](http://profiles.wordpress.org/weskoop/)
* [philiphetue](https://github.com/philiphetue)

== Frequently Asked Questions ==

= Where is the "Collapse Rows" button? I don't see it. =
The plugin only supports the "Row" layout for repeaters.

= Why don't rows collapse? / Why is the row only grayed out? =
To help identify each repeater field group when collapsed, the first field of each repeated field group is shown. See the screenshots for an example.

As a work around, use a short field (like a text field or dropdown) as the first row in a repeatable fieldset.

= Can I collapse individual rows? =
This is the most-requested feature. Consider submitting a pull request [on GitHub](https://github.com/mrwweb/ACF-Repeater-Collapser) or sponsoring that update. ([Contact me](http://mrwweb.com/contact/) if you're interested in sponsoring the feature development.)

== Installation ==

1. Download the plugin.
1. Upload all files to /wp-content/plugins/
1. Activate the plugin on the Plugins page.

== Screenshots ==

1. Even with a few fields per repeater instance, it becomes unwieldy to sort.
2. This plugins creates a new Collapse/Expand button.
3. When collapsed, only the first field for each repeated fieldset is shown.
4. Now it's easy to click-and-drag to change the field order.

== Changelog ==
= 1.2.0 (22 Apr 2014) =
* [New] Support for nexted repeater and flexible field content. (Thanks to @philiphetue)
* Use <button> element in admin for cleaner markup
* Update "Tested up To" to 3.9

= 1.1.0 =
* [New] Support for "Flexible Content Fields" add-on thanks to @weskoop.

= 1.0.2 =
* Fixed missing semicolon. Presumably source of update issue.

= 1.0.1 =
* Fixed mismatched filenames.

= 1.0 =
* Initial commit. Submitted to plugin repository.

== Upgrade Notice ==
= 1.1.0 =
Support for "Flexible Content Fields" add-on thanks to @weskoop.

= 1.0.2 =
Major plugin fix & resolving update error

= 1.0.1 =
The previous version probably didn't work. Sorry! Use this one.