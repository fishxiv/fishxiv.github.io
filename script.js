// data from https://docs.google.com/spreadsheets/d/1brCfvmSdYl7RcY9lkgm_ds8uaFqq7qaxOOz-5BfHuuk/htmlview#

"use strict";

const routes = [
	0, 3, 1, 4, 2, 5, 0, 3, 1, 4, 2, 5,
	3, 0, 4, 1, 5, 2, 3, 0, 4, 1, 5, 2,
	1, 4, 2, 5, 0, 3, 1, 4, 2, 5, 0, 3,
	4, 1, 5, 2, 3, 0, 4, 1, 5, 2, 3, 0,
	2, 5, 0, 3, 1, 4, 2, 5, 0, 3, 1, 4,
	5, 2, 3, 0, 4, 1, 5, 2, 3, 0, 4, 1,
];

const zone_order = [
	[1, 0, 2],
	[1, 0, 2],
	[1, 0, 2],
	[0, 1, 3],
	[0, 1, 3],
	[0, 1, 3],
];

const zones = {
	0: "Galadion Bay",
	1: "Southern Strait of Merlthor",
	2: "Northern Strait of Merlthor",
	3: "Rhotano Sea",
};

const time_order = [
	[1, 2, 0],
	[2, 0, 1],
	[0, 1, 2],
	[1, 2, 0],
	[2, 0, 1],
	[0, 1, 2],
];

const times = {
	0: "Sunset",
	1: "Night",
	2: "Day",
};

const time_icons = {
	"Sunset": "img/sunset.svg",
	"Night": "img/night.svg",
	"Day": "img/day.svg",
};

const target_fishes = {
	0: {
		0: ["Quicksilver Blade", "Funnel Shark"],
		1: ["Sothis"],
		2: ["Casket Oyster", "Nimble Dancer"],
	},
	1: {
		0: ["Sea Nettle", "Roguesaurus"],
		1: ["Aetheric Seadragon", "Coral Manta"],
		2: ["Mythril Sovereign"],
	},
	2: {
		0: ["Coral Seadragon", "The Fallen One"],
		1: ["Bartholomew the Chopper", "Mopbeard"],
		2: ["Elasmosaurus"],
	},
	3: {
		0: ["Stonescale"],
		1: ["Floating Saucer", "Slipsnail"],
		2: ["Sweaper", "Executioner"],
	},
};

const zone_baits = {
	0: "Plump Worm",
	1: "Krill",
	2: "Ragworm",
	3: "Plump Worm",
};

const fish_baits = {
	"Heavenskey": "Ragworm",
	"Navigator's Print": "Krill",
	"Casket Oyster": "Ragworm",
	"Quicksilver Blade": "Plump Worm",
	"Funnel Shark": "Plump Worm",
	"Nimble Dancer": "Ragworm",
	"Sothis": "Glowworm",

	"Sea Nettle": "Ragworm",
	"Great Grandmarlin": "Hi-aetherlouse",
	"Hi-aetherlouse": "Plump Worm",
	"Aetheric Seadragon": "Hi-aetherlouse",
	"Mythril Sovereign": "Krill",
	"Roguesaurus": "Hi-aetherlouse",
	"Coral Manta": "Shrimp Cage Feeder",

	"Bartholomew the Chopper": "Ragworm",
	"Mopbeard": "Krill",
	"Gugrusaurus": "Plump Worm",
	"Coral Seadragon": "Ragworm",
	"The Fallen One": "Krill",
	"Elasmosaurus": "Heavy Steel Jig",

	"Sweaper": "Plump Worm",
	"Silencer": "Ragworm",
	"Deep-sea Eel": "Plump Worm",
	"Executioner": "Krill",
	"Floating Saucer": "Krill",
	"Slipsnail": "Ragworm",
	"Stonescale": "Rat Tail",
};

const fish_tugs = {
	"Heavenskey": "!",
	"Navigator's Print": "!",
	"Casket Oyster": "!",
	"Quicksilver Blade": "!!",
	"Funnel Shark": "!!!",
	"Nimble Dancer": "!",
	"Sothis": "!!!",

	"Sea Nettle": "!",
	"Great Grandmarlin": "!!",
	"Hi-aetherlouse": "!",
	"Aetheric Seadragon": "!!",
	"Mythril Sovereign": "!!",
	"Roguesaurus": "!!!",
	"Coral Manta": "!!!",

	"Bartholomew the Chopper": "!",
	"Mopbeard": "!!",
	"Gugrusaurus": "!!!",
	"Coral Seadragon": "!",
	"The Fallen One": "!!",
	"Elasmosaurus": "!!!",

	"Sweaper": "!!",
	"Silencer": "!",
	"Deep-sea Eel": "!!",
	"Executioner": "!!!",
	"Floating Saucer": "!",
	"Slipsnail": "!",
	"Stonescale": "!!!",
};

const intuitions = {
	"Sothis": ["Heavenskey", 2, "Navigator's Print", 1],
	"Coral Manta": ["Great Grandmarlin", 2],
	"Elasmosaurus": ["Gugrusaurus", 3],
	"Stonescale": ["Deep-sea Eel", 1, "Silencer", 1],
};

const item_icons = {
	"Plump Worm": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/fa/fab7cbb7a9fc9c1a39dda57a5cd3ea7d9c0a7b16.png",
	"Krill": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/bb/bb03c7e9fc498e17cf538c7c52e5648dd0facbe2.png",
	"Ragworm": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/e7/e70d007ab9c68998128b446254440da28e3667db.png",

	"Glowworm": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/e3/e3bc4ad27d43c3e95b773a18c961584df50e05eb.png",
	"Shrimp Cage Feeder": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/96/969a0bb57309171b88eab46319385a6f80dba208.png",
	"Heavy Steel Jig": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/55/551fc8c999311fc44bc6257e104b563ef4557d0f.png",
	"Rat Tail": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a7/a7cfc8a5e9c06b705589dd0ccc1feb011fb01348.png",

	"Heavenskey": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ed/ed7423c772f1af4753120794bc96045c6e795e5a.png",
	"Quicksilver Blade": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/9b/9be485dcbc63764c37c70fb80becdfb0d146e68f.png",
	"Navigator's Print": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/57/572f9fa9e5decfa3c5db5246a461f0e1244b2de5.png",
	"Casket Oyster": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/56/566f52e10e0a4c2598fe5bfcb6b7affefac4d66e.png",
	"Mythril Sovereign": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/0c/0c6bc9201b97fe9cc8ea744f1f9784a78114e11a.png",
	"Nimble Dancer": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/ac/ac9af93135f81a92abab479e915c8fc67faea171.png",
	"Sea Nettle": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/9d/9d6f1a741119fbd90791bb80bfbb93a8473f3b5e.png",
	"Great Grandmarlin": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/04/046926b3650c60d01888fbe04cfd339a1e66cd8b.png",
	"Hi-aetherlouse": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/52/52711818515e8cc3a2e28d35cc0dc8c9b18566af.png",
	"Floating Saucer": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/15/1551a0b4e8deee05d7f9ef3a3a9e13102980fd25.png",
	"Aetheric Seadragon": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/99/9907b5e36418b5abac548aa6463aef725afbeb3b.png",

	"Coral Seadragon": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/f8/f8da9d14ff37f3ca3b7fd732c160fe9a3e8d42ef.png",
	"Roguesaurus": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/eb/eb160355a746570937da2d6fd6c1a951f0209213.png",
	"Sweaper": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/97/97f768d83503bde6a787d8add7469feb7e9ac9cc.png",
	"Silencer": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/05/058a4a0814a5cfd84a9c7cb9cf8a167fdc87ee87.png",
	"Deep-sea Eel": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/52/5257d5bf5745029eb298d458ff5ec9c735619615.png",
	"Executioner": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/55/55e9afeeda59a852141e22ef52a3efe78b45e13b.png",
	"Mopbeard": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a6/a677f1a30657d7395c37340923454563dbd6efdb.png",
	"Slipsnail": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1e/1ee814ca20e40f25433f1e48a2a03605067e531c.png",
	"Bartholomew the Chopper": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/b9/b9348ba589daef50660c2dc6a250e5915fd0bc51.png",
	"Gugrusaurus": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/55/55f4be798e967a0cc5b0008cece06419eac55de7.png",
	"Funnel Shark": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/5a/5a9dfec6dd9e6665e0fa4c45bd938f7273ee3288.png",
	"The Fallen One": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/03/038380418500f10d10f4d238e40517c649580b3c.png",

	"Sothis": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1c/1cfe8312b1ed7b5c40578c90bfbae724ee6b18c2.png",
	"Coral Manta": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/4a/4a982374903219ac7cf00c9c703051774fa88e2f.png",
	"Stonescale": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/50/50e79418b69809e16e62a6078773881a3842a425.png",
	"Elasmosaurus": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/a1/a19ac7fac4067dbd94de9b30eeb3faed25d85459.png",
};

const route_achievements = {
	1: "Octopus",
	5: "Shark",
	4: "Jellyfish",
	0: "Seadragon",
};

const achievement_icons = {
	"Octopus": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/dc/dcd1a8a2a731da1f2b7123279a671f3e1f8b8fe1.png",
	"Shark": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/1a/1a1af1901cd990981be90fed0f6d6db70d022f04.png",
	"Jellyfish": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/df/df4fbb00fc8eeb1d7cb933abee95c238d535733c.png",
	"Seadragon": "https://img.finalfantasyxiv.com/lds/pc/global/images/itemicon/89/8955511c4fa121fef3aed966099c6b205662a9f8.png",
};

function img(icon, name, height = null) {
	let img = $(`<img src="${icon}" title="${name}" alt="${name}">`);
	if (height) {
		img.css("height", height);
	}
	return img;
}

function span(text) {
	return $(`<span>${text}</span>`).addClass("align-middle");
}

function createTargetsList() {
	var tbody = $("table#targets > tbody").empty();
	let fishes = Object.values(target_fishes)
		.map(Object.values).flat()
		.map(Object.values).flat()
		.sort();
	fishes.forEach(fish => {
		let checked = localStorage.getItem(fish) || "";
		let id = fish.replace(/ /g, "_");
		let checkbox = $(`<input type="checkbox" id="${id}" ${checked}/>`)
			.addClass("align-middle")
			.click(() => {
				if (checkbox.prop("checked")) {
					localStorage.setItem(fish, "checked");
				} else {
					localStorage.removeItem(fish);
				}
				update();
			});

		let icon = img(item_icons[fish], fish, "3ex");
		let label = $(`<label class="m-0 p-2 d-block"></label>`);
		label.append(checkbox, " ", icon, " ", span(fish));

		let td = $(`<td class="p-0"></td>`)
			.addClass("text-nowrap")
			.append(label);
		let tr = $("<tr></tr>").append(td);
		tbody.append(tr);
	});
}

function appendTime(date, tr) {
	let month = date.getMonth() + 1;
	if (month < 10) {
		month = "0" + month;
	}
	let day = date.getDate();
	let hours = date.getHours();
	if (hours < 10) {
		hours = "0" + hours;
	}
	let td = $("<td></td>")
		.addClass("text-center align-middle")
		.append(`<small>${month}/${day}</small>`, "<br/>", `${hours}:00`);
	tr.append(td);
}

function appendIcons(div, item) {
	if (item in fish_baits) {
		appendIcons(div, fish_baits[item]);
		div.append(" ");
	}
	div.append(img(item_icons[item], item, "3ex"));
	if (item in fish_tugs) {
		div.append(span(fish_tugs[item]));
	}
}

function appendFish(td, fish) {
	let div = $("<div></div>").addClass("fish");
	appendIcons(div, fish);
	if (fish in intuitions) {
		div.append(" ");
		div.append(img("img/intuition.png", "Intuition", "3ex"));
		let intuition = intuitions[fish];
		let n = intuition.length;
		for (let i = 0; i < n; i += 2) {
			div.append(" ");
			appendIcons(div, intuition[i]);
			div.append(span(`&times;${intuition[i+1]}`));
		}
	}
	td.append(div);
}

function appendTimeIcon(tr, route, time_id) {
	let time = times[time_id];
	let time_icon = time_icons[time];
	let td = $("<td></td>")
		.addClass("align-middle")
		.append(img(time_icon, time));
	tr.append(td);
}

function appendZone(tr, route, i, j) {
	let time_id = time_order[route][j];
	appendTimeIcon(tr, route, time_id);

	let zone_id = zone_order[route][j];
	let zone = zones[zone_id];
	let bait = zone_baits[zone_id];
	let item_icon = item_icons[bait];
	let div = $("<div></div>")
		.addClass("zone")
		.append(img(item_icon, bait, "3ex"), " ", zone);
	let td = $("<td></td>")
		.addClass("text-nowrap")
		.append(div);

	target_fishes[zone_id][time_id]
		.forEach(fish => {
			let id = fish.replace(/ /g, "_");
			if ($(`input#${id}`).prop("checked")) {
				appendFish(td, fish);
			}
		});
	tr.append(td);
}

function appendAchievement(tr, route) {
	let achievement = route_achievements[route];
	let td = $("<td></td>").addClass("align-middle");
	if (achievement) {
		let icon = achievement_icons[achievement];
		td.append(img(icon, achievement));
	}
	tr.append(td);
}

function updateTable(date) {
	date = new Date(date.getTime());
	let hours = date.getUTCHours();
	let minutes = date.getUTCMinutes();
	if (hours % 2 == 1) {
		date.setUTCHours(hours + 1);
	} else if (minutes >= 40) {
		date.setUTCHours(hours + 2);
	}
	var index = (Math.ceil(date.getTime() / 1000 / 60 / 60 / 2) + 15) % 72;
	var tbody = $("table#schedule > tbody").empty();
	for (let i = 0; i < 12; ++i) {
		let tr = $("<tr></tr>").attr("id", `row-${i}`);
		appendTime(date, tr);
		let route = routes[(index + i) % 72];
		for (let j = 0; j < 3; ++j) {
			appendZone(tr, route, i, j);
		}
		appendAchievement(tr, route);
		tbody.append(tr);
		date.setHours(date.getHours() + 2);
	}
}

function updateTitle(date) {
	date = new Date(date.getTime());
	let hours = date.getUTCHours();
	let minutes = date.getUTCMinutes();

	let next;
	let open;
	let diff;

	if (hours % 2 == 1) {
		next = 0;
		open = false;
		diff = 60 - minutes;
		if (minutes > 55) {
			$("tr#row-0").addClass("bg-warning");
		}
	} else if (minutes < 15) {
		next = 0;
		open = true;
		diff = 15 - minutes;
		$("tr#row-0").addClass("bg-success");
	} else if (minutes < 40) {
		next = 1;
		open = false;
		diff = 120 - minutes;
		$("tr#row-0").addClass("bg-danger");
	} else {
		next = 0;
		open = false;
		diff = 120 - minutes;
	}

	$(`link[rel="icon"]`).attr("href", open ? "img/hook.png" : "img/cast.png");
	let title = open ? "Ends" : "Opens";
	title += ` in ${diff} minutes`;
	let fishes = $(`tr#row-${next}`).find("div.fish").length;
	if (fishes > 0) {
		title += ` [${fishes}]`;
	}
	$(document).attr("title", title);
}


function update() {
	var date = new Date();
	updateTable(date);
	updateTitle(date);
}

function updateLoop() {
	update();
	setTimeout(updateLoop, 10 * 1000);
}

createTargetsList();
updateLoop();
