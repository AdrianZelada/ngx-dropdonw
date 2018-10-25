import { DropdownSelectModule } from './dropdown-select.module';

describe('DropdownSelectModule', () => {
  let dropdownSelectModule: DropdownSelectModule;

  beforeEach(() => {
    dropdownSelectModule = new DropdownSelectModule();
  });

  it('should create an instance', () => {
    expect(dropdownSelectModule).toBeTruthy();
  });
});
