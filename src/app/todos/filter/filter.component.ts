import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
// import { untilDestroyed } from '@ngneat/until-destroy';
// import { UntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
// import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
// import { UntilDestroy, untilDestroyed } from 'ngx-take-until-destroy';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TodoFilter, VISIBILITY_FILTER } from './filter.model';

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, OnDestroy {

  @Input() active: VISIBILITY_FILTER;
  @Input() filters: TodoFilter[];
  @Output() update = new EventEmitter<VISIBILITY_FILTER>();



  control: FormControl;

  ngOnInit() {
    this.control = new FormControl(this.active);

    let check = this.control.valueChanges.pipe(untilDestroyed(this));
    check.subscribe(c => {
      this.update.emit(c);
    });
    // this.control.valueChanges.pipe(untilDestroyed(this)).subscribe(c => {
    //   this.update.emit(c);
    // });
  }

  ngOnDestroy(): void {
    // unsubscribe();
    console.log('ngOnDestroy')

    
    
  }
  // destoy(){}

}
