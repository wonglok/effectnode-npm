export default [{
  input: './libsrc/main.js',
  output: [{
    file: 'libout/main.js',
    format: 'cjs'
  },
	{
		file: 'libout/main.esm.js',
		format: 'es'
	},
	{
		file: 'libout/main.iife.js',
		format: 'iife',
		name: 'EffectNode'
	}]
}];
