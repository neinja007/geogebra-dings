export type Tag = (typeof tags)[number];

export type Element = {
	type: 'command' | 'tool';
	name: string;
	description: string;
	tags?: Tag[];
};

export const tags = ['video', 'audio', 'image', 'text', 'other'] as const;

export const elements: Element[] = [
	{
		type: 'command',
		name: 'video',
		description: 'Video',
		tags: ['video']
	}
];
