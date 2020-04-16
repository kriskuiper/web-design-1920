import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

module.exports = {
	input: 'src/app.js',
	output: {
			file: 'dist/scripts/bundle.js'
	},
	plugins: [
		production && terser()
	]
};
