# Block.js
Block.js is the engine for Droppy's blocks.
## Usage
To create a block, create an `<img>` element with the class `droppyBlock`. The `src` should be https://img.shields.io/badge/BlockType-BlockName-Color?style=for-the-badge (replace BlockType, BlockName, and Color with the corresponding values). Available colors can be found at [https://shields.io/#colors](https://shields.io/#colors). Set the `alt` text to the code that your block represents. Then, add the JavaScript from [https://raw.githubusercontent.com/droppycode/blockjs/master/block.min.js](https://raw.githubusercontent.com/droppycode/blockjs/master/block.min.js) and use `blockjs.initialize()` to finish setting everything up.
