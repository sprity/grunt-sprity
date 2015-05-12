# grunt-sprity

> Grunt task for generating css sprites and corresponding stylesheets with [sprity](https://npmjs.org/package/sprity).

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sprity --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sprity');
```

## The "sprity" task

### Overview
In your project's Gruntfile, add a section named `sprity` to the data object passed into `grunt.initConfig()`.

```js
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sprity: {
      options: {
        'cssPath': '../images',
        'processor': 'css',
        'orientation': 'vertical',
        'margin': 4
      },
      sprite: {
        options: {
          'style': 'dest/css/sprite.css'
        },
        src: ['src/images/*', 'src/images2/*'],
        dest: 'dest/images/sprite.png',
      },
      base64: {
        options: {
          'base64': true
        },
        src: ['src/images/*'],
        dest: 'dest/scss/base64.css',
      }
    }
  });

  // Load the plugin that provides the "sprity" task.
  grunt.loadNpmTasks('sprity');

  // Default task(s).
  grunt.registerTask('default', ['sprity']);
};
```

### Options

* **src:**               Array or string of globs to find source images to put into the sprite.  [required]
* **out:**               path of directory to write sprite file to  [*Default:* process.cwd()]
* **base64:**            inlines base64 encoded sprites in the style file
* **cssPath:**           path or url of sprites on the web server used to reference the sprite in the styles (relative or absolute path or full url)  [*Default:* ../images]
* **dimension:**         used dimensions for the sprite. A combination of ratio and dpi. Read more about dimensions: [How to specify dimensions](https://github.com/sprity/sprity#how-to-specify-dimensions)
* **engine**             image processing engine.  Read more about engines: [Image processing engines](https://github.com/sprity/sprity#image-processing-engines) [*Default:* lwip]
* **format**             output format of the sprite (Depends on what engine is used) [*Default:* png when used with lwip]
* **name**               name of sprite file without file extension [*Default:* sprite]
* **processor**          style processing module. Read more about style processors: [Style processors](https://github.com/sprity/sprity#style-processors) [css]
* **template**           output template file, overrides processor option. Read more about templates: [Templates](https://github.com/sprity/sprity#templates)
* **style**              file to write css to, if omitted no css is written
* **background**         background color of the sprite in hex  [*Default:* #FFFFFF]
* **cachebuster**        appends a "cache buster" to the background image in the form "?<...>" (Boolean)  [*Default:* false]
* **margin**             margin in px between tiles  [*Default:* 4]
* **opacity**            background opacity (0 - 100) of the sprite. defaults to 0 when png or 100 when jpg [*Default:* 0]
* **orientation**        orientation of the sprite image (vertical|horizontal|binary-tree)  [*Default:* vertical]
* **prefix**             prefix for the class name used in css (without .)
* **no-sort**            disable sorting of layout. Read more about: [Layout algorithms](https://github.com/twolfson/layout#algorithms)
* **split**              create sprite images for every sub folder [*Default:* false]
* **style-indent-char**  Character used for indentation of styles (space|tab) [*Default:* space]
* **style-indent-size**  Number of characters used for indentation of styles  [*Default:* 2]

### More

See [sprity](https://npmjs.org/package/sprity) documentation
