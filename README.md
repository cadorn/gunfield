**Status: DEV**

Gunfield
========

A **Gunfield** is a [gun](https://github.com/amark/gun) [Mesh](https://github.com/amark/gun/wiki/Glossary) with the following properties:

  * States:
    * **0** - *Zero* - The mesh is at rest with all **Policed** [Graphs](https://github.com/amark/gun/wiki/Glossary)
       persisted to **long term static read-only** storage.
      * **Policed Graphs** are graphs with change and replication controls established and actively monitored.
    * **1** - *Living* - One or more *Policed Graphs* are inconsistent.
  * Gunfields are nestable
  * Gunfields are limited to the RAM available in the *primary storage [Peers](https://github.com/amark/gun/wiki/Glossary)*.

Install
-------

    nvm use 4   # Should work with later versions
    npm install gunfield --save

Demos
-----

  * **Gunshow** - [github.com/cadorn/gunshow](https://github.com/cadorn/gunshow) - Showcase rich data using [riot](http://riotjs.com/) components.


API
===

*TODO*


Provenance
==========

Original source logic under [MIT License](https://opensource.org/licenses/MIT) by [Christoph Dorn](http://christophdorn.com).
