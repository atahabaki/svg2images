class CLIArgs {
	constructor(args,flags,commands) {
		this.args=args;
		this.flags=flags;
		this.commands=commands;
	}
}

class Flag {
	constructor(name,alias,usage="",exp="") {
		this.name=name;
		this.alias=alias;
		this.usage=usage;
		this.exp=exp;
	}
}

class Command extends Flag {
	constructor(name,alias,usage="",exp="",callback=()=>{}) {
		this.name=name;
		this.alias=alias;
		this.usage=usage;
		this.exp=exp;
		this.callback=callback;
	}
}

module.exports = {CLIArgs, Flag, Command}
