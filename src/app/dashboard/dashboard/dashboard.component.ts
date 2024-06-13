import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  @ViewChild('body') bodyRef!: ElementRef<HTMLBodyElement>;
  @ViewChild('sidebar') sidebarRef!: ElementRef<HTMLElement>;
  @ViewChild('toggle') toggleRef!: ElementRef<HTMLElement>;
  @ViewChild('modeSwitch') modeSwitchRef!: ElementRef<HTMLElement>;
  @ViewChild('modeText') modeTextRef!: ElementRef<HTMLElement>;
  @ViewChild('searchBtn') searchBtnRef!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const body = this.bodyRef.nativeElement;
    const sidebar = this.sidebarRef.nativeElement;
    const toggle = this.toggleRef.nativeElement;
    const modeSwitch = this.modeSwitchRef.nativeElement;
    const modeText = this.modeTextRef.nativeElement;
    const searchBtn = this.searchBtnRef.nativeElement;

    modeSwitch.addEventListener('click', () => {
      body.classList.toggle('dark');

      if (body.classList.contains('dark')) {
        modeText.innerText = ' Light Mode ';
      } else {
        modeText.innerText = ' Dark Mode ';
      }
    });

    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () => {
      sidebar.classList.remove('close');
    });
  }
}
