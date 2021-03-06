module.exports = function () {
	var fs = require('fs'),
		utils = require('../../utils'),
		exec = require('child_process').exec,
		config = this.config,
		miloPath = this.miloPath;
	}

	if (!fs.existsSync(configTarget)) {
		exec('cp ' + miloPath + 'config.json.sample' + ' ' + miloPath + 'config.json');
		
		console.log('');
		console.log("A newbie? Welcome! \n\nBefore we get to the fun stuff, first thing I need you to do is update your config.json file @ " + miloPath + "config.json");
		console.log("One thing you'll need is a Github API token, which can be obtained by executing");
		console.log("   curl https://api.github.com/authorizations -d '{\"scopes\": [\"gist\"],\"note\": \"Milo\"}' --user yourUsername:yourPassword");
		console.log('');
		console.log('Once you do that, run `milo install` again so we can verify your config settings are correct.');
		console.log('');
	}
	else if (config.github.token === "YOUR_TOKEN_GOES_HERE"){
		console.log("Ruh roh.  You haven't configured Github yet.  Execute this:");
		console.log("   curl https://api.github.com/authorizations -d '{\"scopes\": [\"gist\"],\"note\": \"Milo\"}' --user yourUsername:yourPassword");
		console.log("Then go stick it in " + miloPath + "config.json and run this command again");
	}
	else {
		console.log("Nice job!  At this point you only have a single library with core functionality, but I want to learn some new tricks, so lets pull in some other libraries");
		console.log('');
		console.log("Run `milo update` and I'll fetch some from my buddy the Octocat.");
		console.log('');
	}
};