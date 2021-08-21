let a: number = 4;


let b: string = 'strstr';
let c = true;

const d: string[] = ['str1', 'str2'];  //массив строк

let e: any = 3;

function test(a: string): number | string {
	return '';
}

//void значит что функция ничего не вернет
const test2 = (a: number): void => {
	return
}


//функция countCoord ожидает обьект состоящий из двух свойств первое число и второе число
function countCoord(coord: { lat: number, long: number }) {

}


function printIt(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === 'string') { //если тип id = string
		console.log(id.toUpperCase()) // тогда id доступны все строчные методы
	}
}

//функция принимает число или массив чисел
function getSum(a: number | number[]) {
	if (Array.isArray(a)) {  //если "а" это Array то для "а" будут достпны все методы массивов

	}
}

//undefined может быть равен только undefined
const x: undefined = undefined;
const z: null = null;


