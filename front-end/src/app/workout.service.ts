export class workoutService {
	createDb() {
		const workouts = [
			{ id: 1, name: 'pushups' },
			{ id: 2, name: 'situps' },
			{ id: 3, name: 'walking' },
			{ id: 4, name: 'running' },
			{ id: 5, name: 'lunges' }
		];
		return { workouts };
	}
}
