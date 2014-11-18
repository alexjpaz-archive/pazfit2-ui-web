angular.module('app').constant('Profile', {
	"lifts": {
		"press": {
			"label": "Press",
			"default": 90,
			"increment": 5,
		},
		"deadlift": {
			"label": "Deadlift",
			"increment": 10,
			"default": 225,
		},
		"bench": {
			"label": "Bench",
			"increment": 5,
			"default": 155,
		},
		"squat": {
			"label": "Squat",
			"increment": 10,
			"default": 225,
		},
	},
	"liftsOrder": ['press','deadlift','bench','squat'],
	"logEditForm": {
		"repRange": [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
	}
});
