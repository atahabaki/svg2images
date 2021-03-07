# svg2images

Convert your SVG animation to image sequences :D
This software is based on [this video](https://www.youtube.com/watch?v=YoT0BlR-kTo), I'm just customizing it.

## Usage

```
svg2images [options]
```

Create an html file and import `svg2images.js` script file into it, then run the program.

### Options

* **-i, --input [path]**
	```text
	Path to the input file, to point the current directory
	use "./path/to/svg_included.html"
	```
*	**-w, --width [int]**
	```text
	Width of the browser, prepare your HTML file great. So, there won't be any
	whitespaces, margins, and etc.
	```
*	**-h, --height [int]**
	```text
	Height of the browser, same as the width, prepare well.
	```
*	**-s, --start [int]**
	```text
	Animations, start frame...
	```
*	**-e, --end [int]**
	```text
	Animations end frame, if it includes a loop, consider passing this value as
	well. This program currently won't detect the loop.
	```
*	**-o, --output [string]**
	```text
	Output folder.
	```
*	**-n, --naming [string]**
	```text
	Output naming, example parameter "output%05d.png" "output" will be constant for
	all the output files, and the "%05" means, if the current value of the frame is
	1 it should be "output00001.png", if 60 "output00060.png"... So basically after
	the "%" the first number can be a character as well but it is used for
	replacement, the second part is for determining how much pad will be applied.
	The d before the ".png" is not important at all.
	```

Good luck!.. :100: :ok_hand:

## Customizations:

- [ ] CLI arguments for SVG document (width, height, animation duration, and frame rate)
- [ ] CLI arguments for exporting the file
- [ ] CLI argument for input file for html
- [ ] CLI argument for input file for svg
