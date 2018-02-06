"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WorkoutDataService = /** @class */ (function () {
    function WorkoutDataService() {
    }
    WorkoutDataService.prototype.createDb = function () {
        var workouts = [
            { id: 1, name: 'Situps' },
            { id: 2, name: 'Squats' },
            { id: 3, name: 'Burpees' },
            { id: 4, name: 'Jumping Jacks' },
            { id: 5, name: 'Crunches' },
            { id: 6, name: 'Mountain Climbers' }
        ];
        return { workouts: workouts };
    };
    return WorkoutDataService;
}());
exports.WorkoutDataService = WorkoutDataService;
//# sourceMappingURL=data-model.service.js.map