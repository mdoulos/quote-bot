const { SlashCommandBuilder } = require('@discordjs/builders');
const fs = require('fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('quote')
		.setDescription('Replies with an Inspiring Quote!'),
	async execute(interaction) {
		var array = fs.readFileSync('quotes.txt').toString().split("\n");
		var max = 0;

		function between(min, max) {  
			return Math.floor(
			  Math.random() * (max - min + 1) + min
			)
		  }

		for(i in array) {
			max++;
		}
		max = max-1;

		await interaction.reply(array[between(1,max)]);
	},
};

