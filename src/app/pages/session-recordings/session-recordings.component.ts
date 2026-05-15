import { Component, signal } from '@angular/core';
import { ISession } from '../../core/model/interfaces/Session.Model';



@Component({
  selector: 'app-session-recordings',
  imports: [],
  templateUrl: './session-recordings.component.html',
  styleUrl: './session-recordings.component.css'
})
export class SessionRecordingsComponent {

  newSession = signal<ISession>({
    batchId: 0,
    createdAt: new Date(),
    displayOrder: 0,
    durationInMinutes: '',
    sessionDate: '',
    sessionId: 0,
    topicDescription: '',
    topicName:'',
    updatedAt: new Date(),
    youtubeVideoId: ''
  })


 
}


