# REACTJS SVG ICON

SVG icon set for React JS 🎨

-   Easy to use
-   Customizable
-   Lightweight
-   Component base

## Install

To install REACTJS SVG ICON

```bash
  npm i reactjs-svg-icon --save
```

## Usage

Check the example folder for more details. [Example](https://github.com/firmnardians/reactjs-svg-icon)

```javascript
import { IconArrowUp } from 'reactjs-svg-icon';

function App() {
	return (
		<div className='App'>
			<IconArrowUp color='#ffffff' size='30px' />
		</div>
	);
}
```

## Props

Add props for icon customization, all data types are string.

| Props      | Default   | Description                                         |
| :--------- | :-------- | :-------------------------------------------------- |
| `size`     | `18px`    | Change icon size                                    |
| `color`    | `#000000` | Change icon color                                   |
| `weight`   | `2`       | Change icon weight                                  |
| `lineCap`  | `round`   | Change strokeLineCap icon - ( round, butt, square ) |
| `lineJoin` | `round`   | Change strokeLineJoin icon - ( round, bevel, arcs ) |

## Authors

-   [@firmnardians](https://github.com/firmnardians)

## License

[MIT](https://choosealicense.com/licenses/mit/)
