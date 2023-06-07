import { FaCode, FaPencilAlt, FaUniversity } from 'react-icons/fa'

import { IntroTileType } from '../types/introTile'

const introTiles: IntroTileType[] = [
	{
		title: 'Coding',
		desc: 'I consider myself lucky that I get to wake up and do what I love every day. I see code as a form of art where you can start with a blank canvas and create anything that comes to mind.',
		icon: FaCode,
	},
	{
		title: 'Blogging',
		desc: 'I am in no way a writer but I like to share my past experiences and cool things I have learned. I hope that some people can benefit from them and even provide valuable feedback.',
		icon: FaPencilAlt,
	},
	{
		title: 'Learning',
		desc: 'I have a strong passion for continuous learning and collaborating with others to rapidly expand upon my developer journey while staying open-minded to new technologies and ideas.',
		icon: FaUniversity,
	},
]

export default introTiles
