# Local standalone editions

This folder contains large, generated HTML editions intended for sharing with
readers who do not have the development server. The HTML files are derived
artifacts, remain local, and are ignored by Git; their source content and
exporter are versioned elsewhere in the project.

For Topic IX, run `npm run package:topic-ix-review`. The command builds once,
writes the individual Topic IX HTML with live links to the published website,
and then creates the Topic VIII–IX review ZIP from temporary cross-linked
copies. Building the ZIP never overwrites the individual Topic IX file.

For Topic XII, run `npm run package:topic-xii-review`. The command builds the
site and exports the continuous `/proof/topic-xii/` chapter directly to the
portable file `Critical_Invariant_Polygons_Topic_XII.html` in this folder.
