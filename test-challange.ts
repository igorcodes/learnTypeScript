interface Tag {
	name: string;
	value: number;
}

interface Info {
	desc: string;
	isActive: boolean;
}


interface Test {
	userId: number;
	id: number;
	title: string;
	info: Info;
	tags: Tag[];
}

