type Point = {
	x: number,
	y: number
};

type stringOrNumber = string | number;


interface Point2 {
	x: number,
	y: number
};


interface i3DPoint extends Point2 {
	z: number;
}


function print(coord: Point2) {

}


// обьявляем тип XPoint который состоит из Point и z число
type XPoint = Point & {
	z: number;
}


//Интерфейсы можно дополнять
interface Test {
	a: number;
}

interface Test {
	userId: number,
	id: number,
	title: string,
	info: { desc: string, isActive: boolean },
	tags: [{ name: string, value: number }]
}

interface Test {
	"userId": number;
}





















//Рекомендуется везде использовать интерфейсы, типы только по необходимости


const f = (point: i3DPoint) => {
	const d: Point2 = point as Point2;
}

//используем каст типов (конвертируем типы) - as - как какой тип
const MyCanvas = document.getElementById('canvas') as HTMLCanvasElement


