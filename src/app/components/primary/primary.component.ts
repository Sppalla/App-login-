import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputTypes = "text" | "email" | "password"

@Component({
  selector: 'app-primary',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrimaryComponent),
      multi:true 
    }
  ],
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.scss']
})
export class PrimaryComponent implements ControlValueAccessor{
  @Input() type: InputTypes = "text";
  @Input() placeholder: string = "";
  @Input() label: string = "";
  @Input() inputName: string = "";


  value: string='';
  onChange: any = () => {};
  onTouched: any = () => {};


  onInput(event: Event){
    const value = (event.target as HTMLInputElement).value
    this.value = value;
    this.onChange(value);
  }

  writeValue(value: any): void {
      this.value = value;
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
      
  }
}
