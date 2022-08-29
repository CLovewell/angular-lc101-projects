import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  missionName = "LaunchCode Moonshot";
  selected = false;
  editMissionName = false;

  candidates = [
    new Candidate('Rusty Rutabaga', 5, '0.75 kg', 'Blake', 'assets/images/Blake.png'),
    new Candidate('Tessa Tortoise', 126, '113 kg', 'Sally', 'assets/images/Sally.png'),
    new Candidate('Bernie Beagle', 4, '15 kg', 'Paul', 'assets/images/Paul.png'),
    new Candidate('Jackalope', 45, '33 kg', 'Chris', 'assets/images/Chris.png'),
    new Candidate('Champ', 9, '36 kg', 'Carly', 'assets/images/Carly.png')
  ];

  /*
  candidates = [
    { name: 'Rusty Rutabaga', data: { age: 5, mass: '0.75 kg', sidekick: 'Blake' }, image: 'assets/images/Blake.png' },
    { name: 'Tessa Tortoise', data: { age: 126, mass: '113 kg', sidekick: 'Sally' }, image: 'assets/images/Sally.png' },
    { name: 'Bernie Beagle', data: { age: 4, mass: '15 kg', sidekick: 'Paul' }, image: 'assets/images/Paul.png' },
    { name: 'Jackalope', data: { age: 45, mass: '33 kg', sidekick: 'Chris' }, image: 'assets/images/Chris.png' },
    { name: 'Champ', data: { age: 9, mass: '36 kg', sidekick: 'Carly' }, image: 'assets/images/Carly.png' }
  ];
  */

  crew = [];

  constructor() { }

  ngOnInit() {
  }

  canAdd(candidate: Candidate): boolean {
    return Boolean(candidate.name) && this.crew.reduce(
      function (x, y) {
        return x && y.name !== candidate.name;
      },
      true
    );
  }

  addToCrew(candidate: Candidate): void {
    if (this.canAdd(candidate)) {
      this.crew.push(candidate);
    }
  }
  
  changeMissionName(newName: string): void {
    this.missionName = newName;
    this.editMissionName = false;
  }
}

class Candidate {
  name: string;
  data: object;
  image: string;
  constructor(name: string, age: number, mass: string, sidekick: string, image: string) {
    this.name = name;
    this.data = { age: age, mass: mass, sidekick: sidekick };
    this.image = image;
  }
}