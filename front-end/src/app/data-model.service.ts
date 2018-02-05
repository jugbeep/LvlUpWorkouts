import { InMemoryDbService } from 'angular-in-memory-web-api';

export class WorkoutDataService implements InMemoryDbService {
	createDb() {
    const workouts = [
      { id: 11, name: 'Situps' },
      { id: 12, name: 'Squats' },
      { id: 13, name: 'Burpees'},
      { id: 14, name: 'Jumping Jacks'},
      { id: 15, name: 'Crunches'},
      { id: 16, name: 'Mountain Climbers'}
    ];
  return { workouts }
  }
}