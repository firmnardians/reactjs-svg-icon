# SeniRupa

SeniRupa is a tool for React design. 🎨

-   Easy to use
-   Customizable
-   Lightweight
-   Component base

## Install

To install SeniRupa

```bash
  npm i senirupa --save
```

## Usage

Check the example folder for more details. [Example](https://github.com/firmnardians/senirupa/tree/master/example)

```javascript
import { IconArrowUp } from 'senirupa/icon';

function App() {
	return (
		<div className='App'>
			<IconArrowUp color='#ffffff' size='30px' />
		</div>
	);
}
```

## Icon Props

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
