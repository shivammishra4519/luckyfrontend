import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  scheduleTask(startHour: number, startMinute: number, durationMinutes: number, task: () => void) {
    const now = new Date();
    const startTime = new Date();

    startTime.setHours(startHour, startMinute, 0, 0);

    if (startTime < now) {
      // If the start time is in the past, schedule it for the next day
      startTime.setDate(startTime.getDate() + 1);
    }

    const timeUntilStart = startTime.getTime() - now.getTime();
    const durationMillis = durationMinutes * 60 * 1000;

    // Schedule the task to start at the specified time
    setTimeout(() => {
      task();

      // Schedule the task to run periodically until the duration elapses
      const intervalId = setInterval(() => {
        task();
      }, 1000); // Run the task every second

      // Stop the task after the duration elapses
      setTimeout(() => {
        clearInterval(intervalId);
      }, durationMillis);

    }, timeUntilStart);
  }
}
