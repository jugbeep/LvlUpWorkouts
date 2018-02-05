import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WorkoutDataService implements InMemoryDbService {
	createDb() {
    const workouts = [
      { id: 1, name: 'Situps' },
      { id: 2, name: 'Squats' },
      { id: 3, name: 'Burpees'},
      { id: 4, name: 'Jumping Jacks'},
      { id: 5, name: 'Crunches'},
      { id: 6, name: 'Mountain Climbers'}
    ];
  return { workouts }
  }
}